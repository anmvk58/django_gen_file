from django.db import models

# Create your models here.
class InputData(models.Model):
    json_input = models.JSONField()

    def __str__(self):
        return self.json_input