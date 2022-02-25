from django.db import models

# Create your models here.

class Student(models.Model):
   id = models.IntegerField(primary_key=True)
   name = models.CharField(max_length=100)
   classs = models.IntegerField()
   vaccinedate = models.CharField(max_length=100)
   status = models.CharField(max_length=100)
   vaccinename = models.CharField(max_length=100)


class Drives(models.Model):
   id = models.IntegerField(primary_key=True)
   dateofvaccine = models.CharField(max_length=100)
   place = models.CharField(max_length=100)
   vaccinecount = models.IntegerField()

