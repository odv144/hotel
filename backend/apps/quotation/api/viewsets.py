from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema
from .permissions import IsAuthenticatedOrPostOnly
from .serializers import QuotationSerializer
from ..models import Quotation, QuotationRoomType, QuotationServices

class QuotationViewSet(ModelViewSet):
    serializer_class = QuotationSerializer
    queryset = Quotation.active_objects.all()
    permission_classes = [IsAuthenticatedOrPostOnly]
    
    @extend_schema(
    description=('logical deletion of the quotation model, and quotationservices and quotationroomtype related model'))
    def destroy(self, request, *args, **kwargs):
        #Borrado logico en quotation y el modelo que corresponda quotationservices y quotationroomtype
        instance = self.get_object()
       
        #Buscar todos los QuotationRoomType relacionados a la instancia y eliminarlos
        quotation_rooms_types = QuotationRoomType.objects.filter(quotation_id=instance)
        for quotation_room_type in quotation_rooms_types:
            quotation_room_type.delete()
            
        #Buscar todos los QuotationServices relacionados a la instancia y eliminarlos
        quotation_services = QuotationServices.objects.filter(quotation_id=instance)
        for quotation_service in quotation_services:
            quotation_service.delete()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)