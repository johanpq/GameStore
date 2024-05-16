from rest_framework.serializers import ModelSerializer
from ..models import Games, Category

class GameSerializer(ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'