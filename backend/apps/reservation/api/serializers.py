from datetime import datetime, date
from django.db.models import Q
from rest_framework import serializers

from ..models import Service, ReservationService, ReservationRoom

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'title', 'description', 'price')
        
class ReservationRoomSerializer(serializers.ModelSerializer):
        
    def validate(self, data):
        check_in_date = data.get('check_in_date')
        check_out_date = data.get('check_out_date')
        #Chequea si checkin es mayor a la fecha actual y 
        #checkout sea mayor a checkin y si hay habitaciones disponibles
        if check_in_date >= date.today():
            if check_out_date > check_in_date:
                if self.is_room_available(data['room_id'], check_in_date, check_out_date):
                    return data
                else:
                    raise serializers.ValidationError('the room in this date is unavailable')
            else:
                raise serializers.ValidationError('The end date must be after the day of admission')
        else:
            raise serializers.ValidationError('The admission date must be after today')
        
    def is_room_available(self, room, check_in_date, check_out_date):
        #Si encuentra alguna habitacion reservada o confirmada en esa fecha devuelve False
        overlapping_bookings = ReservationRoom.active_objects.filter(
            Q(room_id=room) &
            Q(check_in_date__lt=check_out_date) &
            Q(check_out_date__gt=check_in_date) &
            Q(Q(status = 'A') | Q(status = 'R'))
        )
        return not overlapping_bookings.exists()
    
    class Meta:
        model = ReservationRoom
        fields = '__all__'
        
class ReservationServiceSerializer(serializers.ModelSerializer):
    
    def validate(self, data):
        
        start_date = data['start_date']
        end_date = data['end_date']
        #Busca la reserva de la habitacion a la que esta relacionada
        reservation_room = ReservationRoom.active_objects.filter(id=data['reservation_room_id'].id).first()
        
        if not reservation_room:
            raise serializers.ValidationError('The specified reservation room does not exist.')
         
        if start_date > end_date:
            raise serializers.ValidationError('Start date must be before or equal to end date.')
        #Comapara las fechas de la reserva de servicio este dentro de la fecha de la habitacion
        if start_date < reservation_room.check_in_date:
            raise serializers.ValidationError('The start date is before the reservation room check-in date.')
        
        if end_date > reservation_room.check_out_date:
            raise serializers.ValidationError('The end date is after the reservation room check-out date.')
        
        return data
        
    class Meta:
        model = ReservationService
        fields = '__all__'