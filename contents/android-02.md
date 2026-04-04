---
header: AAD-02
title: Android-02 Android Fundamentals
slug: android-02
semester: 6
image: /aad.jpg
accent: "#1a692c"
link:
---

## Android Application Development Tools

- Android application development requires different tools for coding, designing, testing, and debugging
- Tools like Eclipse, Kony, Xamarin, and Android Studio help developers build applications efficiently
- Each tool has its own features and use cases

### Eclipse

- Eclipse was an early IDE used for Android development
- It required **ADT** (Android Development Tools) plugin to develop apps
- Applications were mainly developed using Java
- It is now discontinued for Android development
- It was used for basic Android app development in earlier stages

### Kony

- Kony is a cross-platform mobile application development framework
- It allows developers to build apps using a single code base
- Supports Android, iOS, and web applications
- Mostly used for enterprise-level applications
- It is useful when companies want one app for multiple platforms

### Xamarin

- Xamarin is developed by Microsoft
- It uses `C#` and `.NET` framework for application development
- It allows code sharing across Android, iOS, and Windows platforms
- Provides high performance and native-like apps
- It is useful for developers familiar with `C#` and `.NET`

### Android Studio

- Android Studio is the official IDE for Android development
- Developed by Google and based on IntelliJ IDEA
- Supports Java and Kotlin programming languages
- Provides built-in tools like emulator, debugger, and UI designer
- It is widely used for modern Android app development

## Comparison of Development Tools

| Feature          | Eclipse            | Kony                       | Xamarin                  | Android Studio    |
| ---------------- | ------------------ | -------------------------- | ------------------------ | ----------------- |
| Developer        | Eclipse Foundation | Kony Inc.                  | Microsoft                | Google            |
| Language         | Java               | JavaScript / Hybrid        | C# (.NET)                | Java / Kotlin     |
| Platform Support | Android only       | Android, iOS, Web          | Android, iOS, Windows    | Android only      |
| Type             | IDE (Old)          | Cross-platform framework   | Cross-platform framework | Official IDE      |
| Status           | Discontinued       | Enterprise use             | Active                   | Most widely used  |
| Ease of Use      | Moderate           | Easy (for enterprise apps) | Moderate                 | Easy and powerful |

## Android Development Tools

- Android development requires specific tools to design, develop, test, and debug applications.
- Android Studio, Android SDK, and AVD are essential tools used in Android application development.

- **Android Studio**
  - Android Studio is the official Integrated Development Environment (IDE) for Android development.
  - It is developed by Google and is based on IntelliJ IDEA.
  - It supports programming languages such as Java and Kotlin.
  - It provides built-in tools like code editor, emulator, debugger, and UI designer.
  - Android Studio helps developers write code, design layouts, run applications, and debug errors efficiently.

- **Android SDK (Software Development Kit)**
  - Android SDK stands for Software Development Kit.
  - It provides the necessary APIs, libraries, and tools required to develop Android applications.
  - SDK includes platform tools, build tools, and debugging tools.
  - It allows developers to compile, test, and package applications.
  - Without Android SDK, Android application development is not possible.

- **Android Virtual Device (AVD)**
  - AVD is an emulator that simulates a real Android device on a computer.
  - It allows developers to test applications without using a physical mobile device.
  - AVD supports different Android versions, screen sizes, and hardware configurations.
  - It helps test application behavior under various device conditions.

## Steps to Set up the Android Development Environment

- To start developing Android applications, a proper development environment must be set up.
- The setup includes installing required software and configuring tools needed for coding, testing, and running Android apps.

**1. Install Java Development Kit (JDK)**

- Java Development Kit is required because Android applications are mainly developed using Java or Kotlin.
- Download and install the latest version of JDK from the official website.
- After installation, configure the system path if required.

**2. Install Android Studio**

- Download Android Studio from the official Android developer website.
- Run the installer and follow the setup instructions.
- Android Studio includes the Android SDK and other necessary development tools.

**3. Download and Configure Android SDK**

- Android SDK provides APIs, libraries, and tools required to build Android applications.
- During Android Studio installation, the SDK is usually installed automatically.
- Additional SDK platforms and tools can be downloaded using the SDK Manager.

**4. Set Up Android Virtual Device (AVD)**

- Open AVD Manager in Android Studio.
- Create a new virtual device by selecting device type and Android version.
- Configure hardware settings and finish setup.
- AVD acts as an emulator to test applications without a physical device.

**5. Verify Installation**

- Create a new project in Android Studio.
- Run the application using the emulator or a physical device.
- Ensure the app builds and runs successfully.

## Procedure to Create the First Android Application

**1. Open Android Studio**

- Launch Android Studio on your computer.
- Click on “New Project” from the welcome screen.

**2. Select Project Template**

- Choose the “Empty Activity” template.
- Click Next to continue.

**3. Configure Project Details**

- Enter the Application Name (for example: HelloWorld).
- Enter the Package Name.
- Select **Java** as the programming language.
- Choose the Minimum SDK version.
- Click Finish to create the project.

**4. Project Structure is Created**

- Android Studio automatically creates important files.
- Two main files are:
  - `MainActivity.java` – This file contains the program logic.
  - `activity_main.xml` – This file contains the user interface design.

**5. Modify the TextView**

- **Using Design View (from side panel):**
  - Open `activity_main.xml`.
  - Switch to Design view.
  - Click on the `TextView` component.
  - In the Attributes panel (right side), change the text property to “Hello World” or any custom message.

- **Using Code (XML file):**
  - Open activity_main.xml in Code view.
  - Locate the `TextView` tag.
  - Modify the line: `android:text="Hello World"`
  - Save the file.

- **Using Java Code:**
  - Open MainActivity.java.
  - Write the following inside `onCreate()` method:
  - `TextView textView = findViewById(R.id.textView);`
  - `textView.setText("Hello World");`

**6. Run the Application**

- Click the Run button (green play icon).
- Select an Android Virtual Device (AVD) or connect a physical device.
- The application will be installed and launched.

**7. View the Output**

- The emulator or device screen will display the “Hello World” message.

## Android Virtual Device & Android Emulator

- In Android development, applications must be tested before deployment.
- AVD and Android Emulator help developers test applications without using a physical mobile device.

- **What is AVD (Android Virtual Device)?**
  - AVD stands for Android Virtual Device.
  - It is a configuration that simulates a real Android device on a computer.
  - It allows developers to test applications in a virtual environment.
  - AVD supports different Android versions, screen sizes, RAM settings, and hardware configurations.
  - It can simulate features like camera, GPS, phone calls, battery status, and network conditions.

- **Working of Android Emulator**
  - The Android Emulator is a tool that runs the AVD on a computer.
  - It creates a virtual mobile device environment using the system’s hardware resources.
  - When an application is executed, the emulator installs and runs the app just like a real Android device.
  - It simulates device components such as touchscreen, keypad, sensors, and storage.
  - The emulator uses system images of specific Android versions to replicate the behavior of actual devices.
  - Developers can test different screen sizes, Android versions, and device configurations without needing multiple physical devices.
  - It helps in debugging, performance testing, and checking compatibility.

## The Process of Creating & Configuring AVD

- Android Virtual Device (AVD) is used to simulate a real Android device on a computer
- It helps developers test applications without using a physical device
- AVD supports different configurations like screen size, Android version, and hardware settings

**1. Open AVD Manager**

- Open Android Studio on your computer
- Click on "AVD Manager" from the toolbar or Tools menu
- AVD Manager window will open

**2. Create New Virtual Device**

- Click on "Create Virtual Device"
- Select a device category such as Phone, Tablet, or Wear OS
- Choose a device model (e.g., Pixel, Nexus)
- Click "Next"

**3. Select System Image**

- Choose an Android version (system image) such as Android 11, 12, etc.
- Download the system image if not already installed
- Click "Next"

**4. Configure AVD Settings**

- Enter AVD name
- Select screen orientation (Portrait or Landscape)
- Configure hardware options like RAM, internal storage, and graphics
- Set emulator performance options if required

**5. Finish Setup**

- Click on "Finish" to create the AVD
- The virtual device will be listed in AVD Manager

**6. Run the Emulator**

- Click on the "Play" button next to the created AVD
- Emulator will start and simulate a real Android device
- The device screen will appear on your computer

**7. Test the Application**

- Run your Android application from Android Studio
- Select the created AVD as the target device
- The application will be installed and launched on the emulator

## Android Debugging Tools

- Debugging tools are essential in Android development to test, analyze, and fix application errors
- Tools like Emulator, DDMS, and ADB help developers simulate devices, monitor performance, and debug applications efficiently

### Emulator

- Emulator is a virtual Android device that runs on a computer
- It is used to test applications without a physical mobile device
- It simulates features like calls, messages, GPS, and network conditions
- Developers can test apps on different screen sizes and Android versions
- **Example**
  - A developer tests a login application on an emulator to check UI and functionality without using a real phone

### Dalvik Debug Monitor Server

- DDMS is a debugging and performance monitoring tool used in Android development
- Monitor running applications and processes
- Capture screenshots of the device screen
- View and analyze memory usage and detect memory leaks
- Access file explorer to manage device files
- Monitor network usage and thread activity
- Helps in analyzing application performance and optimizing apps
- Useful for debugging complex issues during development
- It provides information about running processes and application behavior
- **Example**
  - A developer uses DDMS to check memory usage of an app and detect memory leaks

### Android Debug Bridge

- ADB is a command-line tool used to communicate between a computer and an Android device or emulator
- It acts as a bridge between development environment and device
- Install and uninstall applications on a device
- Run and debug applications
- Access device shell to execute commands
- Transfer files between computer and device
- View device logs and system information
- Restart device or emulator
- Useful for testing apps on real devices and emulators
- **Example**
  - A developer installs an app using command: `adb install app.apk`
  - It can also be used to view logs or restart the device

### Logcat

- Logcat is a logging tool that displays system messages and logs generated by Android applications
- It provides real-time logging information while the application is running
- View error messages, warnings, and debug logs
- Track application crashes and exceptions with detailed stack traces
- Display system-level and application-level events
- Filter logs based on tags, package name, or priority levels (Verbose, Debug, Info, Warning, Error)
- Helps developers identify, analyze, and fix bugs efficiently
- Used with Android Studio for continuous monitoring during development and testing
- Supports custom logging using Log class (`Log.d()`, `Log.e()`, `Log.i()`, etc.)
- Essential tool for debugging and improving application performance

## Questions

1. List different Android development tools
2. What is Android SDK
3. What is AVD in Android
4. Define Emulator in Android development
5. What is ADB
6. Explain Android development environment setup
7. Explain steps to create first Android application
8. Explain running and debugging process in emulator
9. Explain DDMS and its features
10. Explain the core files of an Android project
