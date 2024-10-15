---
title: Flutter-02 Flutter Basics
slug: flutter-02
semester: 3
image: /flutter.png
link: https://drive.google.com/file/d/1LK6-8OD1G_8OXz7YszMrB9axHNuVlzPQ/view?usp=sharing
---

## Widgets

- In Flutter, widgets are the building blocks of a Flutter app. Everything you see on the screen of a Flutter app is a widget. They are like small pieces of a puzzle that you put together to make a complete picture.

![](/flutter/2flutter1.png)

### Lifecycle of a StatefulWidget

- In Flutter, a StatefulWidget is a widget that can change its state during its lifetime. This means it can rebuild itself multiple times, reflecting changes in its internal state or external data. Understanding the lifecycle of a StatefulWidget is crucial for managing resources, performing actions at the right time, and ensuring optimal performance. The lifecycle of a StatefulWidget involves the following stages:

1. `createState()`
   1. **Purpose:** This method is the first step in the lifecycle. It is called when the StatefulWidget is created. It returns an instance of the State class associated with the StatefulWidget .
   2. **Key Point:** This method is called only once.

```dart
@override
_ExampleState createState() => _ExampleState();
```

2. `initState()`
   - **Purpose**: This method is called once when the State object is inserted into the widget tree. It is used for initializing any data or state the widget needs. For example, initializing variables, setting up streams, or starting animations.
   - **Key Point**: Always call `super.initState()` to ensure the parent class is also initialized properly.

```dart
@override
void initState() {
  super.initState();
  // Initialization code here
}
```

3. `didChangeDependencies() `
   - Purpose: This method is called immediately after `initState()` and whenever the widget’s dependencies change. Dependencies can change if the widget depends on an `InheritedWidget` that itself changes.
   - Key Point: Useful for actions that depend on the context or inherited widgets.

```dart
@override
void didChangeDependencies() {
  super.didChangeDependencies();
  // Respond to dependency changes
}
```

4. `build()`
   - **Purpose**: This method is called whenever the widget is to be rendered. It is responsible for constructing the widget tree, which represents the UI. The `build()` method can be called multiple times during the widget's lifecycle, especially after calling `setState()`.
   - **Key Point**: The UI is built based on the current state, so changes in state will trigger a rebuild.

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text('Stateful Widget Lifecycle'),
    ),
    body: Center(
      child: Text('Hello, World!'),
    ),
  );
}
```

5. `setState()`
   - **Purpose**: This method is used to notify the framework that the internal state of this object has changed. When called, it triggers a rebuild of the widget, ensuring that the UI reflects the updated state.
   - **Key Point**: Use this method responsibly to avoid unnecessary rebuilds.

```dart
void _incrementCounter() {
  setState(() {
    _counter++;
  });
}
```

6. `dispose()`
   - **Purpose**: This method is called when the State object is permanently removed from the widget tree. It is used for final cleanup, such as canceling timers, closing streams, or disposing of controllers.
   - **Key Point**: After `dispose()` , the widget is no longer active, and its State object is considered dead.

```dart
@override
void dispose() {
  // Clean up resources
  super.dispose();
}
```

## Types of Design System

### Material Design

- Material Design is a design language developed by Google. It is used primarily for Android apps but has become popular across various platforms due to its clean, modern aesthetics and usability principles. Material Design provides a consistent look and feel with a set of guidelines and components.

**Key Principles of Material Design:**

1. **Material Metaphor:** Material Design is based on the metaphor of physical materials like paper and ink. It uses shadows, depth, and responsive animations to mimic how real-world materials behave.
2. **Bold, Graphic, Intentional:** Emphasis on bold colors, large typography, and meaningful use of space. It aims for clarity and impact.
3. **Motion Provides Meaning:** Motion in Material Design is used to provide context and meaning. For example, transitions and animations help users understand the relationship between different elements.

### Cupertino Design

- Cupertino Design is a design language developed by Apple for iOS. It aims to create a user experience that aligns with iOS conventions and aesthetics. Cupertino widgets provide a native iOS look and feel.

**Key Principles of Cupertino Design:**

1. **Consistency with iOS**: Cupertino widgets adhere to the design guidelines set by Apple for iOS apps, ensuring that apps have a consistent look and feel with native iOS applications.
2. **Flat and Minimalistic**: Cupertino design tends to use flat, minimalistic elements without the elevated effects seen in Material Design.
3. **Native Feel**: Cupertino widgets are styled to feel native on iOS, using iOS-specific patterns, colors, and interactions.

## Row Widget

- The `Row` widget in Flutter is used to display its children widgets in a horizontal array. It arranges its children in a single horizontal line, which can be useful for creating layouts where you want elements to be aligned side-by-side.

**Key Properties of the `Row` Widget**

1. **children:** A list of widgets that are arranged horizontally. These can be any widget, such as Text , Icon , Container , etc.
2. **mainAxisAlignment**: Defines how the children are aligned along the horizontal axis (main axis). Common values include:
   1. `MainAxisAlignment.start` : Aligns children to the start of the row.
   2. `MainAxisAlignment.end` : Aligns children to the end of the row.
   3. `MainAxisAlignment.center` : Centers children within the row.
   4. `MainAxisAlignment.spaceBetween` : Distributes children evenly with space between them.
   5. `MainAxisAlignment.spaceAround` : Distributes children evenly with space around them.
   6. `MainAxisAlignment.spaceEvenly` : Distributes children evenly with equal space between them.
3. **CrossAxisAlignment**: Defines how the children are aligned along the vertical axis (cross axis). Common values include:
   1. `CrossAxisAlignment.start` : Aligns children to the start of the row (top for horizontal rows).
   2. `CrossAxisAlignment.end` : Aligns children to the end of the row (bottom for horizontal rows).
   3. `CrossAxisAlignment.center` : Centers children within the row vertically.
   4. `CrossAxisAlignment.stretch` : Stretches children to fill the vertical space.
4. **mainAxisSize**: Defines how much space the row should take along the main axis. Values include:
   1. `MainAxisSize.max` : The row takes up as much horizontal space as possible.
   2. `MainAxisSize.min` : The row only takes up as much horizontal space as needed by its children.

## Column Widget

- The `Column` widget in Flutter is used to display its children widgets in a vertical array. It arranges its children in a single vertical line, which is useful for creating layouts where you want elements to be stacked one on top of the other.

**Key Properties of the `Column` Widget**

1. **children**: A list of widgets arranged vertically. These can be any widget, such as Text , Icon , Container , etc.
2. **mainAxisAlignment**: Defines how the children are aligned along the vertical axis (main axis). Common values include:
   1. `MainAxisAlignment.start` : Aligns children to the top of the column.
   2. `MainAxisAlignment.end` : Aligns children to the bottom of the column.
   3. `MainAxisAlignment.center` : Centers children within the column.
   4. `MainAxisAlignment.spaceBetween` : Distributes children evenly with space between them.
   5. `MainAxisAlignment.spaceAround` : Distributes children evenly with space around them.
   6. `MainAxisAlignment.spaceEvenly` : Distributes children evenly with equal space between them.
3. **crossAxisAlignment**: Defines how the children are aligned along the horizontal axis (cross axis). Common values include:
   1. `CrossAxisAlignment.start` : Aligns children to the start of the column (left for vertical columns).
   2. `CrossAxisAlignment.end` : Aligns children to the end of the column (right for vertical columns).
   3. `CrossAxisAlignment.center` : Centers children within the column horizontally.
   4. `CrossAxisAlignment.stretch` : Stretches children to fill the horizontal space.
4. **mainAxisSize**: Defines how much space the column should take along the main axis. Values include:
   1. `MainAxisSize.max` : The column takes up as much vertical space as possible.
   2. `MainAxisSize.min` : The column only takes up as much vertical space as needed by its children.

## Container Widget

- The `Container` widget in Flutter is a versatile and flexible widget used to create rectangular visual elements. It can be used for a variety of purposes such as adding padding, margins, borders, and background colors, or for positioning widgets in a specific layout.

**Key Properties of the `Container` Widget**

1. **alignment** : Aligns the child widget within the container. Common values include `Alignment.center` , `Alignment.topLeft` , `Alignment.bottomRight` , etc.
2. **padding**: Adds space inside the container between its border and the child widget. Defined using `EdgeInsets` (e.g., `EdgeInsets.all(16.0)` ).
3. **margin**: Adds space outside the container, separating it from other widgets. Defined using `EdgeInsets` (e.g., `EdgeInsets.all(16.0)` ).
4. **width and height**: Defines the size of the container. If not provided, the container will size itself based on its child and constraints.
5. **color**: Sets the background color of the container.
6. **decoration**: Allows more complex styling, such as adding borders, gradients, and shadows. Defined using `BoxDecoration` (e.g., `BoxDecoration(color: Colors.blue, borderRadius: BorderRadius.circular(10))` ).
7. **child**: The widget inside the container. This is where you place the content of the container.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(title: Text('Container Widget Example')),
      body: ContainerExample(),
    ),
  ));
}

class ContainerExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            padding: EdgeInsets.all(16.0),
            margin: EdgeInsets.all(16.0),
            width: 200,
            height: 100,
            color: Colors.blue,
            child: Text(
              'Blue Container',
              style: TextStyle(color: Colors.white),
            ),
          ),
          SizedBox(height: 20),
          Container(
            alignment: Alignment.center,
            padding: EdgeInsets.all(16.0),
            margin: EdgeInsets.all(16.0),
            decoration: BoxDecoration(
              color: Colors.green,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.5),
                  spreadRadius: 2,
                  blurRadius: 5,
                  offset: Offset(0, 3),
                ),
              ],
            ),
            child: Text(
              'Green Container with Shadow',
              style: TextStyle(color: Colors.white),
            ),
          ),
          SizedBox(height: 20),
          Container(
            alignment: Alignment.center,
            padding: EdgeInsets.all(16.0),
            margin: EdgeInsets.all(16.0),
            width: 200,
            height: 100,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.purple, Colors.orange],
              ),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Text(
              'Gradient Container',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }
}
```

### Text Widget

```dart
Text('Hello, world!')
```

### Button Widget

```dart
ElevatedButton(
	onPressed: () {
		// Action when button is pressed
	},
	child: Text('Press Me'),
)
```

### Image Widget

```dart
Image.network('<https://example.com/myimage.jpg>')
```

## Gestures

- In Flutter, gestures are actions that users can perform with their fingers, like tapping, dragging, or swiping, to interact with the app. Think of gestures as the ways you can communicate with your app using touch.

### Tap Gesture

```dart
GestureDetector(
	onTap: () {
		print('Tapped!');
	},
	child: Container(
		color: Colors.blue,
		width: 100,
		height: 100,
		child: Center(
			child: Text('Tap Me'),
		),
	),
)
```

### Long Press Gesture

```dart
GestureDetector(
	onLongPress: () {
		print('Long Pressed!');
	},
	child: Container(
		color: Colors.green,
		width: 100,
		height: 100,
		child: Center(
			child: Text('Long Press Me'),
		),
	),
)
```

### Swipe Gesture

```dart
GestureDetector(
	onPanUpdate: (details) {
		print('Swiped: ${details.delta}');
	},
	child: Container(
		color: Colors.red,
		width: 100,
		height: 100,
		child: Center(
			child: Text('Swipe Me'),
		),
	),
)
```

## Concept of State

- In Flutter, the concept of "state" refers to any data or information that can change over time within your app. The state of a widget is what allows it to remember information and change its appearance or behavior in response to user actions or other events.
- Think of a simple counter app where you press a button to increase a number displayed on the screen. The number is the state, and pressing the button changes the state.
- **StatelessWidget**: A widget that doesn't change over time. It has no state.
- **StatefulWidget**: A widget that can change over time. It has a state that can change.

## Layers

- In modern software development, maintaining a well-organized and scalable codebase is crucial for building robust applications.
- The layered architecture, often referred to as clean architecture, is a design pattern that divides an application into distinct layers, each responsible for a specific aspect of the system.

![](/flutter/2flutter2.png)

### Presentation Layer

- **Widgets:**
  - In Flutter, widgets are the basic building blocks of the user interface (UI).
  - They define the visual components and structure of the UI, such as buttons, text fields, and layouts.
  - Widgets are used to create the visual representation of the app.
- **States:**
  - State refers to the dynamic data in your application that can change over time.
  - In Flutter, state management is crucial for building interactive and responsive UIs.
  - State holds the current values of the UI components and allows for updating them when needed.
- **Controllers:**
  - Controllers manage the logic and interaction between the UI and the data.
  - They handle user inputs, update the state, and manage the flow of data between the UI (widgets) and the underlying layers.
  - Controllers are responsible for ensuring that the correct data is displayed in the UI and that user actions trigger the appropriate responses.

### Application Layer

- **Services:**
  - Services contain the business logic of the application.
  - They perform operations that are not directly tied to the UI but are essential for the functioning of the app, such as fetching data from an API, processing user inputs, or executing business rules.
  - Services act as intermediaries between the presentation layer and the domain layer.

### Domain Layer

- **Models:**
  - Models represent the core data structures and business logic of the application.
  - They define the entities and their relationships, encapsulating the rules and behaviors associated with the data.
  - Models are usually independent of the UI and can be reused across different parts of the application.

### Data Layer

- **Repositories:**
  - Repositories are responsible for handling data operations such as fetching, storing, and updating data.
  - They abstract the data sources from the rest of the application, providing a consistent interface for accessing data.
  - Repositories ensure that the application does not need to know where the data comes from (e.g., a database, an API, or a local file).
- **DTOs (Data Transfer Objects):**
  - DTOs are simple objects used to transfer data between different layers of the application.
  - They are often used to encapsulate data that needs to be passed from the data layer to the domain or presentation layers.
  - DTOs help in keeping the application layers loosely coupled by providing a common format for data exchange.
- **Data Sources:**
  - Data sources refer to the origin of the data, such as databases, web APIs, or local storage.
  - They provide the raw data that the repositories access and manage.
  - The data layer interacts directly with these sources to retrieve or store information needed by the application.

This architecture promotes separation of concerns, making it easier to manage, test, and maintain the application. Each layer has a distinct responsibility, ensuring that changes in one part of the application do not negatively impact other parts.

## Dart Programming

- Dart is a free and open-source programming language developed by Google. It's used to create both the backend (server side) and frontend (user side) of applications.

**Key Components of Dart**

- **Dart SDK:** The Software Development Kit (SDK) includes tools to write and run Dart programs.
- **Dart VM:** The Dart Virtual Machine is a program that runs Dart code directly.
- **dart2js:** A tool that converts Dart code into JavaScript. This is useful because not all websites support Dart, but they do support JavaScript.

**Key Features**

- **Server Side:** Dart can be used to write server code.
- **User Side:** Dart can be used to create user interfaces, especially with Flutter for mobile apps.
- **JavaScript Compatibility:** Dart code can be converted to JavaScript, making it versatile for web development.

### Features of Dart

**Easy to Understand:**

- Dart's syntax is similar to C# and Java, making it familiar to many developers.
- It supports code reuse, keeping programs clean and easy to understand.

**Object-Oriented Programming (OOP):**

- Like Java and C++, Dart follows OOP principles, making it powerful for building complex applications.

**Open Source:**

- Dart is open source, making it popular among individual developers and organizations

**Browser Support:**

- Dart programs can be converted to JavaScript using the dart2js compiler, ensuring compatibility with all modern web browsers.

**Type Safe:**

- Dart combines static and runtime checks to ensure variables match their defined types, reducing errors.

**Flexible Compilation and Execution:**

- Supports both Just-in-Time (JIT) and Ahead-of-Time (AOT) compilation, offering flexibility in how code is compiled and executed.
- The dart2js tool adds further value by converting Dart code to JavaScript.

**Asynchronous Programming:**

- Dart supports asynchronous programming, allowing it to handle multiple tasks simultaneously and efficiently.
- Example

```dart
void main() async {
  print('Start');
  await Future.delayed(Duration(seconds: 2), () {
    print('Hello after 2 seconds');
  });
  print('End');
}
```

## Variables

- A variable is a name assigned to a memory location where data is stored. The type of variable depends on the type of data it stores.
- **Declaring Variables**

```dart
// Single Variables
type variable_name;

// Multiple Variable
type variable1, variable2, variable3;
```

**Types of Variable:**

1. `Static` Variables
2. `Dynamic` Variables
3. `Final` or `Const` Variables

**Rules for variable**

- Cannot be a keyword.
- Can contain alphabets and numbers.
- No spaces or special characters (except \_ and $ ).
- Cannot start with a number.

```dart
void main() {
  int age = 30;
  double height = 5.9;
  bool isStudent = false;
  String name = "Alice", city = "Wonderland";
  print(age); // Output: 30
  print(height); // Output: 5.9
  print(isStudent); // Output: false
  print(name); // Output: Alice
  print(city); // Output: Wonderland
}
```

**Dynamic Variables**

- Declared with `dynamic` keyword.
- Can store any type of value.

```dart
void main() {
  dynamic item = "Book";
  print(item); // Output: Book
  item = 10;
  print(item); // Output: 10
}
```

**Final and Const Variable**

- **Final**: Value assigned once, can be set at runtime.

```dart
final name = "Alice";
final String city = "Wonderland";
```

- **Const**: Compile-time constant, value known before runtime.

```dart
const pi = 3.14;
const String greeting = "Hello";
```

**Null Safety in Dart**

- Variables can be declared to hold null values by appending `?`

```dart
void main() {
	int? age;
	age = null;
	print(age); // Output: null
}
```

## Keywords

- Keywords in Dart are reserved words with predefined functions.
- They cannot be used as variable names or identifiers.
- These keywords help define the structure and syntax of the Dart programming language.

![](/flutter/2flutter3.png)

## Data Types

- Data type determines what kind of data the variable can hold. Understanding data types is crucial because it helps you handle data correctly in your programs.

### Number

- In Dart, numbers are essential for representing and manipulating numeric values. Dart provides a few different types for handling numbers, and each type has its own characteristics and uses.
- **int:** Used to represent whole numbers (integers).

```dart
void main() {
  // Declare an integer
  int num1 = 10;
  print(num1); // Output: 10
}
```

- **double:** Used to represent numbers with decimal points (floating-point numbers).

```dart
void main() {
  // Declare a double value
  double num2 = 10.5;
  print(num2); // Output: 10.5
}
```

- **num:** This is a general type that can hold either int or double . It is useful when you need a variable that can be either an integer or a floating-point number.

```dart
void main() {
  // Use num to hold different types of numbers
  num num1 = 10; // an integer
  num num2 = 10.5; // a double
  print(num1); // Output: 10
  print(num2); // Output: 10.5
}
```

**Parsing Strings to Numbers**

- Dart allows you to convert strings containing numeric values into actual numbers using the `parse()` function.

```dart
void main() {
  // Parsing strings to numbers
  var num1 = num.parse("5");
  var num2 = num.parse("3.14");
  // Adding parsed numbers
  var sum = num1 + num2;
  print("Sum = $sum"); // Output: Sum = 8.14
}
```

**Properties of Number**

- `hashCode` : Gets the hash code of the number.
- `isFinite` : Checks if the number is finite (not infinite).
- `isInfinite` : Checks if the number is infinite.
- `isNaN` : Checks if the number is 'Not a Number' (NaN).
- `isNegative` : Checks if the number is negative.
- `sign` : Returns -1 for negative numbers, 0 for zero, and 1 for positive numbers.
- `isEven` : Checks if the number is even.
- `isOdd` : Checks if the number is odd.

**Methods for Number**

- **abs()** : Returns the absolute value.

```dart
void main() {
  int number = -5;
  print(number.abs()); // Output: 5
}
```

- **ceil()** : Rounds the number up to the nearest integer.

```dart
void main() {
	double number = 3.14;
	print(number.ceil()); // Output: 4
}
```

- **floor():** Rounds the number down to the nearest integer.

```dart
void main() {
	double number = 3.14;
	print(number.floor()); // Output: 3
}
```

- **compareTo()** : Compares the number with another number.

```dart
void main() {
	int number1 = 10;
	int number2 = 20;
	print(number1.compareTo(number2)); // Output: -1
}
```

- **remainder()**: Returns the remainder after division.

```dart
void main() {
	int dividend = 10;
	int divisor = 3;
	print(dividend.remainder(divisor)); // Output: 1
}
```

- **round()**: Rounds the number to the nearest integer.

```dart
void main() {
	double number = 3.6;
	print(number.round()); // Output: 4
}
```

- **toDouble()**: Converts the number to a double.

```dart
void main() {
	int number = 10;
	print(number.toDouble()); // Output: 10.0
}
```

- **toInt():** Converts the number to an integer.

```dart
void main() {
	double number = 10.5;
	print(number.toInt()); // Output: 10
}
```

- **toString():** Converts the number to a string.

```dart
void main() {
	int number = 10;
	print(number.toString()); // Output: "10"
}
```

- **truncate():** Removes the fractional part of the number.

```dart
void main() {
	double number = 10.9;
	print(number.truncate()); // Output: 10
}
```

### String

- Strings in Dart are used to represent sequences of characters. Dart provides various features and methods to handle and manipulate strings efficiently.
- In Dart, you can declare strings using either single quotes ( `'` ) or double quotes ( `"` ). Both types of quotes work the same way.

```dart
void main() {
	String greeting = 'Hello, Dart!';
	print(greeting); // Output: Hello, Dart!
}
```

- You can combine strings using the `+` operator.

```dart
void main() {
	String firstName = 'John';
	String lastName = 'Doe';
	String fullName = firstName + ' ' + lastName;
	print(fullName); // Output: John Doe
}
```

- Dart allows you to embed variables inside strings using `${}` within double quoted strings.

```dart
void main() {
  String name = 'Alice';
  int age = 30;
  String introduction = 'Hello, my name is $name and I am $age years old.';
  print(introduction); // Output: Hello, my name is Alice and I am 30 years old.
}
```

- For simple variables, you can directly use the variable name without curly braces:

```dart
void main() {
	String name = 'Bob';
	String greeting = 'Hi, $name!';
	print(greeting); // Output: Hi, Bob!
}
```

- You can create multi-line strings using triple quotes ( `'''` or `"""` ).

```dart
void main() {
  String multiLine = '''This is a string
that spans across multiple
lines.''';
  print(multiLine);
  // Output:
  // This is a string
  // that spans across multiple
// lines.
}
```

**String Methods**

- **Creating Strings**
  - `String.fromCharCodes(Iterable charCodes)` : Creates a string from a list of character codes.
  - `String.fromCharCode(int charCode)` : Creates a string from a single character code.
  - `String.fromEnvironment(String name, {String defaultValue})` : Gets a string from environment variables.
- **Accessing Characters**
  - `codeUnitAt(int index)` : Returns the UTF-16 code unit at the specified index.
  - `runes` : Returns an iterable of the Unicode code points of the string.
  - `characters` : Returns an iterable of the string's characters (requires the characters package).
- **Querying Strings**
  - `contains(Pattern pattern, [int start = 0])` : Checks if the string contains the specified pattern.
  - `startsWith(Pattern pattern, [int start = 0])` : Checks if the string starts with the specified pattern.
  - `endsWith(String other)` : Checks if the string ends with the specified string.
  - `isEmpty` : Checks if the string is empty.
  - `isNotEmpty` : Checks if the string is not empty.
  - `length` : Returns the number of characters in the string.
- **Manipulating Strings**
  - `toLowerCase()` : Converts all characters in the string to lowercase.
  - `toUpperCase(`) : Converts all characters in the string to uppercase.
  - `trim()` : Removes leading and trailing whitespace from the string.
  - `trimLeft()` : Removes leading whitespace from the string.
  - `trimRight()` : Removes trailing whitespace from the string.
  - `replaceAll(Pattern from, String replace)` : Replaces all occurrences of a pattern with a new string.
  - `replaceFirst(Pattern from, String to, [int startIndex = 0])` : Replaces the first occurrence of a pattern with a new string.
  - `replaceRange(int start, int end, String replacement)` : Replaces the substring from start to end with a new string.
  - `padLeft(int width, [String padding = ' '])` : Pads the string on the left to the specified width.
  - `padRight(int width, [String padding = ' '])` : Pads the string on the right to the specified width.
  - `substring(int start, [int end])` : Returns the substring from start to end.
  - `split(Pattern pattern)` : Splits the string at each occurrence of the pattern and returns a list of substrings.
  - `join(Iterable strings`) : Joins a list of strings into a single string.
- **Comparing Strings**
  - `compareTo(String other)` : Compares this string to another string.
  - `==` (equality operator): Checks if two strings are equal.
  - `hashCode` : Returns the hash code for the string.
- **Interpolating and Formatting Strings**
  - String interpolation: `String name = 'World'; print('Hello, $name!'); `
  - `replaceAllMapped(Pattern from, String replace(Match match))` : Replaces all occurrences of a pattern with a new string computed from a function.

```dart
void main() {
  String str = 'Hello, World!';
  // Accessing Characters
  print(str.codeUnitAt(0)); // Output: 72
  print(str.runes
      .toList()); // Output: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
  // Querying Strings
  print(str.contains('World')); // Output: true
  print(str.startsWith('Hello')); // Output: true
  print(str.endsWith('!')); // Output: true
  print(str.isEmpty); // Output: false
  print(str.isNotEmpty); // Output: true
  print(str.length); // Output: 13
  // Manipulating Strings
  print(str.toLowerCase()); // Output: hello, world!
  print(str.toUpperCase()); // Output: HELLO, WORLD!
  print(str.trim()); // Output: Hello, World!
  print(str.replaceAll('World', 'Dart')); // Output: Hello, Dart!
  print(str.substring(0, 5)); // Output: Hello
  print(str.split(', ')); // Output: [Hello, World!]
  print(str.padLeft(15, '*')); // Output: **Hello, World!
  print(str.padRight(15, '*')); // Output: Hello, World!**
  // Interpolating and Formatting Strings
  String name = 'Dart';
  print('Hello, $name!'); // Output: Hello, Dart!
  // Advanced Replacement
  String text = 'The quick brown fox';
  String newText = text.replaceAllMapped(
      RegExp(r'\\b\\w'), (match) => match.group(0)!.toUpperCase());
  print(newText); // Output: The Quick Brown Fox
}
```

### Booleans

- Booleans represent truth values: either `true` or `false` .

```dart
void main() {
  // Declare boolean variables
  bool isDay = true;
  bool isNight = false;
  // Print the values
  print("Is it day? $isDay");
  print("Is it night? $isNight");
}
```

### List in Dart

- In Dart, a List is a collection of items that are ordered and can be accessed by their index.
- It is similar to arrays in other programming languages.
- Lists are versatile and can hold various types of data, such as numbers, strings, or even other lists.
- You can declare an empty list and then add elements to it.

```dart
void main() {
  List<int> numbers = []; // Empty list of integers
  numbers.add(10); // Add elements to the list
  numbers.add(20);
  numbers.add(30);
  print(numbers); // Output: [10, 20, 30]
}
```

- You can declare a list with some initial values.

```dart
void main() {
	List<String> fruits = ['Apple', 'Banana', 'Cherry'];
	print(fruits); // Output: [Apple, Banana, Cherry]
}
```

- You can create a list with a fixed size, where the size is defined at the time of creation. You can then modify the elements, but the size remains fixed.

```dart
void main() {
  List<String> fixedList = List<String>.filled(3, 'default');
  fixedList[0] = 'Hello';
  fixedList[1] = 'World';
  fixedList[2] = 'Dart';
  print(fixedList); // Output: [Hello, World, Dart]
}

```

- You can also create a list by generating values using a function.

```dart
void main() {
  List<int> generatedList = List<int>.generate(5, (index) => index * 2);
  print(generatedList); // Output: [0, 2, 4, 6, 8]
}
```

- You can access elements in a list using their index, which starts at 0.

```dart
void main() {
  List<String> colors = ['Red', 'Green', 'Blue'];
  print(colors[0]); // Output: Red
  print(colors[1]); // Output: Green
  print(colors[2]); // Output: Blue
}
```

- You can change the value of a specific element by accessing it via its index.

```dart
void main() {
  List<String> animals = ['Cat', 'Dog', 'Bird'];
  animals[1] = 'Fish'; // Change 'Dog' to 'Fish'
  print(animals); // Output: [Cat, Fish, Bird]
}
```

**List Methods**

- **Adding Elements**
  - `add(E value)` : Adds a single element to the end of the list.
  - `addAll(Iterable iterable)` : Adds all elements of the given iterable to the end of the list.
- **Removing Elements**
  - `remove(Object value)` : Removes the first occurrence of the value from the list.
  - `removeAt(int index)` : Removes the element at the specified index.
  - `removeLast()` : Removes the last element of the list.
  - `removeRange(int start, int end)` : Removes elements from the specified range.
- **Accessing Elements**
  - `elementAt(int index)` : Returns the element at the specified index.
  - `first` : Gets the first element of the list.
  - `last` : Gets the last element of the list.
  - `single` : Gets the single element of the list, assuming the list has only one element.
  - `indexOf(E element)` : Returns the first index of the element, or -1 if not found.
  - `lastIndexOf(E element)` : Returns the last index of the element, or -1 if not found.
- **Updating Elements**
  - `[]` (index operator): Access or update the element at the specified index.
  - `insert(int index, E element)` : Inserts an element at the specified index.
  - `insertAll(int index, Iterable iterable)` : Inserts all elements of the given iterable at the specified index.
- **Querying Lists**
  - `contains(Object element) `: Checks if the list contains the specified element.
  - `isEmpty` : Checks if the list is empty.
  - `isNotEmpty` : Checks if the list is not empty. length : Returns the number of elements in the list.
- **Sorting and Reversing**
  - `sort([int compare(E a, E b)])` : Sorts the list in place according to the provided comparison function.
  - `reversed` : Returns an iterable with the elements of the list in reverse order.
- **Sublist and Ranges**
  - `sublist(int start, [int end])` : Returns a new list containing the elements in the specified range.
  - `fillRange(int start, int end, [E fillValue])`: Replaces the elements in the specified range with the given value.
  - `replaceRange(int start, int end, Iterable newContents)` : Replaces the elements in the specified range with the given iterable.
- **Transformation**
  - `map(T f(E e))`: Returns a new iterable with the results of applying the function to each element.
  - `where(bool test(E element))` : Returns a new iterable with all elements that satisfy the test.
  - `forEach(void f(E element))` : Applies the function to each element of the list.
  - `reduce(T combine(T value, E element))` : Reduces the list to a single value by repeatedly applying the combine function.
  - `fold(T initialValue, T combine(T previousValue, E element))` : Similar to reduce , but allows specifying an initial value.
  - `join([String separator = ""])` : Returns a string representation of the list, joined by the separator.
- **Copy and Clear**
  - `toList({bool growable = true})` : Returns a new list containing the elements of the iterable.
  - `clear()` : Removes all elements from the list.

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
// Add elements
  numbers.add(6);
  numbers.addAll([7, 8, 9]);
  // Remove elements
  numbers.remove(2);
  numbers.removeAt(0);
  numbers.removeLast();
  // Access elements
  print(numbers[0]); // Output: 3
  print(numbers.first); // Output: 3
  print(numbers.last); // Output: 8
  // Update elements
  numbers[0] = 10;
  numbers.insert(1, 15);
  // Query list
  print(numbers.contains(15)); // Output: true
  print(numbers.isEmpty); // Output: false
  print(numbers.length); // Output: 6
  // Sort and reverse
  numbers.sort();
  print(numbers); // Output: [3, 4, 5, 6, 7, 10, 15]
  print(numbers.reversed.toList()); // Output: [15, 10, 7,6, 5, 4, 3]
  // Sublist and ranges
  print(numbers.sublist(1, 3)); // Output: [4, 5]
  numbers.fillRange(0, 2, 99);
  print(numbers); // Output: [99, 99, 5, 6, 7, 10, 15]
  // Transformation
  var mapped = numbers.map((e) => e * 2).toList();
  print(mapped); // Output: [198, 198, 10, 12, 14, 20, 30]
// Copy and clear
  var copy = numbers.toList();
  numbers.clear();
  print(numbers); // Output: []
  print(copy); // Output: [99, 99, 5, 6, 7, 10, 15]
}
```

### Maps

- A Map in Dart is a collection of key-value pairs, where each key is associated with a value.
- It is similar to dictionaries in Python or hash maps in other programming languages.
- Maps are useful when you need to store and retrieve data based on a unique key.
- You can declare an empty map and then add key-value pairs to it.

```dart
void main() {
  // Declaring an empty map
  Map<String, String> emptyMap = {};
  // Adding key-value pairs
  emptyMap['name'] = 'John';
  emptyMap['city'] = 'New York';
  print(emptyMap); // Output: {name: John, city: New York}
}
```

- You can declare a map with some initial key-value pairs.

```dart
void main() {
  // Declaring a map with initial values
  Map<String, int> ages = {'Alice': 30, 'Bob': 25, 'Charlie': 35};
  print(ages); // Output: {Alice: 30, Bob: 25, Charlie: 35}
}
```

- You can access values in a map using their keys and modify them as needed.

```dart
void main() {
  Map<String, String> capitals = {
    'USA': 'Washington, D.C.',
    'France': 'Paris',
    'Japan': 'Tokyo'
  };
  // Accessing a value
  print(capitals['France']); // Output: Paris
  // Modifying a value
  capitals['Japan'] = 'Kyoto'; // Change Tokyo to Kyoto
  print(
      capitals); // Output: {USA: Washington, D.C., France: Paris, Japan: Kyoto}
}
```

**Map Methods**

- **Adding and Updating Elements**
  - `putIfAbsent(K key, V ifAbsent())` : Adds a key-value pair to the map if the key is not already present.
  - `addAll(Map other)` : Adds all key-value pairs from another map to the current map.
  - `update(K key, V update(V value), {V ifAbsent()})` : Updates the value for the provided key, or adds it if it does not exist.
  - `updateAll(V update(K key, V value))` : Updates all values in the map by applying the provided function.
- **Removing Elements**
  - `remove(Object key)` : Removes the value for the specified key from the map.
  - `clear()` : Removes all key-value pairs from the map.
- **Accessing Elements**
  - `[]` (index operator): Accesses the value associated with the specified key.
  - `containsKey(Object key)` : Checks if the map contains the specified key.
  - `containsValue(Object value)` : Checks if the map contains the specified value.
  - `entries` : Returns an iterable of the key-value pairs in the map.
  - `keys` : Returns an iterable of the keys in the map.
  - `values` : Returns an iterable of the values in the map.
- **Querying Maps**
  - `isEmpty` : Checks if the map is empty.
  - `isNotEmpty` : Checks if the map is not empty.
  - `length` : Returns the number of key-value pairs in the map.
- **Transforming Maps**
  - `map(MapEntry transform(K key, V value))` : Returns a new map with the results of applying the transform function to each key-value pair.
  - `forEach(void action(K key, V value))` : Applies the function to each key-value pair in the map.
- **Getting Default Values**
  - `putIfAbsent(K key, V ifAbsent())` : Returns the value for the specified key, or adds the key with a value computed by `ifAbsent()` and returns that value.

```dart
void main() {
  Map<String, int> map = {'a': 1, 'b': 2, 'c': 3};
  // Adding and updating elements
  map['d'] = 4; // Add new key-value pair
  map.putIfAbsent('e', () => 5); // Add if key is absent
  map.update('a', (value) => value + 1); // Update existing value
  map.updateAll((key, value) => value * 2); // Update allvalues
  // Removing elements
  map.remove('b'); // Remove key-value pair by key
  map.clear(); // Clear all key-value pairs
  // Accessing elements
  map = {'a': 1, 'b': 2, 'c': 3};
  print(map['a']); // Access value by key, Output: 1
  print(map.containsKey('a')); // Check if key exists, Output: true
  print(map.containsValue(2)); // Check if value exists, Output: true
  // Querying map
  print(map.isEmpty); // Check if map is empty, Output: false
  print(map.isNotEmpty); // Check if map is not empty, Output: true
  print(map.length); // Get the number of key-value pairs,Output: 3
  // Transforming maps
  map.forEach((key, value) {
    print('Key: $key, Value: $value');
  });
  // Output:
  // Key: a, Value: 1
  // Key: b, Value: 2
  // Key: c, Value: 3
  var newMap = map.map((key, value) => MapEntry(key, value * 10));
  print(newMap); // Output: {a: 10, b: 20, c: 30}
  // Getting default values
  var value = map.putIfAbsent('d', () => 4);
  print(value); // Output: 4
  print(map); // Output: {a: 1, b: 2, c: 3, d: 4}
  // Accessing keys and values
  print(map.keys); // Output: (a, b, c, d)
  print(map.values); // Output: (1, 2, 3, 4)
  // Entries
  print(map
      .entries); // Output: (MapEntry(a: 1), MapEntry(b: 2), MapEntry(c: 3), MapEntry(d: 4))
}
```

## Comments

- Comments help explain code for better understanding. They are not executed by the compiler and serve as documentation.

```dart
/// This sis Documentation Comment

/// This function prints a greeting message

// This is a single line comment

/* This is
a multi line
comment */

print("Hello World")
```

## Operators

- Operators are special symbols used to perform operations on values or variables.

### Arithmetic Operators

- Arithmetic operators are used for basic math operations. They work with numbers to perform calculations
- `+` (Addition): Adds two numbers.
- `-` (Subtraction): Subtracts one number from another.
- `*` (Multiplication): Multiplies two numbers.
- `/` (Division): Divides one number by another and gives a decimal result.
- `~/` (Integer Division): Divides and gives the whole number part of the result.
- `%` (Modulus): Gives the remainder of a division.

```dart
void main() {
  int a = 2;
  int b = 3;
  print("Sum (a + b) = ${a + b}");
  print("Difference (a - b) = ${a - b}");
  print("Negation (-(a - b)) = ${-(a - b)}");
  print("Product (a * b) = ${a * b}");
  print("Division (b / a) = ${b / a}");
  print("Quotient (b ~/ a) = ${b ~/ a}");
  print("Remainder (b % a) = ${b % a}");
}
```

### Relational Operators

- Relational operators compare values and give a result that tells whether a condition is true or false.
- `>` (Greater than): Checks if one value is larger than another.
- `<` (Less than): Checks if one value is smaller than another
- `>=` (Greater than or equal to): Checks if one value is larger or equal to another.
- `<=` (Less than or equal to): Checks if one value is smaller or equal to another.
- `==` (Equal to): Checks if two values are the same.
- `!=` (Not equal to): Checks if two values are different.

```dart
void main() {
  int a = 2;
  int b = 3;
  print("a > b: ${a > b}");
  print("a < b: ${a < b}");
  print("a >= b: ${a >= b}");
  print("a <= b: ${a <= b}");
  print("a == b: ${a == b}");
  print("a != b: ${a != b}");
}
```

### Type Test Operators

- These operators are used to check the type of a value.
- `is` : Checks if a value is of a specific type.
- `is!` : Checks if a value is not of a specific type.

```dart
void main() {
  String a = 'Hello';
  double b = 3.3;
  print(a is String); // true
  print(b is! int); // true
}
```

### Assignment Operators

- Assignment operators are used to set or update the value of a variable.
- `=` (Equal to): Assigns a value to a variable.
- `??=` (Null-aware assignment): Assigns a value only if the variable is null .

```dart
void main() {
  int a = 5;
  int b = 7;
  var c = a * b;
  print("c = $c");
  var d;
  d ??= a + b;
  print("d = $d");
  d ??= a - b;
  print("d = $d"); // d remains 12
}
```

### Logical Operators

- Logical operators are used to combine multiple conditions.
- `&&` (AND): Returns `true` if both conditions are true .
- `||` (OR): Returns `true` if at least one condition is true .
- `!` (NOT): Reverses the result of a condition.

```dart
void main() {
  bool a = true;
  bool b = false;
  print("a && b: ${a && b}"); // false
  print("a || b: ${a || b}"); // true
  print("!a: ${!a}"); // false
}
```

### Conditional Operators

- Conditional operators choose between two values based on a condition.
- `condition ? expression1 : expression2` : Executes expression1 if condition is true , otherwise expression2 .
- `expression1 ?? expression2 `: Returns expression1 if it's not null , otherwise expression2 .

```dart
void main() {
  int a = 5;
  var result = (a < 10) ? "Correct" : "Wrong";
  print(result);
  int? n;
  var value = n ?? "n is null";
  print(value);
  n = 10;
  value = n;
  print(value);
}
```

### Cascade Notation Operators

- Cascade notation allows performing multiple operations on the same object.
- `..` (Cascade): Allows you to call multiple methods on the same object

```dart
class Calc {
  int a = 0;
  int b = 0;
  void set(x, y) {
    this.a = x;
    this.b = y;
  }

  void add() {
    var z = this.a + this.b;
    print(z);
  }
}

void main() {
  Calc calculator = new Calc();
  Calc calculator2 = new Calc();
  calculator.set(1, 2);
  calculator.add();
  calculator2
    ..set(3, 4)
    ..add();
}
```

## Standard Input and Output

- To read input from the user, you need to use the `dart:io` library. This library allows you to access the standard input (keyboard) and output (console).
- The `stdin.readLineSync()` function is commonly used to read user input as a string.

- Here’s how to take a string input from the user

```dart
import 'dart:io';

void main() {
  print("Enter your name:");
  // Reading the user's name
  String? name = stdin.readLineSync();
  // Printing a greeting message
  print("Hello, $name! \\nWelcome to Dart!!");
}
```

- To take an integer input, you first read the input as a string and then convert it to an integer using `int.parse()`

```dart
import 'dart:io';

void main() {
  print("Enter your favourite number:");
  // Reading and converting input to integer
  int? number = int.parse(stdin.readLineSync()!);
// Printing the number
  print("Your favourite number is $number");
}
```

- Dart provides two ways to display output
- The `print()` function adds a newline after the output

```dart
import 'dart:io';

void main() {
  print("Welcome to Dart!");
}
```

- The `stdout.write()` function prints text without adding a newline

```dart
import 'dart:io';

void main() {
  stdout.write("Welcome to Dart!");
}
```

- Using `print()` : Moves to the next line after printing.
- Using `stdout.write` : Stays on the same line.

## Conditional Statements

- Conditional statements in Dart are used to make decisions in your code.
- They allow you to execute different blocks of code based on certain conditions.

### `if` Statement

- The `if` statement is used to execute a block of code if a specified condition is true.

```dart
void main() {
  int number = 10;
  if (number > 5) {
    print('The number is greater than 5');
  }
}
```

### `if-else` Statement

- The `if-else` statement allows you to execute one block of code if a condition is true and another block if the condition is false

```dart
void main() {
  int number = 3;
  if (number > 5) {
    print('The number is greater than 5');
  } else {
    print('The number is 5 or less');
  }
}
```

### `if-else if-else` Statement

- This structure allows you to check multiple conditions sequentially

```dart
void main() {
  int number = 7;
  if (number > 10) {
    print('The number is greater than 10');
  } else if (number > 5) {
    print('The number is greater than 5 but 10 or less');
  } else {
    print('The number is 5 or less');
  }
}
```

### `switch` Statement

- The `switch` statement is used to select one of many code blocks to execute.
- It compares the value of a variable to a series of cases and executes the code block associated with the matching case.

```dart
void main() {
  String day = 'Monday';
  switch (day) {
    case 'Monday':
      print('Start of the work week');
      break;
    case 'Friday':
      print('End of the work week');
      break;
    case 'Saturday':
    case 'Sunday':
      print('Weekend');
      break;
    default:
      print('Invalid day');
  }
}
```

### Conditional Expressions (Ternary Operator)

- The ternary operator is a shorthand for `if-else` statements. It allows you to write a simple conditional statement in a single line.

```dart
void main() {
  int number = 10;
  String result =
      number > 5 ? 'The number is greater than 5' : 'The number is 5 or less';
  print(result);
}
```

## Looping and Control Flow

- Looping and control flow statements are essential for executing repetitive tasks and controlling the flow of a program based on various conditions.

### `for` Loop

- The `for` loop is used to execute a block of code a specific number of times.
- It is useful when you know beforehand how many times you want to iterate.

```dart
void main() {
  for (int i = 0; i < 5; i++) {
    print(i);
  }
}
```

### `while` Loop

- The `while` loop repeatedly executes a block of code as long as a specified condition is true.
- It is used when you don't know in advance how many times the loop will run.

```dart
void main() {
  int i = 0;
  while (i < 5) {
    print(i);
    i++;
  }
}
```

### `do-while` Loop

- The `do-while` loop is similar to the `while` loop but ensures that the code block is executed at least once before checking the condition.

```dart
void main() {
  int i = 0;
  do {
    print(i);
    i++;
  } while (i < 5);
}
```

### `for-in` Loop

- The `for-in` loop is used to iterate over elements in a collection such as a list or a map.
- It is useful for looping through items in a collection without needing an index.

```dart
void main() {
  List<String> fruits = ['Apple', 'Banana', 'Cherry'];
  for (var fruit in fruits) {
    print(fruit);
  }
}
```

### `break` Statement

- The `break` statement is used to exit a loop before its condition becomes false. It immediately terminates the innermost loop.

```dart
void main() {
  for (int i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
    print(i);
  }
}
```

### `continue` Statement

- The `continue` statement is used to skip the rest of the code inside the current iteration of a loop and proceed with the next iteration.

```dart
void main() {
  for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      continue;
    }
    print(i);
  }
}
```

### Labels

- Labels can be used with `break` and `continue` statements to specify which loop to break out of or continue. This is useful in nested loops.

```dart
outerLoop: for (int i = 0; i < 5; i++) {
	for (int j = 0; j < 5; j++) {
		if (j == 3) {
		break outerLoop;
		}
	print('$i, $j');
	}
}
```

## Functions

- Functions are blocks of code designed to perform a specific task.
- They help in organizing and reusing code, making programs more modular and easier to manage

### Built-in Function

- Built-in functions are predefined functions provided by the programming language. They are readily available and do not require you to define them
- In dart, `print()`, `int.parse()`, `List.add()`, `sqrt()` etc are built-in functions

### User Defined Functions

- User-defined functions are those that you create yourself to perform specific tasks that are not covered by built-in functions.
- They allow you to encapsulate reusable logic in your code
- In Dart, you define a function using the `returnType` followed by the `functionName` , a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

```dart
int add(int a, int b) {
	return a + b;
}
```

- To use a function, you call it by its name and provide the necessary arguments

```dart
void main() {
	int result = add(5, 3);
	print(result); // Output: 8
}
```

- If a function does not return a value, you use `void` as the return type.

```dart
void greet(String name) {
	print('Hello, $name!');
}
```

#### Operational Parameters

- Dart functions can have optional parameters.
- **Positional Optional Parameters**: Enclosed in square brackets.

```dart
void printDetails(String name, [int age = 0]) {
  print('Name: $name, Age: $age');
}

void main() {
  printDetails('Alice'); // Output: Name: Alice, Age: 0
  printDetails('Bob', 25); // Output: Name: Bob, Age: 25
}
```

- **Named Optional Parameters**: Enclosed in curly braces

```dart
void printDetails({required String name, int age = 0}) {
  print('Name: $name, Age: $age');
}

void main() {
  printDetails(name: 'Alice'); // Output: Name: Alice, Age: 0
  printDetails(name: 'Bob', age: 25); // Output: Name: Bob, Age: 25
}
```

#### Arrow Functions

- For simple functions with a single expression, you can use the arrow syntax for conciseness.

```dart
int add(int a, int b) => a + b;
```

#### Anonymous Functions

- Anonymous functions (or lambda functions) are functions without a name. They are often used as arguments to other functions.

```dart
void main() {
  var numbers = [1, 2, 3, 4];
  // Anonymous Function
  var doubled = numbers.map((number) => number * 2);
  print(doubled); // Output: (2, 4, 6, 8)
}
```

#### Higher-Order Functions

- Functions that take other functions as parameters or return functions are called higher-order functions.

```dart
void performOperation(int a, int b, int Function(int, int) operation) {
  print(operation(a, b));
}

int add(int x, int y) => x + y;
int multiply(int x, int y) => x * y;
void main() {
  performOperation(5, 3, add); // Output: 8
  performOperation(5, 3, multiply); // Output: 15
}
```

### Difference Between Built-in and User-Defined Functions

**Origin:**

- Built-in functions are provided by the programming language.
- User-defined functions are created by the programmer.

**Availability:**

- Built-in functions are always available and can be used without any prior definition.
- User-defined functions must be defined before they can be used.

**Flexibility:**

- Built-in functions have fixed functionality as defined by the language.
- User-defined functions can be customized to perform any task you need.

**When to Use Each:**

- **Built-in Functions**: Use these whenever possible, as they are optimized and tested for performance.
- **User-Defined Functions**: Use these when you need custom logic that is not provided by built-in functions or when you want to encapsulate repeated code for better reusability and readability.

## Object-Oriented Programming (OOP)

- Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to design and structure software.
- Dart, being an object-oriented language, allows you to use OOP principles to create reusable, modular, and maintainable code

- **Class**: A blueprint for creating objects. It defines the properties (attributes) and methods (functions) that the objects created from the class will have.
- **Object**: An instance of a class. It is created based on the class blueprint and can use the properties and methods defined in the class.

```dart
// Define a class
class Person {
  // Properties
  String name;
  int age;
  // Constructor
  Person(this.name, this.age);
// Method
  void greet() {
    print('Hello, my name is $name and I am $age years old.');
  }
}

void main() {
  // Create an object of the class
  Person person = Person('Alice', 30);
  person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
}
```

### `this` Keyword

- In Dart, the this keyword refers to the current instance of the class in which it is used.
- It is primarily used to distinguish between class properties and parameters with the same name, and to access the current object’s members
- **Key Uses of `this` Keyword**
  - **Accessing Instance Variables**: Use `this` to access instance variables and methods of the current object.
  - **Differentiating Between Instance Variables and Parameters**: Use `this` to differentiate between instance variables and parameters or local variables when they have the same name.
  - **Passing the Current Object**: Use `this` to pass the current object as a parameter to other methods or constructors.

#### Accessing Instance Variables

- When you want to refer to instance variables within a class method, you can use `this` to clarify that you are referring to the current object's variables.

```dart
class Person {
  String name;
  int age;
  Person(this.name,
      this.age); // Constructor with parameter names same as instance variables
  void printInfo() {
    print('Name: ${this.name}');
    print('Age: ${this.age}');
  }
}

void main() {
  Person person = Person('Alice', 30);
  person.printInfo();
}
```

#### Differentiating Between Instance Variables and Parameters

- When constructor parameters or local variables have the same names as instance variables, `this` helps to distinguish them

```dart
class Rectangle {
  int width;
  int height;
  Rectangle(int width, int height) {
    this.width = width; // `this.width` refers to the instance variable
    this.height = height; // `this.height` refers to the instance variable
  }
  void display() {
    print('Width: $width, Height: $height');
  }
}

void main() {
  Rectangle rect = Rectangle(10, 20);
  rect.display();
}
```

#### Passing the Current Object

- You can use `this` to pass the current object as a parameter to other methods or constructors.

```dart
class Box {
  int length;
  Box(this.length);
  void describe(Box other) {
    print('Comparing this box with another box of length ${other.length}');
  }

  void compare() {
    describe(this); // Passing the current object to the method
  }
}

void main() {
  Box box1 = Box(15);
  Box box2 = Box(10);
  box1.compare();
  // Output: Comparing this box with another box of length 15
}
```

## Encapsulation

- Encapsulation is the concept of hiding the internal state of an object and requiring all interaction to be performed through an object's methods.
- This is done to protect the object's integrity by preventing outside interference and misuse.

```dart
class BankAccount {
  // Private property
  double _balance;
// Constructor
  BankAccount(this._balance);
  // Method to deposit money
  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
    }
  }

  // Method to withdraw money
  void withdraw(double amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
    }
  }

  // Method to get the balance
  double getBalance() {
    return _balance;
  }
}

void main() {
  BankAccount account = BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  print('Balance: ${account.getBalance()}'); // Output: Balance: 1300.0
}
```

## Inheritance

- Inheritance allows a class to inherit properties and methods from another class.
- The class that inherits is called the "**subclass**" or "**derived class**," and the class being inherited from is called the "**superclass**" or "**base class**."
- Dart supports Single Inheritance, Multi-level Inheritance, Hierarchical Inheritance.
- We will use `extends` keyword to inherit a class

### Single Inheritance

- Single inheritance occurs when a class inherits from only one superclass. In Dart, all classes inherit from the `Object` class by default.

```dart
// Parent class
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  void bark() {
    print('Dog is barking');
  }
}

void main() {
  var dog = Dog();
  dog.eat();  // Inherited method
  dog.bark(); // Method of the subclass
}
```

### Multi-Level Inheritance

- Multi-level inheritance occurs when a derived class inherits from another derived class. This forms a chain of inheritance.

```dart
// Grandparent class
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

// Parent class
class Dog extends Animal {
  void bark() {
    print('Dog is barking');
  }
}

// Child class inheriting from Dog
class Labrador extends Dog {
  void play() {
    print('Labrador is playing fetch');
  }
}

void main() {
  var labrador = Labrador();
  labrador.eat();   // Inherited from Animal
  labrador.bark();  // Inherited from Dog
  labrador.play();  // Method of the subclass
}
```

### Hierarchical Inheritance

- Hierarchical inheritance involves multiple derived classes inheriting from the same base or superclass.

```dart
// Parent class
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

// Child class 1
class Dog extends Animal {
  void bark() {
    print('Dog is barking');
  }
}

// Child class 2
class Cat extends Animal {
  void meow() {
    print('Cat is meowing');
  }
}

void main() {
  var dog = Dog();
  var cat = Cat();

  dog.eat();  // Inherited method
  dog.bark(); // Method of Dog

  cat.eat();  // Inherited method
  cat.meow(); // Method of Cat
}
```

## Polymorphism

- Polymorphism allows methods to do different things based on the object it is acting upon.
- It enables a single interface to represent different underlying forms (data types).

```dart
// Base class
class Shape {
  void draw() {
    print('Drawing a shape.');
  }
}

// Subclass
class Circle extends Shape {
  @override
  void draw() {
    print('Drawing a circle.');
  }
}

// Subclass
class Square extends Shape {
  @override
  void draw() {
    print('Drawing a square.');
  }
}

void main() {
  Shape shape1 = Circle();
  Shape shape2 = Square();
  shape1.draw(); // Output: Drawing a circle.
  shape2.draw(); // Output: Drawing a square.
}
```

## Abstraction

- Abstraction involves hiding complex implementation details and showing only the necessary features of an object.
- This is typically achieved using abstract classes.

```dart
// Abstract class
abstract class Shape {
  void draw(); // Abstract method
}

// Concrete class
class Triangle extends Shape {
  @override
  void draw() {
    print('Drawing a triangle.');
  }
}

void main() {
  Shape shape = Triangle();
  shape.draw(); // Output: Drawing a triangle.
}
```

## Constructors and Initialization

- Constructors are special methods used to initialize objects. Dart allows you to define named and default constructors.

```dart
class Car {
  String make;
  String model;
  // Default constructor
  Car(this.make, this.model);
  // Named constructor
  Car.withDefaults()
      : make = 'Unknown',
        model = 'Unknown';
}

void main() {
  Car car1 = Car('Toyota', 'Corolla');
  print('Car 1: ${car1.make} ${car1.model}');
  // Output: Car 1: Toyota Corolla
  Car car2 = Car.withDefaults();
  print('Car 2: ${car2.make} ${car2.model}');
  // Output: Car 2: Unknown Unknown
}
```

## Questions

1. What is Dart Programming? Describe Characteristics of Dart.
2. Discuss Data Types in Dart.
3. Discuss Dart Conditional statement with example.
4. Explain Dart looping with example.
5. Discuss function in Dart.
6. Explain object oriented concepts in Dart.
7. What is widget?
8. Explain stateful widgets life cycle.
9. What is state in flutter?
10. Explain the layers of flutter application.
11. Explain Gesture in detail.

---
