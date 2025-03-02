---
header: APY-02
title: APY-02 Modules
slug: apy-02
semester: 4
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1Ibv5muOheiRMKQ4nLLxfMqqt8OKgfgwG/view?usp=sharing
---

## Introduction

- A module is a file containing Python code that defines functions, classes, or variables.
- Modules are the building blocks of your Python projects; they allow you to organize, reuse, and maintain your code with ease.
- Why use module?
  - Reusability of code.
  - Organization of code into logical files.
  - Namespace separation.

## Importing a Module in Python

- Importing a module using `import`

```python
import math
print(math.sqrt(25))
```

- Importing specific functions using `from` import

```python
from math import sqrt
print(sqrt(25))
```

- Import all functions/variables from a module

```python
from math import *
print(sqrt(25))
```

## Module Search Path

- Where does Python look for modules?
  - Current directory
  - Standard libraries directory
  - Environment variable **PYTHONPATH**
- To check search paths:

```python
import sys
print(sys.path)
```

## Package

- A package is a collection of modules in a directory hierarchy. It contains an `__init__.py` file to indicate that the directory is a Python package.
- Structure of Package:

```bash
my_package/
	__init__.py
	module1.py
	module2.py
```

### Creating a User-defined Package

1. Create a directory with an `__init__.py` file.
2. Add modules inside this directory.
3. Import the package using `import package_name`.

```python
import my_package.module1
my_package.module1.function_name()
```

## Random Module

- Used to generate random numbers and perform random actions.
- **Common Functions:**
  - `random.random()` — generates a random float between 0 and 1.
  - `random.randint(a, b)` — generates a random integer between a and b.

```python
import random
print(random.randint(1, 10))
```

## Date & Time Module

- `datetime` is the most common module for handling dates and times

```python
import datetime
print(datetime.datetime.now())
```

## Math Module

- Provides mathematical functions like trigonometric functions, square root, etc.

```python
import math
print(math.pi)
```

## Built-in Exceptions

- Common Built-in Exceptions:
  - TypeError
  - ValueError
  - FileNotFoundError

```python
try:
	x = int("abc")
except ValueError:
	print("Invalid value")
```

## User-defined Exceptions

- To create an user-defined exceptions define a new exception class that inherits from Exception.

```python
class MyCustomError(Exception):
	pass
raise My Custom Error("Something went wrong")
```

## Raising Exceptions

- Raise an exception manually when a certain condition is met.

```python
if age < 18:
	raise ValueError("Age must be 18 or older")
```

## Try, Except, Finally Block

- Syntax

```python
try:
	# Code that may raise an exception
except Exception Type:
	# Code that runs if exception is caught
finally:
	# Code that runs regardless of exception
```

```python
try:
	x = 10 / 0
except ZeroDivisionError:
	print("Cannot divide by zero")
finally:
	print("Execution completed")
```

## Introduction to Files and Its Types

- There are 2 types of files in python:
  - **Text Files**: Human-readable files (.txt, .csv, .log).
  - **Binary Files**: Files that contain non-text data (.png, .jpg, .exe).

### Working with Binary Files

- Opening a Binary Files

```python
with open('image.png', 'rb') as file:
	data = file.read()
```

- Writing to a Binary File:

```python
with open('output.bin', 'wb') as file:
	file.write(data)
```

### Working with Text Files

- Reading from a Text File

```python
with open('example.txt', 'r') as file:
	content = file.read()
	print(content)
```

- Writing to a Text File

```python
with open('example.txt', 'w') as file:
	file.write("Hello, World!")
```

## Reading & Writing Files

- Modes for Opening Files
  - 'r' – read (default mode)
  - 'w' – write (creates a new file or overwrites an existing one)
  - 'a' – append
  - 'b' – binary mode

```python
with open('data.txt', 'a') as file:
	file.write("Adding new data\n")
```

## Questions

1. What are modules in Python? Explain the process of importing a module using examples. (3)
2. Write a Python program to demonstrate the use of the random module to generate random numbers (4)
3. Explain how to handle exceptions in Python using the try, except, and finally blocks. Provide examples. (5)
4. Write a Python program to raise and handle a user-defined exception. (5)
5. Discuss the module search path in Python. How can we modify it? (3)
6. Explain the difference between binary and text files. Write a program to read and write a text file. (4)
7. What is the role of the math module in Python? Demonstrate its use with examples of common functions. (4)
8. Write a Python program to create and use a user-defined package containing multiple modules. (5)
9. Discuss the concept of built-in exceptions in Python. Provide examples of at least three such exceptions. (3)
10. Explain the difference between from module import and import module. Give code examples. (3)

## Resources

1. [W3School Python Modules](https://www.w3schools.com/python/python_modules.asp)
2. [W3School File Handling](https://www.w3schools.com/python/python_file_handling.asp)
3. [Random Module | Python Docs](https://docs.python.org/3/library/random.html)
4. [Random Module | W3School](https://www.w3schools.com/python/module_random.asp)
5. [DateTime Module | Python Docs](https://docs.python.org/3/library/datetime.html)
6. [DateTime Module | W3School](https://www.w3schools.com/python/python_datetime.asp)
7. [Math Module | Python Docs](https://docs.python.org/3/library/math.html)
8. [Math Module | W3School](https://www.w3schools.com/python/module_math.asp)
9. [Exceptions | Python Docs](https://docs.python.org/3/library/exceptions.html)
10. [Exceptions | W3School](https://www.w3schools.com/python/python_try_except.asp)

---
