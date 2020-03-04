from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead viewsets
# Django REST framework allows you to combine the logic   # for a set of related views in a single class,
# called a ViewSet.
# In other frameworks you may also find conceptually similar implementations named something like 'Resources' or 'Controllers'.


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
