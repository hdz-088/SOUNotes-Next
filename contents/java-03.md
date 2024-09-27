---
title: Java-03 Introduction
slug: java-03
semester: 3
image: https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
---

## Packages
- Package in Java is a mechanism to encapsulate a group of classes, sub packages and interfaces. 
- **Packages are used for:**
	- Preventing naming conflicts. For example there can be two classes with name Employee in two packages, `college.staff.cse.Employee` and `college.staff.ee.Employee`
	- Making searching/locating and usage of classes, interfaces, enumerations and annotations easier
	- Providing controlled access: protected and default have package level access control. A protected member is accessible by classes in the same package and its subclasses. A default member (without any access specifier) is accessible by classes in the same package only.
	- Packages can be considered as data encapsulation (or data-hiding).

## Creating Package
- Creating a package in Java is a way to organize your classes and interfaces into namespaces, making it easier to manage and locate them within your project. Here’s a step-by-step guide to creating a package:
1. **Choose a Package Name:**
	1. A package name should be unique and follow the standard Java naming conventions (e.g., `com.company.project`).
2. **Create a Directory Structure:**
	1. Packages are represented by directories in the file system. The directory structure should reflect the package hierarchy.
	2. For example, if your package name is `com.company.project`, create a directory structure` com/company/project/`.
3. **Place Your Java Files:**
	1. Within the directory corresponding to your package (`com/company/project/`), place your Java source files (.java files).
	2. Every Java file in the package should start with a package statement indicating its package name
	3. Example package statement for a class in package `com.company.project`:

```JAVA
package com.company.project; 
public class MyClass { 
	// Class code here 
}
```

4. **Compile Your Java Files:**
	1. Compile your Java files using the javac command. Make sure you are in the root directory of your source files (where com/ directory is located).
	2. Example: `javac com/company/project/MyClass.java`

## Using Packages
Using packages in Java involves importing classes from other packages into your Java source files so that you can utilize their functionality. Here’s a step-by-step guide on how to use packages in Java:
- **Importing Packages:** 
	- To use classes from another package, you need to import them using the `import` statement at the beginning of your Java file.
	- There are different ways to import classes:
		- Import a single class. Example: `import packageName.ClassName;` 
		- Import all classes in a package (not recommended due to potential naming conflicts). Example: `import packageName.*;`
		- Import a static member. 
		- Example: `import static packageName.ClassName.staticMember;`
- **Using Classes from Imported Packages:**
	- Once imported, you can use the classes and their members (fields, methods) directly in your Java code

### Example
Suppose you have a package `com.company.project` with a class `MyClass`, and you want to use it in another class Main:

- **Directory Structure:** Ensure your directory structure reflects the package hierarchy, as described earlier
- `MyClass.java`: Define `MyClass` inside `com.company.project`

```JAVA
package com.company.project;

public class MyClass {
	public void display() {
		System.out.println("Hello from MyClass");
	}
}
```

- `Main.java`: Import `MyClass` and use it in Main

```JAVA
// Import MyClass from com.company.project package
import com.company.project.MyClass;

public class Main {
	public static void main(String[] args) {
		MyClass obj = new MyClass(); // Create an instance of MyClass
		obj.display(); // Call display() method from MyClass
	}
}
```

- Compile and Run: Compile both `MyClass.java` and `Main.java` (from the root directory containing `com/`)

```bash
javac com/company/project/MyClass.java
javac Main.java

java Main
```

- Output:
```Output
Hello from MyClass
```

> [!Important]
> - **Package Naming**: Ensure package names follow Java's naming conventions (`com.company.project`).
> - **Import Statements**: Always place `import` statements at the beginning of your Java file, before any class definitions.
> - **Class Usage**: Once imported, classes from other packages can be instantiated and their methods invoked like any other class in your project

# String Class
- Strings are the type of objects that can store the character of values and in Java, every character is stored in 16 bits i.e. using UTF 16-bit encoding. 
- A string acts the same as an array of characters in Java
- **Ways of creating String:**
	- There are two ways to create a string in Java:
	- String Literal
		- Example:` String demoString = “Ankit”;`
	- Using New Keyword: 
		- Example: `String demoString = new String (“GeeksforGeeks”);`

## String Methods
- `int length()`
	- Returns the number of characters in the String. 
	- `"Ankit".length(); // returns 5`
- `Char charAt(int i)`
	- Returns the character at i<sup>th</sup> index. 
	- `"Ankit".charAt(3); // returns ‘i’`
- `String substring(int i)`
	- Return the substring from the i<sup>th</sup> index character to end. 
	- `"Helloworld".substring(3); // returns “oworld”`
- `String substring(int i, int j)`
	- Returns the substring from i to j-1 index 
	- `"Helloworld".substring(2,5); // returns “llo”`
- `String concat(String str)`
	- Concatenates specified string to the end of this string. 

```JAVA
String s1 = ”hello”; 
String s2 = ”world"; 
String output = s1.concat(s2); // returns “helloworld”
```

- `String toLowerCase()`
	- Converts all the characters in the String to lower

```JAVA
case. String word1 = “HeLLo”;
String word3 = word1.toLowerCase(); // returns “hello"
```

- `String toUpperCase()`
	- Converts all the characters in the String to upper case.

```JAVA
String word1 = “HeLLo”;
String word2 = word1.toUpperCase(); // returns “HELLO”
```

- `String trim()`
	- Returns the copy of the String, by removing whitespaces at both ends. It does not affect whitespaces in the middle.

```JAVA
String word1 = “ Learn Share Learn “; 
String word2 = word1.trim(); // returns “Learn Share Learn”
```

- `String replace(Char old, Char new)`
	- Returns new string by replacing all occurrences of `oldChar` with `newChar`.

```JAVA
String s1 = “feeksforfeeks“;
String s2 = “feeksforfeeks”.replace(‘f’ ,’g’); // returns “geeksgorgeeks”
```

## StringBuffer Class
- StringBuffer is a class in Java that represents a mutable sequence of characters. 
- It provides an alternative to the immutable String class, allowing you to modify the contents of a string without creating a new object every time

- `append()` Method:
	- The `append()` method concatenates the given argument with this string.

```JAVA
import java.io.*;

class A {
	public static void main(String args[]) {
		StringBuffer sb = new StringBuffer("Hello "); 
		sb.append("Java"); // now original string is changed 
		System.out.println(sb);
	}
}

// OUTPUT
// Hello Java
```

- `insert()` Method:
	- The `insert()` method inserts the given string with this string at the given position.

```JAVA
import java.io.*; 

class A {
	public static void main(String args[]) {
		StringBuffer sb = new StringBuffer("Hello "); 
		sb.insert(1, "Java"); // Now original string is changed 
		System.out.println(sb);
	}
}

// OUTPUT
// HJavaello
```

- `replace()` Method:
	- The `replace()` method replaces the given string from the specified `beginIndex` and` endIndex-1`.

```JAVA
import java.io.*; 

class A {
	public static void main(String args[]) {
		StringBuffer sb = new StringBuffer("Hello"); 
		sb.replace(1, 3, "Java"); 
		System.out.println(sb);
	}
}

// OUTPUT
// HJavalo
```

- `delete()` Method:
	- The `delete()` method of the StringBuffer class deletes the string from the specified `beginIndex` to `endIndex-1`.

```JAVA
import java.io.*; 

class A {
	public static void main(String args[]) {
		StringBuffer sb = new StringBuffer("Hello"); 
		sb.delete(1, 3);
		System.out.println(sb);
	}
}

// OUTPUT
// Hlo
```

### Advantages of using StringBuffer over String for String mechanism
- StringBuffer objects are mutable, meaning that you can change the contents of the buffer without creating a new object.
- The initial capacity of a StringBuffer can be specified when it is created, or it can be set later with the `ensureCapacity()` method.
- The `append()` method is used to add characters, strings, or other objects to the end of the buffer.
- The `insert()` method is used to insert characters, strings, or other objects at a specified position in the buffer.
- The `delete()` method is used to remove characters from the buffer.
- The `reverse()` method is used to reverse the order of the characters in the buffer.

# Difference between String and StringBuffer

| String                                                                   | StringBuffer                                                                      |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| String is immutable.                                                     | It is mutable.                                                                    |
| It is slow in terms of executing the concatenation task.                 | It is fast in terms of executing the concatenation task.                          |
| Here the length of the string class is static.                           | Here the length can be modified whenever required, as it is dynamic in behaviour. |
| It is less efficient                                                     | It is more efficient in nature as compared to the string class.                   |
| String consumes more as compared to the StringBuffer.                    | StringBuffer uses less memory as compared to the string.                          |
| It utilizes a string constant pool to store the values.                  | It prefers heap memory to store the objects                                       |
| It overrides both `equal()` and `hashcode()` techniques of object class. | It cannot override `equal()` and `hashcode()`<br>methods.                         |
# Exception
- An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. When an error occurs within a method, the method creates an object and hands it off to the runtime system
- In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime
- The core **advantage** of exception handling is to maintain the normal flow of the application. An exception normally disrupts the normal flow of the application

## Exception Handling Techniques
- There are mainly two types of exceptions: 
	- **Checked Exception**
	- **Unchecked Exception** 
- An error is considered as the unchecked exception. However, according to Oracle, there are three types of exceptions namely:
	- **Checked Exception:**
		- The classes that directly inherit the Throwable class except **RuntimeException** and **Error** are known as checked exceptions. 
		- For example, **IOException**, **SQLException**, etc. 
		- Checked exceptions are checked at **compile-time**.
	- **Unchecked Exception:**
		- The classes that inherit the **RuntimeException** are known as Unchecked Exceptions. 
		- For example, **ArithmeticException**, **NullPointerException**, **ArrayIndexOutOfBoundsException**, etc. 
		- Unchecked exceptions are not checked at compile-time, but they are checked at **runtime**.
	- **Error:**
		- Error is **irrecoverable**. 
		- Some example of errors are **OutOfMemoryError**, **VirtualMachineError**, **AssertionError** etc

## User Defined Exception
- The built-in exceptions in Java are not able to describe a certain situation. 
- In such cases, users can also create exceptions, which are called **User-Defined Exceptions**.

- **The advantages of Exception Handling:**
	- Provision to Complete Program Execution
	- Easy Identification of Program Code and Error-Handling Code 
	- Propagation of Errors
	- Meaningful Error Reporting
	- Identifying Error Types

### Methods to Print Exception Information:
- `PrintStackTrace()`: This method prints exception information in the format of the Name of the exception: description of the exception, stack trace.

```JAVA
//program to print the exception information using printStackTrace() method 

import java.io.*; 

class GFG { 
	public static void main (String[] args) { 
		int a=5; 
		int b=0; 
		try { 
			System.out.println(a/b);
		} 
		catch (ArithmeticException e) { 
			e.printStackTrace(); 
		} 
	} 
}

// OUTPUT
// java.lang.ArithmeticException: / by zero
//	at GFG.main(GFG.java:10)
```

- `toString()` : The `toString()` method prints exception information in the format of the Name of the exception: description of the exception.

```JAVA
//program to print the exception information using toString() method 
import java.io.*; 

class GFG1 { 
	public static void main (String[] args) { 
		int a=5; 
		int b=0; 
		try { 
			System.out.println(a/b); 
		}
		catch(ArithmeticException e) { 
			System.out.println(e.toString()); 
		} 
	} 
}

// OUTPUT
// java.lang.ArithmeticException: / by zero
```

- `getMessage()` : The `getMessage()` method prints only the description of the exception.

```JAVA
//program to print the exception information using getMessage() method 

import java.io.*; 

class GFG1 { 
	public static void main (String[] args) { 
		int a=5; 
		int b=0; 
		try { 
			System.out.println(a/b); 
		} 
		catch(ArithmeticException e) { 
			System.out.println(e.getMessage()); 
		} 
	} 
}

// OUTPUT
// / by zero
```

# Questions
1. What is a package in java programming, and how do you create one? Explain steps of it.
2. What is String class? Explain its method in java.
3. What is StringBuffer class in java? Give advantage of it and explain with its method.
4. Write down difference between String and StringBuffer.
5. What is Exception in java?
6. What are the Exception Handling Technique? Explain in detail.
7. What are the Methods to print the Exception information? Explain in detail
