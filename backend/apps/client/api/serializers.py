from rest_framework import serializers
from django.db.models import Q
from django.db import transaction

from ..models import Client, IndividualClient, CompanyClient

class IndividualClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualClient
        fields = ['first_name', 'last_name']

class CompanyClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyClient
        fields = ['name', 'manager', 'address']
        
class CompleteClientSerializer(serializers.ModelSerializer):
    individual = IndividualClientSerializer(required=False)
    company = CompanyClientSerializer(required=False)
    
    class Meta:
        model = Client
        fields = [
            'id',
            'is_company', 
            'email', 
            'phone', 
            'zip_code', 
            'individual', 
            'company'
            ]
        
    def validate(self, data):
        #Si el campo is_company es verdadero revisa que los datos esten en la variable company
        #Sino revisa que los datos esten en la variable individual
        if data['is_company'] and 'company' not in data:
            raise serializers.ValidationError("Company data is required for company clients")
        if not data['is_company'] and 'individual' not in data:
            raise serializers.ValidationError("Individual data is required for company clients")
        
        return data
    
        
    def create(self, validate_data):        
        # Verificar si el cliente ya existe
        existing_client = Client.active_objects.filter(
            Q(email=validate_data.get('email')) | Q(phone=validate_data.get('phone'))
        ).first()
       
        if existing_client:
            # Si el cliente existe, actualiza los datos en lugar de crear uno nuevo
            return self.update(existing_client, validate_data)
        
        # Si no existe, creamos un nuevo cliente
        company_data = validate_data.pop('company', None)
        individual_data = validate_data.pop('individual', None)
        client = Client.objects.create(**validate_data)
        #Creamos el modelo relacionado que corresponda, Company o Individual
        if client.is_company:
            CompanyClient.objects.create(client_id=client, **company_data)
        else:
            IndividualClient.objects.create(client_id=client, **individual_data)
        return client
    
    def update(self, instance, validate_data):
        
        company_data = validate_data.pop('company', None)
        individual_data = validate_data.pop('individual', None)
        #Actualizamos el modelo Client y refrescamos la instancia con los datos de DB
        Client.active_objects.filter(id=instance.id).update(**validate_data)
        instance.refresh_from_db()
        #Actualizamos el modelo que corresponda y borramos el que no, si is_company cambio de estado
        if instance.is_company:
            if company_data:
                CompanyClient.active_objects.update_or_create(client_id=instance, defaults=company_data)
            IndividualClient.active_objects.filter(client_id=instance).delete()
        else:
            if individual_data:
                IndividualClient.active_objects.update_or_create(client_id=instance, defaults=individual_data)
            CompanyClient.active_objects.filter(client_id=instance).delete()
        
        return instance
        
        
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        #Agrega a representation la llave que corresponda Company o Individual        
        if instance.is_company:
            company = CompanyClient.active_objects.filter(client_id=instance).first()
            company_representation = CompanyClientSerializer(company).data
            representation['company'] = company_representation
        else:
            individual = IndividualClient.active_objects.filter(client_id=instance).first()
            individual_representation = IndividualClientSerializer(individual).data
            representation['individual'] = individual_representation

        return representation