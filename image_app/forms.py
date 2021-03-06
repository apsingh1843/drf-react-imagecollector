from django import forms
from api.models import Image


class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ('name', 'title', 'photo', 'description')
