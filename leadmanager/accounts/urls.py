from django.urls import path, include
from .api import Register, Login, GetUser
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include('knox.urls')),
    path("api/auth/register", Register.as_view()),
    path("api/auth/login", Login.as_view()),
    path("api/auth/user", GetUser.as_view()),
    path("api/auth/logout", knox_views.LogoutView.as_view(), name='knox_logout'),
]
