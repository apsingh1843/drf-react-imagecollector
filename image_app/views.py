from django.shortcuts import render
from django.contrib import messages
from .forms import ImageForm
from api.models import Image


# Create your views here.


def index(request):
    img = Image.objects.all()
    return render(request, 'image_app/index.html', {'img': img})


def userform(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            img = Image.objects.all()
            messages.success(request, 'image uploaded successfully.')
            return render(request, 'image_app/index.html', {'img': img})

    form = ImageForm()
    return render(request, 'userform.html', {'form': form})
