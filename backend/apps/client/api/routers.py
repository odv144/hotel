from rest_framework import routers

from .viewsets import ClientViewSet

router = routers.SimpleRouter()
router.register('client', ClientViewSet)

urlpatterns = router.urls