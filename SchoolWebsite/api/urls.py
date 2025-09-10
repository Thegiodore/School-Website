from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .contact_form.views import ContactFormViewSet # Note the corrected import path

router = DefaultRouter()
router.register(r'contact', ContactFormViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
    # path('contact/', include('api.contact_form.urls')), # Assuming you have a contact form
    path('news/', include('news.urls')), # Add this line
]