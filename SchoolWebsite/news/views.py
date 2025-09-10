from django.shortcuts import render

from rest_framework import generics
from .models import NewsArticle
from .serializers import NewsArticleSerializer

class NewsArticleListAPIView(generics.ListAPIView):
    queryset = NewsArticle.objects.all().order_by('-publication_date')
    serializer_class = NewsArticleSerializer
