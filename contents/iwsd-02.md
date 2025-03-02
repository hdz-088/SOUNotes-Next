---
header: IWSD-02
title: IWSD-02 Django
slug: iwsd-02
semester: 4
image: /django.png
accent: "#f26a22"
link: https://drive.google.com/file/d/1oN-y7W5VnWoMwgFrKpuZTz3nl9VWQj2x/view?usp=sharing
---

- Django is a high-level Python web framework.
- Encourages rapid development and clean, pragmatic design.
- Follows the **Model-View-Template (MVT)** architectural pattern.

## HTTP Protocol

- The HTTP protocol is the foundation of data communication for the web. It is a stateless protocol used by web browsers and servers to communicate.
- **Key Features**:
  - HTTP is **stateless**, meaning each request is treated independently.
  - Works in a **request-response model**.
  - **GET**: fetch data
  - **POST**: submit data
  - **PUT**: update data
  - **DELETE**: remove data

## MVC Model

- Django follows the Model-View-Controller (MVC) pattern, although it is often referred to as **MTV** (Model-Template-View) in Django terminology.
- **Model**: Handles the database. Represents the application’s data.
- **View**: Processes user requests and returns appropriate responses.
- **Controller**: Handles user input and interacts with the model
- **Template**: Manages the presentation layer (HTML).

## Virtual Environment

- A virtual environment is an **isolated Python environment** that helps manage dependencies for a project.
- **Benefits**:
  - Avoids conflicts between dependencies of different projects.
  - Ensures consistent development and deployment environments.

## Django's Project Structure

- When a Django project is created, it generates the following structure:
- `manage.py`: Command-line utility for managing the project.
- `settings.py`: Configuration file for the project.
- `urls.py`: Maps URLs to views.
- `models.py`: Defines the database schema.
- `views.py`: Contains logic for handling requests.
- `templates/`: Stores HTML templates.
- `wsgi.py`: Web server getway interface
- `asgi.py`: Asynchronous server getway interface

## Generic Views

- Generic Views are pre-built views in Django that handle common use cases such as displaying a list of objects or managing CRUD operations.
- Django provides **Class-Based Generic Views** (CBVs), which are modular, allowing for cleaner and more organized code.
- Django provides different categories of generic views:
- They save time by reducing boilerplate code and allow developers to focus on what makes their application unique.

### Display Views

- Used for rendering templates with context data.
- **TemplateView**: Renders a template with minimal logic.

```python
from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
	template_name = "home.html"
```

### Detail & List Views

- Used for working with models
- **DetailView**: Displays a single object.

```python
from django.views.generic.detail import DetailView
from .models import Book

class BookDetailView(DetailView):
	model = Book
	template_name = "book_detail.html"
```

- **ListView**: Displays a list of objects.

```python
from django.views.generic.list import ListView
from .models import Book

class BookListView(ListView):
	model = Book template_name = "book_list.html"
	context_object_name = "books"  # Default is 'object_list'
```

### Form Views

- Used for handling forms.
- **FormView**: Renders a form and processes the form submission.

```python
from django.views.generic.edit import FormView
from .forms import ContactForm

class ContactFormView(FormView):
	template_name = "contact.html"
	form_class = ContactForm
	success_url = "/thanks/"

	def form_valid(self, form):
		# Process the form (e.g., send email)
		return super().form_valid(form)
```

### Create, Update, and Delete Views

- Used for handling CRUD operations.
- **CreateView**: Handles object creation.

```python
from django.views.generic.edit import CreateView
from .models import Book

class BookCreateView(CreateView):
	model = Book
	fields = ['title', 'author', 'price']
	template_name = "book_form.html"
	success_url = "/books/"
```

- **UpdateView**: Handles object updates.

```python
from django.views.generic.edit import UpdateView

class BookUpdateView(UpdateView):
	model = Book
	fields = ['title', 'author', 'price']
	template_name = "book_form.html"
	success_url = "/books/"
```

- **DeleteView**: Handles object deletion.

```python
from django.views.generic.edit import DeleteView

class BookDeleteView(DeleteView):
	model = Book
	template_name = "book_confirm_delete.html"
	success_url = "/books/"
```

## Form Processing in Django

- Django simplifies form handling with its forms module.
- Types of Form in Django:
  - **Basic Forms**: Defined using `django.forms.Formt` used for creating non-model-based forms.
  - **Model Forms**: Defined using `django.formsModelForm`, used for creating forms tied to database models.
- **Steps**:
  1.  **Define** a form using `forms.Form` or `forms.ModelForm`.
  2.  **Render Forms**: Use the form class in the view and pass it to a template.
  3.  **Validate Forms Data**: Check if the form is valid in the view (`form.is_valid()`)
  4.  **Process Valid Data**: Handle the valid data
  5.  **Handle Invalid Data**: Display errors to the user,

```python
from django import forms from django.shortcuts import render

class ContactForm(forms.Form):
	name = forms.CharField(max_length=100)
	email = forms.EmailField()

def contact_view(request):
	if request.method == 'POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			return HttpResponse("Form submitted successfully!")
		else:
			form = ContactForm()
		return render(request, 'contact.html', {'form': form})
```

## File Uploading in Django

- Django provides built-in support for handling file uploads.
- Steps:
  1.  Add `FileFieId` or `ImageFieId` to your model.
  2.  Configure `MEDIA_URL` and `MEDIA_ROOT` in `settings.py`
  3.  Create a form and handle file uploads in views
  4.  Add `enctype="multipart/form-data"` to the form.
  5.  Use `request.FILES` to access uploaded files.

```python
from django.shortcuts import render

def upload_file(request):
	if request.method == 'POST':
		uploaded_file = request.FILES['file']
		with open(f'media/{uploaded_file.name}', 'wb+') as destination:
			for chunk in uploaded_file.chunks():
				destination.write(chunk)
	return render(request, 'upload.html')
```

## HTML Templates in Django

- Templates in Django are used to generate dynamic HTML content.
- Key Features:
  - Use `{{ }}` for variable interpolation.
  - Use `{% %}` for logic like loops or conditionals.

```html
<!-- templates/home.html -->
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome, {{ user_name }}</h1>
  </body>
</html>
```

## Page Redirection in Django

- Django provides the `redirect()` function to send users to another URL.

```python
from django.shortcuts import redirect
	def redirect_view(request):
		return redirect('/success/')
```

## URL Dispatcher in Django

- The URL dispatcher maps URLs to views using patterns defined in `urls.py`.

```python
from django.urls import path
from . import views

urlpatterns = [
	path( '', views.home_view, name='home'),
	path('about/', views.about_view, name='about'),
]
```

## ReportLab in Django

- ReportLab is a Python library used to generate PDF files.
- Steps:
  - Install `ReportLab` using `pip install reportlab`.
  - Use canvas to create a PDF.

```python
from django.http import HttpResponse
from reportlab.pdfgen import canvas

def generate_pdf(request):
	response = HttpResponse(content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="example.pdf"'
	p = canvas.Canvas(response)
	p.drawString(100, 750, "Hello, ReportLab!")
	p.showPage()
	p.save()
	return response
```

## Resources

- [Official Django Documentation](https://www.djangoproject.com/start/)
- [Django Tutorial (Hindi)](https://youtu.be/JxzZxdht-XY?si=6_70Z4XqiO1OW2j2)
- [Django Tutorial (English)](https://youtu.be/PtQiiknWUcI?si=cQLKeY8WLw2Oi8vI)

---
