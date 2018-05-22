from django.db import models

# Create your models here.

class Items(models.Model):

    label = models.CharField(max_length=100, default='', primary_key=True)
    value = models.IntegerField()
    quantity = models.IntegerField()
