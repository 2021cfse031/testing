"""collab URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from collab_app import views
from rest_framework.documentation import include_docs_urls


urlpatterns = [
    # path('', views.apiOverview, name="api-overview"),
    # path('admin/', admin.site.urls),
	# path('list/', views.studentList, name="list"),
	# path('detail/<str:pk>/', views.studentDetail, name="detail"),
	# path('create/', views.studentCreate, name="create"),

	# path('update/<str:pk>/', views.studentUpdate, name="put"),
	# path('delete/<str:pk>/', views.studentDelete, name="delete"),
    # path('drivelist/', views.driveList, name="list-drive"),
	# path('drive-detail/<str:pk>/', views.driveDetail, name="detail-drive"),
	# path('create-drive/', views.driveCreate, name="create-drive"),

	# path('update-drive/<str:pk>/', views.driveUpdate, name="put-drive"),
	# path('delete-drive/<str:pk>/', views.driveDelete, name="delete-drive"),
    path('drivelist/', views.drive_list, name="list-drive"),
	path('drive-detail/<str:pk>/', views.drive_detail, name="detail-drive"),
    path('studentlist/', views.student_list, name="list-student"),
	path('student-detail/<str:pk>/', views.student_detail, name="detail-student"),
    path(r'docs/', include_docs_urls(title='Helpdesk API')), 

]

