from rest_framework.permissions import BasePermission

class IsAuthenticatedOrPostOnly(BasePermission):
    """
    Si el metodo es post se puede acceder, sino tiene que estar autenticado
    """
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return request.user.is_authenticated