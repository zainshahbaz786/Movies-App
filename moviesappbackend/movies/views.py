from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.


class ListMovies(generics.ListAPIView):

    queryset = Movies.objects.all()

    serializer_class = MoviesSerializer
    permission_classes = [IsAuthenticated]



class CreateMovies(generics.CreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class DeleteMovies(generics.DestroyAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer











