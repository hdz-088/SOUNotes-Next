---
title: Python-02
slug: Python-02
semester: 3
image: /python.jpg
link: https://drive.google.com/file/d/1VYE6w4ZdSgrIpUqoPlyKdbVpobfC8eQe/view?usp=sharing
---

## String

### Creating and Storing Strings

- In Python, strings can be created using single quotes (`'`) or double quotes (`"`). They are immutable sequences of characters.

```python showLineNumbers
# Example of creating strings
str1 = 'Hello, '
str2 = "world!"
```

### Basic String Operations

- Python supports various operations on strings, such as concatenation (`+`), repetition (`*`), and membership (`in` operator).

```python showLineNumbers
# Example of basic string operations
str1 = 'Hello, '
str2 = 'world!'
concatenated_str = str1 + str2
repeated_str = str1 * 3
print(concatenated_str)  # Output: Hello, world!
print(repeated_str)      # Output: Hello, Hello, Hello,
```

### Accessing Characters in String by Index Number

- Individual characters in a string can be accessed using indexing. Indexing starts at 0 in Python.

```python showLineNumbers
# Example of accessing characters in a string
my_string = 'Python'
print(my_string[0])    # Output: 'P'
print(my_string[3])    # Output: 'h'
```

### String Slicing and Joining

- String slicing allows you to extract a substring from a string. It uses the syntax `string[start:end:step]`.

```python showLineNumbers
# Example of string slicing
my_string = 'Python Programming'
print(my_string[7:])     # Output: 'Programming'
print(my_string[:6])     # Output: 'Python'
print(my_string[::2])    # Output: 'Pto rgamn'
```

### String Methods

- Python provides many built-in methods for manipulating strings, such as `upper()`, `lower()`, `strip()`, `replace()`, `split()`, etc.

```python showLineNumbers
# Example of string methods
my_string = '   Hello, World!   '
print(my_string.strip())            # Output: 'Hello, World!'
print(my_string.lower())            # Output: '   hello, world!   '
print(my_string.replace('Hello', 'Hi'))  # Output: '   Hi, World!   '
```

### Formatting Strings

- String formatting allows you to interpolate variables and expressions within strings. Python supports multiple ways of string formatting, including f-strings, `str.format()`, and `%` formatting.

```python showLineNumbers
# Example of string formatting
name = 'Alice'
age = 25
print(f'My name is {name} and I am {age} years old.')
# Output: 'My name is Alice and I am 25 years old.'
```

## Lists

### Creating Lists

- Lists are one of Python's built-in data types used to store multiple items in a single variable. Lists are ordered, mutable, and can contain items of different data types.

```python showLineNumbers
# Example of creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True]
```

### Basic List Operations

- Lists support a variety of basic operations like concatenation (`+`), repetition (`*`), and membership (`in`).

```python showLineNumbers
# Example of basic list operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]
concatenated_list = list1 + list2
repeated_list = list1 * 3
print(concatenated_list)  # Output: [1, 2, 3, 4, 5, 6]
print(repeated_list)      # Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### Indexing and Slicing in Lists

- You can access individual elements or slices of a list using indexing and slicing. Indexing starts at 0, and slicing uses the `list[start:end:step]` syntax.

```python showLineNumbers
# Example of indexing and slicing in lists
my_list = [10, 20, 30, 40, 50]

# Accessing individual elements
print(my_list[0])    # Output: 10
print(my_list[2])    # Output: 30

# Slicing
print(my_list[1:4])  # Output: [20, 30, 40]
print(my_list[::2])  # Output: [10, 30, 50]
```

### Built-In Functions Used on Lists

- Python provides several built-in functions that can be applied to lists, such as `len()`, `max()`, `min()`, `sum()`, and `sorted()`.

```python showLineNumbers
# Example of built-in functions used on lists
numbers = [10, 5, 8, 3, 7]

print(len(numbers))   # Output: 5 (length of the list)
print(max(numbers))   # Output: 10 (maximum element)
print(min(numbers))   # Output: 3 (minimum element)
print(sum(numbers))   # Output: 33 (sum of elements)
print(sorted(numbers))  # Output: [3, 5, 7, 8, 10] (sorted list)
```

### List Methods

- Python provides several useful methods for lists, such as `append()`, `extend()`, `insert()`, `remove()`, `pop()`, `reverse()`, and `sort()`.

```python showLineNumbers
# Example of list methods
my_list = [10, 20, 30]

my_list.append(40)    # Adds 40 to the end of the list
print(my_list)        # Output: [10, 20, 30, 40]

my_list.insert(1, 15)  # Inserts 15 at index 1
print(my_list)         # Output: [10, 15, 20, 30, 40]

my_list.remove(20)     # Removes the first occurrence of 20
print(my_list)         # Output: [10, 15, 30, 40]

popped_item = my_list.pop()  # Removes and returns the last item
print(popped_item)           # Output: 40
print(my_list)               # Output: [10, 15, 30]

my_list.reverse()      # Reverses the list
print(my_list)         # Output: [30, 15, 10]

my_list.sort()         # Sorts the list in ascending order
print(my_list)         # Output: [10, 15, 30]
```

### The `del` Statement

- The `del` statement is used to delete elements from a list or even delete the entire list. You can delete a specific element by its index or slice.

```python showLineNumbers
# Example of del statement
my_list = [10, 20, 30, 40, 50]

del my_list[1]       # Deletes the element at index 1
print(my_list)       # Output: [10, 30, 40, 50]

del my_list[1:3]     # Deletes elements from index 1 to 2 (slice)
print(my_list)       # Output: [10, 50]

del my_list          # Deletes the entire list
```

## Functions

### Built-in Functions

- Python comes with several built-in functions for various operations, such as `print()`, `len()`, `type()`, `range()`, `input()`, etc. These functions are always available and don't require any imports.

```python showLineNumbers
# Example of built-in functions
print("Hello, World!")       # Output: Hello, World!
numbers = [1, 2, 3, 4, 5]
print(len(numbers))          # Output: 5
print(type(numbers))         # Output: <class 'list'>
```

### Commonly Used Modules

- Python provides a vast standard library with built-in modules that you can import for extended functionality. Some commonly used modules are:

- `math`: Mathematical operations.
- `random`: Generating random numbers.
- `datetime`: Working with dates and times.
- `os`: Interfacing with the operating system.

```python showLineNumbers
# Example of using commonly used modules
import math
import random
import datetime

print(math.sqrt(16))                # Output: 4.0
print(random.randint(1, 10))        # Output: A random number between 1 and 10
print(datetime.datetime.now())      # Output: Current date and time
```

### Definition and Calling the Function

- A function is defined using the `def` keyword, followed by the function name and parentheses. A function can be called by using its name followed by parentheses.

```python showLineNumbers
# Example of defining and calling a function
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```

### Return Statement and Void Function

- A function can return a value using the `return` statement. If no return statement is present, or the function returns `None`, it's considered a "void function".

```python showLineNumbers
# Example of function with return statement
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8

# Example of a void function
def print_message():
    print("This is a void function")

print_message()  # Output: This is a void function
```

### Scope and Lifetime of Variables

- Variables defined inside a function are local to that function and cannot be accessed outside. Variables defined outside any function are global, but you cannot modify global variables inside a function unless explicitly stated using the `global` keyword.

```python showLineNumbers
# Example of variable scope and lifetime
def my_function():
    local_var = 10  # Local variable
    print(local_var)

global_var = 20  # Global variable

my_function()  # Output: 10
print(global_var)  # Output: 20

# Modifying a global variable inside a function
def modify_global():
    global global_var
    global_var = 50

modify_global()
print(global_var)  # Output: 50
```

### Default Parameters

- You can provide default values to function parameters. If the caller doesn't pass a value, the default will be used.

```python showLineNumbers
# Example of default parameters
def greet(name="User"):
    print(f"Hello, {name}!")

greet()           # Output: Hello, User!
greet("Alice")    # Output: Hello, Alice!
```

### Keyword Arguments

- Python allows you to call functions using keyword arguments, where the name of the argument is explicitly mentioned, making the function calls more readable.

```python showLineNumbers
# Example of keyword arguments
def display_info(name, age):
    print(f"Name: {name}, Age: {age}")

display_info(age=25, name="Bob")  # Output: Name: Bob, Age: 25
```

### Command Line Arguments

- Python allows you to pass arguments to your script from the command line using the `sys` module. The `sys.argv` list stores these arguments.

```python showLineNumbers
# Example of command-line arguments
import sys

def print_arguments():
    print("Command Line Arguments:", sys.argv)

# To run this, you would typically use a command like:
# python script.py arg1 arg2 arg3
```

## Questions

1. What is a string in Python? Explain string operations with an example.
2. What is string slicing? Provide an example and explain how slicing can be used to reverse a string.
3. List five methods of string manipulation in Python.
4. What is a list in Python? Explain list operations with examples.
5. Describe the list method in Python with an example.
6. Differentiate between a list and a string in Python.
7. What is a function in Python? Explain any five built-in functions in Python.
8. Explain the concept of scope and lifetime of variables within a function.
9. What is the purpose of a function? How do you declare a function in Python? explain it with an example.
