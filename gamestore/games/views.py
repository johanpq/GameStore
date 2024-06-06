from rest_framework.viewsets import ModelViewSet
from .models import Games, Category
from .api.serializers import GameSerializer, CategorySerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class GameViewSet(ModelViewSet):
    serializer_class = GameSerializer
    
class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def games_by_category(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        games = Games.objects.filter(Category=category)
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)

