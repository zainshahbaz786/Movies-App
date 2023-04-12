from django.db import models

# Create your models here.

from django.db import models
class Movies(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=False)
    date = models.DateField(blank=False)
    link = models.URLField(max_length=200)

    def __str__(self):
        return self.name
