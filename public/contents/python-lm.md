---
title: Python Lab Manual
slug: python-lm
semester: 3
image: /python.jpg
link: https://drive.google.com/file/d/1mPT4opB9u9RKnJaLfRkJAA3h5fqj1DVC/view?usp=drive_link
---

## Experiment 01

**Aim:**  
a) Python program to print "Hello, Python."  
b) Python program to perform basic arithmetic operations.  
c) Python program to calculate the area of a triangle.

**Description:**  
This experiment covers basic Python programs, including printing a message, performing arithmetic operations, and calculating the area of a triangle.

**Procedure:**  
Write and execute Python code to accomplish the given tasks.

```python
# a) Python program to print "Hello, Python"
print("Hello, Python")
```

```python
# b) Python program to perform basic arithmetic operations
a = 5
b = 10
sum_result = a + b
product_result = a * b
print("Sum:", sum_result)
print("Product:", product_result)
```

```python
# c) Python program to calculate the area of a triangle
base = 5
height = 10
area = 0.5 * base * height
print("Area of the triangle:", area)
```

**Conclusion:**  
In this experiment, we wrote basic Python programs to print a message, perform arithmetic operations, and calculate the area of a triangle. These tasks demonstrate simple Python functionality.

**MCQs:**

1. C
2. A
3. B
4. B

---

## Experiment 02

**Aim:**  
a) Python program to swap two variables.  
b) Python program to convert Celsius to Fahrenheit.  
c) Python program to display a calendar.  
d) Python program to check if a number is positive, negative, or zero.

**Description:**  
This experiment demonstrates fundamental Python operations such as swapping variables, temperature conversion, calendar display, and checking if a number is positive, negative, or zero.

**Procedure:**  
Write and execute Python code to perform variable swapping, temperature conversion, display a calendar, and check the sign of a number.

```python
# a) Python Program to swap two variables
x = 5
y = 10
x, y = y, x
print("After swapping: x =", x, "and y =", y)
```

```python
# b) Python Program to convert Celsius to Fahrenheit
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print("Temperature in Fahrenheit:", fahrenheit)
```

```python
# c) Python Program to display calendar
import calendar
year = 2024
month = 9
print(calendar.month(year, month))
```

```python
# d) Python Program to check if a number is positive, negative, or zero
num = 3
if num > 0:
    print("The number is positive.")
elif num < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
```

**Conclusion:**  
In this experiment, we wrote Python programs to swap variables, convert temperature from Celsius to Fahrenheit, display a calendar, and check if a number is positive, negative, or zero. These tasks demonstrate a range of basic Python capabilities.

**MCQs:**

1. C
2. A
3. A
4. D

---

## Experiment 03

**Aim:**  
a) Python program to check if a number is odd or even.  
b) Python program to check if a number is prime.  
c) Python program to find the factorial of a number.

**Description:**  
This experiment involves writing Python programs to check if a number is odd or even, determine if a number is prime, and calculate the factorial of a given number.

**Procedure:**  
Write and execute Python code to check for odd/even, prime status, and calculate factorial.

```python
# a) Python Program to check if a number is odd or even
num = 8
if num % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")
```

```python
# b) Python Program to check if a number is prime
num = 29
is_prime = True
if num > 1:
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break
else:
    is_prime = False

if is_prime:
    print(num, "is a prime number.")
else:
    print(num, "is not a prime number.")
```

```python
# c) Python Program to find the factorial of a number
num = 5
factorial = 1
for i in range(1, num + 1):
    factorial *= i
print("The factorial of", num, "is", factorial)
```

**Conclusion:**  
In this experiment, we wrote Python programs to check if a number is odd or even, determine if a number is prime, and calculate the factorial of a number. These tasks demonstrate the use of conditional statements and loops in Python.

**MCQs:**

1. B
2. A
3. C
4. B
5. B

---

## Experiment 04

**Aim:**  
a) Python program to display the multiplication table of a number.  
b) Python program to find the sum of natural numbers.  
c) Python program to make a simple calculator.  
d) Python program to display a calendar using a function.

**Description:**  
This experiment covers Python programs for generating multiplication tables, calculating the sum of natural numbers, implementing a basic calculator, and displaying a calendar using functions.

**Procedure:**  
Write and execute Python code to generate a multiplication table, calculate the sum of natural numbers, create a calculator, and display a calendar using a function.

```python
# a) Python Program to display the multiplication table of a number
num = 5
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
```

```python
# b) Python Program to find the sum of natural numbers
n = 10
sum_natural = 0
for i in range(1, n + 1):
    sum_natural += i
print("The sum of natural numbers up to", n, "is", sum_natural)
```

```python
# c) Python Program to make a simple calculator
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operation = input("Enter operation (+, -, *, /): ")

if operation == '+':
    print("Result:", num1 + num2)
elif operation == '-':
    print("Result:", num1 - num2)
elif operation == '*':
    print("Result:", num1 * num2)
elif operation == '/':
    if num2 != 0:
        print("Result:", num1 / num2)
    else:
        print("Error: Cannot divide by zero!")
else:
    print("Invalid operation!")
```

```python
# d) Python Program to display a calendar using a function
import calendar

def show_calendar(year, month):
    print(calendar.month(year, month))

year = 2024
month = 9
show_calendar(year, month)
```

**Conclusion:**  
In this experiment, we generated a multiplication table, calculated the sum of natural numbers, created a simple calculator, and displayed a calendar using a function. This experiment covers basic programming concepts, including loops, conditionals, and functions.

**MCQs:**

1. B
2. C
3. B
4. A

---

## Experiment 05

**Aim:**  
a) Python program to find the factorial of a number using recursion.  
b) Python string programs.  
c) Python program to sort words in alphabetical order.  
d) Python program to remove punctuation from a string.

**Description:**  
This experiment involves writing Python programs to calculate the factorial of a number recursively, perform operations on strings, sort words alphabetically, and remove punctuation from strings.

**Procedure:**  
Write and execute Python code to perform the specified tasks.

```python
# a) Python Program to find factorial of a number using recursion
def fact(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fact(n - 1)

num = 5
print("Factorial of", num, "is", fact(num))
```

```python
# b) Python string programs
s = "Hello, World!"
# Convert to uppercase
s_upper = s.upper()
print("Uppercase:", s_upper)

# Reverse the string
s_reversed = s[::-1]
print("Reversed:", s_reversed)
```

```python
# c) Python Program to sort words in alphabetical order
def sort_words(sentence):
    # Split the sentence into words
    words = sentence.split()

    # Sort the words in alphabetical order
    words.sort()

    # Return the sorted words as a single string
    return ' '.join(words)

# Example usage:
input_sentence = "lorem ipsum dolor sit"
sorted_words = sort_words(input_sentence)
print("Sorted words:", sorted_words)
```

```python
# d) Python Program to remove punctuation from a string
import string

txt = "Hello, World! Welcome to Python programming."
cleaned_txt = txt.translate(str.maketrans('', '', string.punctuation))
print("Text without punctuation:", cleaned_txt)
```

**Conclusion:**  
In this experiment, we calculated the factorial of a number using recursion, manipulated strings, sorted words alphabetically, and removed punctuation from a string. These exercises reinforce the understanding of recursion, string operations, and list manipulation in Python.

**MCQs:**

1. A
2. D
3. A
4. A
5. D

---

## Experiment 06

**Aim:**  
a) Python program to reverse a string.  
b) Python program to convert a list to a string.  
c) Python program to convert an integer to a string.  
d) Python program to concatenate two strings.

**Description:**  
This experiment involves writing Python programs to reverse a string, convert a list to a string, convert an integer to a string, and concatenate two strings.

**Procedure:**  
Write and execute Python code to perform the specified tasks.

```python
# a) Python Program to reverse a string
s = "Hello, World!"
s_reversed = s[::-1]
print("Reversed string:", s_reversed)
```

```python
# b) Python Program to convert a list to a string
lst = ['Python', 'is', 'fun']
str_from_list = ' '.join(lst)
print("String from list:", str_from_list)
```

```python
# c) Python Program to convert an integer to a string
num = 123
str_num = str(num)
print("Integer as string:", str_num)
```

```python
# d) Python Program to concatenate two strings
s1 = "Hello"
s2 = "World"
concatenated = s1 + " " + s2
print("Concatenated string:", concatenated)
```

**Conclusion:**  
In this experiment, we reversed a string, converted a list and an integer to strings, and concatenated two strings. These exercises reinforce basic string manipulation techniques in Python.

**MCQs:**

1. B
2. C
3. B
4. A

---

## Experiment 07

**Aim:**  
a) Python program to append an element to a list.  
b) Python program to compare two lists.  
c) Python program to convert a list to a dictionary.  
d) Python program to remove an element from a list.  
e) Python program to add two lists.

**Description:**  
This experiment involves writing Python programs to manipulate lists by appending elements, comparing lists, converting a list to a dictionary, removing elements, and adding two lists.

**Procedure:**  
Write and execute Python code to perform the specified tasks.

```python
# a) Python Program to append an element to a list
lst = [1, 2, 3]
lst.append(4)
print("List after appending:", lst)
```

```python
# b) Python Program to compare two lists
lst1 = [1, 2, 3]
lst2 = [1, 2, 3]
are_equal = lst1 == lst2
print("Are the two lists equal?", are_equal)
```

```python
# c) Python Program to convert a list to a dictionary
keys = ['a', 'b', 'c']
values = [1, 2, 3]
dictionary = dict(zip(keys, values))
print("Dictionary from list:", dictionary)
```

```python
# d) Python Program to remove an element from a list
lst = [1, 2, 3, 4]
lst.remove(2)  # Remove element '2'
print("List after removing an element:", lst)
```

```python
# e) Python Program to add two lists
lst1 = [1, 2, 3]
lst2 = [4, 5, 6]
added_list = [a + b for a, b in zip(lst1, lst2)]
print("Result of adding two lists:", added_list)
```

**Conclusion:**  
In this experiment, we appended an element to a list, compared two lists, converted a list to a dictionary, removed an element from a list, and added two lists together. These exercises enhance understanding of list operations in Python.

**MCQs:**

1. B
2. A
3. B
4. A
5. A

---

## Experiment 08

**Aim:**  
a) Python program to convert a list to a string.  
b) Python program to create a dictionary.  
c) Python program to convert a list to a dictionary.

**Description:**  
This experiment involves writing Python programs to convert a list to a string, create a dictionary, and convert a list into a dictionary.

**Procedure:**  
Write and execute Python code to perform the specified tasks.

```python
# a) Python Program to convert a list to a string
lst = ['Hello', 'world', 'from', 'Python']
str_from_list = ' '.join(lst)
print("String from list:", str_from_list)
```

```python
# b) Python Program to create a dictionary
dictionary = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}
print("Created dictionary:", dictionary)
```

```python
# c) Python Program to convert a list to a dictionary
keys = ['name', 'age', 'city']
values = ['Bob', 30, 'Los Angeles']
dict_from_list = dict(zip(keys, values))
print("Dictionary from list:", dict_from_list)
```

**Conclusion:**  
In this experiment, we converted a list to a string, created a dictionary, and converted a list into a dictionary. These exercises reinforce basic data structure manipulation in Python.

**MCQs:**

1. A
2. A
3. B
4. A
5. A,C

---

## Experiment 09

**Aim:**  
a) Python program to sort a dictionary.  
b) Python program to merge two dictionaries.  
c) Create a class named `Fruits` with instances.

**Description:**  
This experiment involves writing Python programs to sort a dictionary, merge two dictionaries, and create a class with instances.

**Procedure:**  
Write and execute Python code to perform the specified tasks.

```python
# a) Python Program to sort a dictionary
dictionary = {'banana': 3, 'apple': 1, 'orange': 2}
sorted_dict = dict(sorted(dictionary.items()))
print("Sorted dictionary:", sorted_dict)
```

```python
# b) Python Program to merge two dictionaries
dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}
merged_dict = {**dict1, **dict2}  # Merging dictionaries
print("Merged dictionary:", merged_dict)
```

```python
# c) Create a class named Fruits with instances
class Fruits:
    def __init__(self, name, color, quantity):
        self.name = name
        self.color = color
        self.quantity = quantity

# Creating instances of the Fruits class
fruit1 = Fruits("Apple", "Red", 10)
fruit2 = Fruits("Banana", "Yellow", 20)

print(f"Fruit 1: {fruit1.name}, Color: {fruit1.color}, Quantity: {fruit1.quantity}")
print(f"Fruit 2: {fruit2.name}, Color: {fruit2.color}, Quantity: {fruit2.quantity}")
```

**Conclusion:**  
In this experiment, we sorted a dictionary, merged two dictionaries, and created a class named `Fruits` with instances. These exercises enhance understanding of dictionaries and classes in Python.

**MCQs:**

1. A
2. A
3. C
4. B
5. D

---

## Experiment 10

**Aim:**  
Create a simple table "student" with two columns: `rollno` and `name`, and perform insert, update, and delete operations using MySQL Python connector.

**Description:**  
This experiment involves creating a MySQL table named "student" and performing basic operations such as inserting records, updating records, and deleting records using the MySQL Python connector.

**Procedure:**

1. Install the MySQL connector if not already installed:

```bash
pip install mysql-connector-python
```

2. Write and execute the following Python code to perform the specified tasks.

```python
import mysql.connector

# Establishing a connection to the MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="your_username",       # Replace with your MySQL username
    password="your_password",   # Replace with your MySQL password
    database="your_database"    # Replace with your database name
)

cursor = db.cursor()

# Creating the "student" table
cursor.execute("CREATE TABLE IF NOT EXISTS student (rollno INT PRIMARY KEY, name VARCHAR(100))")

# a) Insert operation
insert_query = "INSERT INTO student (rollno, name) VALUES (%s, %s)"
cursor.execute(insert_query, (1, "Alice"))
cursor.execute(insert_query, (2, "Bob"))
db.commit()
print("Records inserted.")

# b) Update operation
update_query = "UPDATE student SET name = %s WHERE rollno = %s"
cursor.execute(update_query, ("Alice Smith", 1))
db.commit()
print("Record updated.")

# c) Delete operation
delete_query = "DELETE FROM student WHERE rollno = %s"
cursor.execute(delete_query, (2,))
db.commit()
print("Record deleted.")

# Closing the cursor and connection
cursor.close()
db.close()
```

**Conclusion:**  
In this experiment, we created a table named "student" in a MySQL database and performed insert, update, and delete operations using the MySQL Python connector. This exercise enhances the understanding of database interactions in Python.

**MCQs:**

1. C
2. A
3. A
4. A
5. A

---
