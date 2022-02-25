from distutils.log import error
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer, DrivesSerializer

from .models import Student, Drives

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/list/',
		'Detail View':'/student-detail/<str:pk>/',
		'Create':'/create/',
		'Update':'/update/<str:pk>/',
		'Delete':'/delete/<str:pk>/',
        'List':'/drivelist/',
		'Detail View':'/drive-detail/<str:pk>/',
		'Create':'/create-drive/',
		'Update':'/update-drive/<str:pk>/',
		'Delete':'/delete-drive/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET','POST'])
def studentList(request):
	student = Student.objects.all()
	serializer = StudentSerializer(student, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def studentDetail(request, pk):
	student = Student.objects.get(id=pk)
	serializer = StudentSerializer(student, many=False)
	return Response(serializer.data)


@api_view(['POST', 'GET'])
def studentCreate(request):
	serializer = StudentSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()
	# return Response(serializer.data)
		return Response(serializer.data)
	else:
		return Response(serializer.errors)

@api_view(['POST'])
def studentUpdate(request, pk):
	student = Student.objects.get(id=pk)
	serializer = StudentSerializer(instance=student, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def studentDelete(request, pk):
	student = Student.objects.get(id=pk)
	student.delete()

	return Response('Item succsesfully delete!')


@api_view(['GET'])
def driveList(request):
	drive = Drives.objects.all()
	serializer = DrivesSerializer(drive, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def driveDetail(request, pk):
	drive = Drives.objects.get(id=pk)
	serializer = DrivesSerializer(drive, many=False)
	return Response(serializer.data)


@api_view(['POST', 'PUT', 'GET'])
def driveCreate(request):
	serializer = DrivesSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST', 'PUT', 'GET'])
def driveUpdate(request, pk):
	drive = Drives.objects.get(id=pk)
	serializer = DrivesSerializer(instance=drive, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def driveDelete(request, pk):
	drive = Drives.objects.get(id=pk)
	drive.delete()

	return Response('Item succsesfully delete!')    
