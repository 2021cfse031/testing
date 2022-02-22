from django.contrib import admin
from .models import Student, Drives


# Register your models here.

class StudentAdmin(admin.ModelAdmin):
    list_displays = ("name", "status")

admin.site.register(Student, StudentAdmin)

class DrivesAdmin(admin.ModelAdmin):
    list_displays = ("dateofvaccine", "place")

admin.site.register(Drives, DrivesAdmin)
