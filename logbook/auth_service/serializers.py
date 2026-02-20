from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .validators import validate_email,validate_username
from .models import User

class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={"input_type": "password"},
    )
     
    email = serializers.EmailField(required=True,validators=[validate_email])
    username = serializers.CharField(required=True,validators=[validate_username])

    class Meta:
        model = User
        fields = ["email", "username", "password"]

        def create(self, validated_data):
            user = User.objects.create_user(
                email=validated_data["email"],
                username=validated_data.get("username"),
                password=validated_data["password"],
            )
            return user

class InitiateRegistrationSerializer(serializers.Serializer):

    email = serializers.EmailField(required=True,validators=[validate_email])


    
    