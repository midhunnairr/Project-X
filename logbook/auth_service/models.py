from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
from django.db import models
from django.utils import timezone
from django.core.validators import MinLengthValidator

class UserManager(BaseUserManager):
    """
    Custom manager for User model.
    """

    def create_user(self, email: str, password: str | None = None, **extra_fields):
        if not email:
            raise ValueError("Email must be provided.")

        email = self.normalize_email(email)

        if extra_fields.get("auth_provider", 0) == AuthProvider.LOCAL and not password:
            raise ValueError("Password is required for local authentication.")

        user = self.model(email=email, **extra_fields)

        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()

        user.save(using=self._db)
        return user

    def create_superuser(self, email: str, password: str, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("auth_provider", AuthProvider.LOCAL)

        if not extra_fields.get("is_staff"):
            raise ValueError("Superuser must have is_staff=True.")
        if not extra_fields.get("is_superuser"):
            raise ValueError("Superuser must have is_superuser=True.")
        if not password:
            raise ValueError("Superuser must have a password.")

        return self.create_user(email, password, **extra_fields)

class AuthProvider(models.IntegerChoices):
    LOCAL = 0, "Local"
    GOOGLE = 1, "Google"
    GITHUB = 2, "Steam"
    APPLE = 3, "Apple"

class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom User model.
    """

    email = models.EmailField(unique=True)

    username = models.CharField(
        max_length=150,
        unique=True,
        validators=[MinLengthValidator(3)],
    )

    auth_provider = models.PositiveSmallIntegerField(
        choices=AuthProvider.choices,
        default=AuthProvider.LOCAL,
    )

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_email_verified = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    class Meta:
        ordering = ["-date_joined"]

    def __str__(self):
        return self.email