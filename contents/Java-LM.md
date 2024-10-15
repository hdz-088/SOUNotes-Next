---
title: Java Lab Manual
slug: java-lm
semester: 3
image: /java.png
link: https://drive.google.com/file/d/1_uW8_TmdUXp4oV3e_yBl5-se9CTdKMpk/view?usp=drive_link
---

## Experiment: 01

**Aim:** Write a Java program to evaluate simple interest given the principal, rate, and time.

**Description:** From this practical, students will learn how to take user inputs and calculate results.

**Procedure:** Write a Java program to calculate simple interest by taking inputs for principal, rate, and time.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class SimpleInterest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Principal: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter Rate: ");
        double rate = scanner.nextDouble();

        System.out.print("Enter Time: ");
        double time = scanner.nextDouble();

        double interest = (principal * rate * time) / 100;

        System.out.println("Simple Interest is: " + interest);

        scanner.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to accept user inputs and calculate simple interest using basic arithmetic operations. This helped in understanding input/output functionality in Java.

**MCQs:**

1. B
2. D
3. C
4. D

---

## Experiment: 02

**Aim:** Write a program using the arithmetic operators to perform algebraic operations on two numbers `(+, -, *, /, %)`.

**Description:** By doing this program, students will understand the concept of operators and operands to perform arithmetic operations.

**Procedure:** Write a Java program that takes two numbers as input and performs the basic arithmetic operations: addition, subtraction, multiplication, division, and modulus.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class ArithmeticOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double num2 = scanner.nextDouble();

        System.out.println("Addition: " + (num1 + num2));
        System.out.println("Subtraction: " + (num1 - num2));
        System.out.println("Multiplication: " + (num1 * num2));
        System.out.println("Division: " + (num1 / num2));
        System.out.println("Modulus: " + (num1 % num2));

        scanner.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to use arithmetic operators to perform operations on two operands. They understood the use of basic operators like addition, subtraction, multiplication, division, and modulus in Java.

**MCQs:**

1. B
2. D
3. D
4. C

---

## Experiment: 03

**Aim:** Write a program to calculate the area of a square and a rectangle.

**Description:** From this program, students will learn how to create and call functions to perform specific tasks.

**Procedure:**

```java showLineNumbers
import java.util.Scanner;

public class AreaCalc {
    // Function to calculate area of square
    static double squareArea(double s) {
        return s * s;
    }

    // Function to calculate area of rectangle
    static double rectArea(double l, double b) {
        return l * b;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Square
        System.out.print("Enter side: ");
        double s = sc.nextDouble();
        System.out.println("Square Area: " + squareArea(s));

        // Rectangle
        System.out.print("Enter length and breadth: ");
        double l = sc.nextDouble();
        double b = sc.nextDouble();
        System.out.println("Rectangle Area: " + rectArea(l, b));

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to create and call functions for calculating the area of a square and a rectangle. This demonstrated the practical use of functions to make the code modular and reusable.

**MCQs:**

1. D
2. D
3. B

---

## Experiment: 04

**Aim:** Write a program to input three values from the user and display the minimum using conditional operators.

**Description:** From this experiment, students will gain an understanding of conditional operators and their usage.

**Procedure:** Write a Java program that takes three values as input and uses conditional operators to determine and display the minimum value.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class MinValue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter three numbers: ");
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();

        double min = (a < b ? (a < c ? a : c) : (b < c ? b : c));

        System.out.println("Minimum value: " + min);

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to use conditional operators to determine the minimum value among three user-inputted values. This exercise enhanced their understanding of decision-making in programming.

**MCQs:**

1. A
2. C
3. B
4. B

---

## Experiment: 05

**Aim:** Write a program to perform the addition of two given numbers and display the answer (with user input).

**Description:** This program is designed to take two numbers as input from the user, add them together, and display the result.

**Procedure:**

```java showLineNumbers
import java.util.Scanner;

public class Addition {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter 1st numbers: ");
        double num1 = sc.nextDouble();
        System.out.print("Enter 2nd numbers: ");
        double num2 = sc.nextDouble();

        double sum = num1 + num2;

        System.out.println("Sum: " + sum);

        sc.close();
    }
}

```

**Conclusion:** In this experiment, students learned how to take user input, perform addition on two numbers, and display the result. This helped reinforce their understanding of basic arithmetic operations and user input handling in Java.

**MCQs:**

1. B
2. C
3. B

---

## Experiment: 06

**Aim:** Write a program to print even numbers up to 10 using a while loop.

**Description:** From this experiment, students will understand the fundamentals of looping statements.

**Procedure:** Write a Java program that uses a while loop to print all even numbers from 0 to 10.

**Code:**

```java showLineNumbers
public class EvenNumbers {
    public static void main(String[] args) {
        int i = 0;
        while (i <= 10) {
            System.out.println(i);
            i += 2; // Increment by 2 to get the next even number
        }
    }
}
```

**Conclusion:** In this experiment, students learned how to use a while loop to print even numbers up to 10. This exercise reinforced their understanding of loop control and iteration in Java.

**MCQs:**

1. C
2. A
3. C

---

## Experiment: 07

**Aim:** Write a program to check whether the given number is even or odd.

**Description:** This program takes a number as input from the user and determines whether it is even or odd, helping students understand conditional statements and modulus operations.

**Procedure:** Write a Java program that prompts the user for a number, checks if it is even or odd using a conditional statement, and displays the result.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num % 2 == 0) {
            System.out.println(num + " is even.");
        } else {
            System.out.println(num + " is odd.");
        }

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to determine whether a given number is even or odd using conditional statements and the modulus operator. This reinforced their understanding of control flow in programming.

**MCQs:**

1. A
2. A
3. D

---

## Experiment: 08

**Aim:** Write a program to print prime numbers between 1 and 100.

**Description:** This program identifies and prints all prime numbers in the range from 1 to 100, helping students understand the concepts of loops and conditional statements.

**Procedure:** Write a Java program that checks each number from 1 to 100 to determine if it is prime and prints the prime numbers.

**Code:**

```java showLineNumbers
public class PrimeNumbers {
    public static void main(String[] args) {
        System.out.println("Prime numbers between 1 and 100:");

        for (int num = 2; num <= 100; num++) {
            boolean isPrime = true;

            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                System.out.print(num + " ");
            }
        }
    }
}
```

**Conclusion:** In this experiment, students learned how to find and print prime numbers between 1 and 100 using nested loops and conditional statements. This helped reinforce their understanding of algorithmic thinking and control flow in programming.

**MCQs:**

1. B
2. C
3. D

---

## Experiment: 09

**Aim:** Write a Java program to print the elements of an array in reverse order.

**Description:** This program takes an array of integers as input and prints its elements in reverse order, helping students understand array manipulation and loops.

**Procedure:** Write a Java program that initializes an array, then uses a loop to print its elements from the last index to the first.

**Code:**

```java showLineNumbers
public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5}; // Example array
        System.out.println("Array elements in reverse order:");

        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}
```

**Conclusion:** In this experiment, students learned how to manipulate arrays in Java by printing their elements in reverse order. This exercise enhanced their understanding of array indexing and loop control.

**MCQs:**

1. A
2. D

---

## Experiment: 10

**Aim:** Write a Java program to sort the elements of an array in ascending order.

**Description:** This program sorts an array of integers in ascending order using the built-in `Arrays.sort()` method, helping students understand array manipulation and sorting techniques.

**Procedure:** Write a Java program that initializes an array, sorts its elements using the `Arrays.sort()` method, and prints the sorted array.

**Code:**

```java showLineNumbers
import java.util.Arrays;

public class SortArray {
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 1, 2}; // Example array
        System.out.println("Array elements before sorting:");

        for (int num : arr) {
            System.out.print(num + " ");
        }

        // Sorting the array using Arrays.sort()
        Arrays.sort(arr);

        System.out.println("\nArray elements after sorting:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**Conclusion:** In this experiment, students learned how to sort an array of integers in ascending order using the `Arrays.sort()` method. This exercise reinforced their understanding of array manipulation and the benefits of utilizing built-in library methods for efficiency.

---

## Experiment: 11

**Aim:** Write a program to convert inches into centimetres.

**Description:** This program prompts the user to enter a measurement in inches and converts it to centimeters, helping students understand user input and basic arithmetic operations.

**Procedure:** Write a Java program that takes an input in inches from the user, performs the conversion to centimeters, and displays the result.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class InchesToCentimeters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the measurement in inches: ");
        double inches = sc.nextDouble();

        // Conversion factor: 1 inch = 2.54 centimeters
        double centimeters = inches * 2.54;

        System.out.println(inches + " inches is equal to " + centimeters + " centimeters.");

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to convert inches to centimeters using user input and arithmetic calculations. This reinforced their understanding of data types, input handling, and basic math in Java.

**MCQs:**

1. D
2. B
3. D
4. C

---

## Experiment: 12

**Aim:** Write a Java program to find the reverse of a given String.

**Description:** This program takes a string input from the user and displays its reverse, helping students understand string manipulation and basic control structures.

**Procedure:** Write a Java program that prompts the user for a string, reverses the string using a loop, and prints the reversed string.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = sc.nextLine();
        String reversed = "";

        // Reversing the string
        for (int i = input.length() - 1; i >= 0; i--) {
            reversed += input.charAt(i);
        }

        System.out.println("Reversed string: " + reversed);

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to reverse a string in Java by manipulating its characters. This exercise reinforced their understanding of string operations and control flow within a loop.

**MCQs:**

1. A
2. C
3. B

---

## Experiment: 13

**Aim:** Write a Java program to count the total number of characters in a string.

**Description:** This program takes a string input from the user and counts the total number of characters, including spaces, helping students understand string manipulation and basic counting techniques.

**Procedure:** Write a Java program that prompts the user for a string and then calculates and displays the total number of characters.

**Code:**

```java showLineNumbers
import java.util.Scanner;

public class CountCharacters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = sc.nextLine();

        // Counting characters
        int count = input.length();

        System.out.println("Total number of characters: " + count);

        sc.close();
    }
}
```

**Conclusion:** In this experiment, students learned how to count the total number of characters in a string using the `length()` method. This exercise reinforced their understanding of string properties and input handling in Java.

**MCQs:**

1. B
2. C
3. C
4. C

---

## Experiment: 14

**Aim:** Write a Java program that draws a circle centered in the center of the applet and filled with random color.

**Code:**

```java showLineNumbers
import java.applet.Applet;
import java.awt.Graphics;

public class Practical14 extends Applet {
    public void init() {
        // Calling super class's init method
        super.init();
        // Set the size of the applet
        setSize(350, 350);
    }

    public void paint(Graphics g) {
        // Draw an oval
        g.drawOval(50, 50, 200, 200);
        // Draw a string
        g.drawString("Sherlock", 140, 150);
    }
}
```

**MCQs:**

1. A
2. B
3. C
4. B

---
