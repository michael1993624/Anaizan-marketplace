# Generated by Django 4.1.1 on 2022-10-25 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0008_rename_price_ht_cartitem_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='TAX_AMOUNT',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
