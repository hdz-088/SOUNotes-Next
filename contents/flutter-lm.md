---
title: Flutter Lab Manual
slug: flutter-lm
semester: 3
image: flutter/fluttercover.png
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

**MCQs:**

1. B
2. C
3. D

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

**MCQs:**

1. A
2. B
3. A

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

**MCQs:**

1. B
2. A
3. C

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

**MCQs:**

1. B
2. B

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

**MCQs:**

1. B
2. A
3. B

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

**MCQs:**

1. A
2. B

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

**MCQs:**

1. B
2. A

---

## Experiment 08

**Aim:** Create a basic form in Flutter with text input, a drop-down list, and simple validation.

**Description:**  
In this experiment, you will create a simple form in Flutter with a text input field for the user's name and a drop-down list for gender selection.

**Steps:**

1.  **Create a New Flutter Project:**

    - Open your terminal and navigate to the directory where you want to create the project.
    - Run the following command to create a new Flutter project:

```bash
flutter create simple_form
```

2.  **Navigate to the Project Directory:**

    - Move into your project directory:

```bash
cd simple_form
```

3.  **Edit the Main Dart File:**

    - Open the `lib/main.dart` file in your code editor.
    - Replace the existing code with the following code to create a simple form:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(SimpleFormApp());
}

class SimpleFormApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SimpleFormPage(),
    );
  }
}

class SimpleFormPage extends StatefulWidget {
  @override
  _SimpleFormPageState createState() => _SimpleFormPageState();
}

class _SimpleFormPageState extends State<SimpleFormPage> {
  final _formKey = GlobalKey<FormState>();
  String? _name;
  String? _selectedOption;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Experiment 08: Simple Form Example'),
        backgroundColor: Colors.teal,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your name',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your name';
                  }
                  return null;
                },
                onSaved: (value) => _name = value,
              ),
              const SizedBox(height: 16), // Space between fields
              DropdownButtonFormField<String>(
                decoration: const InputDecoration(
                  labelText: 'Choose an option',
                  border: OutlineInputBorder(),
                ),
                value: _selectedOption,
                items: <String>['Male', 'Female', 'Other'].map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (value) {
                  setState(() {
                    _selectedOption = value;
                  });
                },
                validator: (value) {
                  if (value == null) {
                    return 'Please select an option';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16), // Space between fields
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    // Display a message
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                          content: Text(
                              'Hello, $_name! You are a $_selectedOption.')),
                    );
                  }
                },
                child: const Text('Submit'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

4. **Run the Application:**
   - Ensure a device or emulator is running.
   - Run the app using the Flutter CLI:

```bash
flutter run
```

**Conclusion:**
In this experiment, you created a basic form in Flutter with a text input field and a drop-down list, including simple validation.

**MCQs:**

1. B
2. A

---

## Experiment 09

**Aim:** Create forms in Flutter for user input with validation.

**Description:**
In this experiment, you will create a Flutter form that captures multiple user inputs, such as name, email, password, and gender. You will implement validation to ensure that the user enters valid data in each field before submission.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal and navigate to the directory where you want to create the project.
   - Run the following command to create a new Flutter project:

```bash
flutter create user_input_form
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd user_input_form
```

3. **Edit the Main Dart File:**

   - Open the `lib/main.dart` file in your code editor.
   - Replace the existing code with the following code to create a user input form with validation:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(UserInputFormApp());
}

class UserInputFormApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: UserInputFormPage(),
    );
  }
}

class UserInputFormPage extends StatefulWidget {
  @override
  _UserInputFormPageState createState() => _UserInputFormPageState();
}

class _UserInputFormPageState extends State<UserInputFormPage> {
  final _formKey = GlobalKey<FormState>();
  String? _name;
  String? _email;
  String? _password;
  String? _gender;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Experiment 09: User Input Form'),
        backgroundColor: Colors.blue,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              // Name field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your name',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your name';
                  }
                  return null;
                },
                onSaved: (value) => _name = value,
              ),
              const SizedBox(height: 16),

              // Email field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your email',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your email';
                  } else if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                    return 'Please enter a valid email address';
                  }
                  return null;
                },
                onSaved: (value) => _email = value,
              ),
              const SizedBox(height: 16),

              // Password field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your password',
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your password';
                  } else if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                  }
                  return null;
                },
                onSaved: (value) => _password = value,
              ),
              const SizedBox(height: 16),

              // Gender selection dropdown
              DropdownButtonFormField<String>(
                decoration: const InputDecoration(
                  labelText: 'Select gender',
                  border: OutlineInputBorder(),
                ),
                value: _gender,
                items: <String>['Male', 'Female', 'Other'].map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (value) {
                  setState(() {
                    _gender = value;
                  });
                },
                validator: (value) {
                  if (value == null) {
                    return 'Please select your gender';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),

              // Submit button
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(
                            'Name: $_name\nEmail: $_email\nGender: $_gender'),
                      ),
                    );
                  }
                },
                child: const Text('Submit'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

4. **Run the Application:**
   - Ensure a device or emulator is running.
   - Run the app using the Flutter CLI:

```bash
flutter run
```

**Conclusion:**
In this experiment, you created a user input form in Flutter with multiple fields, including text input, email input, password, and gender selection, with validation applied to each field.

**MCQs:**

1. B
2. A
3. B

---

## Experiment 10

**Aim:** Implement form submission and error handling in Flutter.

**Description:**
In this experiment, you will build a Flutter form that captures user input and handles errors during form submission. If the form is successfully submitted, the input will be processed; otherwise, appropriate error messages will be displayed.

**Steps:**

1. **Create a New Flutter Project:**

   - Open your terminal and navigate to the directory where you want to create the project.
   - Run the following command to create a new Flutter project:

```bash
flutter create form_submission_handling
```

2. **Navigate to the Project Directory:**

   - Move into your project directory:

```bash
cd form_submission_handling
```

3. **Edit the Main Dart File:**

   - Open the `lib/main.dart` file in your code editor.
   - Replace the existing code with the following code to create a form with submission logic and error handling:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(FormSubmissionApp());
}

class FormSubmissionApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FormSubmissionPage(),
    );
  }
}

class FormSubmissionPage extends StatefulWidget {
  @override
  _FormSubmissionPageState createState() => _FormSubmissionPageState();
}

class _FormSubmissionPageState extends State<FormSubmissionPage> {
  final _formKey = GlobalKey<FormState>();
  String? _email;
  String? _password;
  bool _isSubmitting = false;
  String? _errorMessage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Experiment 10: Form Submission & Error Handling'),
        backgroundColor: Colors.deepOrange,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              // Email field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your email',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your email';
                  } else if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                    return 'Please enter a valid email address';
                  }
                  return null;
                },
                onSaved: (value) => _email = value,
              ),
              const SizedBox(height: 16),

              // Password field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Enter your password',
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your password';
                  } else if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                  }
                  return null;
                },
                onSaved: (value) => _password = value,
              ),
              const SizedBox(height: 16),

              // Error message display
              if (_errorMessage != null)
                Padding(
                  padding: const EdgeInsets.only(bottom: 16.0),
                  child: Text(
                    _errorMessage!,
                    style: const TextStyle(color: Colors.red),
                  ),
                ),

              // Submit button
              ElevatedButton(
                onPressed: _isSubmitting
                    ? null
                    : () {
                        if (_formKey.currentState!.validate()) {
                          _submitForm();
                        }
                      },
                child: _isSubmitting
                    ? const CircularProgressIndicator(color: Colors.white)
                    : const Text('Submit'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _submitForm() async {
    setState(() {
      _isSubmitting = true;
      _errorMessage = null;
    });

    _formKey.currentState!.save();

    // Simulate form submission delay and error handling
    await Future.delayed(const Duration(seconds: 2));

    if (_email == 'test@example.com' && _password == 'password123') {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Form submitted successfully!')),
      );
    } else {
      setState(() {
        _errorMessage = 'Invalid email or password';
      });
    }

    setState(() {
      _isSubmitting = false;
    });
  }
}
```

4. **Run the Application:**
   - Ensure a device or emulator is running.
   - Run the app using the Flutter CLI:

```bash
flutter run
```

**Conclusion:**
In this experiment, you implemented form submission with error handling in Flutter. The form includes email and password fields with validation. Upon submission, it checks if the input matches the expected values, and if not, an error message is displayed.

**MCQs:**

1. C
2. C
3. A

---

## Experiment 11

**Aim:** Use local storage (SharedPreferences or SQLite) to persist data locally.

**Description:**
In this experiment, you will store data locally in Flutter using the `SharedPreferences` package, allowing the app to save user input on the device.

**Steps:**

1. **Set Up Flutter Project:**

   - Create a new Flutter project:

```bash
flutter create local_storage
```

- Navigate to the project directory:

```bash
cd local_storage
```

2. **Add SharedPreferences Package:**

   - Open `pubspec.yaml` and add `shared_preferences` under dependencies:

```yaml
dependencies:
  flutter:
    sdk: flutter
    shared_preferences: ^2.0.11
```

- Install the package:

```bash
flutter pub get
```

3. **Edit the Main Dart File:**

   - Replace the existing code in `lib/main.dart` with the following:

```dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(LocalStorageApp());
}

class LocalStorageApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LocalStoragePage(),
    );
  }
}

class LocalStoragePage extends StatefulWidget {
  @override
  _LocalStoragePageState createState() => _LocalStoragePageState();
}

class _LocalStoragePageState extends State<LocalStoragePage> {
  final TextEditingController _controller = TextEditingController();
  String? _savedData;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _savedData = prefs.getString('userInput');
    });
  }

  Future<void> _saveData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('userInput', _controller.text);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Experiment 11: Local Storage Example'),
        backgroundColor: Colors.teal,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: const InputDecoration(
                labelText: 'Enter data',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                _saveData();
                setState(() {
                  _savedData = _controller.text;
                });
              },
              child: const Text('Save Data'),
            ),
            const SizedBox(height: 16),
            Text(
              _savedData == null ? 'No data saved' : 'Saved data: $_savedData',
            ),
          ],
        ),
      ),
    );
  }
}
```

4. **Run the Application:**
   - Ensure a device or emulator is running.
   - Run the app:

```bash
flutter run
```

**MCQs:**

1. B
2. B

---

## Experiment 12

**Aim:** Implement read and write operations to store and retrieve data.

**Description:**
In this experiment, you will implement functionality to read and write data using `SharedPreferences` in Flutter, allowing the app to persist data and retrieve it when needed.

**Steps:**

1.  **Set Up Flutter Project:**

- Create a new Flutter project:

```bash
flutter create read_write_storage
```

- Navigate to the project directory:

```bash
cd read_write_storage
```

2.  **Add SharedPreferences Package:**

- Open `pubspec.yaml` and add `shared_preferences` under dependencies:

```yaml
dependencies:
  flutter:
    sdk: flutter
shared_preferences: ^2.0.11
```

- Install the package:

```bash
flutter pub get
```

3.  **Edit the Main Dart File:**

- Replace the existing code in `lib/main.dart` with the following:

```dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(ReadWriteApp());
}

class ReadWriteApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ReadWritePage(),
    );
  }
}

class ReadWritePage extends StatefulWidget {
  @override
  _ReadWritePageState createState() => _ReadWritePageState();
}

class _ReadWritePageState extends State<ReadWritePage> {
  final TextEditingController _controller = TextEditingController();
  String? _retrievedData;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _retrievedData = prefs.getString('storedData');
    });
  }

  Future<void> _saveData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('storedData', _controller.text);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Experiment 12: Read & Write Operations'),
        backgroundColor: Colors.teal,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: const InputDecoration(
                labelText: 'Enter data',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                _saveData();
              },
              child: const Text('Save Data'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                _loadData();
              },
              child: const Text('Load Data'),
            ),
            const SizedBox(height: 16),
            Text(
              _retrievedData == null
                  ? 'No data retrieved'
                  : 'Retrieved data: $_retrievedData',
            ),
          ],
        ),
      ),
    );
  }
}
```

4. **Run the Application:**
   - Ensure a device or emulator is running.
   - Run the app:

```bash
flutter run
```

**MCQs:**

1. C
2. A
3. D

---
