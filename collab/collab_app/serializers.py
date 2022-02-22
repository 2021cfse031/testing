from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from collab_app.models import Student, Drives

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'classs', 'vaccinedate', 'status', 'vaccinename')

class DrivesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drives
        fields = ('dateofvaccine', 'place', 'vaccinecount')        