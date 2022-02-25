from django.db import models

# Create your models here.

class Student(models.Model):
   name = models.CharField(max_length=100)
   classs = models.CharField(max_length=100)
   vaccinedate = models.DateField()
   status = models.CharField(max_length=100)
   vaccinename = models.CharField(max_length=100)


class Drives(models.Model):
   dateofvaccine = models.DateField()
   place = models.CharField(max_length=100)
   vaccinecount = models.IntegerField()

