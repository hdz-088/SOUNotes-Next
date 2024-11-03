---
header: PYTHON-04
title: Python-04 File Handling
slug: python-04
semester: 3
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1rxeoV4e5QPHqhVfMBo4Ofb9DN0-pusXr/view?usp=sharing
---

## Introduction

- File is a collection of related data stored on a secondary storage device, such as a hard disk, CD, DVD, pen-drive, etc. A file has a name and extension that indicates its type.
- Files are used to store data permanently and to transfer data between different programs or devices.
- The file handling plays an important role when the data needs to be stored permanently into the file.
- A file is a named location on disk to store related information.
- We can access the stored information (non-volatile) after the program termination.

### Python File Handling

- Python supports file handling and allows users to handle files i.e., to read and write files, along with many other file handling options, to operate on files.
- File handling in Python is a powerful and versatile tool that can be used to perform a wide range of operations.
- However, it is important to carefully consider the advantages and disadvantages of file handling when writing Python programs, to ensure that the code is secure, reliable, and performs well.
- In Python, files are treated in two modes as text or binary. The file may be in the text or binary format, and each line of a file is ended with the special character like a comma (,) or a newline character.
- Python executes the code line by line. So, it works in one line and then asks the interpreter to start the new line again.
- This is a continuous process in Python.

## Types of Python Files

### Binary Files

Most of the files that we see in our computer system are called binary files.

- **Document files**: .pdf, .doc, .xls etc.
- **Image files**: .png, .jpg, .gif, .bmp etc.
- **Video files**: .mp4, .3gp, .mkv, .avi etc.
- **Audio files**: .mp3, .wav, .mka, .aac etc.
- **Database files**: .mdb, .accde, .frm, .sqlite etc.
- **Archive files**: .zip, .rar, .iso, .7z etc.
- **Executable files**: .exe, .dll, .class etc.
- All binary files follow a specific format. We can open some binary files in the normal text editor but we can’t read the content present inside the file.
- That’s because all the binary files will be encoded in the binary format, which can be understood only by a computer or machine.
- For handling such binary files we need a specific type of software to open it.

### Text Files

Text files don’t have any specific encoding and it can be opened in normal text editor itself.

- **Web standards**: html, XML, CSS, JSON etc.
- **Source code**: c, app, js, py, java etc.
- **Documents**: txt, tex, RTF etc.
- **Tabular data**: csv, tsv etc.
- **Configuration**: ini, cfg, reg etc

### Difference between Text Files & Binary Files

| Text File                               | Binary File                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| The bits represent characters.          | The bits represent custom data.                                               |
| Contains alphabets, numbers, etc.       | Typically contains a sequence of bytes or ordered groupings of eight bits.    |
| Less prone to corruption with changes.  | More prone to corruption.                                                     |
| Can only store plain text.              | Can store text, images, audio, etc.                                           |
| Can be opened in any basic text editor. | Requires specific applications to open (e.g., music players for audio files). |
| Common extensions include .txt or .rtf. | Many different extensions (e.g., .jpg, .zip, .mp4).                           |
| Occupies less memory.                   | Occupies more memory.                                                         |
| Stores data in a human-readable format. | Not in a human-readable format.                                               |

## File Handling Operations

### Create and Open a File

- Python has an in-built function called `open()` to open a file.
- It takes a minimum of one argument as mentioned in the below syntax.
- The open method returns a file object which is used to access the write, read and other in-built methods.
- The mode in the open function syntax will tell Python as what operation you want to do on a file.

```python
file_object = open(file_name, mode)
# File name should also include file's extension
```

#### Modes

| Parameter | Mode                 | Description                                                                          |
| --------- | -------------------- | ------------------------------------------------------------------------------------ |
| `r`       | Read Mode            | Used only to read data from the file.                                                |
| `w`       | Write Mode           | Used to write data into the file or modify it; overwrites existing data in the file. |
| `a`       | Append Mode          | Used to append data to the file; data is added at the end of the file pointer.       |
| `r+`      | Read/Write           | Used to read from and write to the same file.                                        |
| `a+`      | Append/Read          | Used to read data from the file or append data to the same file.                     |
| `wb`      | Write (Binary)       | Opens a file for write-only mode in binary format.                                   |
| `rb`      | Read (Binary)        | Opens a file for read-only mode in binary format.                                    |
| `ab`      | Append (Binary)      | Opens a file for appending only in binary format.                                    |
| `rb+`     | Read/Write (Binary)  | Opens a file for read and write only in binary format.                               |
| `ab+`     | Append/Read (Binary) | Opens a file for appending and read-only in binary format.                           |

### Write to an Existing File

- To write to an existing file, you must add `a` parameter to the `open()` function:

```python
f = open("demofile.txt", "a")

f.write("Now the file has more content!")
f.close()

#open and read the file after the appending:
f = open("demofile.txt", "r")
print(f.read())
```

### Overwrite to an Existing File

- To overwrite to an existing file, you must add `w` parameter to the `open()` function:

```python
f = open("demofile.txt", "w")

f.write("Now the file has this content!")
f.close()

# open and read the file after the overwriting:
f = open("demofile.txt", "r")
print(f.read())
```

### Create a New File

- To create a new file in Python, use the open() method, with one of the following parameters

| Parameter | Mode   | Description                                                      |
| --------- | ------ | ---------------------------------------------------------------- |
| `x`       | Create | Will create a file; returns an error if the file already exists. |
| `a`       | Append | Will create a file if the specified file does not exist.         |
| `w`       | Write  | Will create a file if the specified file does not exist.         |

```python
# Create a file called "myfile.txt":
f = open("myfile.txt", "x")
```

```python
# Create a new file if it does not exist:
f = open("myfile.txt", "w")
```

## Advantages & Disadvantages

| Advantages                                                                                                             | Disadvantages                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Versatility**: Allows a wide range of operations (creating, reading, writing, appending, renaming, deleting files).  | **Error-prone**: Operations can lead to errors if not carefully written or due to file system issues (e.g., permissions, locks). |
| **Flexibility**: Supports different file types (text, binary, CSV, etc.) and various operations (read, write, append). | **Security risks**: Can pose security risks if user input allows access to sensitive files.                                      |
| **User-friendly**: Provides an easy-to-use interface for creating, reading, and manipulating files.                    | **Complexity**: Can become complex with advanced file formats or operations, requiring careful coding.                           |
| **Cross-platform**: Functions work across different platforms (Windows, Mac, Linux) for seamless integration.          | **Performance**: Can be slower than other programming languages, especially with large files or complex operations.              |

## Binary Files

- A binary file is a file that contains data in the form of bytes, which can represent any type of data, such as images, audio, video, executable code, etc.
- A binary file cannot be read or edited using a text editor, but requires a specific program or application that can understand its format.
- To open binary files are similar to the text file open modes, except that they use the “b” character to indicate binary mode.

| Parameter | Mode        | Description                                                                                                                                   |
| --------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `rb`      | Read        | Open a binary file for reading only; the file pointer is placed at the beginning of the file.                                                 |
| `rb+`     | Read/Write  | Open a binary file for both reading and writing; the file pointer is placed at the beginning.                                                 |
| `wb`      | Write       | Open a binary file for writing only; overwrites the file if it exists, creates a new file if it doesn't.                                      |
| `wb+`     | Write/Read  | Open a binary file for both writing and reading; overwrites the file if it exists, creates a new file if it doesn't.                          |
| `ab`      | Append      | Open a binary file for appending; the file pointer is at the end of the file if it exists; creates a new file if it doesn't.                  |
| `ab+`     | Append/Read | Open a binary file for both appending and reading; the file pointer is at the end of the file if it exists; creates a new file if it doesn't. |

## Pickle Module

- The pickle module is a built-in module that provides functions for serializing and deserializing python objects.
- **Serialization** is the process of converting an object into a stream of bytes that can be stored in a file or transmitted over network.
- **Deserialization** is the reverse process of converting a stream of bytes back into an object.
- The pickle module can handle most python objects, such as lists, dictionaries, classes, functions, ets. But not all.
- The pickle module provides two methods to work with binary files for pickling and unpickling, respectively:
- The `dump()` method:
  - The `dump()` takes an object and a file object as arguments and writes the serialized bytes of the object to the file.
  - The file in which data are to be dumped, needs to be opened in binary write mode (`wb`).

```python
import pickle

list_values = [1, "SOUNotes", "A", 3]
file_object = open("mybinary.dat", "wb")

pickle.dump(list_values, file_object)

file_object.close()
```

- The `load()` method
  - The `laod()` method takes a file object as an argument and returns the deserialized object from the bytes read from the file.
  - The file to be loaded is opened in binary read (`rb`) mode.

```python
import pickle

print("The data that were stored in file is: ")

file_object = open("mybinary.dat", "rb")

object_var = pickle.load(file_object)

file_object.close()

print(object_var)
```

```output
The data that were stored in file is:
[1, "SOUNotes", "A", 3]
```

## File Operations

### Read

- To read data from binary file, we can use methods like `read()`, `readline()` , or `readlines()`.
- However these methods will return bytes objects instead of strings. We can also use `struct.unpack()` to convert bytes into other data types, such as integers, floats, etc.

```python
# EXAMPLE: read an integer from a binary file
import struct

f = open("numbers.bin", "rb")
data = f.read(4)

number = struct.unpack("i", data)[0]

f.close()

print(number)
```

### Write or Create

- To write or create data in a binary file, we can use methods like `write()` or `writelines`, just like in text files.
- However, these methods will take bytes objects instead of strings. We can also use `struct.pack()` to convert other data types into bytes, such as integers, floats, etc.

```python
import struct

f = open("number.bin", "wb")

data = struct.pack("i", 42)
f.write(data)

f.close()
```

## CSV File

- A CSV file is a file that contains data in the form of characters separated by commas.
- CSV files are often used to store and exchange data between different applications that can handle tabular data, such as spreadsheets, databases, contact managers, etc.
- The CSV module is a built-in module that provides functions and classes for reading and writing data in CSV format.
- CSV stands for **comma-separated values**, which is a common format for storing and exchanging tabular data, such as spreadsheets and databases.

### Opening a CSV File

- To open a CSV file in python, we use the same `open()` function that we use for text files.
- However, we need to specify the newline parameter as an empty string to avoid any extra newlines in the data.

```python
import csv
f = open(“people.csv”,”r”,newline=””)
```

### Closing a CSV File

- To close a CSV file in python, we use the same `close()` method that we use for text files.
- The `close()` method releases the resources associated with file and ensure that any changes made to the file is saved.
- It is important to close a file after using it to avoid errors or data loss.

```python
import csv
f = open(“people.csv”,”r”,newline=””)

f.close()
```

### Writing to a CSV File

- To write data into a CSV file in python, we use `csv.writer()` function to create a writer object that data to the file.
- The writer object has methods like `writerow()` and `writerows()` that can write one or more rows of data to the file.

```python
import csv

# Data to be written to the CSV file
data = [
    ["Name", "Age", "City"],
    ["Alice", 30, "New York"],
    ["Bob", 25, "Los Angeles"],
    ["Charlie", 35, "Chicago"]
]

# Open the CSV file for writing
csvfile = open("output.csv", "w", newline='')

# Create a CSV writer object
writer = csv.writer(csvfile)

# Write the header
writer.writerow(data[0])

# Write the data rows
writer.writerows(data[1:])  # Writes multiple rows

# Manually close the file
csvfile.close()
```

### Reading from a CSV File

- To read data from a csv file in a python, we use the `csv.reader()` function to create a reader object object that can iterate over the lines in the file.
- The reader object returns each line as a list of strings.

```python
import csv

# Open the CSV file for reading
csvfile = open("data.csv", "r", newline='')

# Create a CSV reader object
reader = csv.reader(csvfile)

# Read and print each row
for row in reader:
    print(row)

# Manually close the file
csvfile.close()
```

#### Reading CSV Files with Headers

- If your CSV file has a header row, you might want to use `DictReader` to read each row as a dictionary

```python
import csv

# Open the CSV file for reading
csvfile = open("data.csv", "r", newline='')

# Create a CSV reader object
reader = csv.DictReader(csvfile)

# Read and print each row as a dictionary
for row in reader:
    print(row)  # Each row is a dictionary with column headers as keys

# Manually close the file
csvfile.close()
```

## OS Modules

- Python has a built-in OS module with methods for interacting with the operating system, like creating files and directories, management of files and directories, input, output, environment variables, process management, etc.
- OS Path module contains some useful functions on pathnames. The path parameters are either strings or bytes.
- These functions here are used for different purposes such as for merging, normalizing, and retrieving path names in Python.
- All of these functions accept either only bytes or only string objects as their parameters.
- The result is an object of the same type if a path or file name is returned.
- As there are different versions of the operating system there are several versions of this module in the standard library
- The `os` and `os.path` modules include many functions to interact with the file system

### Handling the Current Working Directory

- Consider Current Working Directory(CWD) as a folder, where Python is operating.
- Whenever the files are called only by their name, Python assumes that it starts in the CWD which means that name-only reference will be successful only if the file is in the Python’s CWD.
- To get the location of the current working directory `os.getcwd()` is used

```python
import os

cwd = os.getcwd()
print("Current Working Directory: ", cwd)
```

### Changing the Current working directory

- To change the current working directory (CWD) `os.chdir()` method is used.
- This method changes the CWD to a specified path. It only takes a single argument as a new directory path.

```python
import os

def current_path():
	print("Current Working Directory: ")
	print(os.getcwd())
	print()

current_path()
os.chdir('../')

current_path()
```

### Creating a Directory

#### Using os.mkdir()

- By `using os.mkdir()` method in Python is used to create a directory named path with the specified numeric mode.
- This method raises `FileExistsError` if the directory to be created already exists

```python
import os

directory = "SOUNotes"
parent_dir = "D:/Projects/"
path = os.path.join(parent_dir, directory)

os.mkdir(path)
print("Directory '%s' created" %directory)

directory = "Notes"
parent_dir = "D:/Projects/"
mode = 0o666

path = os.path.join(parent_dir, directory)
os.mkdir(path, mode)
print("Directory '%s' created" %directory)
```

#### Using os.makedirs()

- `os.makedirs()` method in Python is used to create a directory recursively.
- That means while making leaf directory if any intermediate-level directory is missing, `os.makedirs()` method will create them all.

```python
import os

directory = "SOUNotes"
parent_dir = "D:/Projects/"
path = os.path.join(parent_dir, directory)

os.makedirs(path)
print("Directory '%s' created" %directory)

directory = "Notes"
parent_dir = "D:/Projects/"
mode = 0o666

path = os.path.join(parent_dir, directory)
os.mkdir(path, mode)
print("Directory '%s' created" %directory)
```

### Listing out Files and Directories

- There is `os.listdir()` method in Python is used to get the list of all files and directories in the specified directory.
- If we don’t specify any directory, then the list of files and directories in the current working directory will be returned.

```python
import os

path = "/"
dir_list = os.listdir(path)

print("Files and Directories in ", path, ": ")
print(dir_list)
```

### Deleting Directory or Files

#### Using os.remove()

- `os.remove()` method in Python is used to remove or delete a file path. This method can not remove or delete a directory.
- If the specified path is a directory then `OSError` will be raised by the method

```python
import os
file = "demo.txt"

location = "D:/Projects/"
path = os.path.join(location, file)

os.remove(path)
```

#### Using os.rmdir()

- `os.rmdir()` method in Python is used to remove or delete an empty directory. `OSError` will be raised if the specified path is not an empty directory.

```python
import os
directory = "SOUNotes"

parent = "D:/Projects/"
path = os.path.join(parent, directory)

os.rmdir(path)
```

## Questions

1. Explain file types detail in python.
2. Explain file handling function in python.
3. Write a function in python to read the content from a text file `Demo.txt` line by line and display the same on screen.
4. Explain pickle Module with an example.
5. How can you join two path components using the `os.path` module? Provide an example.
6. What is the purpose of the `open()` function in Python, and what are the common modes you can use to open a file? List at least three modes.
7. Why is the Pickle module needed? Discuss the advantages and disadvantages of the Pickle module.
8. Differentiate Python Binary file and Python Text file.
9. What is File? Write a Python program to read a CSV file, and write data into CSV file.
10. List out Python OS module functions. Explain current working directory with an example

---
