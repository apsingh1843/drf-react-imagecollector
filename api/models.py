from django.db import models
from django.utils.timezone import now

# Create your models here.


class Image(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=300)
    photo = models.ImageField(upload_to="pics")
    description = models.TextField()
    date = models.DateField(default=now)

    def __str__(self):
        return self.name
