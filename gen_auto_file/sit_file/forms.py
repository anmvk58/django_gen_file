from django import forms

class TestCaseForm(forms.Form):
    epic = forms.CharField(label="Epic/CR", max_length=255)
    jira = forms.CharField(label="Link Jira", max_length=255)