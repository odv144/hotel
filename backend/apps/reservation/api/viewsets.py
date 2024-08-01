from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from .serializers import ServiceSerializer, ReservationRoomSerializer, ReservationServiceSerializer
from ..models import Service, ReservationRoom, ReservationService

class ServiceViewSet(ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.active_objects.all()
    permission_classes = [IsAuthenticated]
    
    @extend_schema(
    description=('logical deletion of the Service model'))
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ReservationRoomViewSet(ModelViewSet):
    serializer_class = ReservationRoomSerializer
    queryset = ReservationRoom.active_objects.all()
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        #Cuando se crea una reserva coloca en el campo status reserved
        room = serializer.validated_data['room_id']
        room.status = 'R'
        room.save()
        serializer.save()
    
    @extend_schema(
    description=('logical deletion of the ReservationRoom model'))
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

class ReservationServiceViewSet(ModelViewSet):
    serializer_class = ReservationServiceSerializer
    queryset = ReservationService.active_objects.all()
    permission_classes = [IsAuthenticated]
    
    @extend_schema(
    description=('logical deletion of the ReservationService model'))
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)