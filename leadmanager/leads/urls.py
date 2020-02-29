from rest_framework import routers
from .api import LeadViewSet

# default router
router = routers.DefaultRouter()

# register router
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls