from django.urls import path
from .views import NewsArticleListAPIView

urlpatterns = [
    path('', NewsArticleListAPIView.as_view(), name='news-list'),
]