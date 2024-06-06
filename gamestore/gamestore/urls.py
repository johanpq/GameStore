"""
URL configuration for gamestore project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, path
from games.views import GameViewSet, CategoryViewSet
from django.conf import settings
from django.conf.urls.static import static

list_methods = {"get": "list", "post": "create"}
detail_methods = {"get": "retrieve", "put": "update", "delete": "destroy"}# CRUD operations

game_list = GameViewSet.as_view(list_methods)
game = GameViewSet.as_view(detail_methods)

category_list = CategoryViewSet.as_view(list_methods)
category = CategoryViewSet.as_view(detail_methods)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('games/', game_list),
    path('game/<int:pk>/', game, name='game-detail'),
    path('categories/', category_list),
    path('category/<int:pk>/', category, name='category-detail'),
    path('category/<int:pk>/games/', CategoryViewSet.as_view({'get': 'games_by_category'}), name='category-games'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
