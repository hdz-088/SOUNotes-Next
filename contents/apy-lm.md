---
header: APY-LM
title: APY Lab Manual
slug: apy-lm
semester: 4
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1-PK7BkZsA-tDYVZfJUVDZ753Az0jS-Yr/view?usp=sharing
---

## Practical 01

**Aim**: Develop a program to find the factorial to understand control structures and iteration in python.

```python
# Function to calculate factorial
def factorial(n):
    # Check if n is a negative number
    if n < 0:
        return "Factorial is not defined for negative numbers"
    # Base case: factorial of 0 or 1 is 1
    elif n == 0 or n == 1:
        return 1
    # Recursive case
    else:
        return n * factorial(n - 1)

# Input from the user
num = int(input("Enter a number to find its factorial: "))

# Calculate and display the factorial
print(f"The factorial of {num} is {factorial(num)}")
```

```output
# OUTPUT
Enter a number to find its factorial: 5
The factorial of
```

```python
# Function to calculate the product of all integers from 1 to n
def product_of_integers(n):
    product = 1
    # Iterate through all integers from 1 to n
    for i in range(1, n + 1):
        product *= i
    return product

# Input from the user
num = int(input("Enter a number: "))

# Calculate and display the product
print(f"The product of all integers from 1 to {num} is {product_of_integers(num)}")

```

```output
# OUTPUT
Enter a number: 10
The product of all integers from 1
```

**MCQs**

1. A
2. C
3. B
4. D
5. A

**Conclusion**: This program demonstrates how loops and conditional statements work in python

---

## Practical 02

**Aim**: Develop a program to learn Fibonacci series using branching in Python

```python
def fibonacci(n):
    # Check for the first two terms
    if n <= 0:
        return "Please enter a positive integer."
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        # Generate the Fibonacci series for n > 2
        fib_series = [0, 1]
        for i in range(2, n):
            next_term = fib_series[-1] + fib_series[-2]
            fib_series.append(next_term)
        return fib_series

# Input from the user
num = int(input("Enter a number: "))

# Calculate and display the Fibonacci series
print(f"The Fibonacci series up to {num} terms is: {fibonacci(num)}")

```

```output
# OUTPUT
Enter a number: 5
The Fibonacci series up to 5 terms is: [0, 1, 1, 2, 3]
```

**MCQs**

1. D
2. A
3. D
4. C
5. A

**Conclusion**: This program generates a Fibonacci sequence using if-else branching

---

## Practical 03

**Aim**: Develop program for printing 1-100 without using a loop

```python
# A)
def print_numbers(n):
    if n > 0:
        print_numbers(n - 1)  # Recursively call with n-1
        print(n)  # Print the current number

# Calling the function to print numbers from 1 to 100
print_numbers(100)
```

```python
# B)
print([i for i in range(1, 101)])
```

**MCQs**

1. D
2. B
3. C
4. A
5. B

**Conclusion**: This program demonstrates a iterative way to print a sequence using traditional `for-while` loop

---

## Practical 04

**Aim**: Develop a program for accessing the values of Global variable in different function

```python
# Declare a global variable
global_variable = 10

# Function to access the global variable
def access_global():
    print("Accessing global variable inside access_global():", global_variable)

# Function to modify the global variable
def modify_global():
    global global_variable  # Use the 'global' keyword to modify the global variable
    global_variable = 20
    print("Modified global variable inside modify_global():", global_variable)

# Calling the functions
access_global()  # Access the global variable
modify_global()  # Modify the global variable

# Final value of the global variable
print("Final value of global_variable:", global_variable)
```

```output
# OUTPUT
Accessing global variable inside access_global(): 10
Modified global variable inside modify_global(): 20
Final value of global_variable: 20
```

**MCQs**

1. B
2. B
3. B
4. B
5. C

**Conclusion**: This practical demonstrates how global variables work across different scopes

---

## Practical 05

**Aim**: Develop a program for performing basic file handling operations

```python
# Function to write data to a file
def write_to_file(filename, data):
    with open(filename, 'w') as file:
        file.write(data)
        print(f"Data has been written to {filename}")

# Function to read data from a file
def read_from_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            print(f"Contents of {filename}:\n{content}")
    except FileNotFoundError:
        print(f"Error: The file {filename} does not exist.")

# Function to append data to a file
def append_to_file(filename, data):
    with open(filename, 'a') as file:
        file.write(data)
        print(f"Data has been appended to {filename}")

# Main program
def main():
    filename = 'example.txt'

    # Writing data to a file
    write_to_file(filename, "This is a sample text written to the file.\n")

    # Reading data from the file
    read_from_file(filename)

    # Appending data to the file
    append_to_file(filename, "This line has been appended to the file.\n")

    # Reading the updated file
    read_from_file(filename)

# Running the program
if __name__ == '__main__':
    main()
```

```output
# OUTPUT
Data has been written to example.txt
Contents of example.txt:
This is a sample text written to the file.

Data has been appended to example.txt
Contents of example.txt:
This is a sample text written to the file.
This line has been appended to the file.
```

**MCQs**

1. C
2. B
3. B
4. A
5. C

**Conclusion**: This practical helps understanding file input/output operations in Python

---

## Practical 06

**Aim**: Develop a programs to learn Random module (using `random.randint()`, `random.choice()`)

```python
# Using random.randint()

import random

# Random Integer
random_number = random.randint(1, 100)
print(f"Random number between 1 and 100: {random_number}")

# Random Selection
fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
random_fruit = random.choice(fruits)
print(f"Randomly selected fruit: {random_fruit}")

# Random Float
random_float = random.random()
print("Random Float: ", random_float)

# Random Shuffle
random.shuffle(fruits)
print("Shuffled List: ", fruits)
```

```output
# OUTPUT
Random number between 1 and 100: 69
Randomly selected fruit: Apple
Random Float:  0.14134486870115626
Shuffled List:  ['Banana', 'Cherry', 'Date', 'Apple', 'Elderberry']
```

**MCQs**

1. C
2. C
3. C
4. A
5. D

**Conclusion**: This practical demonstrates how `random` module can be incorporated into python programs

---

## Practical 07

**Aim**: Develop a program to print the current date and time and perform some math functions using python's `datetime` and `math` modules

```python
import datetime
import math

# Get the current date and time
current_datetime = datetime.datetime.now()

# Print the current date and time
print("Current date and time:", current_datetime)

# Perform some math operations
number = 16

# Calculate square root of the number
sqrt_value = math.sqrt(number)

# Calculate the factorial of a number
factorial_value = math.factorial(5)

# Get the value of Pi
pi_value = math.pi

# Print the math results
print(f"Square root of {number}: {sqrt_value}")
print(f"Factorial of 5: {factorial_value}")
print(f"Value of Pi: {pi_value}")
```

```output
# OUTPUT
Current date and time: 2025-03-10 14:17:00.325398
Square root of 16: 4.0
Factorial of 5: 120
Value of Pi: 3.141592653589793
```

**MCQs**

1. C
2. D
3. A
4. A
5. D

**Conclusion**: This practical demonstrates how to use these modules effectively in python program

---

## Practical 08

**Aim**: Write code for understaning dat type in python

```python
# Integer data type
integer_var = 10
print(f"Value: {integer_var}, Type: {type(integer_var)}")

# Float data type
float_var = 3.14
print(f"Value: {float_var}, Type: {type(float_var)}")

# String data type
string_var = "Hello, Python!"
print(f"Value: {string_var}, Type: {type(string_var)}")

# Boolean data type
bool_var = True
print(f"Value: {bool_var}, Type: {type(bool_var)}")

# List data type (ordered and mutable collection)
list_var = [1, 2, 3, 4, 5]
print(f"Value: {list_var}, Type: {type(list_var)}")

# Tuple data type (ordered and immutable collection)
tuple_var = (10, 20, 30)
print(f"Value: {tuple_var}, Type: {type(tuple_var)}")

# Set data type (unordered collection of unique elements)
set_var = {1, 2, 3, 4, 5}
print(f"Value: {set_var}, Type: {type(set_var)}")

# Dictionary data type (key-value pairs)
dict_var = {'name': 'Alice', 'age': 25}
print(f"Value: {dict_var}, Type: {type(dict_var)}")

# NoneType data type (represents a null value)
none_var = None
print(f"Value: {none_var}, Type: {type(none_var)}")
```

```output
# OUTPUT
Value: 10, Type: <class 'int'>
Value: 3.14, Type: <class 'float'>
Value: Hello, Python!, Type: <class 'str'>
Value: True, Type: <class 'bool'>
Value: [1, 2, 3, 4, 5], Type: <class 'list'>
Value: (10, 20, 30), Type: <class 'tuple'>
Value: {1, 2, 3, 4, 5}, Type: <class 'set'>
Value: {'name': 'Alice', 'age': 25}, Type: <class 'dict'>
Value: None, Type: <class 'NoneType'>
```

**MCQs**

1. C
2. B
3. C
4. C
5. B

**Conclusion**: This practical helps to understand different data types and their usage in Python

---

## Practical 09

**Aim:** Develop Program for performing list and dictionary comprehension in python to create or filter list and dictionaries more efficiently

```python
# List Comprehension

# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List comprehension to create a new list of squares of even numbers
squares_of_even = [x**2 for x in numbers if x % 2 == 0]
print("Squares of even numbers:", squares_of_even)

# List comprehension to convert a list of words into uppercase
words = ["apple", "banana", "cherry", "date"]
uppercase_words = [word.upper() for word in words]
print("Uppercase words:", uppercase_words)

# List comprehension to create a list of odd numbers
odd_numbers = [x for x in numbers if x % 2 != 0]
print("Odd numbers:", odd_numbers)
```

```python
# Dictionary Comprehension

# List of keys and values to create a dictionary
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3, 4]

# Dictionary comprehension to create a dictionary from two lists
my_dict = {keys[i]: values[i] for i in range(len(keys))}
print("Created dictionary:", my_dict)

# Dictionary comprehension to square values of dictionary if key is 'b' or 'd'
squared_values_dict = {key: value**2 for key, value in my_dict.items() if key in ['b', 'd']}
print("Squared values for 'b' and 'd':", squared_values_dict)

# Dictionary comprehension to filter out items where the value is greater than 2
filtered_dict = {key: value for key, value in my_dict.items() if value > 2}
print("Filtered dictionary with values > 2:", filtered_dict)
```

```output
# OUTPUT
# List Comprehension
Squares of even numbers: [4, 16, 36, 64, 100]
Uppercase words: ['APPLE', 'BANANA', 'CHERRY', 'DATE']
Odd numbers: [1, 3, 5, 7, 9]

# Dictionary Comprehension
Created dictionary: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
Squared values for 'b' and 'd': {'b': 4, 'd': 16}
Filtered dictionary with values > 2: {'c': 3, 'd': 4}
```

**MCQs**

1. A
2. A
3. C
4. C
5. B

**Conclusion**: This practical helps understanding list and dictionary comprehension in Python

---

## Practical 10

**Aim:** Write a code for opening a file which is not writable (demonstrating exceptions handling with try-except block when attempting to open a read-only file)

```python
# Attempting to open a read-only file in write mode
file_path = 'read_only_file.txt'

try:
    # Trying to open the file in write ('w') mode
    with open(file_path, 'w') as file:
        file.write("This is a test write operation.")
except IOError as e:
    # Handling the exception if the file is not writable
    print(f"Error: {e}")
    print("The file could not be opened in write mode because it is read-only.")
```

```output
# OUTPUT
Error: [Errno 13] Permission denied: 'read_only_file.txt'
The file could not be opened in write mode because it is read-only.
```

**MCQs**

1. A
2. C
3. B
4. B
5. A

**Conclusion**: The `try-except` block helps prevent program crashes due to error

---

## Practical 11

**Aim:** Develop program to learn GUI programming using `Tkinter` and draw a star on the canvas.

```python
import tkinter as tk

def draw_star(canvas):
    # Coordinates for the points of the star
    points = [
        100, 10,   # Top point
        120, 60,   # Right upper arm
        190, 60,   # Right tip of the star
        130, 90,   # Right bottom arm
        150, 150,  # Bottom right point
        100, 120,  # Bottom point
        50, 150,   # Bottom left point
        70, 90,    # Left bottom arm
        10, 60,    # Left tip of the star
        80, 60     # Left upper arm
    ]

    # Create the star by connecting points
    canvas.create_polygon(points, fill='yellow', outline='black', width=2)

# Create the main window
root = tk.Tk()
root.title("Star Drawing with Tkinter")

# Set up the canvas
canvas = tk.Canvas(root, width=400, height=400)
canvas.pack()

# Call the draw_star function to draw the star
draw_star(canvas)

# Start the GUI event loop
root.mainloop()
```

**MCQs:**

1. C
2. C
3. D
4. B
5. A

**Conclusion**: This program helps understanding of `Tkinter` library for GUI development in Python

---

## Practical 12

**Aim:** Write a program for making registration form using tkinter (name, email and password)

```python
import tkinter as tk
from tkinter import messagebox

# Function to handle the submission of the form
def submit_form():
    name = entry_name.get()
    email = entry_email.get()
    password = entry_password.get()

    # Check if all fields are filled
    if name and email and password:
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Password: {password}")
        messagebox.showinfo("Registration Successful", "You have registered successfully!")
    else:
        messagebox.showerror("Error", "All fields are required!")

# Create the main window
root = tk.Tk()
root.title("Registration Form")
root.geometry("400x300")

# Create a label and entry for the Name
label_name = tk.Label(root, text="Name:")
label_name.pack(pady=5)
entry_name = tk.Entry(root)
entry_name.pack(pady=5)

# Create a label and entry for the Email
label_email = tk.Label(root, text="Email:")
label_email.pack(pady=5)
entry_email = tk.Entry(root)
entry_email.pack(pady=5)

# Create a label and entry for the Password
label_password = tk.Label(root, text="Password:")
label_password.pack(pady=5)
entry_password = tk.Entry(root, show="*")  # show="*" hides the password input
entry_password.pack(pady=5)

# Create a submit button
submit_button = tk.Button(root, text="Register", command=submit_form)
submit_button.pack(pady=20)

# Run the main event loop
root.mainloop()
```

**MCQs:**

1. C
2. A
3. B
4. B
5. B

**Conclusion**: In this practical we learn building simple GUI registration form in python using `Tkinter`

---

## Practical 13

**Aim:** Write a program which consists of a checkbox and radio button using `tkinter` for user selection

```python
import tkinter as tk
from tkinter import messagebox

def submit_form():
    # Get the state of the checkbox (checked or unchecked)
    checkbox_state = var_checkbox.get()

    # Get the selected value of the radio button
    selected_option = var_radio.get()

    # Display the selected values
    if checkbox_state:
        checkbox_result = "Checkbox is checked."
    else:
        checkbox_result = "Checkbox is not checked."

    if selected_option == 1:
        radio_result = "Option 1 selected."
    elif selected_option == 2:
        radio_result = "Option 2 selected."
    else:
        radio_result = "No option selected."

    # Show the result in a message box
    messagebox.showinfo("User Selections", f"{checkbox_result}\n{radio_result}")

# Create the main window
root = tk.Tk()
root.title("Checkbox and Radio Button Example")
root.geometry("400x300")

# Create a checkbox
var_checkbox = tk.IntVar()  # Variable to store checkbox state (0 or 1)
checkbox = tk.Checkbutton(root, text="I agree to the terms and conditions", variable=var_checkbox)
checkbox.pack(pady=20)

# Create radio buttons
var_radio = tk.IntVar()  # Variable to store the selected radio button value
radio1 = tk.Radiobutton(root, text="Option 1", variable=var_radio, value=1)
radio2 = tk.Radiobutton(root, text="Option 2", variable=var_radio, value=2)

radio1.pack()
radio2.pack(pady=10)

# Create a submit button
submit_button = tk.Button(root, text="Submit", command=submit_form)
submit_button.pack(pady=20)

# Run the main event loop
root.mainloop()
```

**MCQs:**

1. D
2. C
3. B
4. C
5. A

**Conclusion**: In this practical we learn how to use checkboxes and radio buttons in `Tkinter` in Python

---

## Practical 14

**Aim:** Write a program for developing a list box with a scrollbar using tkinter for managing lists of items

```python
import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("Listbox with Scrollbar")
root.geometry("300x200")  # Set the size of the window

# Create a Scrollbar
scrollbar = tk.Scrollbar(root, orient=tk.VERTICAL)

# Create a Listbox with the scrollbar attached
listbox = tk.Listbox(root, yscrollcommand=scrollbar.set, height=10, width=30)
listbox.pack(pady=20)

# Attach the scrollbar to the listbox
scrollbar.config(command=listbox.yview)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

# Insert some items into the Listbox
for i in range(1, 21):  # Adding 20 items for demonstration
    listbox.insert(tk.END, f"Item {i}")

# Start the Tkinter event loop
root.mainloop()
```

**MCQs:**

1. C
2. B
3. B
4. A
5. B

**Conclusion**: This practical helps us understanding listbox in `Tkinter` in Python

---

## Practical 15

**Aim**: Write a program for making different message boxes using `Tkinter`

```python
import tkinter as tk
from tkinter import messagebox

# Function to display an info message box
def show_info():
    messagebox.showinfo("Information", "This is an informational message.")

# Function to display an error message box
def show_error():
    messagebox.showerror("Error", "An error occurred.")

# Function to display a warning message box
def show_warning():
    messagebox.showwarning("Warning", "This is a warning message.")

# Function to display a question message box
def show_question():
    result = messagebox.askquestion("Question", "Do you want to proceed?")
    if result == 'yes':
        messagebox.showinfo("Response", "You chose to proceed.")
    else:
        messagebox.showinfo("Response", "You chose not to proceed.")

# Creating the main window
root = tk.Tk()
root.title("Message Box Example")
root.geometry("300x200")

# Adding buttons to trigger the message boxes
info_button = tk.Button(root, text="Show Info", command=show_info)
info_button.pack(pady=10)

error_button = tk.Button(root, text="Show Error", command=show_error)
error_button.pack(pady=10)

warning_button = tk.Button(root, text="Show Warning", command=show_warning)
warning_button.pack(pady=10)

question_button = tk.Button(root, text="Show Question", command=show_question)
question_button.pack(pady=10)

# Running the Tkinter event loop
root.mainloop()
```

**MCQs**:

1. B
2. B
3. C
4. C
5. C

**Conclusion**: In this practical we learn usage of message box of `Tkinter` module in Python

---

## Practical 16

**Aim**: Write a program for making 3D array using Numpy (for multidimension array manipulation)

```python
import numpy as np

# Creating a 3D array using numpy
# Shape of the 3D array: (2, 3, 4) => 2 matrices, each with 3 rows and 4 columns
array_3d = np.array([[[1, 2, 3, 4],
                      [5, 6, 7, 8],
                      [9, 10, 11, 12]],

                     [[13, 14, 15, 16],
                      [17, 18, 19, 20],
                      [21, 22, 23, 24]]])

print("3D Array:")
print(array_3d)

# Shape and dimensions of the 3D array
print("\nShape of the array:", array_3d.shape)  # Output: (2, 3, 4)
print("Dimensions of the array:", array_3d.ndim)  # Output: 3

# Accessing an element in the 3D array
print("\nElement at position (0, 1, 2):", array_3d[0, 1, 2])  # Output: 7

# Slicing the 3D array to get a 2D sub-array
print("\nSliced 2D sub-array from the first matrix:")
print(array_3d[0])

# Modifying an element in the 3D array
array_3d[1, 2, 3] = 100  # Changing the element at (1, 2, 3)
print("\nModified 3D Array:")
print(array_3d)

# Using some NumPy operations on the 3D array
sum_of_array = np.sum(array_3d)  # Sum of all elements in the array
mean_of_array = np.mean(array_3d)  # Mean of all elements in the array

print("\nSum of all elements:", sum_of_array)
print("Mean of all elements:", mean_of_array)
```

```output
# OUTPUT

3D Array:
[[[ 1  2  3  4]
  [ 5  6  7  8]
  [ 9 10 11 12]]

 [[13 14 15 16]
  [17 18 19 20]
  [21 22 23 24]]]

Shape of the array: (2, 3, 4)
Dimensions of the array: 3

Element at position (0, 1, 2): 7

Sliced 2D sub-array from the first matrix:
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]

Modified 3D Array:
[[[  1   2   3   4]
  [  5   6   7   8]
  [  9  10  11  12]]

 [[ 13  14  15  16]
  [ 17  18  19  20]
  [ 21  22  23 100]]]

Sum of all elements: 376
Mean of all elements: 15.666666666666666
```

**MCQs**:

1. C
2. C
3. B
4. C
5. C

**Conclusion**: In this practical we learn usage of `Numpy` library in Python

---

## Practical 17

**Aim**: Write a program for creating series and dataframes using pandas library for data manipulation

```python
import pandas as pd

# Creating a Series
data_series = pd.Series([10, 20, 30, 40, 50], index=['A', 'B', 'C', 'D', 'E'])
print("Series:")
print(data_series)
print("\n")

# Creating a DataFrame
data_dict = {
    'Name': ['John', 'Jane', 'Alice', 'Bob'],
    'Age': [28, 34, 29, 42],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}

df = pd.DataFrame(data_dict)
print("DataFrame:")
print(df)
print("\n")

# Accessing a specific column in the DataFrame
print("Accessing 'Name' column:")
print(df['Name'])
print("\n")

# Accessing a specific row by index (for example, row at index 2)
print("Accessing row at index 2:")
print(df.iloc[2])
print("\n")

# Adding a new column to the DataFrame
df['Salary'] = [55000, 65000, 70000, 80000]
print("DataFrame after adding 'Salary' column:")
print(df)
print("\n")

# Changing values in a column
df['Age'] = df['Age'] + 1
print("DataFrame after incrementing 'Age' by 1:")
print(df)
print("\n")

# Summarizing data: Calculate mean and standard deviation of 'Salary' column
print("Summary of 'Salary' column:")
print("Mean salary:", df['Salary'].mean())
print("Standard deviation of salary:", df['Salary'].std())
print("\n")
```

```output
# OUTPUT

Series:
A    10
B    20
C    30
D    40
E    50
dtype: int64


DataFrame:
    Name  Age         City
0   John   28     New York
1   Jane   34  Los Angeles
2  Alice   29      Chicago
3    Bob   42      Houston


Accessing 'Name' column:
0     John
1     Jane
2    Alice
3      Bob
Name: Name, dtype: object


Accessing row at index 2:
Name      Alice
Age          29
City    Chicago
Name: 2, dtype: object


DataFrame after adding 'Salary' column:
    Name  Age         City  Salary
0   John   28     New York   55000
1   Jane   34  Los Angeles   65000
2  Alice   29      Chicago   70000
3    Bob   42      Houston   80000


DataFrame after incrementing 'Age' by 1:
    Name  Age         City  Salary
0   John   29     New York   55000
1   Jane   35  Los Angeles   65000
2  Alice   30      Chicago   70000
3    Bob   43      Houston   80000


Summary of 'Salary' column:
Mean salary: 67500.0
Standard deviation of salary: 10408.329997330664
```

**MCQs**:

1. B
2. B
3. C
4. A
5. D

**Conclusion**: In this practical we learn how to use Pandas library for data manipulation in python

---

## Practical 18

**Aim**: Write a program for making different graphical representation of data using Matplotlib

```python
import matplotlib.pyplot as plt
import numpy as np

# Data for plotting
x = np.linspace(0, 10, 100)
y = np.sin(x)
y2 = np.cos(x)
categories = ['A', 'B', 'C', 'D']
values = [10, 15, 7, 12]

# 1. Line Plot
plt.figure(figsize=(10, 6))
plt.subplot(231)  # 2 rows, 3 columns, first subplot
plt.plot(x, y, label='Sine Wave', color='blue')
plt.plot(x, y2, label='Cosine Wave', color='red')
plt.title('Line Plot')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.legend()

# 2. Bar Plot
plt.subplot(232)  # 2 rows, 3 columns, second subplot
plt.bar(categories, values, color='green')
plt.title('Bar Plot')
plt.xlabel('Category')
plt.ylabel('Value')

# 3. Pie Chart
plt.subplot(234)  # 2 rows, 3 columns, fourth subplot
plt.pie(values, labels=categories, autopct='%1.1f%%', colors=['yellow', 'cyan', 'magenta', 'gray'])
plt.title('Pie Chart')

# Adjust layout to avoid overlapping plots
plt.tight_layout()

# Show the plot
plt.show()
```

**MCQs**:

1. C
2. C
3. C
4. B
5. A

**Conclusion**: In this practical we learn how to use Matplotlib for data visualization in Python

---

## Practical 19

**Aim**: Write a program for finding is the value of two variables are from the same distribution using scipy library (kolomogorov-Smirnov test)

```python
import numpy as np
from scipy import stats

# Example data (two sets of values)
data1 = np.random.normal(loc=0, scale=1, size=1000)
data2 = np.random.normal(loc=0, scale=1, size=1000)

# Perform the Kolmogorov-Smirnov test
statistic, p_value = stats.ks_2samp(data1, data2)

# Output the results
print(f"KS Statistic: {statistic}")
print(f"P-value: {p_value}")

# Interpreting the results
alpha = 0.05
if p_value < alpha:
    print("The two samples are significantly different (reject H0).")
else:
    print("The two samples are from the same distribution.")
```

```output
# OUTPUT

KS Statistic: 0.05
P-value: 0.16411447756429137
The two samples are from the same distribution.
```

**MCQs**:

1. C
2. B
3. D
4. C
5. A

**Conclusion**: The _Kolomogorov-Smiron_ test is useful for comparing two data sets to check if they comes from the same distribution

---

## Practical 20

**Aim**: Write a program for holding variable data using Tensorflow library (for tensor creation and manipulation in machine learning)

```python
import tensorflow as tf

# 1. Creating a tensor using tf.constant()
tensor_a = tf.constant([[1, 2, 3], [4, 5, 6]], dtype=tf.int32)
print("Tensor A:")
print(tensor_a)

# 2. Creating a tensor using tf.Variable()
tensor_b = tf.Variable([[7, 8, 9], [10, 11, 12]], dtype=tf.float32)
print("\nTensor B (Variable):")
print(tensor_b)

# 3. Adding two tensors
sum_tensor = tf.add(tensor_a, tensor_b)
print("\nSum of Tensor A and Tensor B:")
print(sum_tensor)

# 4. Element-wise multiplication of tensors
mult_tensor = tf.multiply(tensor_a, tensor_b)
print("\nElement-wise Multiplication of Tensor A and Tensor B:")
print(mult_tensor)

# 5. Reshaping a tensor (changing its shape)
reshaped_tensor = tf.reshape(tensor_a, (3, 2))
print("\nReshaped Tensor A (3x2):")
print(reshaped_tensor)

# 6. Using tf.Variable to change the value of a tensor
tensor_b.assign([[13, 14, 15], [16, 17, 18]])  # Updating values in tensor_b
print("\nUpdated Tensor B:")
print(tensor_b)

# 7. Performing operations with TensorFlow variables
tensor_c = tf.Variable([[1.0, 2.0], [3.0, 4.0]])
tensor_d = tf.Variable([[5.0, 6.0], [7.0, 8.0]])

# Example: Matrix multiplication
matrix_mult = tf.matmul(tensor_c, tensor_d)
print("\nMatrix Multiplication of Tensor C and Tensor D:")
print(matrix_mult)

# 8. Tensor slicing (Accessing specific elements)
slice_tensor = tensor_a[0:1, 0:2]  # Selecting the first row and first two columns
print("\nSliced Tensor A (first row, first two columns):")
print(slice_tensor)

# 9. Creating a tensor filled with zeros or ones
zero_tensor = tf.zeros([2, 3], dtype=tf.float32)  # 2x3 tensor filled with zeros
one_tensor = tf.ones([2, 3], dtype=tf.float32)  # 2x3 tensor filled with ones
print("\nZero Tensor:")
print(zero_tensor)
print("\nOne Tensor:")
print(one_tensor)

# 10. Random tensor generation
random_tensor = tf.random.normal([2, 3], mean=0, stddev=1, dtype=tf.float32)
print("\nRandom Tensor (normal distribution):")
print(random_tensor)
```

```output
# OUTPUT

Tensor A:
tf.Tensor(
[[1 2 3]
 [4 5 6]], shape=(2, 3), dtype=int32)

Tensor B (Variable):
<tf.Variable 'Variable:0' shape=(2, 3) dtype=float32, numpy=
array([[ 7.,  8.,  9.],
       [10., 11., 12.]], dtype=float32)>

Sum of Tensor A and Tensor B:
tf.Tensor(
[[ 8. 10. 12.]
 [14. 16. 18.]], shape=(2, 3), dtype=float32)

Element-wise Multiplication of Tensor A and Tensor B:
tf.Tensor(
[[ 7. 16. 27.]
 [40. 55. 72.]], shape=(2, 3), dtype=float32)

Reshaped Tensor A (3x2):
tf.Tensor(
[[1 2]
 [3 4]
 [5 6]], shape=(3, 2), dtype=int32)

Updated Tensor B:
<tf.Variable 'Variable:0' shape=(2, 3) dtype=float32, numpy=
array([[13., 14., 15.],
       [16., 17., 18.]], dtype=float32)>

Matrix Multiplication of Tensor C and Tensor D:
tf.Tensor(
[[19. 22.]
 [43. 50.]], shape=(2, 2), dtype=float32)

Sliced Tensor A (first row, first two columns):
tf.Tensor([[1 2]], shape=(1, 2), dtype=int32)

Zero Tensor:
tf.Tensor(
[[0. 0. 0.]
 [0. 0. 0.]], shape=(2, 3), dtype=float32)

One Tensor:
tf.Tensor(
[[1. 1. 1.]
 [1. 1. 1.]], shape=(2, 3), dtype=float32)

Random Tensor (normal distribution):
tf.Tensor(
[[ 0.4721607   0.7560059   0.11439998]
 [ 1.3288231   0.22722358 -0.31909928]], shape=(2, 3), dtype=float32)
```

**MCQs**:

1. C
2. B
3. D
4. B
5. B

**Conclusion**: In this practical we learn how to use `Tensorflow` library for tensor creation and manipulation in machine learning application

---
