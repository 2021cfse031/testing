from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from collab_app.models import Student, Drives
from collab_app.serializers import StudentSerializer, DrivesSerializer


@api_view(['GET', 'POST'])
def drive_list(request):
    """
    List all code drives, or create a new drive.
    """
    if request.method == 'GET':
        drives = Drives.objects.all()
        serializer = DrivesSerializer(drives, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DrivesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def drive_detail(request, pk):
    """
    Retrieve, update or delete a code drive.
    """
    try:
        drive = Drives.objects.get(pk=pk)
    except Drives.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DrivesSerializer(drive)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DrivesSerializer(drive, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        drive.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        

@api_view(['GET', 'POST'])
def student_list(request):
    """
    List all code students, or create a new student.
    """
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def student_detail(request, pk):
    """
    Retrieve, update or delete a code student.
    """
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        