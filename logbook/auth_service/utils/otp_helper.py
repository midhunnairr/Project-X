import uuid
import secrets
import hashlib
from typing import Tuple
from django.conf import settings
from django.core.cache import cache
from django.utils import timezone

OTP_EXPIRY_SECONDS = settings.OTP_EXPIRATION_TIME  # 5 minutes
OTP_MAX_ATTEMPTS = settings.OTP_MAX_ATTEMPTS
OTP_LENGTH = settings.OTP_LENGTH

def generate_otp(length: int = OTP_LENGTH) -> str:
    """
    Generate a secure numeric OTP.
    Uses secrets module (cryptographically secure).
    """
    return "".join(secrets.choice("0123456789") for _ in range(length))

def hash_otp(otp: str) -> str:
    """
    Hash OTP using SHA256 with project secret.
    Prevents storing raw OTP in cache.
    """
    salted_otp = f"{otp}{settings.SECRET_KEY}"
    return hashlib.sha256(salted_otp.encode()).hexdigest()

def _build_cache_key() -> str:
    """
    Generate unpredictable cache key.
    """
    return f"otp:{uuid.uuid4().hex}"

def store_otp_in_cache(email: str, otp: str) -> str:
    """
    Store hashed OTP in Redis cache with expiry and attempt tracking.

    Returns:
        cache_key (str)
    """
    cache_key = _build_cache_key()
    hashed = hash_otp(otp)

    payload = {
        "email": email,
        "otp": hashed,
        "attempts": 0,
        "created_at": timezone.now().isoformat(),
    }

    cache.set(cache_key, payload, timeout=OTP_EXPIRY_SECONDS)

    return cache_key

def verify_otp(cache_key: str, user_input_otp: str) -> Tuple[bool, str | None]:
    """
    Verify OTP against cached value.

    Returns:
        (is_valid, email)
    """
    cached_data = cache.get(cache_key)

    if not cached_data:
        return False, None

    if cached_data["attempts"] >= OTP_MAX_ATTEMPTS:
        cache.delete(cache_key)
        return False, None

    hashed_input = hash_otp(user_input_otp)

    if hashed_input != cached_data["otp"]:
        cached_data["attempts"] += 1
        cache.set(cache_key, cached_data, timeout=OTP_EXPIRY_SECONDS)
        return False, None

    # Success
    email = cached_data["email"]
    cache.delete(cache_key)
    return True, email