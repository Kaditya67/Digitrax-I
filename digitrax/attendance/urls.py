# attendance/urls.py
from django.urls import path
from .views import HelloWorldAPI

urlpatterns = [
    path('hello/', HelloWorldAPI.as_view(), name='hello_world_api'),
]
