from rest_framework import mixins, viewsets
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactFormSerializer

class ContactFormViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = ContactFormSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        first_name = serializer.validated_data.get('first_name')
        last_name = serializer.validated_data.get('last_name')
        contact_number = serializer.validated_data.get('contact_number', 'Not provided')
        email_address = serializer.validated_data.get('email_address')
        message = serializer.validated_data.get('message')

        subject = f'New Contact Form Submission from {first_name} {last_name}'
        email_body = (
            f'Name: {first_name} {last_name}\n'
            f'Email: {email_address}\n'
            f'Contact Number: {contact_number}\n\n'
            f'Message:\n{message}'
        )

        try:
            send_mail(
                subject,
                email_body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_FORM_RECIPIENT_EMAIL],
                fail_silently=False,
            )
            return Response(
                {"detail": "Your message has been sent successfully."}, 
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"detail": "There was an error sending your message. Please try again later."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )