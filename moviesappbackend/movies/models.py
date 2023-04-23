from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from .managers import CustomUserManager
# Create your models here.

from django.db import models
class Movies(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=False)
    date = models.DateField(blank=False)
    link = models.URLField(max_length=200)
    genre = models.CharField(max_length=200)
    def __str__(self):
        return self.name,self.genre
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(db_index=True, unique=True, max_length=254)
    first_name = models.CharField(max_length=240)
    last_name = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_no']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

