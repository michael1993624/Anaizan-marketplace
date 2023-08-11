"""anaizan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from dj_rest_auth.registration.views import VerifyEmailView
from django.contrib import admin
from django.urls import path, include

from allauth.account.views import ConfirmEmailView
from dj_rest_auth.views import PasswordResetConfirmView
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from accounts.views import FacebookLogin, GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),

    path('accounts/', include("accounts.urls")),
    path('categories/', include("category.urls")),
    path('stores/', include("shop.urls")),
    path('products/', include("products.urls")),
    path('carts/', include("carts.urls")),
    path('orders/', include("orders.urls")),
    path('shippings/', include("shipping.urls")),
    # path('config/', include("config.urls")),


    path('accounts/', include('dj_rest_auth.urls')),

    path('accounts/registration/account-confirm-email/<str:key>/', ConfirmEmailView.as_view(), ),
    # Needs to be defined before the registration path
    path('accounts/password/reset/confirm/<slug:uidb64>/<slug:token>/', PasswordResetConfirmView.as_view(),
         name='password_reset_confirm'),

    path('accounts/registration/', include('dj_rest_auth.registration.urls')),
    path('dj-rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),

    path('accounts/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
            name='account_confirm_email'),
]


schema_view = get_schema_view(
    openapi.Info(
        title="Anaizan Maketplace Monolith API",
        default_version='v1',
        description="Anaizan maketplace ",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]