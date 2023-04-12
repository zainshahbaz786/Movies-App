from django.urls import path
from .views import *

urlpatterns = [
    path('',ListMovies.as_view())
]


























