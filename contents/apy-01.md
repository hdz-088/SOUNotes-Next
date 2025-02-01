---
header: APY-01
title: APY-01 Introduction
slug: apy-01
semester: 4
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1cOeAgX45Y7PKZjJ73Yez-7JYeHEO7LaS/view?usp=sharing
---

## Objects, Expression & Numerical Types

- Objects are core things that python programs manipulate
- Every object has a type that defines the kind of things that programs can do with objects of that type
- Types
  - Scalar: Scalar objects are indivisible: Int, float, bool, None
  - Non-Scalar: Arrays, Maps and Records
- Objects and operators can be combined to form expressions, each of which denotes an object of some type.
- For e.g. the expression 3+2 denotes the object 5 of type int, and the expression 3.0+2.0 denotes the object 5.0 of type float.

## Variable & Assignment

- Variables- Variables provide a way to associate name with objects. Consider the code
- It first binds the names pi and radius to different objects of data types float

```python
pi = 3.14159
radius = 11.2
area = pi * (radius ** 2)
radius = 14.3
```

- It then binds the name area to a third object of type
- If the program then executes `radius=14.3`, the name radius is rebound to a different object of type float.
- In python, a variable name is just a name. An assignment statement associates the name to the left of the `=` symbol with the object denoted by expression to the right of the `=`.
- Python variables name are case sensitive
- There are small number of Reserved Keywords in python that have built in meanings and cannot be used as variable names.
- E.g : def, del, elif, if, for, in, not, or etc

## IDLE

- Typing programs directly into shell is inconvenient
- Text editor is part of an IDE(Integrated Development Environment)
- IDLE is IDE that comes as part of standard Python installation Package
- **IDLE provides**
  - A text editor with syntax highlighting, autocompletion, and smart indentation
  - A shell with syntax highlighting, and
  - An integrated debugger
  - When IDLE starts it will open a shell window into which you can type python commands
- The file menu includes commands to
- **New editing window**
  - Open a file
  - Save a File
- **Edit Menu**
  - Text editing command (e.g copy, paste)
  - Shell, Debug, Options, Window

## Branching

- **Straight Line Programs:**
  - They execute one statement after another in the order in which they appear, and stop when they run out of statement
- **Branching Programs:**
  - The simplest branching statement is a conditional.
- A conditional statement has 3 parts
  - A test, i.e. an expression that evaluates to either True or False
  - A block of code that is executed if the test evaluates to True
  - An optional block of code that is executed if the test evaluates to False
- After a conditional statement is executed, execution resumes at the code following the statement

```python
x = int(input("Enter the value: "))
if x%2 == 0:
	print("X is Even")
else:
	print("X is Odd")
```

- Indentation is semantically meaningful in Python
- For example: If the last statement in the above code were indented it would be part of block of code associated with else.
- **Nested Branching:**
  - A block of conditional statement contains other conditional statement is called Nested block

```python
x = int(input("Enter the value: "))
if x%2 == 0:
	if x%3 == 0:
		print("Divisible by 2 & 3")
	else:
		print("Divisible by 2 & not 3")
elif x%3 == 0:
	print("Divisible by 3 & not 2")
```

## Type STR & Input

- Objects of type str are used to represent string of characters
- Literals of type str can be written using either single or double quotes e.g. ‘`abc`’ or “`abc`”
- `‘123’` is treated as string
- **Overloaded**
  - `+` and ``*` is overloaded.
  - `3*4 =12`
  - `3*’a’=aaa`
  - `‘a’*’a`’` - Generates error, can’t multiply sequence by non-int
- **Indexing**: Can be used to extract individual character from the string
  - `‘abc’[0]`: a
  - `‘abc’[2]`: c
  - `‘abc’[3]`: Error
  - `‘abc’[-1]`: c
  - `‘abc’[-4]`: Error
- **Slicing**: It is used to extract substring of arbitrary length.
- **Syntax**: If s is a string then s`[start:end]`
- **Input**: This function is used to get input directly from user.

```python
a = input("Enter your name: ")
print("Hello ", a)
```

## Iteration

- Iteration in Python is the process of repeating a set of statements or code a specific number of times.
- Like a conditional statement it begins with a test
- If the test evaluates to True, the program executes the loop body once, and then goes back to re-evaluate the test.
- This process is repeated until the test evaluates to False, after which control passes to the code following the iteration statement

```python
x = 3
ans = 0
itersLeft = x
test = 1
print("Test", "", "x", "", "ans", "", "itersLeft" )

while (itersLeft != 0):
	ans = ans+x
	itersLeft = itersLeft-1
	print(Test," ", x, " ", ans, " ", itersLeft)
	Test = Test+1
```

## Control Structures

- Most programs don't operate by carrying out a straightforward sequence of statements.
- A code is written to allow making choices and several pathways through the program to be followed depending on shifts in variable values.
- All programming languages contain a pre-included set of control structures that enable these control flows to execute, which makes it conceivable.
- **Types of Control Structures**
  - There are three types of control structures in Python:
    - **Sequential** - The default working of a program. Sequential statements are a set of statements whose execution process happens in a sequence.
    - **Selection** - This structure is used for making decisions by checking conditions and branching. For example, if, if-else, nested if, if-elif-else
    - **Repetition** - This structure is used for looping, i.e., repeatedly executing a certain piece of a code block. For example, for loop, while loop

## Library Functions

- A library function in Python is a pre-written piece of code that performs a specific task or operation.
- Libraries are collections of functions, classes, and modules that are organized into related groups.
- Python has a standard library with many built-in libraries, and there are also thousands of third-party libraries available
- Here are some examples of Python libraries:
- **Pandas**: A tool for analyzing tabular data
- **NumPy**: A library for numerical computing, including mathematical functions and random number generators
- **Matplotlib**: A library for data visualization

## Recursion

- Recursion involves a function calling itself directly or indirectly to solve a problem by breaking it down into simpler and more manageable parts.
- In Python, recursion is widely used for tasks that can be divided into identical subtasks.

```python
def factorial(n):
	if n==1:
		return 1
	else:
		return n*factorial(n-1)

print(factorial(5))
```

## Global & Local Variables

- **Local variables** are accessible only inside the function in which it was initialized whereas the **global variables** are accessible throughout the program and inside every function
- Local variables in Python are those which are initialized inside a function and belong only to that particular function
- It cannot be accessed anywhere outside the function
- Global variables are those which are defined outside any function and which are accessible throughout the program

```python
x = 10 # Global Variable

def f():
	s = 12 # Local Variable
	print(s) # Print 12
	print(x) # print 10

f()
print(s) # Gives error
```

## File Handling in Python

- File handling is an important part of any web application.
- Python has several functions for creating, reading, updating, and deleting files.
- The key function for working with files in python is the `open()` function.
- The `open()` function takes two parameters; filename, and mode.
- There are four different methods (modes) for opening a file:
  - **read** (r): Default value. Opens a file for reading, error if the file does not exist
  - **append** (a): Opens a file for appending, creates the file if it does not exist
  - **write** (w): Opens a file for writing, creates the file if it does not exist
  - **create** (x): Creates the specified file, returns an error if the file exists
- In addition you can specify if the file should be handled as binary or text mode

  - **text** (t): Default value. Text mode
  - **binary** (b): Binary mode (e.g. images)

- To open a file for reading it is enough to specify the name of the file:

```python
f = open("demofile.txt", "rt")
```

- To open the file, use the built-in `open()` function.
- The `open()` function returns a file object, which has a `read()` method for reading the content of the file:

```python
f = open("demofile.txt", "r")
print(f.read())
```

- By default the `read()` method returns the whole text, but you can also specify how many characters you want to return:

```python
f = open("demofile.txt", "r")
print(f.read(5))
```

- You can return one line by using the `readline()` method:

```python
f = open("demofile.txt", "r")
print(f.readline)
```

- It is a good practice to always close the file when you are done with it.

```python
f = open("demofile.txt", "r")
print(f.readline())
f.close()
```

- To write to an existing file, you must add a parameter to the `open()` function

```python
f = open("demofiles.txt", "a")
f.write("Now the file has more content!")

# Open & Read the file after the appending
f = open("demofile.txt", "r")
print(f.read())
f.close()
```

## CSV Files

- CSV (Comma Separated Values) format is the most common import and export format for spreadsheets and databases.
- It is one of the most common methods for exchanging data between applications and popular data format used in Data Science. It is supported by a wide range of applications.
- A CSV file stores tabular data in which each data field is separated by a delimiter(comma in most cases).
- To represent a CSV file, it must be saved with the .csv file extension.
- Python contains a module called csv for the handling of CSV files.
- The reader class from the module is used for reading data from a CSV file.
- At first, the CSV file is opened using the `open()` method in ‘`r`’ mode(specifies read mode while opening a file) which returns the file object then it is read by using the `reader()` method of CSV module that returns the reader object that iterates throughout the lines in the specified CSV document.

```python
import csv
f1 = open('File1.csv', mode ='r')
csvFile = csv.reader(f1)

# displaying the contents of the CSV file
for lines in csvFile:
	print(lines)
```

- `csv.writer` class is used to insert data to the CSV file.
- This class returns a writer object which is responsible for converting the user’s data into a delimited string.
- To read or write a binary file, at first you need to understand the different file modes for Binary Files in Python

| Mode | Description                                                                                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rb   | Opens a file for reading only in binary format. The file pointer is placed at the beginning of the file. This is the default mode.                                                                                                         |
| rb+  | Opens a file for both reading and writing in binary format. The file pointer placed at the beginning of the file.                                                                                                                          |
| wb   | Opens a file for writing only in binary format. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.                                                                                        |
| wb+  | Opens a file for both writing and reading in binary format. Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.                                                       |
| ab   | Opens a file for appending in binary format. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.                        |
| ab+  | Opens a file for both appending and reading in binary format. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing. |

- Read a binary file:

```python
# Open a binary file
f = open('C:\\Users\\Staff\\Desktop\\Manika\\IT.docx', 'rb')

# Read lines
data = f.read()

# Display the data
print(data)
```

- Write to a binary file:

```python
# Open a file in binary format for writing
f = open("C:\\Users\\Staff\\Desktop\\Manika\\BinFile1.bin","wb")

# Elements to be added to the binary file
a = [100, 200, 100]

# Convert the integer elements to a bytearray
myArr = bytearray(a)

# The byte representation ius now written to the file
f.write(myArr)
f.close()

print("Successfully written")
```

- Creating CSV file with pipe delimiters

```python
import csv

data = [ ['Name', 'Age', 'City'], ['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles'], ['Charlie', 35, 'Chicago'] ]

with open('data_pipe_delimited.csv', 'w', newline='') as csvfile:
	writer = csv.writer(csvfile, delimiter='|')
	writer.writerows(data)
```

## Module & Import

- Python Modules allows us to easily construct the programs from code in multiple files.
- A module is a `.py` file containing python definitions and statement.
- We could create a file `circle.py`

```python
circle.py
pi=3.14

def area(radius):
	return pi*radius**2

def circum(radius):
	return s*pi*radius
```

- A program get access to a **module** through an **import** statement.

```python
import circle

print (circle.pi)
print (circle.area(3))
print(circle.circum(4))
```

## Array

- An array is a special variable, which can hold more than one value at a time.
- Arrays are used to store multiple values in one single variable:

```python
arr1 = ["car","bike","plane"]
print(arr1) # Print entire array
print(arr1[0]) # Print 1st element of Array
```

## Inheritance & Object Oriented Design

- Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (called a **child** or derived class) to inherit attributes and methods from another class (called a **parent** or base class).
- This promotes code reuse, modularity, and a hierarchical class structure
- Inheritance allows us to define a class that inherits all the methods and properties from another class.
- **Parent class** is the class being inherited from, also called base class.
- **Child class** is the class that inherits from another class, also called derived class.

## `__init__()` Function

- All classes have a function called `__init__()`, which is always executed when the class is being initiated.
- Use the `__init__()` function to assign values to object properties, or other operations that are necessary to do when the object is being created:

```python
# Create a class named Person, use the __init__() function to assign values for name and age

class Person:
	def __init__(self, name, age):
		self.name = name
		self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)
```

```python
# Create a class named Person,with firstname and lastname properties, and a printname method:

class Person:
	def __init__(self, fname, lname):
		self.firstname = fname
		self.lastname = lname

	def printname(self):
		print(self.firstname, self.lastname)

# Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname()
```

## Question

1. Design a Python program to check if a given number is prime, using both iteration and recursion.
2. Modify a program to reverse a string using slicing and compare it with a loop-based implementation.
3. Develop a file-handling application that stores and retrieves student details from a text file.
4. Categorize different data types in Python and illustrate their use in a real-world context.
5. Explain the impact of using global variables in recursive functions through a practical example.

---

### Resources

- [Python Official Documentation](https://docs.python.org/3/)
- [Python Course (Hindi)](https://youtu.be/UrsmFxEIp5k?si=1xKlIBL7zS93d0fs)
- [Python Course (English)](https://youtu.be/nLRL_NcnK-4?si=98faIaE41ri1ekbr)
