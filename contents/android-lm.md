---
header: AAD-LM
title: Android Lab Manual
slug: android-lm
semester: 6
image: /aad.jpg
accent: "#1a692c"
link:
---

## Output PDF: [Link](https://drive.google.com/file/d/1-qG6BkJ0TU132sSbby3raiEWIakFLvMv/view)

## Practical 01

**Aim:** Setup and Configuration of Android Development Environment

**Description:** This practical introduces the Android application development environment. Students learn to install Android Studio, configure the Android SDK, create an emulator using AVD Manager, and verify the setup by running a basic Android project. This setup is essential for developing Android applications.

**Code/Steps:**

1. Download Android Studio from the official Android developer website.
2. Install Android Studio by following the installation wizard instructions.
3. Launch Android Studio after installation is complete.
4. Allow Android Studio to download and configure the required Android SDK components.
5. Open **AVD Manager** from Android Studio.
6. Create a new Virtual Device by selecting a device model (for example: Pixel).
7. Select a system image (Android version) and download it if it is not available.
8. Finish the AVD setup and launch the emulator.
9. Click **New Project** in Android Studio.
10. Select **Empty Activity** as the project template.
11. Enter project details such as application name, package name, language (Java/Kotlin), and minimum SDK version.
12. Click **Finish** to create the project.
13. Run the application using the **Run** button.
14. Verify that the default Android application runs successfully on the emulator.

**Output:** Android Studio was successfully installed and configured. A new Android project was created and executed on the emulator, displaying the default application screen with the message **“Hello World”**, confirming that the Android development environment is working properly.

**Conclusion:** The Android development environment was successfully installed and configured, and a sample Android project was run to verify the setup.

---

## Practical 02

**Aim:** Create "Hello World" application using TextView

**Description:** This practical helps students to understand the basic structure of an Android application. A simple "Hello World" application is created using TextView to display text on the screen. It introduces the use of Activity, XML layout file, and application execution on emulator or mobile device.

**Code/Steps:**

1. Open Android Studio and click **New Project**.
2. Select **Empty Views Activity** as the project template.
3. Enter the application name and select **Java** as the programming language.
4. Choose the minimum SDK version and create the project.
5. Open the layout file located in **res/layout/activity_main.xml**.
6. Add a **TextView** component to display text on the screen.
7. Set the text property of the TextView to **Hello World**.
8. Adjust the layout constraints to center the TextView in the screen.
9. Save the file and run the application on an emulator or Android device.
10. Verify that the message **Hello World** appears on the screen.

**Code:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World"
        android:textSize="20sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.5"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.5" />
    </androidx.constraintlayout.widget.ConstraintLayout>
```

**Conclusion:** A simple Android application was created using TextView to display "Hello World".

---

## Practical 03

**Aim:** Demonstrate Android Activity Lifecycle

**Description:** This practical demonstrates the Android Activity Lifecycle. An activity passes through different states such as create, start, resume, pause, stop, and destroy. By using lifecycle callback methods and Toast messages, students can understand how an activity behaves during its lifecycle.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **MainActivity.java** file from the **java** folder of the project.
3. Override lifecycle methods such as **onCreate()**, **onStart()**, **onResume()**, **onPause()**, **onStop()**, and **onDestroy()**.
4. Add **Toast messages** inside each lifecycle method to display the activity state.
5. Save the file and run the application on the emulator or Android device.
6. Perform actions like opening the app, pressing the home button, or closing the app to observe lifecycle state changes.

**Code:**

```java
package com.example.practical_03;

import android.os.Bundle;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toast.makeText(this,"onCreate()",Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onStart() {
        super.onStart();
        Toast.makeText(this,"onStart()",Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onResume() {
        super.onResume();
        Toast.makeText(this,"onResume()",Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onPause() {
        super.onPause();
        Toast.makeText(this,"onPause()",Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onStop() {
        super.onStop();
        Toast.makeText(this,"onStop()",Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Toast.makeText(this,"onDestroy()",Toast.LENGTH_SHORT).show();
    }
}
```

**Output:** When the application is executed, the Toast messages **onCreate(), onStart(), and onResume()** are triggered. However, due to the short display time of Toast messages, usually **only one message (such as "onCreate()") is visible on the screen at a time**, while the others execute in the background.

**Conclusion:** The Android Activity Lifecycle was demonstrated successfully by implementing lifecycle methods and displaying Toast messages for different activity states.

---

## Practical 04

**Aim:** Implement Explicit Intent (Activity to Activity Navigation)

**Description:**
This practical demonstrates the use of Explicit Intent in Android. Explicit Intent is used to move from one activity to another within the same application. Two activities are created, and navigation between them is performed using a button click.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Design the layout of the first activity and add a **Button** to navigate to the second activity.
3. Create a new **SecondActivity** in the project.
4. Write code in **MainActivity.java** to start the second activity using **Explicit Intent** when the button is clicked.
5. Design the layout for **SecondActivity** to display a simple message using **TextView**.
6. Run the application and click the button to navigate from the first activity to the second activity.

**Code:**

`activity_main.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">

    <Button
        android:id="@+id/btnNext"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Go to Second Activity"/>

</LinearLayout>
```

`MainActivity.java`

```java
package com.example.practical4;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnNext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnNext = findViewById(R.id.btnNext);

        btnNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                startActivity(intent);
            }
        });
    }
}
```

`activity_second.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Welcome to Second Activity"
        android:textSize="20sp"/>

</LinearLayout>
```

**Conclusion:** The Explicit Intent was successfully implemented to navigate from one activity to another within the Android application.

---

## Practical 05

**Aim:** Implement Implicit Intent (Call, Browser, Share)

**Description:**
This practical demonstrates the use of Implicit Intent in Android. Implicit Intent allows an application to request an action from another application such as making a phone call, opening a web browser, or sharing text.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file and add three **Buttons** for Call, Browser, and Share actions.
3. Open the **MainActivity.java** file from the **java** folder of the project.
4. Write code to perform different implicit intent actions when each button is clicked.
5. Use **Intent.ACTION_DIAL** for calling, **Intent.ACTION_VIEW** for opening a browser, and **Intent.ACTION_SEND** for sharing text.
6. Run the application and test the functionality of each button.

**Code:**

`activity_main.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <Button
        android:id="@+id/btnCall"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Call"/>

    <Button
        android:id="@+id/btnBrowser"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Open Browser"
        android:layout_marginTop="10dp"/>

    <Button
        android:id="@+id/btnShare"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Share Text"
        android:layout_marginTop="10dp"/>

</LinearLayout>
```

`MainActivity.java`

```java
package com.example.practical5;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnCall, btnBrowser, btnShare;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnCall = findViewById(R.id.btnCall);
        btnBrowser = findViewById(R.id.btnBrowser);
        btnShare = findViewById(R.id.btnShare);

        btnCall.setOnClickListener(v -> {
            Intent intent = new Intent(Intent.ACTION_DIAL);
            intent.setData(Uri.parse("tel:1234567890"));
            startActivity(intent);
        });

        btnBrowser.setOnClickListener(v -> {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse("https://www.google.com"));
            startActivity(intent);
        });

        btnShare.setOnClickListener(v -> {
            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_TEXT, "Hello from my Android App!");
            startActivity(Intent.createChooser(intent, "Share via"));
        });
    }
}
```

**Conclusion:**
The Implicit Intent was successfully implemented to perform actions such as making a call, opening a browser, and sharing text using different applications.

---

## Practical 06

**Aim:** Demonstrate Basic UI Controls (Button, TextView, EditText, CheckBox, RadioButton)

**Description:**
This practical demonstrates the use of basic Android UI controls such as TextView, EditText, Button, CheckBox, and RadioButton. These controls are commonly used to design interactive user interfaces and to collect user input in Android applications.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file from the **res/layout** folder.
3. Add UI components such as **TextView, EditText, Button, CheckBox, and RadioButton** with proper padding and margins.
4. Open **MainActivity.java** and write code to read user input and display it using **Toast** when the button is clicked.
5. Save the files and run the application on the emulator or Android device.

**Code:**

`activity_main.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp"
    android:paddingTop="60dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Enter Your Name"
        android:textSize="18sp"/>

    <EditText
        android:id="@+id/editTextName"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:minHeight="48dp"
        android:hint="Enter Name"
        android:layout_marginTop="10dp"/>

    <CheckBox
        android:id="@+id/checkBox"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:minHeight="48dp"
        android:text="Accept Terms"
        android:layout_marginTop="10dp"/>

    <RadioGroup
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp">

        <RadioButton
            android:id="@+id/radioMale"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:minHeight="48dp"
            android:text="Male"/>

        <RadioButton
            android:id="@+id/radioFemale"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:minHeight="48dp"
            android:text="Female"/>

    </RadioGroup>

    <Button
        android:id="@+id/btnSubmit"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:minHeight="48dp"
        android:text="Submit"
        android:layout_marginTop="15dp"/>

</LinearLayout>
```

`MainActivity.java`

```java
package com.example.practical6;

import android.os.Bundle;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText editTextName;
    CheckBox checkBox;
    RadioButton radioMale, radioFemale;
    Button btnSubmit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextName = findViewById(R.id.editTextName);
        checkBox = findViewById(R.id.checkBox);
        radioMale = findViewById(R.id.radioMale);
        radioFemale = findViewById(R.id.radioFemale);
        btnSubmit = findViewById(R.id.btnSubmit);

        btnSubmit.setOnClickListener(v -> {

            String name = editTextName.getText().toString();
            String gender = "";

            if (radioMale.isChecked()) {
                gender = "Male";
            } else if (radioFemale.isChecked()) {
                gender = "Female";
            }

            if (checkBox.isChecked()) {
                Toast.makeText(this, "Name: " + name + " Gender: " + gender, Toast.LENGTH_LONG).show();
            } else {
                Toast.makeText(this, "Please accept terms", Toast.LENGTH_SHORT).show();
            }

        });
    }
}
```

**Conclusion:** The basic Android UI controls such as TextView, EditText, Button, CheckBox, and RadioButton were successfully implemented to create an interactive user interface and collect user input in an Android application.

---

## Practical 07

**Aim:** Design Login Activity using Linear, Relative and Table Layouts

**Description:**
This practical demonstrates the design of a Login Activity using different Android layouts such as LinearLayout, RelativeLayout, and TableLayout. It helps students understand how UI components are arranged using various layout types.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file from the **res/layout** folder.
3. Use **LinearLayout** as the parent layout to arrange components vertically.
4. Inside it, use **RelativeLayout** to place the title text at the center.
5. Use **TableLayout** to arrange the login form fields such as **Username** and **Password** in rows.
6. Add **EditText** fields for username and password and a **Button** for login.
7. Save the file and run the application to view the login screen.

**Code:**

`activity_main.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp">

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="40dp">

        <TextView
            android:id="@+id/txtTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Login Form"
            android:textSize="22sp"
            android:textStyle="bold"
            android:layout_centerHorizontal="true"/>
    </RelativeLayout>

    <TableLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="30dp">

        <TableRow>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Username:"
                android:padding="5dp"/>

            <EditText
                android:id="@+id/etUsername"
                android:layout_width="200dp"
                android:layout_height="wrap_content"
                android:hint="Enter Username"
                android:minHeight="48dp"/>
        </TableRow>

        <TableRow>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Password:"
                android:padding="5dp"/>

            <EditText
                android:id="@+id/etPassword"
                android:layout_width="200dp"
                android:layout_height="wrap_content"
                android:hint="Enter Password"
                android:inputType="textPassword"
                android:minHeight="48dp"/>
        </TableRow>

        <TableRow
            android:layout_marginTop="10dp">

            <Button
                android:id="@+id/btnLogin"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Login"/>
        </TableRow>

    </TableLayout>

</LinearLayout>
```

`MainActivity.java`

```java
package com.example.practical7;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etUsername, etPassword;
    Button btnLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etUsername = findViewById(R.id.etUsername);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);

        btnLogin.setOnClickListener(v -> {

            String username = etUsername.getText().toString();
            String password = etPassword.getText().toString();

            if(username.equals("admin") && password.equals("1234")){
                Toast.makeText(this,"Login Successful",Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this,"Invalid Username or Password",Toast.LENGTH_SHORT).show();
            }

        });
    }
}
```

**Conclusion:**
A Login Activity was successfully designed using LinearLayout, RelativeLayout, and TableLayout to arrange user interface components in an Android application.
