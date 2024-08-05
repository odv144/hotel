from rest_framework.permissions import BasePermission

class IsAuthenticatedOrGetOnly(BasePermission):
    """
    Si el metodo es post se puede acceder, sino tiene que estar autenticado
    """
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        return request.user.is_authenticated