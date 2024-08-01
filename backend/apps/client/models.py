from django.db import models
from apps.abstracts.models import AbstractModel


class Client(AbstractModel):
    #Registra cada uno de los clientes que pide una cotizacion o reservacion
    is_company = models.BooleanField(default=False)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    zip_code = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.email

class IndividualClient(AbstractModel):
    #Para clientes particulares
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='individualclient')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'
    
class CompanyClient(AbstractModel):
    #Para clientes Empresariales
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='companyclient')
    name = models.CharField(max_length=50)
    manager = models.CharField(max_length=50)
    address  = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return f'{self.name} {self.manager}'