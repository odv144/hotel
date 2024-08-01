from rest_framework import routers
from .viewsets import RoomStatusViewSet, PhotoViewSet, RoomTypeViewSet, RoomViewSet

router = routers.SimpleRouter()
router.register('roomstatus', RoomStatusViewSet)
router.register('roomphoto', PhotoViewSet)
router.register('roomtype', RoomTypeViewSet)
router.register('room', RoomViewSet)

urlpatterns = router.urls