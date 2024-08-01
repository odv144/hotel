from rest_framework import routers
from .viewsets import ServiceViewSet, ReservationRoomViewSet, ReservationServiceViewSet

router = routers.SimpleRouter()
router.register('service', ServiceViewSet)
router.register('reservationservice', ReservationServiceViewSet)
router.register('reservationroom', ReservationRoomViewSet)

urlpatterns = router.urls