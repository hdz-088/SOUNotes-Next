---
header: APY-03
title: APY-03 GUI Using Tkinter
slug: apy-03
semester: 4
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1srMNiBacJNlPsDVth1eW5mdWr-00_uVO/view?usp=sharing
---

## Introduction

- Tkinter is the standard Python interface to the Tk GUI (Graphical User Interface) toolkit.
- It is included with Python and is cross-platform (works on Windows, macOS, and Linux).
- Tkinter is easy to use and simple
- Tkinter supports a wide range of widgets for building interactive interfaces.

- Tkinter Setup:

```python
import tkinter as tk

root = tk.Tk()
root.mainloop()
```

## Text Widget

- Used for multi-line text input and display.
- Ideal for displaying or accepting large amounts of text, such as notes or messages.

```python
text_widget = tk.Text(root, height=10, width=30)
text_widget.pack()
```

## Image Widget

- Display images (PNG, GIF) in your application.

```python
from tkinter import PhotoImage
image = PhotoImage(file='image.png')
label = tk.Label(root, image=image)
label.pack()
```

## Button Widget

- Used for user interaction via clicks.

```python
def on_click():
	print("Button clicked!")

button = tk.Button(root, text="Click Me", command=on_click)
button.pack()
```

## Entry Widget

- Used for single-line text input.
- Collects user input such as names, search terms, etc

```python
entry = tk.Entry(root)
entry.pack()
```

## Label Widget

- Used to display text or images.

```python
label = tk.Label(root, text="Hello, Tkinter!")
label.pack()
```

## ListBox Widget

- Displays a list of items from which the user can select.

```python
listbox = tk.Listbox(root)
listbox.pack()
listbox.insert(tk.END, "Item 1")
listbox.insert(tk.END, "Item 2")
```

## Menu Widget

- Creates a menu bar with options.
- Build drop-down menus for actions like "File", "Edit", etc.

```python
menu = tk.Menu(root)
root.config(menu=menu)

file_menu = tk.Menu(menu)
menu.add_cascade(label="File", menu=file_menu)
file_menu.add_command(label="Exit", command=root.quit)
```

## Radio Button Widget

- Allows the user to select one option from a list.

```python
var = tk.StringVar()

radio_button1 = tk.Radiobutton(root, text="Option 1", variable=var,
value="1")

radio_button2 = tk.Radiobutton(root, text="Option 2", variable=var,
value="2")

radio_button1.pack()
radio_button2.pack()
```

## Check Button Widget

- Allows the user to select one or more options.

```python
var1 = tk.IntVar()

check_button = tk.Checkbutton(root, text="Option 1", variable=var1)

check_button.pack()
```

## Scrollbar Widget

- Adds scrolling functionality to widgets like Text or Listbox.

```python
scrollbar = tk.Scrollbar(root)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
listbox.config(yscrollcommand=scrollbar.set)
scrollbar.config(command=listbox.yview)
```

## Text Message Box Widget

- Used to display messages in a text box

```python
message_box = tk.Message(root, text="This is a text message box")
message_box.pack()
```

## Frame Widget

- A container widget used to organize other widgets.
- Organize and group widgets together for better layout management.

```python
frame = tk.Frame(root)
frame.pack()

button1 = tk.Button(frame, text="Button 1")
button2 = tk.Button(frame, text="Button 2")

button1.pack(side=tk.LEFT)
button2.pack(side=tk.LEFT)
```

## Controlling Layout with Geometry Manager

- Geometry Managers in Tkinter:
- **pack()**: Automatically arranges widgets.

```python
label = tk.Label(root, text="Pack Example")
label.pack()
```

- **grid()**: Organizes widgets in a table-like structure.

```python
label = tk.Label(root, text="Grid Example")
label.grid(row=0, column=0)
```

- **place()**: Places widgets at an absolute position.

```python
label = tk.Label(root, text="Place Example")
label.place(x=100, y=100)
```

## Making Application Interactive

- Bind events to widgets (e.g., button click, key press).
- Use command to link buttons to functions.
- Collect data from Entry and ListBox widgets to modify the interface dynamically.

```python
def update_label():
	label.config(text=entry.get())

label = tk.Label(root, text="Hello!")
label.pack()

entry = tk.Entry(root)
entry.pack()

button = tk.Button(root, text="Update", command=update_label)
button.pack()
```

## Questions

1. Write a Python program to create a simple GUI application using Tkinter with a label and a button. (5)
2. Discuss the purpose of the Entry widget in Tkinter. Write a program to take user input using it. (4)
3. Explain the use of the ListBox widget in Tkinter. Create a program to display a list of options. (3)
4. What is a Text widget in Tkinter? Write a program to demonstrate its use for creating a text editor. (5)
5. Write a Python program to create a Tkinter GUI with checkboxes and radio buttons. (5)
6. Explain the use of geometry managers (pack, grid, and place) in Tkinter with examples. (4)
7. Design a GUI application using Tkinter to display an image and a message together. (4)
8. Write a Python program to create a menu-driven application using the Menu widget in Tkinter. (5)
9. What is a Scrollbar widget in Tkinter? Explain its purpose with an example program. (3)
10. Create a Python application using Tkinter to demonstrate the use of frames for layout design. (4)

## Resources

1. [Tkinter Tutorial (English)](https://youtu.be/TuLxsvK4svQ?si=bxcEGKpLyN40nXCF)
2. [Tkinter Documentation](https://tkdocs.com/tutorial/index.html)

---

```python
print("Hello World")
```
