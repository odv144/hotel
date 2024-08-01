from rest_framework import serializers

from ..models import Room, RoomStatus, RoomType, RoomPhoto

class RoomStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomStatus
        fields = ('id', 'status',)

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomPhoto
        fields = ('id', 'room_type_id', 'image',)
        
class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = (
            'id', 
            'type', 
            'description', 
            'capacity', 
            'beds', 
            'surface', 
            'safe_deposit_box', 
            'air_conditioner', 
            'price'
            )
     
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'number', 'status_id', 'room_type_id')
        