from django.shortcuts import render
from django.template import loader
from rest_framework import viewsets
from collab_app.serializers import StudentSerializer, DrivesSerializer
from collab_app.models import Student, Drives

# Create your views here.

from django.http import HttpResponse  
def firstapi(request):  
    template = loader.get_template('first.html') # getting our template  
    return HttpResponse(template.render())

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class DrivesViewSet(viewsets.ModelViewSet):
    queryset = Drives.objects.all()
    serializer_class = DrivesSerializer    