from django.urls import path
from .views import InitiateRegistrationView

urlpatterns = [
    path("register",InitiateRegistrationView.as_view())
]