from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from collab_app.models import Student, Drives
from django.db.models import fields
from django.forms import ValidationError


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'classs', 'vaccinedate', 'status', 'vaccinename')

class DrivesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drives
        fields = ('id', 'dateofvaccine', 'place', 'vaccinecount')        




