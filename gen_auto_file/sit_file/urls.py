from django.urls import path
from . import views

urlpatterns = [
    path('', views.sit_page),
    path('new', views.new),
    # path('result', views.get_info_test_file),
]