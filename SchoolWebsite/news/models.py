from django.db import models

class NewsArticle(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='news_images/', blank=True, null=True)
    publication_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
