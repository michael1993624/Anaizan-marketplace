from django.urls import path
from carts import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'carts', views.CartViewSet, basename="cart")
router.register(r'cart_items', views.CartItemViewSet, basename="cart_items")
urlpatterns = router.urls
