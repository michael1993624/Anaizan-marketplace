# Generated by Django 4.1.1 on 2022-10-25 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0002_alter_cart_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='total',
            field=models.FloatField(blank=True, default=0),
        ),
    ]