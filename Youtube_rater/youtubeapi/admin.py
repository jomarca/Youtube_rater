from django.contrib import admin

# Register your models here.
from .models import Video, Rating

admin.site.register(Video)
admin.site.register(Rating)
