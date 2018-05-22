from django.urls import path
from items import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('',views.ItemList.as_view()),
    path('<pk>', views.ItemDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
