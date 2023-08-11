from django.urls import path
from shipping import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'address', views.AddressViewSet, basename="address")
router.register(r'shippings', views.ShippingViewSet, basename="shipping")
urlpatterns = router.urls
