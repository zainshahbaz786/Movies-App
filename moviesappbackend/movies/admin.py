
from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Movies
# Register your models here.
# Role Based Access Control in Django. This model stores the actual users in the system. It has basic fields like username, password,
# and email. You can extend this class to add more
# attributes that your application needs. Django user authentication handles the authentication through session and middle-wares.



User = get_user_model()
admin.site.unregister(User)
admin.site.register(User)

admin.site.register(Movies)