from django.urls import path
from orders import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'order_items', views.OrderViewSet, basename="order")
urlpatterns = router.urls
