from django.db import models
from apps.abstracts.models import AbstractModel

from apps.client.models import Client
from apps.room.models import Room
#from apps.quotation.models import Quotation
# Importación lazy
from django.db.models.fields.related import OneToOneField

RESERVATION_STATUS = [
    ('A', 'confirmed'),
    ('E', 'expired'),
    ('C', 'cancelled'),
    ('R', 'reserved'),
]

class Service(AbstractModel):
    title = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    
    def __str__(self) -> str:
       return self.title

class ReservationRoom(AbstractModel):
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    quotation_id = OneToOneField('quotation.Quotation', on_delete=models.CASCADE, null=True, blank=True)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    status = models.CharField(max_length=1, choices=RESERVATION_STATUS)
    
    def __str__(self) -> str:
       return f'{self.room_id.number} {self.client_id.email}'

class ReservationService(AbstractModel):
    service_id = models.ForeignKey(Service, on_delete=models.CASCADE)
    reservation_room_id = models.ForeignKey(ReservationRoom, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self) -> str:
       return f'{self.reservation_room_id.room_id.number} {self.service_id.title}'