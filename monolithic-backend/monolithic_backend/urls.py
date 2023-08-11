from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from apps.accounts.views import StaffRegisterView, CommonUserRegisterView, GroupViewSet, UserViewSet

router = routers.DefaultRouter()

router.register(r'group', GroupViewSet, basename='group')
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('apps.accounts.urls')),
    path('api/', include(router.urls)),
    path('api/auth/registration/staff/', StaffRegisterView.as_view(), name='staff_rest_register'),
    path('api/auth/registration/common/', CommonUserRegisterView.as_view(), name='common_rest_register'),
]
