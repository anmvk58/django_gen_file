from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader, RequestContext
from .forms import TestCaseForm
from django.forms import modelform_factory
from .models import InputData

# Create your views here.
def sit_page(request):
    # template = loader.get_template('forms-layouts.html')
    return render(request, "forms-layouts.html")

InputDataForm = modelform_factory(InputData, exclude=[])

def new(request):
    if request.method == "POST":
        form = InputDataForm(request.POST)
        print(form)
        if form.is_valid():
            # form.save()
            print(form)
            return render(request, "home.html")
    else:
        form = InputDataForm()
    return render(request, "forms-layouts.html")