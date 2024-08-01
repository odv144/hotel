from rest_framework import routers
from .viewsets import QuotationViewSet

router = routers.SimpleRouter()
router.register('quotation', QuotationViewSet)

urlpatterns = router.urls