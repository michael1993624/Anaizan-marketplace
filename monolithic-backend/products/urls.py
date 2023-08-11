from django.urls import path
from products import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'products', views.ProductViewSet, basename="product")
router.register(r'prices', views.ProductPriceViewSet, basename="product price")
router.register(r'medias', views.ProductMediaViewSet, basename="product media")
urlpatterns = router.urls
