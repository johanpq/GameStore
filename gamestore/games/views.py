from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Games, Category
from .api.serializers import GameSerializer, CategorySerializer

class GameViewSet(ModelViewSet):
    queryset = Games.objects.all()
    serializer_class = GameSerializer
    
class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Create your views here.
