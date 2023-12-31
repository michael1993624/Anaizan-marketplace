from django.contrib import admin

from config.models import (
    AzPackage, AzCountry, AzState, AzCity, MeasureUnit, TimeUnit
)

# Register your models here.
admin.site.register(AzPackage)
admin.site.register(AzCountry)
admin.site.register(AzState)
admin.site.register(AzCity)
admin.site.register(MeasureUnit)
admin.site.register(TimeUnit)
