from rest_framework import serializers
from .models import Movies


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ( 'name', 'description', 'date', 'link')