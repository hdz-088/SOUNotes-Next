---
header: IWSD-01
title: IWSD-01 Django Overview
slug: iwsd-01
semester: 4
image: /django.png
accent: "#f26a22"
link: https://drive.google.com/file/d/1fCPMR5kjmK6qcSlJU57ATvSOH5LLUdw7/view?usp=sharing
---

## What is Django?

- Django is a high-level Python **web framework** used for building robust and scalable **web applications** quickly. It encourages rapid development and clean, maintainable design.
- **Key Features**:
  - **Built-in Tools**: Django includes an admin interface, authentication system, URL routing, database management, and more.
  - **Security**: It helps developers avoid common security pitfalls like SQL injection, cross-site scripting, and cross-site request forgery.
  - **Scalability**: Django can handle high-traffic websites and large-scale applications efficiently.
- **Use Cases**:
  - Social media platforms, e-commerce sites, content management systems (CMS), and APIs.

## What is a Framework?

- A framework is a **collection of pre-written code libraries** and **tools** that provides a foundation to build and deploy applications efficiently.
- **Advantages of Frameworks**:
  - **Saves time** by providing ready-made modules for common tasks like user authentication, database interactions, and form handling.
  - Encourages **best practices** and **standardization** in development.
- **Examples**: Django (Python), Laravel (PHP), Spring (Java), React (JavaScript).

## Django Architecture

![](/iwsd/04iwsd1.png)

- Django follows the **MVT (Model-View-Template)** architecture, ensuring a separation of concerns between business logic, data, and presentation layers.
- **Components**:
  1.  **Model**: Represents the database structure. It is used to query, add, or update data in the database.
      1. Handles the data in the application.
      2. It communicates with the database and stores or retrieves data.
      3. Example: Storing user information, products, or blog posts.
  2.  **View**: Contains the business logic and interacts with the model to fetch data and pass it to the template.
      1. Manages the logic and processes user requests.
      2. It fetches data from the Model and passes it to the Template.
      3. Example: When a user requests a webpage, the View gets the required data and sends it for display.
  3.  **Template**: Handles the presentation layer by rendering HTML pages based on the data passed from the view.
      1. Manages the presentation layer.
      2. Defines how the data will look on the webpage using HTML and CSS.
      3. Example: Displaying a user profile with their name, photo, and posts.

## Flow of MVT (Model-View-Template)

1. **User Request**: The client (user) sends an HTTP request (GET or POST) to the Django application.
2. **URL Dispatcher**: The request is routed to the appropriate view function based on the URL pattern defined in the urls.py file.
3. **View**: The view function processes the request. It interacts with the model to fetch data or perform logic.
4. **Template**: The data fetched by the view is passed to a template for rendering as an HTML page.
5. **Response**: The template is sent back to the user as a response.

## Advantages of MVT Model

- **Separation of Concerns**: Data, logic, and presentation are handled separately.
- **Reusability**: Templates and Models can be reused across different parts of the application.
- **Scalability**: Easy to maintain and extend for larger applications.

## Installation in Virtualenv

- **Virtualenv** creates an isolated Python environment to avoid dependency conflicts between projects.

1. **Install virtualenv**:

```shell
pip install virtualenv
```

2. **Create a virtual environment**:

```shell
virtualenv env_name
```

3. **Activate the environment**:

```shell
env_name\Scripts\activate
```

4. **Install Django in the virtual environment**:

```shell
pip install django
```

5. **Verify Installation**:

```shell
django-admin --version
```

## Creating a Django Project and Apps

- **Project**: A Django project is a collection of configurations and applications for a website.

```shell
django-admin startproject project_name
```

- **App**: An app is a module that handles a specific functionality in the project (e.g., blog, user authentication).

```shell
python manage.py startapp app_name
```

- **Linking the App**: Add the app name to the `INSTALLED_APPS` list in the project’s `settings.py` file.
- **settings.py**: configures the project
- **urls.py**: maps URLs to views
- **manage.py**: command-line utility for the project

## Creating a Superuser

- **What is a Superuser?** A superuser is an administrator account that has all permissions, including access to the admin panel.

```shell
python manage.py createsuperuser
```

- Enter the following details: Username, Email address, Password and start server to access admin panel

```shell
python manage.py runserver
```

- Access the Admin Panel: URL: `http://127.0.0.1:8000/admin/`

## Other Common Django Commands

- **Run the Development Server**: Default URL: `http://127.0.0.1:8000/`

```shell
python manage.py runserver
```

- **Create migration files**:
  - **Command**: `python manage.py makemigrations`
  - **Purpose**: Detect changes in the models and create migration files.
- **Apply migrations**:
  - **Command**: `python manage.py migrate`
  - **Purpose**: Apply the changes to the database.
- **Check Errors**: `python manage.py check`

## Application Programming Interface

- An API is a set of rules and protocols that allow different software applications to communicate with each other. It acts as an intermediary between two applications, enabling data exchange.
- **Why Use APIs?**
  - To integrate third-party services (e.g., payment gateways, social media).
  - To enable data sharing between systems.
  - To enhance modular and scalable application development.
- **Characteristics of API:**
  - **Communication Bridge**: Connects two systems or applications to exchange data.
  - **Reusability**: APIs can be reused across multiple applications and systems.
  - **Abstraction**: Hides complexity of back-end processes & provides a simple interface to users.
  - **Standardization**: Follows standard methods like HTTP, JSON, XML, etc., to make integration easier.
- **Examples of APIs**:
  - Weather API to fetch real-time weather data.
  - Payment APIs like PayPal or Stripe for online transactions.

## Types of APIs

- **Open APIs (Public APIs):**
  - Available for public use.
  - Example: Twitter API for social media integration.
- **Internal APIs (Private APIs):**
  - Used within an organization to integrate internal systems.
  - Example: APIs for a company’s HR software.
- **Partner APIs:**
  - Shared with specific business partners under controlled access.
  - Example: APIs shared between payment providers and e-commerce platforms.
- **Composite APIs:**
  - Combine multiple API calls into a single request.
  - Example: A booking service API that retrieves flight and hotel details simultaneously.

## Representational State Transfer API

![](/iwsd/04iwsd2.png)

- REST (Representational State Transfer) is a lightweight architecture that defines a set of constraints for creating APIs.
- **Key Features:**
  - **Stateless**: Each request contains all the necessary information, with no dependency on previous requests.
  - **Client-Server Separation**: The client and server operate independently.
  - **Cacheable**: Responses can be cached to improve performance.
- **Common HTTP Methods in REST APIs:**
  - **GET**: Retrieve data (e.g., fetch a user’s profile).
  - **POST**: Create new data (e.g., add a new record).
  - **PUT**: Update existing data (e.g., modify user details).
  - **DELETE**: Remove data (e.g., delete a user account).

## RESTful Architecture

- **Principles:**
  - **Uniform Interface**: Use standard conventions for resources (e.g., /users for accessing user data).
  - **Stateless**: Each request must contain all the information needed.
  - **Cacheable**: Responses should define whether they can be cached.
  - **Layered System**: The client should not know the server’s infrastructure.
  - **Resource Based**: Everything is treated as a resource, identified b URLs.
  - **Client-Server Model**: The client (frontend) and server (backend) are separate, allowing scalability.
- **Resource Representation:**
  - Resources (data) are represented as JSON or XML in REST APIs.

## Request Library

- A Python library used to send **HTTP/HTTPS requests** to interact with APIs.
- It simplifies the process of working with APIs, handling URL parameters, headers, authentication, and file uploads while providing support for secure connections with SSL.
- **Features**:
  - Supports GET, POST, PUT, DELETE, and other HTTP methods.
  - Handles headers, parameters, authentication, and more.

```python
import requests

response = requests.get("https://api.example.com/users")
print(response.json())
```

## Assert Statements

- A debugging tool used to test assumptions in the code. If the condition is false, an `AssertionError` is raised.
- If the condition evaluates to `True`, the program continues execution. If it evaluates to `False`, an `AssertionError` is raised, optionally with a custom error message.
- It is commonly used in testing to validate assumptions and ensure that the code behaves as expected.
- **Syntax**: `assert condition, "Optional error message" `

```python
x = 10
assert x > 5, "x should be greater than 5"
```

## Testing

- Testing verifies that a software application meets the specified requirements and is free from defects
- **Types of Testing in the Context of APIs**:
  1.  **Unit Testing**: Testing individual components like functions or endpoints.
  2.  **Integration Testing**: Ensuring different API endpoints work together.
  3.  **Functional testing**: Validates the application against user requirements by simulating user behavior.
  4.  **Security Testing**: Ensuring the API is protected from vulnerabilities.
- **Example**: Using Python’s `unittest` or `pytest` frameworks for automated API testing.

## GIT (Global Information Tracker)

- A version control system used to track changes in source code during development.
- **Key Concepts**:
  - **Repository (Repo)**: A directory containing project files and a history of changes.
  - **Commit:** Saving changes to the repository.
  - **Branch:** A parallel version of the code.
- **Common Git Commands**:
  - `git init`: Initialize a repository.
  - `git add`: Stage changes for commit.
  - `git commit`: Save changes.
  - `git push`: Upload changes to a remote repository.

## SQL (Structured Query Language)

- SQL is used to interact with relational databases to store, retrieve, and manipulate data.
- **Key Features:**
  - **Database Interaction**: SQL is used to query and modify data stored in relational databases like MySQL, PostgreSQL, SQL Server, Oracle, and SQLite.
  - **Declarative Language**: SQL focuses on what to do (e.g., retrieve data) rather than how to do it.
  - **Portability**: SQL can be used across different database management systems with slight syntax variations.
  - **Multi-user Accessibility**: Multiple users can interact with a database concurrently.
  - **Security**: SQL provides mechanisms to control data access and enforce data security through user roles and permissions.
- **Examples** of SQL Databases: MySQL, PostgreSQL, SQLite, Oracle.
  - Data storage in tables (rows and columns).
  - Support for complex queries.
  - Scalability for handling large datasets.

## CRUD Operations in SQL

- CRUD stands for Create, Read, Update, Delete, the four basic operations for managing data in a database.
- Explanation with SQL Queries:

1. **Create**: Insert new data.

```sql
INSERT INTO users (id, name) VALUES (1, 'John Doe');
```

2. **Read**: Retrieve data.

```sql
SELECT * FROM users;
```

3. **Update**: Modify existing data.

```sql
UPDATE users SET name = 'Alice Wilson' WHERE id = 1;
```

4. **Delete**: Remove data.

```sql
DELETE FROM users WHERE id = 1;
```

---

### Resources

- [Official Django Documentation](https://www.djangoproject.com/start/)
- [Django Tutorial (Hindi)](https://youtu.be/JxzZxdht-XY?si=6_70Z4XqiO1OW2j2)
- [Django Tutorial (English)](https://youtu.be/PtQiiknWUcI?si=cQLKeY8WLw2Oi8vI)
