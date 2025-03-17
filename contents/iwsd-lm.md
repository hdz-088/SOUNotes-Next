---
header: IWSD-LM
title: IWSD Lab Manual
slug: iwsd-lm
semester: 4
image: /django.png
accent: "#f26a22"
link:
---

## Practical 01

**Aim:** Python Program to Find Factorial of Number Using Function.

**Description:** This program defines a function to calculate the factorial of a given number using recursion or iteration. The user inputs a number, and the function returns its factorial.

**Code:**

```python
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

num = int(input("Enter a number: "))
print("Factorial of", num, "is", factorial(num))
```

**Output:**

```
Enter a number: 5
Factorial of 5 is 120
```

**Post Practical Questions:**

1. B
2. A
3. A
4. c

**Conclusion:** In this practical, we implemented a function to calculate the factorial of a number using iteration. The program successfully computes the factorial for any positive integer entered by the user.

---

## Practical 02

**Aim:** Develop programs to learn the concept of function scoping, recursion, and list mutability.

**Description:** This program demonstrates function scoping by defining and using local and global variables inside a function. It also includes an example of recursion and how lists behave when passed as function arguments.

**Code:**

```python
# Function Scoping Example
x = 10  # Global variable

def scope_example():
    x = 5  # Local variable
    print("Inside function, x =", x)

scope_example()
print("Outside function, x =", x)

# Recursion Example (Factorial)
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print("Factorial of 5 is", factorial(5))

# List Mutability Example
def modify_list(lst):
    lst.append(4)

numbers = [1, 2, 3]
modify_list(numbers)
print("Modified list:", numbers)
```

**Output:**

```
Inside function, x = 5
Outside function, x = 10
Factorial of 5 is 120
Modified list: [1, 2, 3, 4]
```

**Post Practical Questions:**

1. **Which of the following behaviors are associated with list mutability in Python?**

   - D

2. **What happens when you modify a list inside a function in Python?**

   - The original list gets modified since lists are mutable and passed by reference.

3. **What is the difference between local and global variables in the context of function scoping?**

   - Local variables exist only inside a function, while global variables exist throughout the program.

4. **What will be the output of this code? Explain why:**
   ```python
   my_list = [1, 2, 3]
   def modify(lst):
       lst += [4, 5]
   modify(my_list)
   print(my_list)
   ```
   **Answer:**  
   **Output:** `[1, 2, 3, 4, 5]`  
   **Explanation:** `lst += [4, 5]` modifies the original list since lists are mutable.

**Conclusion:** This practical demonstrated function scoping with local and global variables, recursion using a factorial function, and list mutability by modifying a list inside a function.

---

## Practical 03

**Aim:** Develop programs to understand the working of exception handling and assertions.

**Description:** This program demonstrates **exception handling** by catching division by zero and invalid input errors. It also includes an assertion example.

**Code:**

```python
def divide_numbers():
    try:
        a = int(input("Enter numerator: "))
        b = int(input("Enter denominator: "))
        result = a / b
        print("Result:", result)
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except ValueError:
        print("Error: Invalid input! Please enter numbers.")
    finally:
        print("Execution completed.")

divide_numbers()
```

**Output:**

```
Enter numerator: 10
Enter denominator: 2
Result: 5.0
Execution completed.
```

```
Enter numerator: 5
Enter denominator: 0
Error: Cannot divide by zero!
Execution completed.
```

```
Enter numerator: abc
Error: Invalid input! Please enter numbers.
Execution completed.
```

**Post-Practical Questions**

1. **Which of the following is true about exception handling in Python?**

   - b

2. **What is the purpose of the try block in Python?**

   - The `try` block executes code that might raise an exception, ensuring errors are handled in the `except` block to prevent crashes.

3. **Write a Python statement that uses assert to ensure a variable `x` is non-negative.**
   - `assert x >= 0, "x must be non-negative"`

**Conclusion:** Implemented exception handling using `try`, `except`, and `finally` to handle division errors and invalid inputs, and used assertions to enforce conditions in the program.

---

## Practical 04

**Aim:**  
Create a Web Database Application "Address Book" with options to:  
a) Add/Insert a record  
b) Modify a record  
c) Display a record  
d) Delete a record

**Description:**  
Create a web-based "Address Book" application that allows users to add, modify, display, and delete contact records in a database using Django.

**Code:**

**Step 1: Install Django**

```bash
pip install django
```

**Step 2: Create Project & App**

```bash
django-admin startproject address_book_project
cd address_book_project
django-admin startapp address_book_app
```

Add `'address_book_app'` to `INSTALLED_APPS` in `settings.py`.

**Step 3: Models (`models.py`)**

```python
from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

**Step 4: Forms (address_book_app\forms.py)**

```python
from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'phone']
```

**Step 5: Views (`views.py`)**

```python
from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact
from .forms import ContactForm

def home(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ContactForm()
    contacts = Contact.objects.all()
    return render(request, 'home.html', {'form': form, 'contacts': contacts})

def update_contact(request, id):
    contact = get_object_or_404(Contact, id=id)
    if request.method == "POST":
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ContactForm(instance=contact)
    return render(request, 'update.html', {'form': form})

def delete_contact(request, id):
    Contact.objects.filter(id=id).delete()
    return redirect('home')
```

**Step 6: URLs (`urls.py`)**

```python
from django.contrib import admin
from django.urls import path
from address_book_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('update/<int:id>/', views.update_contact, name='update_contact'),
    path('delete/<int:id>/', views.delete_contact, name='delete_contact'),
]
```

**Step 7: Templates**

**`templates/home.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Address Book</title>
  </head>
  <body>
    <h2>Address Book</h2>
    <form method="post">
      {% csrf_token %} {{ form.as_p }}
      <button type="submit">Add</button>
    </form>
    <ul>
      {% for c in contacts %}
      <li>
        {{ c.name }} - {{ c.phone }}
        <a href="{% url 'update_contact' c.id %}">Edit</a> |
        <a href="{% url 'delete_contact' c.id %}">Delete</a>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>
```

**`templates/update.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Update Contact</title>
  </head>
  <body>
    <h2>Update Contact</h2>
    <form method="post">
      {% csrf_token %} {{ form.as_p }}
      <button type="submit">Update</button>
    </form>
  </body>
</html>
```

**Step 8: Run the Server**

```bash
python manage.py runserver
```

**Output:**  
The browser will display the Address Book, where users can add, update, display, and delete contacts.

**Post Practical Questions:**

1. **What is the role of `models.py` in Django?**

   - `models.py` defines the structure of the database by creating models that map to database tables. It allows interaction with the database using Django’s ORM.

2. **What is the default database engine used by Django?**

   - c) SQLite

3. **Which function is used in Django to redirect to another URL?**
   - a) `redirect()`

**Conclusion:**  
A simple Django Address Book application was created, allowing users to add, modify, display, and delete contacts using Django models, views, and templates.

---

## Practical 05

**Aim:** Create a Web Database Application "Event Registration" with options to:  
a) Event Registration  
b) Cancel Registration  
c) Display a record

**Description:** Create a web-based "Event Registration" application that allows users to register for an event, cancel their registration, and display their registration details using Django.

**Code:**

**Step 1: Install Django**

```bash
pip install django
```

**Step 2: Create Project & App**

```bash
django-admin startproject event_registration_project
cd event_registration_project
django-admin startapp event_registration_app
```

Add `'event_registration_app'` to `INSTALLED_APPS` in `settings.py`.

**Step 3: Models (`models.py`)**

```python
from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    event_name = models.CharField(max_length=200)
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

**Step 4: Forms (`forms.py`)**

```python
from django import forms
from .models import Registration

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = Registration
        fields = ['name', 'email', 'event_name']
```

**Step 5: Views (`views.py`)**

```python
from django.shortcuts import render, redirect, get_object_or_404
from .models import Registration
from .forms import RegistrationForm

def home(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = RegistrationForm()
    registrations = Registration.objects.all()
    return render(request, 'home.html', {'form': form, 'registrations': registrations})

def cancel_registration(request, id):
    Registration.objects.filter(id=id).delete()
    return redirect('home')
```

**Step 6: URLs (`urls.py`)**

```python
from django.contrib import admin
from django.urls import path
from event_registration_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('cancel/<int:id>/', views.cancel_registration, name='cancel_registration'),
]
```

**Step 7: Templates**

**`home.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Registration</title>
  </head>
  <body>
    <h2>Event Registration</h2>
    <form method="post">
      {% csrf_token %} {{ form.as_p }}
      <button type="submit">Register</button>
    </form>
    <ul>
      {% for r in registrations %}
      <li>
        {{ r.name }} - {{ r.event_name }}
        <a href="{% url 'cancel_registration' r.id %}">Cancel</a>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>
```

**Step 8: Run the Server**

```bash
python manage.py runserver
```

**Output:** The browser will display the Event Registration system, where users can register for events, view their registrations, and cancel them.

**Post Practical Questions:**

1. **What is the purpose of an Event Registration Web Application?**
   - The purpose is to allow users to register for events, view registered participants, and cancel their registrations.
2. **Which Django feature is used to store event registration data?**
   - c) Models
3. **Which of the following is used to display all registered participants in Django?**
   - b) `Model.objects.all()`

**Conclusion:** A simple Django app for event registration was created, allowing users to register, view, and cancel registrations.

---

## Practical 06

**Aim:** A simple "Hello World" application using Django.

**Description:** Create a simple Django application that displays "Hello, World!" by setting up a view, mapping it to a URL, and running the Django development server to view the output.

**Code:**

**Step 1: Install Django**

```bash
pip install django
```

**Step 2: Create Project & App**

```bash
django-admin startproject hello_world_project
cd hello_world_project
django-admin startapp hello_world_app
```

Add `'hello_world_app'` to `INSTALLED_APPS` in `settings.py`.

**Step 3: Views (`views.py`)**

```python
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, World!")
```

**Step 4: URLs (`urls.py`)**

**`hello_world_project/urls.py`**

```python
from django.contrib import admin
from django.urls import path
from hello_world_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.hello_world, name='hello_world'),
]
```

**Step 5: Run the Server**

```bash
python manage.py runserver
```

**Output:** The browser will display "Hello, World!" when you navigate to `http://127.0.0.1:8000/`.

**Post Practical Questions:**

1. **Which of the following is true about Django views?**
   - a) Views handle HTTP requests and responses.
2. **What is the purpose of `urlpatterns` in Django?**
   - `urlpatterns` is a list of URL patterns that Django uses to map incoming HTTP requests to the appropriate view functions. It defines which view should handle which URL.
3. **How do you start a Django development server?**
   - To start the Django development server, use the following command in the terminal from your project directory `python manage.py runserver` his will start the server on `http://127.0.0.1:8000/` by default.

**Conclusion:** A simple Django application was created to display "Hello, World!" by setting up a view and mapping it to a URL.

---

## Practical 07

**Aim:** Create an extension or module library in Python to implement a Calculator.

**Description:** Create a Python module or extension that implements a calculator with basic operations such as addition, subtraction, multiplication, and division, providing reusable functions for each operation.

**Code:**

1. **Create a Python module (`calculator.py`)**  
   Create a file called `calculator.py` that contains the following code for basic operations:

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return
    return a / b
```

2. **Use the Calculator Module in Another Script**

```python
# main.py
import calculator

# Example usage of the calculator module

a = 10
b = 5

print(f"{a} + {b} = {calculator.add(a, b)}")
print(f"{a} - {b} = {calculator.subtract(a, b)}")
print(f"{a} * {b} = {calculator.multiply(a, b)}")
print(f"{a} / {b} = {calculator.divide(a, b)}")
```

3. **Run the Main Script**  
   Run the script in the terminal:

```bash
python main.py
```

**Output:**

```
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2.0
```

**Post Practical Questions:**

1. **What is the purpose of a Python module?**
   - A Python module is a file that contains reusable code, functions, and variables which can be imported and used in other Python scripts.
2. **How do you import a Python module?**
   - You can import a Python module using the `import` keyword, like this : `import module_name`
3. **What happens when you divide a number by zero in Python?**
   - Dividing by zero in Python raises a `ZeroDivisionError` exception.

**Conclusion:** A reusable Python module `calculator.py` was created to perform basic operations like addition, subtraction, multiplication, and division, and was tested in another script.

---

## Practical 08

**Aim:** Create an online registration web page for a **Youth Festival** and apply Database CRUD operations in Django Framework.

**Description:** Develop a Django-based registration system where users can register for the **Youth Festival**, view their details, update their information, and delete their registrations using **Create, Read, Update, Delete (CRUD)** operations.

**Code:**

**Step 1: Install Django**

```bash
pip install django
```

**Step 2: Create Project & App**

```bash
django-admin startproject youth_festival
cd youth_festival
django-admin startapp festival_app
```

Add `'festival_app'` to `INSTALLED_APPS` in **settings.py**.

**Step 3: Models (`models.py`)**

```python
from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    event = models.CharField(max_length=100)

    def __str__(self):
        return self.name
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

**Step 4: Forms (`forms.py`)**

```python
from django import forms
from .models import Registration

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = Registration
        fields = ['name', 'email', 'phone', 'event']
```

**Step 5: Views (`views.py`)**

```python
from django.shortcuts import render, redirect, get_object_or_404
from .models import Registration
from .forms import RegistrationForm

def home(request):
    registrations = Registration.objects.all()
    return render(request, 'home.html', {'registrations': registrations})

def register(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})

def update_registration(request, id):
    registration = get_object_or_404(Registration, id=id)
    if request.method == "POST":
        form = RegistrationForm(request.POST, instance=registration)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = RegistrationForm(instance=registration)
    return render(request, 'register.html', {'form': form})

def delete_registration(request, id):
    Registration.objects.filter(id=id).delete()
    return redirect('home')
```

**Step 6: URLs (`urls.py`)**

```python
from django.contrib import admin
from django.urls import path
from festival_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('update/<int:id>/', views.update_registration, name='update_registration'),
    path('delete/<int:id>/', views.delete_registration, name='delete_registration'),
]
```

**Step 7: Templates**

**`home.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Youth Festival Registration</title>
  </head>
  <body>
    <h2>Registered Participants</h2>
    <a href="{% url 'register' %}">Register for Event</a>
    <ul>
      {% for reg in registrations %}
      <li>
        {{ reg.name }} - {{ reg.email }} - {{ reg.phone }} - {{ reg.event }}
        <a href="{% url 'update_registration' reg.id %}">Edit</a>
        <a href="{% url 'delete_registration' reg.id %}">Delete</a>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>
```

**`register.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Register for Youth Festival</title>
  </head>
  <body>
    <h2>Register for Youth Festival</h2>
    <form method="post">
      {% csrf_token %} {{ form.as_p }}
      <button type="submit">Submit</button>
    </form>
    <a href="{% url 'home' %}">Back to Home</a>
  </body>
</html>
```

**Step 8: Run the Server**

```bash
python manage.py runserver
```

**Output:**

- The **homepage** displays all registered participants with options to **edit** or **delete**.
- The **registration page** allows users to register for the event.
- Users can **update** or **delete** their registrations.

**Post Practical Questions:**

1. **Which of the following is the correct sequence of CRUD operations in Django?**
   - b) Create → Read → Update → Delete
2. **What does the `redirect()` function do in Django views?**
   - b) It redirects the user to a specified URL.
3. **How can you set up a database for a Django project?**
   - Configure the `DATABASES` setting in `settings.py`, install necessary database drivers, run `python manage.py migrate`, and create a superuser if needed.

**Conclusion:** A Django-based Youth Festival Registration System was developed, enabling users to register, update, and manage their event participation using CRUD operations.

---
