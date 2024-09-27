---
title: Flutter Lab Manual
slug: flutter-lm
semester: 3
image: flutter/coverlm.png
link:
---

## Experiment 01

**Aim:** Create an application in Flutter using the Flutter CLI.

**Description:**
In this experiment, you will create a new Flutter project and run a simple app using the Flutter CLI to understand the basic workflow of Flutter development.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal.
   - Navigate to your desired directory.
   - Run:

```bash
flutter create my_first_app
```

2. **Navigate to the Project Directory:**

   - Move into your project directory by running:

```bash
cd my_first_app
```

3. **Open the Project in a Code Editor:**

   - Launch your code editor. For Visual Studio Code, use:

```bash
code .
```

4. **Edit the Main Dart File:**

   - Locate and open the main Dart file at `lib/main.dart`.
   - Replace the existing code with the following:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurple,
          title: const Text('Experiment 01'),
        ),
        body: const Center(
          child: Text('Welcome to Flutter!'),
        ),
      ),
    );
  }
}
```

5. **Run the Application:**

   - Ensure a device or emulator is running.
   - Execute:

```bash
flutter run
```

- Choose the target platform if prompted.

---

## Experiment 02

**Aim:** Create a Hello World application in Flutter.

**Description:**
In this experiment, you will create a simple "Hello, World!" application using Flutter to understand the basics of Flutter app development.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal.
   - Navigate to the directory where you want to create your project.
   - Run:

```bash
flutter create hello_world_app
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd hello_world_app
```

3. **Open the Project in a Code Editor:**

   - Launch your code editor. For Visual Studio Code, use:

```bash
code .
```

4. **Edit the Main Dart File:**

   - Open `lib/main.dart` and replace the existing code with:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(HelloWorldApp());
}

class HelloWorldApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurple,
          title: const Text('Experiment 02'),
        ),
        body: const Center(
          child: Text('Hello, World!'),
        ),
      ),
    );
  }
}
```

5. **Run the Application:**

   - Connect your device or start an emulator.
   - Run:

```bash
flutter run
```

---

## Experiment 03

**Aim:** Working with Widgets in Flutter (Text, Container, Row, Column, Padding, Margin, and Alignment).

**Description:**
In this experiment, you will work with various Flutter widgets to understand how to use `Text`, `Container`, `Row`, `Column`, and their properties such as padding, margin, and alignment.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal.
   - Navigate to the directory where you want to create your project.
   - Run:

```bash
flutter create widget_experiment
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd widget_experiment
```

3. **Open the Project in a Code Editor:**

   - Launch your code editor. For Visual Studio Code, use:

```bash
code .
```

4. **Edit the Main Dart File:**

   - Open `lib/main.dart` and replace the existing code with:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurpleAccent,
          title: const Text("Experiment 03"),
        ),
        body: Center(
          child: Container(
            color: Colors.grey[200],
            margin: const EdgeInsets.all(20),
            padding: const EdgeInsets.all(50),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  color: Colors.redAccent,
                  alignment: Alignment.center,
                  child: const Text(
                    "Hello Flutter",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(8),
                      color: Colors.green,
                      height: 100,
                      width: 200,
                      alignment: Alignment.topLeft,
                      child: const Text(
                        "Alignment topLeft",
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.all(8),
                      color: Colors.purpleAccent,
                      height: 100,
                      width: 200,
                      alignment: Alignment.center,
                      child: const Text(
                        "Alignment center",
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.all(8),
                      color: Colors.blue,
                      height: 100,
                      width: 200,
                      alignment: Alignment.bottomRight,
                      child: const Text(
                        "Alignment bottomRight",
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

5. **Run the Application:**

   - Connect your device or start an emulator.
   - Run:

```bash
flutter run
```

---

## Experiment 04

**Aim:** Create a stateless Widget and use it in your main application.

**Description:**
In this experiment, you will define a custom stateless widget and integrate it into your main Flutter application to understand how to create and use reusable widgets.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal.
   - Navigate to the directory where you want to create your project.
   - Run:

```bash
flutter create stateless_widget_experiment
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd stateless_widget_experiment
```

3. **Open the Project in a Code Editor:**

   - Launch your code editor. For Visual Studio Code, use:

```bash
code .
```

4. **Edit the Main Dart File:**

   - Open `lib/main.dart` and replace the existing code with:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurple,
          title: const Text('Experiment 04: Stateless Widget Example'),
        ),
        body: Center(
          child: CustomWidget(),
        ),
      ),
    );
  }
}

class CustomWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      color: Colors.blueAccent,
      child: const Text(
        'Hello from CustomWidget!',
        style: TextStyle(color: Colors.white, fontSize: 20),
      ),
    );
  }
}
```

5. **Run the Application:**

   - Ensure a device or emulator is running.
   - Run:

```bash
flutter run
```

---

## Experiment 05

**Aim:** Create a stateful widget with mutable state.

**Description:**
In this experiment, you will create a stateful widget that maintains mutable state and updates the UI based on user interactions.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal.
   - Navigate to the directory where you want to create your project.
   - Run:

```bash
flutter create stateful_widget_experiment
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd stateful_widget_experiment
```

3. **Open the Project in a Code Editor:**

   - Launch your code editor. For Visual Studio Code, use:

```bash
code .
```

4. **Edit the Main Dart File:**
   - Open `lib/main.dart` and replace the existing code with:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurple,
          title: const Text('Experiment 05: Stateful Widget Example'),
        ),
        body: Center(
          child: CounterWidget(),
        ),
      ),
    );
  }
}

class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text(
          'You have pressed the button this many times:',
        ),
        Text(
          '$_counter',
          style: Theme.of(context).textTheme.headline4,
        ),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: const Text('Increment Counter'),
        ),
      ],
    );
  }
}
```

5. **Run the Application:**

   - Connect your device or start an emulator.
   - Run:

```bash
flutter run
```

---

## Experiment 06

**Aim:** Display images in your app using the image widget.

**Description:**
In this experiment, you will learn how to display images in a Flutter app using local assets.

**Steps:**

1. **Set Up Assets:**

   - Add an image to the `assets` folder in your Flutter project.
   - Update the `pubspec.yaml` file to include the assets:

```yaml
flutter:
  assets:
    - assets/image.jpg
```

2. **Write the Code:**

   - Use the following code to display images assets.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(ImageApp());
}

class ImageApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.teal,
          title: const Text('Experiment 06: Displaying Images (Local sources)'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Image from Asset:', style: TextStyle(fontSize: 20)),
              Image.asset('assets/image.jpg', width: 200, height: 300),
            ],
          ),
        ),
      ),
    );
  }
}
```

3. **Run the Application:**

   - Ensure your device or emulator is running.
   - Execute the following command:

```bash
flutter run
```

**Conclusion:**
This experiment demonstrates how to display images in a Flutter app, both from local assets and via a network URL.

---

## Experiment 07

**Aim:** Load image from both local and network sources.

**Description:**
In this experiment, you will learn how to display images in a Flutter app using both local assets and network sources.

**Steps:**

1. **Set Up Assets:**

   - Add an image to the `assets` folder in your Flutter project.
   - Update the `pubspec.yaml` file to include the assets:

```yaml
flutter:
  assets:
    - assets/image.jpg
```

2. **Write the Code:**

   - Use the following code to display images from both assets and the network.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(ImageApp());
}

class ImageApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.teal,
          title: const Text(
              'Experiment 07: Displaying Images form local and network sources'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Image from Asset:', style: TextStyle(fontSize: 20)),
              Image.asset('assets/image.jpg', width: 200, height: 300),
              const SizedBox(height: 20),
              const Text('Image from Network:', style: TextStyle(fontSize: 20)),
              Image.network(
                'https://t4.ftcdn.net/jpg/04/63/37/51/360_F_463375173_vBKRkUbVoCuS9lpUmhdfCc13pprPr148.jpg',
                width: 500,
                height: 300,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

3. **Run the Application:**
   - Ensure your device or emulator is running.
   - Execute the following command:

```bash
flutter run
```

**Conclusion:**
This experiment demonstrates how to display images in a Flutter app, both from local assets and via a network URL.

---
