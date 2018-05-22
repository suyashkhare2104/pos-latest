from rest_framework import serializers
from items.models import Items


class ItemSerializer(serializers.Serializer):

    label = serializers.CharField(required=True, allow_blank=True, max_length=100)
    value = serializers.IntegerField()
    quantity = serializers.IntegerField()


    def create(self, validated_data):

        return Items.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.label = validated_data.get('label', instance.label)
        instance.value = validated_data.get('value', instance.value)
        instance.save()
        return instance
