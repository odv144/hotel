from django.urls import path
from .views import LoginView, LogoutView

urlpatterns = [
    path('login-view/', LoginView.as_view(), name='login_view'),
    path('logout-view/', LogoutView.as_view(), name='logout_view'),
]