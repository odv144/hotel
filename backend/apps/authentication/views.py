from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiResponse
from drf_spectacular.types import OpenApiTypes

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    
class LoginView(APIView):
    permission_classes = [AllowAny]

    @extend_schema(
        request=LoginSerializer,
        responses={
            200: OpenApiResponse(description="Login successful. Session cookie will be set."),
            401: OpenApiResponse(description="Invalid credentials")
        },
        description="Login endpoint. No authentication required.",
    )
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@extend_schema(
    description=('Logout as administrator(send "X-CSRFToken":csrftoken in header)'),
    responses={200: OpenApiResponse(description='Logged out successfully'),
               403: OpenApiResponse(description="CSRF Failed: CSRF token from the 'X-Csrftoken' HTTP header incorrect.")}
)  
class LogoutView(APIView):
    #Enviar en la cabesera de la peticion 'X-CSRFToken': <csrftoken>
    permission_classes = [IsAuthenticated]
    def post(self, request):
        logout(request)
        return Response({'detail': 'Logged out successfully'})