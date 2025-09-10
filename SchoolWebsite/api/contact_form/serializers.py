from rest_framework import serializers

class ContactFormSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    contact_number = serializers.CharField(max_length=20, required=False)
    email_address = serializers.EmailField()
    message = serializers.CharField(style={'base_template': 'textarea.html'})