from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *
# Create your views here.


class ListMovies(generics.ListAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class CreateMovies(generics.CreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class DeleteMovies(generics.DestroyAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer











