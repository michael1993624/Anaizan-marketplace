from django.contrib import admin
from products.models import Product, ProductPrice, ProductMedia
# Register your models here.


admin.site.register(Product)
admin.site.register(ProductPrice)
admin.site.register(ProductMedia)
