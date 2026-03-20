---
header: AAD-LM
title: android-lm
slug: android-lm
semester: 6
image: /aad.jpg
accent: "#1a692c"
link:
---

**OUTPUT PDF**: [Link](https://drive.google.com/file/d/11opcNF-MNp21jzAsnc2_jbj8eLs29bh1/view?usp=sharing)

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

**activity_main.xml**

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

**MainActivity.java**

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

**activity_second.xml**

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

**activity_main.xml**

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

**MainActivity.java**

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

**activity_main.xml**

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

**MainActivity.java**

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

**activity_main.xml**

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

**MainActivity.java**

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

---

## Practical 08

**Aim:** Create Registration Form using Various UI Controls

**Description:**
This practical demonstrates the creation of a Registration Form using various Android UI controls. It helps students understand how to collect user information such as name, gender, course, and agreement using different input components.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file from the **res/layout** folder.
3. Design a registration form using UI components such as **EditText, RadioButton, Spinner, CheckBox, and Button**.
4. Use **RadioGroup** for gender selection and **Spinner** for course selection.
5. Open **MainActivity.java** and write code to get user input from all fields.
6. Display the entered details using a **Toast message** when the submit button is clicked.
7. Save the files and run the application.

**Code:**

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="20dp"
        android:paddingTop="40dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Registration Form"
            android:textSize="22sp"
            android:textStyle="bold"/>

        <EditText
            android:id="@+id/etName"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:minHeight="48dp"
            android:hint="Enter Name"
            android:layout_marginTop="10dp"/>

        <RadioGroup
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="10dp">

            <RadioButton
                android:id="@+id/radioMale"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Male"/>

            <RadioButton
                android:id="@+id/radioFemale"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Female"/>
        </RadioGroup>

        <Spinner
            android:id="@+id/spinnerCourse"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="10dp"/>

        <CheckBox
            android:id="@+id/checkBox"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="I Agree to Terms"
            android:layout_marginTop="10dp"/>

        <Button
            android:id="@+id/btnSubmit"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Register"
            android:layout_marginTop="15dp"/>

    </LinearLayout>

</ScrollView>
```

**MainActivity.java**

```java
package com.example.practical8;

import android.os.Bundle;
import android.view.View;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etName;
    RadioButton radioMale, radioFemale;
    Spinner spinnerCourse;
    CheckBox checkBox;
    Button btnSubmit;

    String[] courses = {"BCA", "BSc IT", "BTech", "MCA"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etName = findViewById(R.id.etName);
        radioMale = findViewById(R.id.radioMale);
        radioFemale = findViewById(R.id.radioFemale);
        spinnerCourse = findViewById(R.id.spinnerCourse);
        checkBox = findViewById(R.id.checkBox);
        btnSubmit = findViewById(R.id.btnSubmit);

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, courses);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerCourse.setAdapter(adapter);

        btnSubmit.setOnClickListener(v -> {

            String name = etName.getText().toString();
            String gender = radioMale.isChecked() ? "Male" : "Female";
            String course = spinnerCourse.getSelectedItem().toString();

            if (checkBox.isChecked()) {
                Toast.makeText(this, "Name: " + name + "\nGender: " + gender + "\nCourse: " + course, Toast.LENGTH_LONG).show();
            } else {
                Toast.makeText(this, "Please accept terms", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
```

**Conclusion:**
A Registration Form was successfully created using various Android UI controls to collect and display user information.

---

## Practical 09

**Aim:** Create Grid-based Layout using GridLayout

**Description:**
This practical demonstrates the use of GridLayout to arrange UI components in a grid format using rows and columns. GridLayout is useful for creating structured layouts such as dashboards, calculators, and image grids.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file from the **res/layout** folder.
3. Add a **TextView** at the top to display the title of the application.
4. Add another **TextView** to act as a calculator display screen.
5. Use **GridLayout** to arrange buttons in rows and columns.
6. Create a custom style in **styles.xml** to maintain equal size and spacing for all buttons.
7. Apply the style to all buttons inside the GridLayout.
8. Save the files and run the application.

**Code:**

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="10dp"
    android:fitsSystemWindows="true">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="80dp"
        android:text="Calculator"
        android:textSize="25sp"
        android:gravity="center"/>

    <TextView
        android:id="@+id/txtDisplay"
        android:layout_width="match_parent"
        android:layout_height="80dp"
        android:text="0"
        android:textSize="30sp"
        android:gravity="end"
        android:background="#dddddd"
        android:padding="10dp"/>

    <GridLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:rowCount="5"
        android:columnCount="4"
        android:layout_marginTop="10dp">

        <Button android:text="7" style="@style/CalcBtn"/>
        <Button android:text="8" style="@style/CalcBtn"/>
        <Button android:text="9" style="@style/CalcBtn"/>
        <Button android:text="/" style="@style/CalcBtn"/>

        <Button android:text="4" style="@style/CalcBtn"/>
        <Button android:text="5" style="@style/CalcBtn"/>
        <Button android:text="6" style="@style/CalcBtn"/>
        <Button android:text="*" style="@style/CalcBtn"/>

        <Button android:text="1" style="@style/CalcBtn"/>
        <Button android:text="2" style="@style/CalcBtn"/>
        <Button android:text="3" style="@style/CalcBtn"/>
        <Button android:text="-" style="@style/CalcBtn"/>

        <Button android:text="0" style="@style/CalcBtn"/>
        <Button android:text="C" style="@style/CalcBtn"/>
        <Button android:text="=" style="@style/CalcBtn"/>
        <Button android:text="+" style="@style/CalcBtn"/>

    </GridLayout>

</LinearLayout>
```

**styles.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="CalcBtn">
        <item name="android:layout_width">0dp</item>
        <item name="android:layout_height">60dp</item>
        <item name="android:layout_margin">5dp</item>
        <item name="android:layout_columnWeight">1</item>
        <item name="android:textSize">18sp</item>
    </style>
</resources>
```

**Conclusion:**
A grid-based layout was successfully created using GridLayout with properly aligned buttons and display using custom styling for a calculator interface.

---

## Practical 10

**Aim:** Demonstrate Menu with Navigation (Options and Context Menu)

**Description:**
This practical demonstrates the implementation of Options Menu and Context Menu in an Android application. Options Menu provides common actions for the activity, while Context Menu appears on long press of a view and provides context-specific actions.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Create a menu resource file inside **res/menu** folder (e.g., `menu_main.xml`) for the Options Menu.
3. Add menu items such as **Settings, About, Exit** in the menu file.
4. Override **onCreateOptionsMenu()** and **onOptionsItemSelected()** methods in **MainActivity.java** to handle menu actions.
5. Add a **TextView** in the layout and register it for Context Menu using **registerForContextMenu()**.
6. Override **onCreateContextMenu()** and **onContextItemSelected()** methods to define and handle context menu actions.
7. Run the application and test both Options Menu (three dots menu) and Context Menu (long press on TextView).

**Code:**

**res/menu/menu_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/menu_settings"
        android:title="Settings"/>

    <item
        android:id="@+id/menu_about"
        android:title="About"/>

    <item
        android:id="@+id/menu_exit"
        android:title="Exit"/>

</menu>
```

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Long Press Me for Context Menu"
        android:textSize="18sp"/>
</LinearLayout>
```

**MainActivity.java**

```java
package com.example.practical10;

import android.os.Bundle;
import android.view.*;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        registerForContextMenu(findViewById(R.id.textView));
    }

    // Options Menu
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        String title = item.getTitle().toString();

        if (title.equals("Exit")) finish();
        else Toast.makeText(this, title + " Clicked", Toast.LENGTH_SHORT).show();

        return true;
    }

    // Context Menu
    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        menu.setHeaderTitle("Select Option");
        menu.add("Edit");
        menu.add("Delete");
    }

    @Override
    public boolean onContextItemSelected(MenuItem item) {
        Toast.makeText(this, item.getTitle() + " Selected", Toast.LENGTH_SHORT).show();
        return true;
    }
}
```

**Conclusion:**
Options Menu and Context Menu were successfully implemented to provide navigation and context-based actions in the Android application.

---

## Practical 11

**Aim:** Create Application using Fragments

**Description:**
This practical demonstrates the use of Fragments in Android. Fragments represent reusable portions of UI within an activity. Two simple fragments are created and displayed inside a single activity using button clicks.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Create two fragment classes (**FragmentOne** and **FragmentTwo**) with their respective layout files.
3. Design simple UI for both fragments using **TextView**.
4. Open **activity_main.xml** and add two **Buttons** and a **FrameLayout** (to hold fragments).
5. In **MainActivity.java**, write code to replace fragments on button click using **FragmentManager**.
6. Run the application and switch between fragments using buttons.

**Code:**

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="10dp">

    <Button
        android:id="@+id/btnFrag1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Show Fragment 1"/>

    <Button
        android:id="@+id/btnFrag2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Show Fragment 2"/>

    <FrameLayout
        android:id="@+id/frameLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>
</LinearLayout>
```

**fragment_one.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="This is Fragment 1"
        android:textSize="20sp"/>
</LinearLayout>
```

**fragment_two.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="This is Fragment 2"
        android:textSize="20sp"/>
</LinearLayout>
```

**FragmentOne.java**

```java
package com.example.practical11;

import android.os.Bundle;
import android.view.*;
import androidx.fragment.app.Fragment;

public class FragmentOne extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_one, container, false);
    }
}
```

**FragmentTwo.java**

```java
package com.example.practical11;

import android.os.Bundle;
import android.view.*;
import androidx.fragment.app.Fragment;

public class FragmentTwo extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_two, container, false);
    }
}
```

**MainActivity.java**

```java
package com.example.practical11;

import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnFrag1, btnFrag2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnFrag1 = findViewById(R.id.btnFrag1);
        btnFrag2 = findViewById(R.id.btnFrag2);

        btnFrag1.setOnClickListener(v ->
                getSupportFragmentManager().beginTransaction()
                        .replace(R.id.frameLayout, new FragmentOne())
                        .commit());

        btnFrag2.setOnClickListener(v ->
                getSupportFragmentManager().beginTransaction()
                        .replace(R.id.frameLayout, new FragmentTwo())
                        .commit());
    }
}
```

**Conclusion:**
Fragments were successfully implemented to create reusable UI components and switch between them within a single activity.

---

## Practical 12

**Aim:** Design a Simple Calculator Application

**Description:**
This practical demonstrates the design and development of a Simple Calculator Application in Android. The application performs basic arithmetic operations such as addition, subtraction, multiplication, and division using button click events.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Open the **activity_main.xml** file and design the calculator UI using **TextView** for display and **GridLayout** for buttons.
3. Add buttons for digits (0–9), operators (+, -, \*, /), clear (C), and equals (=).
4. Add **onClick** attribute to each button to handle click events.
5. Open **MainActivity.java** and write logic to perform arithmetic operations.
6. Display the result in the TextView.
7. Save the files and run the application.

**Code:**

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="10dp"
    android:fitsSystemWindows="true">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:text="Calculator"
        android:textSize="24sp"
        android:gravity="center"/>

    <TextView
        android:id="@+id/txtDisplay"
        android:layout_width="match_parent"
        android:layout_height="80dp"
        android:text="0"
        android:textSize="30sp"
        android:gravity="end"
        android:background="#dddddd"
        android:padding="10dp"/>

    <GridLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:rowCount="5"
        android:columnCount="4"
        android:layout_marginTop="10dp">

        <Button android:text="7" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="8" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="9" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="/" style="@style/CalcBtn" android:onClick="click"/>

        <Button android:text="4" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="5" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="6" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="*" style="@style/CalcBtn" android:onClick="click"/>

        <Button android:text="1" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="2" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="3" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="-" style="@style/CalcBtn" android:onClick="click"/>

        <Button android:text="0" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="C" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="=" style="@style/CalcBtn" android:onClick="click"/>
        <Button android:text="+" style="@style/CalcBtn" android:onClick="click"/>

    </GridLayout>

</LinearLayout>
```

**styles.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="CalcBtn">
        <item name="android:layout_width">0dp</item>
        <item name="android:layout_height">60dp</item>
        <item name="android:layout_margin">5dp</item>
        <item name="android:layout_columnWeight">1</item>
        <item name="android:textSize">18sp</item>
    </style>
</resources>
```

**MainActivity.java**

```java
package com.example.practical12;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    TextView display;
    String current = "";
    double first = 0;
    String op = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        display = findViewById(R.id.txtDisplay);
    }

    public void click(View v) {
        Button b = (Button) v;
        String t = b.getText().toString();

        if (t.matches("[0-9]")) {
            current += t;
            display.setText(current);
        }
        else if (t.matches("[+\\-*/]")) {
            if (!current.equals("")) {
                first = Double.parseDouble(current);
                op = t;
                current = "";
            }
        }
        else if (t.equals("=")) {
            if (!current.equals("")) {
                double second = Double.parseDouble(current);
                double res = 0;

                switch (op) {
                    case "+": res = first + second; break;
                    case "-": res = first - second; break;
                    case "*": res = first * second; break;
                    case "/":
                        if (second != 0) res = first / second;
                        else {
                            Toast.makeText(this,"Cannot divide by zero",Toast.LENGTH_SHORT).show();
                            return;
                        }
                        break;
                }

                display.setText(String.valueOf(res));
                current = String.valueOf(res);
            }
        }
        else if (t.equals("C")) {
            current = "";
            display.setText("0");
        }
    }
}
```

**Conclusion:**
A simple calculator application was successfully designed and developed to perform basic arithmetic operations using button click events in Android.

---

## Practical 13

**Aim:** Design a Simple Calculator Application

**Description:**
This practical demonstrates the use of MediaPlayer to play audio files and also explains basic View Animation in Android. It helps students understand multimedia handling and animation effects in Android applications.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity**, select **Java** as the language, and set the required **minimum SDK**.
2. Add an audio file (e.g., `.mp3`) inside the **res/raw** folder.
3. Open **activity_main.xml** and add buttons such as **Play**, **Pause**, and **Stop**.
4. Add a **TextView or Button** to apply animation.
5. Create an animation file inside **res/anim** folder (e.g., `fade.xml`).
6. Open **MainActivity.java** and initialize **MediaPlayer**.
7. Write code to handle Play, Pause, and Stop actions.
8. Apply animation to a view using **AnimationUtils**.
9. Run the application to test audio playback and animation.

**Code:**

**activity_main.xml**

```xml id="9yk1mi"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="20dp">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Media Player Demo"
        android:textSize="20sp"
        android:layout_marginBottom="20dp"/>

    <Button
        android:id="@+id/btnPlay"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Play"/>

    <Button
        android:id="@+id/btnPause"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Pause"
        android:layout_marginTop="10dp"/>

    <Button
        android:id="@+id/btnStop"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop"
        android:layout_marginTop="10dp"/>

</LinearLayout>
```

**res/anim/fade.xml**

```xml id="3by6hg"
<?xml version="1.0" encoding="utf-8"?>
<alpha xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromAlpha="0.0"
    android:toAlpha="1.0"
    android:duration="2000"/>
```

**MainActivity.java**

```java id="5lw7d4"
package com.example.practical13;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    MediaPlayer mediaPlayer;
    Button btnPlay, btnPause, btnStop;
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnPlay = findViewById(R.id.btnPlay);
        btnPause = findViewById(R.id.btnPause);
        btnStop = findViewById(R.id.btnStop);
        textView = findViewById(R.id.textView);

        mediaPlayer = MediaPlayer.create(this, R.raw.sample);

        Animation anim = AnimationUtils.loadAnimation(this, R.anim.fade);
        textView.startAnimation(anim);

        btnPlay.setOnClickListener(v -> mediaPlayer.start());

        btnPause.setOnClickListener(v -> mediaPlayer.pause());

        btnStop.setOnClickListener(v -> {
            mediaPlayer.stop();
            mediaPlayer = MediaPlayer.create(this, R.raw.sample);
        });
    }
}
```

**Conclusion:**
MediaPlayer and View Animation were successfully implemented to play audio and apply animation effects in an Android application.

---

## Practical 14

**Aim:** Mini Project combining Activity, Intent, Layouts, Menu and Fragments

**Description:**
This practical demonstrates a Mini Android Application that combines important Android components such as Activity, Intent, Layouts, Menu, and Fragments. The application includes a Home screen, navigation using intent, a context menu using long press, and fragment-based content display.

**Code/Steps:**

1. Create a new Android project in **Android Studio** using **Empty Views Activity** and select **Java**.
2. Design the main layout using **LinearLayout**.
3. Add buttons for navigation, fragment loading, and context menu.
4. Add a **FrameLayout** to load fragment dynamically.
5. Create **SecondActivity** for navigation using Intent.
6. Create a fragment (**FirstFragment**) and its layout.
7. Implement button click for Intent and Fragment.
8. Add **Context Menu** using long press on button.
9. Override context menu methods in **MainActivity.java**.
10. Add **SecondActivity** in **AndroidManifest.xml**.
11. Run and test all features.

**Code:**

**activity_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp">

    <Button
        android:id="@+id/btnNext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Go to Second Activity"/>

    <Button
        android:id="@+id/btnFragment"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Load Fragment"
        android:layout_marginTop="10dp"/>

    <Button
        android:id="@+id/btnMenu"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Long Press Me for Menu"
        android:layout_marginTop="10dp"/>

    <FrameLayout
        android:id="@+id/fragmentContainer"
        android:layout_width="match_parent"
        android:layout_height="200dp"
        android:layout_marginTop="10dp"/>

</LinearLayout>
```

**MainActivity.java (Short + Clean)**

```java
package com.example.practical14;

import android.content.Intent;
import android.os.Bundle;
import android.view.*;
import android.widget.Button;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

public class MainActivity extends AppCompatActivity {

    Button btnNext, btnFragment, btnMenu;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnNext = findViewById(R.id.btnNext);
        btnFragment = findViewById(R.id.btnFragment);
        btnMenu = findViewById(R.id.btnMenu);

        // Intent
        btnNext.setOnClickListener(v ->
                startActivity(new Intent(this, SecondActivity.class)));

        // Fragment
        btnFragment.setOnClickListener(v ->
                getSupportFragmentManager().beginTransaction()
                        .replace(R.id.fragmentContainer, new FirstFragment())
                        .commit());

        // Context Menu
        registerForContextMenu(btnMenu);
    }

    // Create Context Menu
    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        menu.setHeaderTitle("Select Option");
        menu.add("About");
        menu.add("Exit");
    }

    // Handle Menu Click
    @Override
    public boolean onContextItemSelected(MenuItem item) {
        if (item.getTitle().equals("About")) {
            startActivity(new Intent(this, SecondActivity.class));
        } else {
            finish();
        }
        return true;
    }
}
```

**SecondActivity.java**

```java
package com.example.practical14;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
    }
}
```

**activity_second.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:text="Welcome to Second Activity"
    android:textSize="20sp"
    android:gravity="center"/>
```

**FirstFragment.java**

```java
package com.example.practical14;

import android.os.Bundle;
import android.view.*;
import androidx.fragment.app.Fragment;

public class FirstFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_first, container, false);
    }
}
```

**fragment_first.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:text="This is Fragment Content"
    android:textSize="18sp"
    android:gravity="center"/>
```

**Conclusion:**
A Mini Android Application was successfully developed by integrating Activity, Intent, Layouts, Fragment, and Context Menu using long press interaction.
