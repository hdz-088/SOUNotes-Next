---
title: Python-03
slug: python-03
semester: 3
image: py/pycover.png
link: https://drive.google.com/file/d/1cHzLoS3_qw4HwccYgGroEFbZuB1oFznF/view?usp=sharing
---

## Dictionaries

### Creating Dictionary

- A dictionary in Python is a collection of key-value pairs. Each key is associated with a value, and dictionaries are unordered, mutable, and indexed by keys.

```python showLineNumbers
# Example of creating dictionaries
empty_dict = {}  # Empty dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person)
# Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Accessing and Modifying Key-Value Pairs in Dictionaries

- You can access dictionary values by referencing their keys. You can also modify the value associated with a key or add a new key-value pair.

```python showLineNumbers
# Example of accessing and modifying key-value pairs
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Accessing values
print(person["name"])  # Output: Alice
print(person["age"])   # Output: 25

# Modifying values
person["age"] = 26
print(person)
# Output: {'name': 'Alice', 'age': 26, 'city': 'New York'}

# Adding new key-value pair
person["job"] = "Engineer"
print(person)
# Output: {'name': 'Alice', 'age': 26, 'city': 'New York', 'job': 'Engineer'}
```

### Built-In Functions Used on Dictionaries

- Python provides several built-in functions that can be used on dictionaries. Common ones include `len()`, `max()`, `min()`, and `sorted()`.

```python showLineNumbers
# Example of built-in functions used on dictionaries
my_dict = {"a": 10, "b": 20, "c": 30}

print(len(my_dict))   # Output: 3 (number of key-value pairs)
print(max(my_dict))   # Output: 'c' (maximum key based on alphabetical order)
print(min(my_dict))   # Output: 'a' (minimum key based on alphabetical order)
print(sorted(my_dict))  # Output: ['a', 'b', 'c'] (sorted keys)
```

### Dictionary Methods

- Dictionaries come with various methods for performing operations, such as `get()`, `keys()`, `values()`, `items()`, `pop()`, `update()`, and more.

```python showLineNumbers
# Example of dictionary methods
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# get() method
print(person.get("name"))  # Output: Alice
print(person.get("job", "Not available"))  # Output: Not available

# keys(), values(), items() methods
print(person.keys())    # Output: dict_keys(['name', 'age', 'city'])
print(person.values())  # Output: dict_values(['Alice', 25, 'New York'])
print(person.items())   # Output: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])

# pop() method
age = person.pop("age")
print(age)              # Output: 25
print(person)           # Output: {'name': 'Alice', 'city': 'New York'}

# update() method
person.update({"age": 26, "job": "Engineer"})
print(person)           # Output: {'name': 'Alice', 'city': 'New York', 'age': 26, 'job': 'Engineer'}
```

### The `del` Statement

- The `del` statement is used to delete a key-value pair from a dictionary or to delete the entire dictionary.

```python showLineNumbers
# Example of using the del statement
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Delete a specific key-value pair
del person["city"]
print(person)  # Output: {'name': 'Alice', 'age': 25}

# Delete the entire dictionary
del person
```

## Tuples

### Creating Tuples

- A tuple is an immutable sequence of items. Tuples are created using parentheses `()` and can store different types of data.

```python showLineNumbers
# Example of creating tuples
empty_tuple = ()
single_element_tuple = (42,)
mixed_tuple = (1, "apple", 3.14)

print(mixed_tuple)  # Output: (1, 'apple', 3.14)
```

### Basic Tuple Operations

- Tuples support operations similar to lists, like concatenation (`+`), repetition (`*`), and membership checking (`in`).

```python showLineNumbers
# Example of basic tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5)

# Concatenation
new_tuple = tuple1 + tuple2
print(new_tuple)  # Output: (1, 2, 3, 4, 5)

# Repetition
repeated_tuple = tuple1 * 3
print(repeated_tuple)  # Output: (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Membership
print(2 in tuple1)  # Output: True
print(6 in tuple1)  # Output: False
```

### Indexing and Slicing in Tuples

- You can access tuple elements using indexing and slicing, just like with lists.

```python showLineNumbers
# Example of indexing and slicing
my_tuple = (10, 20, 30, 40, 50)

# Indexing
print(my_tuple[0])  # Output: 10
print(my_tuple[-1]) # Output: 50

# Slicing
print(my_tuple[1:4])  # Output: (20, 30, 40)
print(my_tuple[:3])   # Output: (10, 20, 30)
```

### Built-In Functions Used on Tuples

- Some built-in functions like `len()`, `max()`, `min()`, and `sum()` work with tuples.

```python showLineNumbers
# Example of built-in functions
numbers = (10, 20, 30, 40)

print(len(numbers))    # Output: 4
print(max(numbers))    # Output: 40
print(min(numbers))    # Output: 10
print(sum(numbers))    # Output: 100
```

## Relation Between Tuples and Lists

- Tuples and lists are both sequence types in Python. The key difference is that tuples are immutable, meaning once created, they cannot be modified, while lists are mutable.

```python showLineNumbers
# Example of converting between tuples and lists
my_tuple = (1, 2, 3)
my_list = list(my_tuple)  # Convert tuple to list
my_list.append(4)
new_tuple = tuple(my_list)  # Convert list back to tuple
print(new_tuple)  # Output: (1, 2, 3, 4)
```

## Relation Between Tuples and Dictionaries

- Tuples are often used as keys in dictionaries because they are immutable. Lists cannot be used as dictionary keys.

```python showLineNumbers
# Example of using a tuple as a key in a dictionary
location_coordinates = {
    (40.7128, -74.0060): "New York",
    (34.0522, -118.2437): "Los Angeles"
}

print(location_coordinates[(40.7128, -74.0060)])
# Output: New York
```

### Tuple Methods

- Tuples have only two methods: `count()` and `index()`.

```python showLineNumbers
# Example of tuple methods
my_tuple = (10, 20, 20, 30)

# count() method
print(my_tuple.count(20))  # Output: 2

# index() method
print(my_tuple.index(30))  # Output: 3
```

### Using `zip()` Function

- The `zip()` function can be used to combine multiple iterables (e.g., lists or tuples) into tuples.

```python showLineNumbers
# Example of using zip() function
names = ("Alice", "Bob", "Charlie")
scores = (85, 90, 95)

zipped = zip(names, scores)
print(list(zipped))  # Output: [('Alice', 85), ('Bob', 90), ('Charlie', 95)]
```

## Sets

### Creating Sets

- Sets are unordered collections of unique elements. Sets are created using curly braces `{}` or the `set()` constructor.

```python showLineNumbers
# Example of creating sets
empty_set = set()  # Empty set
numbers_set = {1, 2, 3, 4, 5}
mixed_set = {1, "apple", 3.14}

print(mixed_set)  # Output: {1, 3.14, 'apple'}
```

### Set Methods

- Sets have several built-in methods like `add()`, `remove()`, `union()`, `intersection()`, and `difference()`.

```python showLineNumbers
# Example of set methods
fruits = {"apple", "banana", "cherry"}

# add() method
fruits.add("orange")
print(fruits)  # Output: {'apple', 'orange', 'cherry', 'banana'}

# remove() method
fruits.remove("banana")
print(fruits)  # Output: {'apple', 'orange', 'cherry'}

# union() method
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))  # Output: {1, 2, 3, 4, 5}

# intersection() method
print(set1.intersection(set2))  # Output: {3}

# difference() method
print(set1.difference(set2))  # Output: {1, 2}
```

### Traversing of Sets

- You can iterate through a set using a `for` loop, but remember that sets are unordered, so the elements will not follow any particular sequence.

```python showLineNumbers
# Example of traversing a set
my_set = {"apple", "banana", "cherry"}

for fruit in my_set:
    print(fruit)

# Output (order may vary):
# apple
# banana
# cherry
```
