from django.urls import path
from category import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'categories', views.CategoryViewSet, basename="category")
router.register(r'suggestions', views.SuggestedCategoryViewSet, basename="suggested_category")
urlpatterns = router.urls
