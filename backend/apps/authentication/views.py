from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiResponse
from drf_spectacular.types import OpenApiTypes
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token

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
            csrf_token= get_token(request)
            response = JsonResponse({'detail': 'Login successful','csrf_token': csrf_token}, status=status.HTTP_200_OK)
            response.set_cookie( 'mycookie', 'cookievalue',httponly=False, samesite='None', secure=True, path='/localhost'
            return response
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
