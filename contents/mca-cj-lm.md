---
header: CJ-LM
title: CJ Lab Manual
slug: mca-cj-lm
semester: 7
image: /java.jpg
accent: "#FF4341"
link:
---

## Practical 1

**Aim:** Write a simple "Hello World" java program, compilation, debugging, executing using java compiler and interpreter.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Output:**

```sh
Hello, World!
```

**Conclusion:** In this practical, we learned how to write, compile, and execute a basic Java program using the Java compiler (`javac`) and interpreter (`java`). We gained an understanding of the structure of a Java application, including the main method entry point and basic console output commands.

---

## Practical 2

**Aim:** Write a program using the arithmetic operators to perform algebraic operations on two numbers `(+,-,*,/,%)`.

**Java Code:**

```java
    import java.util.Scanner;

    public class arithmeticOperators {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter first number: ");
            int a = scanner.nextInt();

            System.out.print("Enter second number: ");
            int b = scanner.nextInt();

            System.out.println("Addition (a + b) = " + (a + b));
            System.out.println("Subtraction (a - b) = " + (a - b));
            System.out.println("Multiplication (a * b) = " + (a * b));
            System.out.println("Division (a / b) = " + (a / b));
            System.out.println("Modulo (a % b) = " + (a % b));
            scanner.close();
        }
    }
```

**Output:**

```sh
Enter first number: 20
Enter second number: 6
Addition (a `+` b) = 26
Subtraction (a `-` b) = 14
Multiplication (a `*` b) = 120
Division (a `/` b) = 3
Modulo (a `%` b) = 2
```

**Conclusion:** In this practical, we successfully implemented basic arithmetic operators (`+`, `-`, `*`, `/`, `%`) in Java to perform algebraic operations on user-provided inputs. We understood how integer division computes quotients while the modulo operator evaluates the remainder.

---

## Practical 3

**Aim:** Write a java program to print the value of `x^n`. Input: x=5, n=3 Output: 125

```java
import java.util.Scanner;

public class PowerCalculation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Input x: ");
        int x = scanner.nextInt();

        System.out.print("Input n: ");
        int n = scanner.nextInt();

        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= x;
        }

        System.out.println("Output: " + result);

        scanner.close();
    }
}
```

**Output:**

```sh
Input x: 5
Input n: 3
Output: 125
```

**Conclusion:** In this practical, we demonstrated power calculation `(x^n)` in Java using iterative control structures (`for` loop). We learned how to accumulate multiplicative results across iterations to compute exponential values efficiently.

---

## Practical 4

**Aim:** Write a program in Java to find a minimum of three numbers using a conditional operator.

```java
import java.util.Scanner;

public class MinThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = scanner.nextInt();

        System.out.print("Enter second number: ");
        int b = scanner.nextInt();

        System.out.print("Enter third number: ");
        int c = scanner.nextInt();

        int min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

        System.out.println("Minimum number is: " + min);

        scanner.close();
    }
}
```

**Output:**

```sh
Enter first number: 15
Enter second number: 7
Enter third number: 12
Minimum number is: 7
```

**Conclusion:** In this practical, we explored the usage of nested ternary (conditional) operators (`?:`) to find the minimum of three numbers. We understood how concise conditional expressions simplify decision-making logic without relying on verbose `if-else` blocks.

---

## Practical 5

**Aim:** Write a program to print even numbers up to 10 using a while loop.

```java
public class EvenNumbers {
    public static void main(String[] args) {
        int i = 2;
        while (i <= 10) {
            System.out.println(i);
            i += 2;
        }
    }
}
```

**Output:**

```sh
2
4
6
8
10
```

**Conclusion:** In this practical, we learned how to utilize the `while` loop construct in Java to iterate and print even numbers sequentially up to 10. We understood loop initialization, condition evaluation, and increment operations.

---

## Practical 6

**Aim:** Write a Program to print Prime numbers between 1 to 100.

```java
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

**Output:**

```sh
Prime numbers between 1 and 100:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```

**Conclusion:** In this practical, we implemented nested loop logic and mathematical checks to identify prime numbers between 1 and 100. We learned how to optimize prime testing using `Math.sqrt()` and boolean flags.

---

## Practical 7

**Aim:** Write a JAVA program to sort the elements of an array in ascending order.

```java
import java.util.Scanner;

class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        // Sort array in ascending order
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        System.out.println("Array in ascending order:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }

        sc.close();
    }
}
```

**Output:**

```sh
Enter number of elements: 5
Enter elements:
25 35 36 15 25
Array in ascending order:
15 25 25 35 36
```

**Conclusion:** In this practical, we implemented the Bubble Sort algorithm in Java to arrange array elements in ascending order. We gained practical knowledge of array traversal, index comparisons, and value swapping techniques.

---

## Practical 8

**Aim:** Write a program in Java to multiply two matrixes. Declare a class Matrix where 2D array is declared as instance variable and array should be initialized, within class.

```java
class Matrix {
    int[][] a = {
        {1, 2},
        {3, 4}
    };

    int[][] b = {
        {5, 6},
        {7, 8}
    };

    public static void main(String[] args) {
        Matrix m = new Matrix();

        int[][] c = new int[2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    c[i][j] = c[i][j] + m.a[i][k] * m.b[k][j];
                }
            }
        }

        System.out.println("Result:");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(c[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

**Output:**

```sh
Result:
19 22
43 50
```

**Conclusion:** In this practical, we developed an object-oriented Java program to perform 2D matrix multiplication. We learned object modeling, encapsulation of 2D arrays within classes, constructor initialization, and multi-dimensional loop indexing.

---

## Practical 9

**Aim:** Write a java program to check Armstrong number. Input: 153 Output: Armstrong number Input: 22 Output: not Armstrong number.

```java
import java.util.Scanner;

public class ArmstrongCheck {
    public static void checkArmstrong(int num) {
        int original = num;
        int sum = 0;
        int digits = String.valueOf(num).length();

        int temp = num;
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp /= 10;
        }

        if (sum == original) {
            System.out.println("Output: Armstrong number");
        } else {
            System.out.println("Output: not Armstrong number");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        checkArmstrong(number);

        scanner.close();
    }
}
```

**Output:**

```sh
Enter a number: 153
Armstrong number
Enter a number: 22
Not Armstrong number
```

**Conclusion:** In this practical, we created a program to verify whether a given integer is an Armstrong number. We understood digit extraction using modulus (`%`) and division (`/`) operators alongside power calculations with `Math.pow()`.

---

## Practical 10

**Aim:** Write programs in Java to use the Wrapper class of each primitive data type.

```java
class test {
    public static void main(String[] args) {

        byte b = 10;
        short s = 20;
        int i = 30;
        long l = 40L;
        float f = 50.5f;
        double d = 60.5;
        char c = 'A';
        boolean bool = true;

        Byte obj1 = b;
        Short obj2 = s;
        Integer obj3 = i;
        Long obj4 = l;
        Float obj5 = f;
        Double obj6 = d;
        Character obj7 = c;
        Boolean obj8 = bool;

        System.out.println("Byte: " + obj1);
        System.out.println("Short: " + obj2);
        System.out.println("Integer: " + obj3);
        System.out.println("Long: " + obj4);
        System.out.println("Float: " + obj5);
        System.out.println("Double: " + obj6);
        System.out.println("Character: " + obj7);
        System.out.println("Boolean: " + obj8);
    }
}
```

**Output:**

```sh
Byte: 10
Short: 20
Integer: 30
Long: 40
Float: 50.5
Double: 60.5
Character: A
Boolean: true
```

**Conclusion:** In this practical, we demonstrated the use of Wrapper classes for all primitive data types in Java and understood how primitive values can be represented as objects.
