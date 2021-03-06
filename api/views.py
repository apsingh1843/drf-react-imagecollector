from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ImageSerializer
from .models import Image

# Create your views here.


@api_view(['GET'])
def ImageList(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def ImageCreate(request):
    serializer = ImageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
