from django.urls import path
from .views import *


urlpatterns = [
    path('', ListMovies.as_view()),
    # path('', ListMovies.as_view()),
    path('create', CreateMovies.as_view()),
    path('delete/<int:pk>', DeleteMovies.as_view())

]


























