from items.models import Items
from items.serializers import ItemSerializer
from rest_framework import generics


class ItemList(generics.ListCreateAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemSerializer
