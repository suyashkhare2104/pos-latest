from rest_framework import serializers
from items.models import Items


class ItemSerializer(serializers.ModelSerializer):
    #
    # label = serializers.CharField(required=True, allow_blank=True, max_length=100)
    # value = serializers.CharField()
    # quantity = serializers.CharField()
    #
    #
    # def create(self, validated_data):
    #
    #     return Items.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #
    #     instance.label = validated_data.get('label', instance.label)
    #     instance.value = validated_data.get('value', instance.value)
    #     i
    #     instance.save()
    #     return instance
    class Meta:
        model = Items

        fields = ('label','value','quantity')
