from rest_framework import routers
from .api import LeadViewSet

# default router
router = routers.DefaultRouter()

# api/leads router
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
