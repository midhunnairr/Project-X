from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings


@shared_task(bind=True, max_retries=3)
def send_otp_email_task(self, email: str, otp: str):
    """
    Asynchronous OTP email sender.
    Retries automatically if email sending fails.
    """
    try:
        subject = "Your OTP Code"
        message = f"Your verification OTP is: {otp}. It expires in 5 minutes."

        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )

    except Exception as exc:
        raise self.retry(exc=exc, countdown=5)