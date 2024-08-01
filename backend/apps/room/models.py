from django.db import models
from apps.abstracts.models import AbstractModel

BED_TYPE = [
    ('Queen', 'Queen'),
    ('Single', 'Single'),
    ('Twin', 'Twin')
]
  
class RoomType(AbstractModel):
    type = models.CharField(max_length=50)
    description = models.TextField()
    capacity = models.PositiveSmallIntegerField()
    beds = models.CharField(max_length=10, choices=BED_TYPE)
    surface = models.PositiveSmallIntegerField()
    safe_deposit_box = models.BooleanField(default=False)
    air_conditioner = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    
    def __str__(self) -> str:
        return self.type

class RoomPhoto(AbstractModel):
    room_type_id  = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='hotel_oceano/images/')
    
class RoomStatus(AbstractModel):
    status = models.CharField(max_length=50)
  
class Room(AbstractModel):
    number = models.CharField(max_length=5)
    room_type_id = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    status_id = models.ForeignKey(RoomStatus, on_delete=models.CASCADE)
  