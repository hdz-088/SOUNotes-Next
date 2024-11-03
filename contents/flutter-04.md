---
header: FLUTTER-04
title: Flutter-04 Animation
slug: flutter-04
semester: 3
image: /flutter.png
accent: "#037bfd"
link: https://drive.google.com/file/d/1FtzrnJzqrkNDA1IWdwwOYFKivSZLNxbN/view?usp=sharing
---

## Introduction

- **What is Animation?** Animation is a sequence of images or frames that create the illusion of movement.
- **Define**: Animation in Flutter refers to the dynamic transitions or movements applied to widgets over a period of time, often making the UI more interactive and visually appealing.
- **Types of Animations in Flutter:**
  - **Explicit Animation**: More control over the animation with specific start/stop points and time control.
  - **Implicit Animation**: Easier to implement, animates based on changes in property values.

| AnimationController()                                                                                                                                                                        | Tween()                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An **AnimationController** is responsible for controlling the animation's behavior. It lets you define the duration, start, stop, reverse, and repeat the animation.                         | A **Tween** defines the range of values that an animation should interpolate between. It doesn't perform animation itself but specifies the start ( `begin` ) and end ( `end` ) values for the controller to animate. |
| **Key Properties**                                                                                                                                                                           | **Key Properties**                                                                                                                                                                                                    |
| **duration**: Specifies how long the animation should last.                                                                                                                                  | **begin**: The starting value of the animation.                                                                                                                                                                       |
| **vsync** : Reduces unnecessary CPU/GPU work by syncing animation with the screen's refresh rate. It's mandatory and typically provided by using `SingleTickerProviderStateMixin` .          | **end**: The final value after the animation completes.                                                                                                                                                               |
| How to use `AnimationController()`?<br>- Create an AnimationController in the `initState()` method.<br>- Control the animation with methods like `forward()` , `reverse()` , or `repeat()` . | How to use `Tween()`?<br>- Pair a `Tween` with an AnimationController .<br>- Use `.animate()` to bind the `Tween` to the controller.                                                                                  |

### Implicit Animation

- Implicit animations automatically handle the changes in a widget's property, such as size, color, or position, over a period of time.
- Implicit Animations are simple and easy to use for basic property changes.

```dart
import 'package:flutter/material.dart';

class ImplicitAnimationExample extends StatefulWidget {
  @override
  _ImplicitAnimationExampleState createState() => _ImplicitAnimationExampleState();
}

class _ImplicitAnimationExampleState extends State<ImplicitAnimationExample> {
  double _size = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            setState(() {
              _size = _size == 100 ? 200 : 100; // Change size on tap
            });
          },
          child: AnimatedContainer(
            width: _size,
            height: _size,
            color: Colors.blue,
            duration: Duration(seconds: 1), // Animation duration
          ),
        ),
      ),
    );
  }
}
```

### Explicit Animation:

- Explicit animations require manual control over the animation lifecycle, such as starting, stopping, or reversing the animation.
- Explicit Animations offer greater control and flexibility for more complex animations.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Explicit Animation Example',
      home: AnimationExample(),
    );
  }
}

class AnimationExample extends StatefulWidget {
  @override
  _AnimationExampleState createState() => _AnimationExampleState();
}

class _AnimationExampleState extends State<AnimationExample> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  bool _isAnimating = false;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0, end: 300).animate(_controller)
      ..addListener(() {
        setState(() {});
      });
  }

  void _startAnimation() {
    if (!_isAnimating) {
      _isAnimating = true;
      _controller.forward(from: 0).then((_) {
        _isAnimating = false; // Resetting the flag after animation completes
      });
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Explicit Animation'),
      ),
      body: GestureDetector(
        onTap: _startAnimation,
        child: Center(
          child: Container(
            margin: EdgeInsets.only(left: _animation.value),
            width: 100,
            height: 100,
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}
```

## Workflow of Animation in Flutter

- **Set Up the Animation Controller:**
  - The `AnimationController` manages the timing of the animation (when it starts, how long it lasts, and its progress).
  - You must specify `duration` and `vsync` to sync with the screen's refresh rate.

```dart
_controller = AnimationController(
 duration: Duration(seconds: 2),
 vsync: this,
);
```

- **Define a Tween (Optional):**
  - A `Tween` defines the range of values to interpolate between, such as size, color, or opacity. It doesn't animate itself but works with the `AnimationController` .

```dart
_animation = Tween<double>(begin: 100, end: 300).animate(_controller);
```

- **Build the UI with Animated Widgets:**
  - Use `AnimatedBuilder` or similar widgets to rebuild the UI based on the current value of the animation. The widget changes dynamically as the animation progresses.

```dart
AnimatedBuilder(
  animation: _animation,
  builder: (context, child) {
    return Container(
      width: _animation.value, // Animation value updates over time
      height: _animation.value,
      color: Colors.blue,
    );
  },
);
```

- **Start/Control the Animation:**
  - Trigger the animation with methods like `forward()` , `reverse()` , or `repeat()` .

```dart
_controller.forward(); // Starts the animation
```

- **Dispose the Controller:**
  - Always dispose of the `AnimationController` when it's no longer needed to free up resources

```dart
@override
void dispose() {
	_controller.dispose();
	super.dispose();
}
```

### Working Example of Flutter Animation:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Spring Animation Example',
      home: AnimationExample(),
    );
  }
}

class AnimationExample extends StatefulWidget {
  @override
  _AnimationExampleState createState() => _AnimationExampleState();
}

class _AnimationExampleState extends State<AnimationExample> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 2000),
      vsync: this,
    )..addListener(() {
        setState(() {});
      });

    _animation = Tween<double>(begin: 0, end: 300).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.elasticOut,
      ),
    );
  }

  void _startAnimation() {
    _controller.forward(from: 0).then((_) {
      // Animation completed
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Spring Animation'),
      ),
      body: GestureDetector(
        onTap: _startAnimation,
        child: Center(
          child: Container(
            margin: EdgeInsets.only(left: _animation.value),
            width: 100,
            height: 100,
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}
```

## Introduction to Package

- **Package** is a collection of reusable code, assets, and functionality that you can integrate into your project to extend its features.
- **Types of Packages**:
  - Dart Packages: Contain pure Dart code.
  - Flutter Packages: Contain both Dart and Flutter-specific code (including widgets and plugins)
- To use a package, add it to your `pubspec.yaml` file

```yaml
dependencies:
 http: ^0.13.3 # Example of the HTTP package for network
requests
```

- Then, import and use the package in your Flutter code

```dart
import 'package:http/http.dart' as http;

var response = await http.get(Uri.parse('https://packagelin
k.com'));
```

### Using Dart Packages

- **Find a Package:**
  - Visit `Pub.dev` website: which is the official package repository for Dart and Flutter.
  - Search for Packages: Use the search bar to find the package you need
- **Add the Package to Your Project:**
  - Open `pubspec.yaml` : This file is located in the root directory of your Flutter project.
  - Add Dependency: Under the `dependencies` section, add the package name and version. You can specify a version or use a caret (^) to allow updates.

```yaml
dependencies:
 flutter:
	sdk: flutter
 http: ^0.13.3 # Example: Adding the HTTP package
```

- Save the File: After adding the package, save the `pubspec.yaml` file. This action will trigger Flutter to download the package.

- **Import the Package:**
  - In your Dart file, import the package using the `import` statement.

```dart
import 'package:http/http.dart' as http; // Importing the HTTP package
```

- **Use the Package:**

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http; // Importing the HTTP package
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'HTTP Package Example',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _data = "Press the button to fetch quote";

  Future<void> fetchData() async {
    final response = await http.get(Uri.parse('https://dummyjson.com/quotes/random'));

    if (response.statusCode == 200) {
      final Map<String, dynamic> data = json.decode(response.body);
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Quote'),
            content: Text("${data['quote']} \n\n-${data['author']}"),
            actions: [
              TextButton(
                child: Text('Close'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        },
      );
    } else {
      throw Exception('Failed to load data');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('HTTP Package Example'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(_data),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: fetchData,
              child: Text('Fetch Quote'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Develop a Flutter Plugin Package

- **Create the Plugin:**
  - Use the Flutter CLI command `flutter create --template=plugin my_flutter_plugin` to scaffold a new plugin project
- **Understand the Structure:**
  - The plugin will contain:
  - `lib/my_flutter_plugin.dart` : The main Dart file for the plugin API.
  - `android/src/main/kotlin/... `: Android-specific implementation.
  - `ios/Classes/MyFlutterPlugin.swift` : iOS-specific implementation.
- **Write the Dart API:**
  - Define the public interface of the plugin in `lib/my_flutter_plugin.dart` , specifying methods that will be callable from Flutter.
- **Implement Platform-Specific Code:**
  - In the Android Kotlin file, implement the methods defined in Dart to handle platform-specific logic.
  - In the iOS Swift file, do the same for iOS functionality.
- **Test the Plugin:**
  - Create a Flutter app and add your plugin as a dependency in the `pubspec.yaml` .
  - Use the methods from your plugin within the app to verify that everything works as expected.

## Accessing Rest API

Accessing a REST API in Flutter involves sending HTTP requests to a server and handling the responses. Here's a step-by-step guide on how to do it, along with explanations of each part.

- **Step-01: Add Dependencies**
  - First, you need to add the `http` package to your project. This package simplifies making HTTP requests.
  - Open your `pubspec.yaml` file.
  - Add the following dependency under `dependencies` :

```yaml
dependencies:
  flutter:
  sdk: flutter
  http: ^0.13.3 # Check for the latest version on pub.dev
```

- Save the file and run flutter pub get to install the package.

- **Step-02: Import the Package:**

```dart
import 'package:http/http.dart' as http;
```

- **Step-03: Create a Function to Fetch Data:**
  - You can create a function that fetches data from the API. This function will make an HTTP GET request and process the response.

```dart
Future<void> fetchData() async {
 final response = await http.get(Uri.parse('<https://jsonplaceholder.typicode.com/posts>'));
 if (response.statusCode == 200) {
 // If the server returns a 200 OK response, parse the data
 print(response.body); // Handle the response data
 } else {
 // If the server does not return a 200 OK response, throw an error
 throw Exception('Failed to load data');
 }
}
```

- **Step-04: Call the Function:**
  - You can call this `fetchData` function within your Flutter app, for example, in the `initState` method of a stateful widget.

```dart
@override
void initState() {
 super.initState();
 fetchData(); // Call the fetch function when the widget
initializes
}
```

- **Step-05: Parsing JSON Data:**
  - If the API returns JSON data, you can use the `dart:convert` package to decode it.

```dart
import 'dart:convert'; // Import for JSON parsing
import 'package:http/http.dart' as http; // Import for HTTP requests

Future<void> fetchData() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));

  if (response.statusCode == 200) {
    // Decode the JSON response
    List<dynamic> data = json.decode(response.body);
    print(data); // Do something with the data
  } else {
    throw Exception('Failed to load data');
  }
}
```

## Accessing Product service API

#### Example Use Case: Fetching Product Data

- Here’s an explanation of how you can retrieve product data from an API in Flutter:

1. Create a Function to Fetch Products:
   - This function sends a GET request to the API to retrieve product data.
2. Handle the Response:
   - If the request is successful, you will receive a JSON response, typically containing product details like the product ID, name, description, price, etc.
3. Parse the JSON:
   - Use `dart:convert` to parse the JSON response into Dart objects. You can map the JSON data to a Dart model class for easier access
4. Display the Data:
   - Once you’ve fetched and parsed the product data, you can display it in a list or grid using Flutter’s UI widgets like ListView or GridView

## SQLite

- SQLite is a lightweight, embedded database that is commonly used for local data storage in mobile apps, including Flutter applications.
- In Flutter, the `sqflite` package provides a way to interact with SQLite databases. It allows you to perform operations like creating tables, inserting, updating, querying, and deleting data in a local database stored on the device.
- **Key Features of SQLite in Flutter**
  - **Local Data Storage**: Data is stored locally on the user's device.
  - **SQL Queries**: You can use SQL queries to interact with the database.
  - **Offline Mode**: It enables offline capabilities in your app.
  - **Persistent Storage**: Data remains even if the app is closed.

### Steps to Use SQLite in Flutter

1. Add the `sqflite` and `path` Packages:
   - First, add the required dependencies in the pubspec.yaml file.

```yaml
dependencies:
  sqflite: ^2.0.0+4 # Ensure you're using the latest version
  path: ^1.8.0 # Required to define database path
```

2. Import the Required Packages:

   - Import `sqflite` to interact with the database and `path` to help find the correct location for storing the database.

3. Create a Database:

   - Use the `openDatabase()` function to open or create a database. You define the database schema by creating tables using SQL.

4. Perform CRUD Operations:

   - SQLite allows you to perform the following operations:
     - **Create**: Insert new rows of data.
     - **Read**: Query existing data.
     - **Update**: Modify existing data.
     - **Delete**: Remove data

5. Close the Database:
   - After finishing operations, it’s a good practice to close the database connection using the `close()` function.

### SQLite Workflow in Flutter

1. **Database Path**: Define the path where the database will be stored on the device.
2. **Open/Initialize the Database**: Open or create the database and define the schema (tables and columns).
3. **Insert/Query Data**: Use SQL commands to insert, query, update, or delete data from the database.
4. **Close the Database**: Close the database connection when it’s no longer needed.

### CRUD Operations in SQLite:

- **Create Table**: Define your database schema by creating tables for storing data.
- **Insert Data**: Insert records into the database.
- **Read Data**: Query data to retrieve it, usually using SQL’s SELECT statement.
- **Update Data**: Modify existing data in the database.
- **Delete Data**: Remove records from the database.

### Example Use Case:

- **User Authentication**: Store user credentials locally for offline login.
- **Product Catalog**: Store a product catalog that can be accessed offline.
- **Notes App**: Save user-created notes that persist across app sessions.

## Cloud Fire Store:

- Cloud Firestore is a NoSQL database from Google’s Firebase platform that allows you to store, sync, and query data in real-time for your Flutter apps.
- It provides seamless synchronization between your app and the cloud, enabling both online and offline functionality.
- Unlike SQLite (which is local), Firestore stores data in the cloud, making it suitable for apps that require real-time collaboration or data sharing across devices.

### Key Features of Cloud Firestore:

- **Real-time Sync**: Automatically syncs data across devices and the cloud in real-time.
- **NoSQL Structure**: Uses collections and documents to store data, not rows and columns like SQL databases.
- **Scalable**: Designed to scale as your app grows without managing infrastructure.
- **Offline Support**: Data can be accessed offline, and changes are synced when the user comes online.
- **Security Rules**: You can define rules to control who can access and modify data.

### Structure

1. **Collections**: Firestore organizes data into collections, which are similar to tables in SQL databases. Each collection can hold multiple documents
2. **Documents**: Collections contain documents, and each document holds data in key-value pairs (fields). Documents can also have sub-collections.
3. **Fields**: Fields in a document store individual data, such as strings, numbers, arrays, or other data types

### Steps to Use Cloud Firestore in Flutter:

1. Add Firebase Dependencies:
   - Add the Firebase and Firestore dependencies in `pubspec.yaml`
2. Initialize Firebase:
   - Before using Firestore, initialize Firebase in your app, usually done in the `main()` function.
3. Access Firestore:
   - Use the Firestore instance to perform operations like adding, reading, updating, and deleting data.
4. CRUD Operations:
   - **Create**: Add a new document to a collection.
   - **Read**: Retrieve documents from a collection.
   - **Update**: Modify existing documents.
   - **Delete**: Remove documents.

### Example Use Case:

- **User Profiles**: Store and sync user profiles in real-time across devices.
- **Chat Applications**: Messages are instantly synced between users with real-time updates.
- **Product Inventory**: Keep track of inventory, syncing data between multiple devices and the cloud.

## Internalization in Flutter

- Internationalization (i18n) in Flutter enables apps to support multiple languages, regional formats, and cultural preferences, making them accessible to users worldwide.

### Key Concepts:

- **Localization (l10n)**: The process of translating content into different languages and adapting to regional formats.
- **Locale**: Represents the language and region (e.g., en_US for English US).
- **intl Package**: Helps manage localized text, dates, numbers, and formatting

### Steps for Implementing i18n in Flutter

1. Add Dependencies: Include `flutter_localizations` and `intl` in your `pubspec.yaml`
2. Define Supported Locales: Set supported locales in the `MaterialApp` widget.
3. Create .arb Files: Create separate `.arb` (Application Resource Bundle) files (JSON-like) for each language with key-value pairs for translations.
4. Use `LocalizationDelegates`: Set up delegates to load the appropriate localized resources.
5. Access Localized Strings: Use the generated code to display text based on the current locale.
6. Automatic Locale Detection: The app can automatically detect and adapt to the user's device language settings.

### Benefits:

- **Global Reach**: Supports multiple languages for a wider audience
- **Cultural Adaptation**: Adjusts dates, numbers, and currencies based on locale.

## Testing in Flutter

- Testing in Flutter is an essential practice that ensures the quality, reliability, and performance of your applications.
- Flutter provides a comprehensive testing framework that allows developers to write unit tests, widget tests, and integration tests.

### Types of Testing in Flutter

1. **Unit Testing**:
   - **Purpose**: Tests individual functions, methods, or classes in isolation to ensure they behave as expected.
   - **Tools**: Uses the test package, which provides functionalities for writing and running tests.
   - **Example**: Testing a function that calculates the sum of two numbers.
2. **Widget Testing**:
   - **Purpose**: Tests a single widget’s behavior and appearance, including its interaction with the user interface.
   - **Tools**: Uses the `flutter_test` package, allowing you to build a widget in a test environment and interact with it.
   - **Example**: Testing a button click that changes the text displayed on the screen.
3. **Integration Testing**:
   - **Purpose**: Tests the complete app or a large portion of it, ensuring that various parts work together as expected.
   - **Tools**: Uses the `integration_test` package, which runs tests on a real device or emulator.
   - **Example**: Testing a user flow, such as logging in, navigating to a different screen, and performing actions.

### Benefits of Testing in Flutter

- **Early Bug Detection**: Identify and fix issues early in the development process, reducing costs and time spent on debugging later.
- **Improved Code Quality**: Encourages better code design and architecture, making the codebase easier to maintain and refactor.
- **Confidence in Changes**: Ensures that new features and bug fixes don’t break existing functionality, providing confidence when modifying code.
- **Documentation**: Tests can serve as documentation for how code is expected to behave.

### Testing Framework in Flutter

- **Test Runner**: Automatically discovers and runs tests.
- **Matchers**: Provide a way to specify expectations and compare actual values in tests.
- **Widgets**: Use `WidgetTester` to interact with widgets in a test environment.

## Deployment of Flutter App on Android

- Deploying a Flutter app on Android involves several key steps, from preparing your app for release to uploading it to the Google Play Store.
- Here’s a concise guide on how to do it.

1. Set Up Your App for Release:
   - **Update** `pubspec.yaml` : Ensure all dependencies are up to date and set your app version and build number.
   - **Remove Debug Code**: Make sure to comment out or remove any debug prints or testing-related code.
2. Generate a Release Build:
   - Run the following command in your terminal to build the APK (Android Package) for release:
   - This command generates an APK file in the `build/app/outputs/apk/release/` directory.

```bash
flutter build apk --release
```

3. Signing the APK:
   - To publish your app, you need to sign it with a release key.
   - Create a keystore file if you don't have one

```bash
keytool -genkey -v -keystore your_keystore_name.jks - keyalg RSA -keysize 2048 -validity 10000 -alias your_ alias_name
```

- Update the `android/app/build.gradle` file with the signing configuration:

```bash
android {
    ...
    signingConfigs {
        release {
            keyAlias 'your_alias_name'
            keyPassword 'your_key_password'
            storeFile file('path_to_your_keystore.jks')
            storePassword 'your_store_password'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

4. Build the Signed APK:
   - Use the following command to build the signed APK:
   - This will create a signed APK file that can be distributed

```bash
flutter build apk --release
```

5. Test the Release APK:
   - Before uploading, install the APK on a physical device to ensure it runs as expected.

```bash
adb install build/app/outputs/apk/release/app-release.ap k
```

6. Prepare for Play Store Submission:
   - Create a developer account on the Google Play Console.
   - Prepare app details (description, screenshots, icons, etc.) for your app listing.
7. Upload to Google Play Store:
   - Go to the Google Play Console, select "Create Application," and fill in the required details.
   - Upload your signed APK and complete the app submission process.
8. Review and Publish:
   - After submitting, your app will undergo a review process by Google. Once approved, it will be available on the Play Store

## Questions

1. Explain the methods of REST API.
2. What is animation in Flutter, and why is it important for mobile app development?
3. Describe the types of testing in Flutter and the steps involved in widget testing with an example.
4. What is SQLite and how can it be used in a Flutter application?
5. What is the purpose of the internationalization package in Flutter? Provide an example of how it can be used for localization.

---
