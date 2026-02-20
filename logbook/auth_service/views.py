from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .serializers import InitiateRegistrationSerializer
from .tasks.otp_mail_task import send_otp_email_task
from .utils import otp_helper
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class InitiateRegistrationView(APIView):

    def post(self,request):

        serializer = InitiateRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data.get("email")

            otp = otp_helper.generate_otp()

            cache_key = otp_helper.store_otp_in_cache(email,otp)

            send_otp_email_task.delay(email=email, otp=otp)

            return Response(
                {
                    "message":"OTP has been sent successfully to the email",
                    "otp_key":cache_key
                }
            )
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class VerifyRegistrationView(APIView):

    def post(self,request):
        