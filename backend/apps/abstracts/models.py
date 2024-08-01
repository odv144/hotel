from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
import uuid

class AbstractActiveManager(models.Manager):
    #Devuelve solos objetos activos
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

class AbstractManager(models.Manager):
    #Devuelve el objeto con el id dado, sino devuelve un 404
    def get_object_by_id(self, id):
        try:
            instance = self.get(id=id)
            return instance
        except (ObjectDoesNotExist, ValueError, TypeError):
            raise Http404
    
class AbstractModel(models.Model):
    """
    Abstract model provee campos basicos como:
    - id: Identificador unico para el modelo.
    - is_active: Campo booleano para el borrado logico.
    - created: Fecha y hora cuando el objetos es creado.
    - updated: Fecha y hora cuando el objetos es modificado por ultima vez.
    """
    id = models.UUIDField(
        primary_key=True, db_index=True, unique=True, editable=False, default=uuid.uuid4
        )
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active_objects = AbstractActiveManager()
    objects = AbstractManager()
    
    def soft_delete(self):
        #Borra el objeto de manera logica
        self.is_active = False
        self.save()
        
    def restore(self):
        #Restaura el objeto borrado de manera logica
        self.is_active = True
        self.save()
        
    class Meta:
        abstract = True