from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead viewsets
# Django REST framework allows you to combine the logic   # for a set of related views in a single class, 
# called a ViewSet. 
# In other frameworks you may also find conceptually similar implementations named something like 'Resources' or 'Controllers'.

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
