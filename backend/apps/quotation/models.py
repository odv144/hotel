from django.db import models
import uuid

from apps.abstracts.models import AbstractModel
from apps.client.models import Client
from apps.room.models import RoomType
from apps.reservation.models import Service

QUOTATION_STATUS = [
    ('A', 'pending'),
    ('B', 'converted'),
    ('C', 'expired'),
    ('D', 'cancelled'),
]

class Quotation(AbstractModel):
  
  client_id = models.ForeignKey(Client, on_delete=models.CASCADE, blank=True)
  start_date = models.DateField()
  end_date = models.DateField()
  people = models.IntegerField()
  payment_method = models.CharField(max_length=1)
  status = models.CharField(max_length=1, choices=QUOTATION_STATUS)
  comment = models.TextField(null=True, blank=True)
  
  def __str__(self) -> str:
    return f'{self.client_id.email} {self.status}'


class QuotationRoomType(models.Model):
  
  id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
  room_type_id = models.ForeignKey(RoomType, on_delete=models.CASCADE)
  quotation_id = models.ForeignKey(Quotation, on_delete=models.CASCADE)
  quantity = models.IntegerField()
  
class QuotationServices(models.Model):
  
  id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
  service_id = models.ForeignKey(Service, on_delete=models.CASCADE)
  quotation_id = models.ForeignKey(Quotation, on_delete=models.CASCADE)
  quantity = models.IntegerField()
  
  