from django.urls import include, path
from rest_framework import routers
from collab_app.views import StudentViewSet, DrivesViewSet

router = routers.DefaultRouter()
router.register(r'student', StudentViewSet)
router.register(r'drives', DrivesViewSet)

urlpatterns = [
    path('', include(router.urls))
]