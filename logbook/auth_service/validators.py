from rest_framework import serializers
from .models import User
import re

def validate_email(value:str) -> str:
    if User.objects.filter(email__iexact=value).exists():
        raise serializers.ValidationError("A user with that email already exists.")
    return value

USERNAME_REGEX = re.compile(r"^[a-zA-Z0-9._]+$")

RESERVED_USERNAMES = {
    "admin",
    "root",
    "support",
    "help",
    "contact",
    "api",
    "www",
    "null",
    "undefined",
}

def validate_username(value: str) -> str:
    """
    Validate username with production-level constraints.
    """

    value = value.strip()

    # Length validation
    if len(value) < 3:
        raise serializers.ValidationError(
            ("Username must be at least 3 characters long.")
        )

    if len(value) > 30:
        raise serializers.ValidationError(
            ("Username cannot exceed 30 characters.")
        )

    # Allowed characters
    if not USERNAME_REGEX.match(value):
        raise serializers.ValidationError(
            ("Username may contain only letters, numbers, dots, and underscores.")
        )

    # Prevent purely numeric usernames
    if value.isdigit():
        raise serializers.ValidationError(
            ("Username cannot be entirely numeric.")
        )

    # Reserved usernames
    if value.lower() in RESERVED_USERNAMES:
        raise serializers.ValidationError(
            ("This username is reserved and cannot be used.")
        )

    # Case-insensitive uniqueness check
    if User.objects.filter(username__iexact=value).exists():
        raise serializers.ValidationError(
            ("A user with that username already exists.")
        )

    return value