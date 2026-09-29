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

**MCQs**

1. B
2. A
3. B
4. B
5. B

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

**MCQs**

1. B
2. C
3. B
4. B
5. B

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

**MCQs**

1. A
2. B
3. A
4. B
5. B

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

**MCQs**

1. A
2. B
3. B
4. A
5. B

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

**MCQs**

1. A
2. A
3. A
4. B
5. A

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

**MCQs**

1. C
2. B
3. A
4. B
5. B

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

**MCQs**

1. C
2. A
3. C
4. C
5. A

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

**MCQs**

1. C
2. B
3. B
4. C
5. A

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

**MCQs**

1. C
2. B
3. A
4. B
5. A

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

**MCQs**

1. B
2. B
3. B
4. A
5. A

**Conclusion:** In this practical, we demonstrated the use of Wrapper classes for all primitive data types in Java and understood how primitive values can be represented as objects.

## Practical 11

**Aim:** Write the program for method overloading.

**Java Code:**

```java
class Calculator {
    // Overloaded method: 2 integer parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method: 3 integer parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method: 2 double parameters
    public double add(double a, double b) {
        return a + b;
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
            System.out.println("Add 2 integers (10 + 20): " + calc.add(10, 20));
            System.out.println("Add 3 integers (10 + 20 + 30): " + calc.add(10, 20, 30));
            System.out.println("Add 2 doubles (5.5 + 4.3): " + calc.add(5.5, 4.3));
    }
}
```

**Output:**

```sh
Add 2 integers (10 + 20): 30
Add 3 integers (10 + 20 + 30): 60
Add 2 doubles (5.5 + 4.3): 9.8
```

**MCQs**

1. C
2. B
3. B
4. B
5. A

**Conclusion:** In this practical, we explored method overloading in Java to achieve compile-time polymorphism. We demonstrated how multiple methods within the same class can share the same name provided their parameter types or counts differ.

---

## Practical 12

**Aim:** Consider an employee class, which contains fields such as name and Designation. And a subclass, which contains a field for salary. Write a program to inherit this relation.

**Java Code:**

```java
import java.util.Scanner;

class Employee {
    String name;
    String designation;

    public Employee(String name, String designation) {
        this.name = name;
        this.designation = designation;
    }

    public void displayDetails() {
        System.out.println("Employee Name: " + name);
        System.out.println("Designation: " + designation);
    }
}

class SalaryEmployee extends Employee {
    double salary;

    public SalaryEmployee(String name, String designation, double salary) {
        super(name, designation);
        this.salary = salary;
    }

    public void displaySalaryEmployee() {
        displayDetails();
        System.out.println("Salary: " + salary);
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Employee Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Designation: ");
        String designation = scanner.nextLine();

        System.out.print("Enter Salary: ");
        double salary = scanner.nextDouble();

        SalaryEmployee emp = new SalaryEmployee(name, designation, salary);

        System.out.println("\n--- Employee Details ---");
        emp.displaySalaryEmployee();

        scanner.close();
    }
}
```

**Output:**

```sh
Enter Employee Name: Nick
Enter Designation: Software Engineer
Enter Salary: 75000

--- Employee Details ---
Employee Name: Nick
Designation: Software Engineer
Salary: $75000.0
```

**MCQs**

1. B
2. B
3. B
4. A
5. B

**Conclusion:** In this practical, we implemented single inheritance in Java using the `extends` keyword. We learned how a subclass inherits instance variables and methods from a superclass and utilizes `super()` to initialize parent class fields.

---

## Practical 13

**Aim:** Create a class "Rectangle" that would contain length and width as an instance variable. Define constructors [constructor overloading (default, parameterized and copy)] to initialize variables of objects. Define methods to find area and to display variables' value of objects which are created.

**Java Code:**

```java
class Rectangle {
    double length;
    double width;

    // 1. Default Constructor
    public Rectangle() {
        this.length = 1.0;
        this.width = 1.0;
    }

    // 2. Parameterized Constructor
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // 3. Copy Constructor
    public Rectangle(Rectangle rect) {
        this.length = rect.length;
        this.width = rect.width;
    }

    public double calculateArea() {
        return length * width;
    }

    public void display() {
        System.out.println("Length: " + length + ", Width: " + width + ", Area: " + calculateArea());
    }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();                  // Default
        Rectangle r2 = new Rectangle(5.0, 3.0);          // Parameterized
        Rectangle r3 = new Rectangle(r2);                 // Copy

        System.out.println("--- Default Rectangle ---");
        r1.display();

        System.out.println("--- Parameterized Rectangle ---");
        r2.display();

        System.out.println("--- Copy Rectangle ---");
        r3.display();
    }
}
```

**Output:**

```sh
--- Default Rectangle ---
Length: 1.0, Width: 1.0, Area: 1.0
--- Parameterized Rectangle ---
Length: 5.0, Width: 3.0, Area: 15.0
--- Copy Rectangle ---
Length: 5.0, Width: 3.0, Area: 15.0
```

**MCQs**

1. A
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we demonstrated constructor overloading including default, parameterized, and copy constructors in a `Rectangle` class. We learned how different constructor forms enable flexible object initialization and area calculations.

---

## Practical 14

**Aim:** Create a class "Vehicle" with instance variable vehicle_type. Inherit the class in a class called "Car" with instance model_type, company name etc. display the information of the vehicle by defining the display() in both super and sub class [Method Overriding].

**Java Code:**

```java
class Vehicle {
    String vehicle_type;

    public Vehicle(String vehicle_type) {
        this.vehicle_type = vehicle_type;
    }

    public void display() {
        System.out.println("Vehicle Type: " + vehicle_type);
    }
}

class Car extends Vehicle {
    String model_type;
    String company_name;

    public Car(String vehicle_type, String model_type, String company_name) {
        super(vehicle_type);
        this.model_type = model_type;
        this.company_name = company_name;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Company Name: " + company_name);
        System.out.println("Model Type: " + model_type);
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        Car car = new Car("Four-Wheeler", "Sedan", "Toyota");
        car.display();
    }
}
```

**Output:**

```sh
Vehicle Type: Four-Wheeler
Company Name: Toyota
Model Type: Sedan
```

**MCQs**

1. A
2. B
3. A
4. B
5. B

**Conclusion:** In this practical, we demonstrated method overriding in Java to achieve runtime polymorphism between a `Vehicle` superclass and `Car` subclass. We learned how `@Override` allows a subclass to customize parent class methods while invoking base behavior via `super.display()`.

---

## Practical 15

**Aim:** Create a class "Account" containing accountNo, and balance as an instance variable. Derive the Account class into two classes named "Savings" and "Current". The "Savings" class should contain an instance variable named interest Rate, and the "Current" class should contain an instance variable called overdraft Limit. Define appropriate methods for all the classes to enable functionalities to check balance, deposit, and withdraw amounts in Savings and Current accounts. [Ensure that the Account class cannot be instantiated.]

**Java Code:**

```java
abstract class Account {
    int accountNo;
    double balance;

    Account(int accountNo, double balance) {
        this.accountNo = accountNo;
        this.balance = balance;
    }

    void checkBalance() {
        System.out.println("Account No: " + accountNo);
        System.out.println("Balance: " + balance);
    }

    void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Deposited: " + amount);
    }

    abstract void withdraw(double amount);
}

class Savings extends Account {
    double interestRate;

    Savings(int accountNo, double balance, double interestRate) {
        super(accountNo, balance);
        this.interestRate = interestRate;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance = balance - amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }
}

class Current extends Account {
    double overdraftLimit;

    Current(int accountNo, double balance, double overdraftLimit) {
        super(accountNo, balance);
        this.overdraftLimit = overdraftLimit;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance = balance - amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Overdraft limit exceeded");
        }
    }
}

class Bank {
    public static void main(String[] args) {

        Savings s = new Savings(101, 10000, 5.0);

        System.out.println("-- Savings Account -- ");
        s.checkBalance();
        s.deposit(2000);
        s.withdraw(3000);
        s.checkBalance();

        System.out.println();

        Current c = new Current(102, 5000, 3000);

        System.out.println("-- Current Account -- ");
        c.checkBalance();
        c.deposit(2000);
        c.withdraw(9000);
        c.checkBalance();
    }
}
```

**Output:**

```sh
-- Savings Account --
Account No: 101
Balance: 10000.0
Deposited: 2000.0
Withdrawn: 3000.0
Account No: 101
Balance: 9000.0

-- Current Account --
Account No: 102
Balance: 5000.0
Deposited: 2000.0
Withdrawn: 9000.0
Account No: 102
Balance: -2000.0
```

**MCQs**

1. B
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we demonstrated **inheritance and abstraction** by creating an abstract `Account` class and deriving `Savings` and `Current` classes with their respective functionalities for **deposit, withdrawal, and balance checking**.

---

## Practical 16

**Aim:** Write a program in Java in which a subclass constructor invokes the constructor of the super class and instantiate the values. [ refer class Account and sub classes savingAccount and CurrentAccount in Q 14 for this task]

**Java Code:**

```java
class Account {
    int accountNo;
    double balance;

    Account(int no, double bal) {
        accountNo = no;
        balance = bal;
    }
}

class SavingAccount extends Account {
    double interestRate;

    SavingAccount(int no, double bal, double rate) {
        super(no, bal);
        interestRate = rate;
    }

    void display() {
        System.out.println("Account No: " + accountNo);
        System.out.println("Balance: " + balance);
        System.out.println("Interest Rate: " + interestRate);
    }
}

class CurrentAccount extends Account {
    double overdraftLimit;

    CurrentAccount(int no, double bal, double limit) {
        super(no, bal);
        overdraftLimit = limit;
    }

    void display() {
        System.out.println("Account No: " + accountNo);
        System.out.println("Balance: " + balance);
        System.out.println("Overdraft Limit: " + overdraftLimit);
    }
}

class Main {
    public static void main(String[] args) {

        SavingAccount s = new SavingAccount(101, 10000, 5);
        s.display();

        System.out.println();

        CurrentAccount c = new CurrentAccount(102, 5000, 3000);
        c.display();
    }
}
```

**Output:**

```sh
Account No: 101
Balance: 10000.0
Interest Rate: 5.0

Account No: 102
Balance: 5000.0
Overdraft Limit: 3000.0
```

**MCQs**

1. B
2. B
3. A
4. B
5. B

**Conclusion:** In this practical, we demonstrated how a **subclass constructor invokes the superclass constructor using** `super()` and initializes the inherited values.

---

## Practical 17

**Aim:** Write a program in Java to demonstrate use of this keyword. Check whether this can access the Static variables of the class or not.

**Java Code:**

```java
class Student {
    int rollNo = 101;
    static String college = "Silver Oak University";

    void display() {
        System.out.println("Roll No: " + this.rollNo);
        System.out.println("College: " + this.college);
    }
}

class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}
```

**Output:**

```sh
Roll No: 101
College: Silver Oak University
```

**MCQs**

1. A
2. A
3. A
4. B
5. B

**Conclusion:** In this practical, we demonstrated the use of the `**this**` **keyword** to access instance and static variables of a class.

---

## Practical 18

**Aim:** Write a program in Java to demonstrate the use of 'final' keyword in the field declaration. How it is accessed using the objects.

**Java Code:**

```java
class BankAccount {

    final int accountNo;
    String name;

    // Constructor
    BankAccount(int accountNo, String name) {
        this.accountNo = accountNo;
        this.name = name;
    }

    public static void main(String[] args) {

        BankAccount a1 = new BankAccount(101, "Nick");
        BankAccount a2 = new BankAccount(102, "Jhon");

        System.out.println("Account 1:");
        System.out.println("Account No = " + a1.accountNo);
        System.out.println("Name = " + a1.name);

        System.out.println("\nAccount 2:");
        System.out.println("Account No = " + a2.accountNo);
        System.out.println("Name = " + a2.name);
    }
}
```

**Output:**

```sh
Account 1:
Account No = 101
Name = Nick

Account 2:
Account No = 102
Name = Jhon
```

**MCQs**

1. A
2. B
3. B
4. A
5. B

**Conclusion:** In this practical, we demonstrated the `final` keyword for declaring constant fields and blank final fields initialized via constructors. We learned that final fields can be read via object references but cannot be modified once set.

---

## Practical 19

**Aim:** Describe abstract class called Shape which has three subclasses say Triangle, Rectangle, and Circle. Define one method area () in the abstract class and override this area () in these three subclasses to calculate for specific objects i.e. area () of Triangle subclass should calculate area of triangle etc. Same for Rectangle and Circle.

**Java Code:**

```java
abstract class Shape {
    public abstract double area();
}

class Triangle extends Shape {
    double base;
    double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double area() {
        return 0.5 * base * height;
    }
}

class RectangleShape extends Shape {
    double length;
    double width;

    public RectangleShape(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double area() {
        return length * width;
    }
}

class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

public class AbstractShapeDemo {
    public static void main(String[] args) {
        Shape t = new Triangle(10.0, 5.0);
        Shape r = new RectangleShape(8.0, 4.0);
        Shape c = new Circle(7.0);

        System.out.println("Area of Triangle: " + t.area());
        System.out.println("Area of Rectangle: " + r.area());
        System.out.println("Area of Circle: " + c.area());
    }
}
```

**Output:**

```sh
Area of Triangle: 25.0
Area of Rectangle: 32.0
Area of Circle: 153.93804002589985
```

**MCQs**

1. A
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we built an abstract `Shape` class with `Triangle`, `RectangleShape`, and `Circle` subclasses overriding the `area()` method. We observed dynamic method dispatch calculating distinct geometric areas through polymorphic references.

---

## Practical 20

**Aim:** Assume that there are two packages, student and exam. A student package contains Student class and the exam package contains Result class. Write a program that generates mark sheet for students.

```
// Project Structure

ProjectFolder/
│
├── student/
│   └── Student.java
│
└── exam/
    └── Result.java
```

**Java Code:**

```java
// Package structure representation in Java

// File 1: student/Student.java
package student;

public class Student {
    public int rollNo;
    public String name;
    public int mark1, mark2, mark3;

    public Student(int rollNo, String name, int mark1, int mark2, int mark3) {
        this.rollNo = rollNo;
        this.name = name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }
}

// File 2: exam/Result.java
package exam;

import student.Student;

public class Result {
    public static void generateMarkSheet(Student s) {
        int total = s.mark1 + s.mark2 + s.mark3;
        double percentage = total / 3.0;

        System.out.println("================ MARK SHEET ================");
        System.out.println("Roll No    : " + s.rollNo);
        System.out.println("Name       : " + s.name);
        System.out.println("Subject 1  : " + s.mark1);
        System.out.println("Subject 2  : " + s.mark2);
        System.out.println("Subject 3  : " + s.mark3);
        System.out.println("Total Marks: " + total);
        System.out.println("Percentage : " + percentage + "%");
        System.out.println("============================================");
    }

    public static void main(String[] args) {
        Student s = new Student(101, "John Doe", 85, 90, 78);
        generateMarkSheet(s);
    }
}
```

**Output:**

```cmd
javac student\Student.java
javac exam\Result.java
java exam.Result
```

```sh
================ MARK SHEET ================
Roll No    : 101
Name       : John Doe
Subject 1  : 85
Subject 2  : 90
Subject 3  : 78
Total Marks: 253
Percentage : 84.33333333333333%
============================================
```

**MCQs**

1. A
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we implemented cross-package class interaction between `student` and `exam` packages to generate student mark sheets. We learned how public visibility and package imports structure modular Java applications.

---

## Practical 21

**Aim:** Write a java program to accept strings to check whether it is in Upper or Lower case. After checking, the case will be reversed.

**Java Code:**

```java
import java.util.Scanner;

class CaseReverse {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String result = "";

        System.out.println("Original String: " + str);

        for (int i = 0; i < str.length(); i++) {

            char ch = str.charAt(i);

            if (Character.isUpperCase(ch)) {
                result = result + Character.toLowerCase(ch);
            }
            else if (Character.isLowerCase(ch)) {
                result = result + Character.toUpperCase(ch);
            }
            else {
                result = result + ch;
            }
        }

        System.out.println("Reversed Case: " + result);
    }
}
```

**Output:**

```sh
Enter a string: Hello World
Original String: Hello World
Reversed Case: hELLO wORLD
```

**MCQs**

1. B
2. A
3. A
4. B
5. B

**Conclusion:** In this practical, we developed a string manipulation program to inspect character casing and invert uppercase and lowercase letters. We gained experience using `Character` utility methods and `StringBuilder` for string construction.

---

## Practical 22

**Aim:** Write a program in Java to develop user defined exceptions for 'Divide by Zero' error.

**Java Code:**

```java
class DivideByZeroException extends Exception {

    DivideByZeroException(String msg) {
        super(msg);
    }
}

class test {

    static int divide(int a, int b) throws DivideByZeroException {

        if (b == 0) {
            throw new DivideByZeroException("Cannot divide by zero");
        }
        return a / b;
    }

    public static void main(String[] args) {

        try {
            int result = divide(10, 0);
            System.out.println("Result = " + result);
        }
        catch (DivideByZeroException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

**Output:**

```sh
Cannot divide by zero
```

**MCQs**

1. B
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we created a custom user-defined exception (`DivideByZeroException`) extending the `Exception` class. We learned how to explicitly throw and catch custom exceptions to handle specific error conditions gracefully.

---

## Practical 23

**Aim:** Write a program in Java to demonstrate throw, throws, finally, multiple try block and multiple catch exception.

**Java Code:**

```java
class ExceptionDemo {

    static void checkAge(int age) throws Exception {

        if (age < 18) {
            throw new Exception("Age must be 18 or above");
        }
        System.out.println("Eligible");
    }

    public static void main(String[] args) {

        // First try block
        try {
            int a = 10;
            int b = 0;
            System.out.println(a / b);
        }
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
        finally {
            System.out.println("First try block completed");
        }


        // Second try block
        try {
            int marks[] = {80, 90, 70};
            System.out.println(marks[5]);
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is invalid");
        }
        catch (Exception e) {
            System.out.println("Some other exception occurred");
        }
        finally {
            System.out.println("Second try block completed");
        }


        // Third try block
        try {
            checkAge(16);
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
        finally {
            System.out.println("Third try block completed");
        }
    }
}
```

**Output:**

```sh
Cannot divide by zero
First try block completed
Array index is invalid
Second try block completed
Age must be 18 or above
Third try block completed
```

**MCQs**

1. A
2. B
3. B
4. B
5. B

**Conclusion:** In this practical, we demonstrated key Java exception handling keywords (`try`, `catch`, `finally`, `throw`, and `throws`). We learned how multiple catch blocks handle distinct runtime exceptions while `finally` guarantees cleanup execution.

---

## Practical 24

**Aim:** Write a small application in Java to develop Banking Application in which the user deposits the amount Rs 1000.00 and then start withdrawing of Rs 400.00, Rs 300.00 and it throws exception "Not Sufficient Fund" when user withdraws Rs. 500 there after.

**Java Code:**

```java
class InsufficientFundException extends Exception {

    InsufficientFundException(String msg) {
        super(msg);
    }
}

class Bank {

    double balance = 1000.00;

    void withdraw(double amount) throws InsufficientFundException {

        System.out.print("Withdrawn: Rs. " + amount);

        if (amount > balance) {
            throw new InsufficientFundException(" -> Not Sufficient Fund! ");
        }

        balance = balance - amount;
        System.out.println(" -> Balance: Rs. " + balance);
    }

    public static void main(String[] args) {

        Bank b = new Bank();

        System.out.println("Initial Balance: Rs. " + b.balance);

        try {
            b.withdraw(400);
            b.withdraw(300);
            b.withdraw(500);
        }
        catch (InsufficientFundException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

**Output:**

```sh
Initial Balance: Rs. 1000.0
Withdrawn: Rs. 400.0 -> Balance: Rs. 600.0
Withdrawn: Rs. 300.0 -> Balance: Rs. 300.0
Withdrawn: Rs. 500.0 -> Not Sufficient Fund!
```

**MCQs**

1. A
2. B
3. A
4. B
5. B

**Conclusion:** In this practical, we built a banking simulation program that enforces custom `NotSufficientFundException` checks during withdrawals. We observed how state tracking prevents overdrawing and raises handled exceptions when funds are insufficient.

---

## Practical 25

**Aim:** Write a java program to implement an interface called Exam with a method Pass (int mark) that returns a boolean. Write another interface called Classify with a method Division (int average) which returns a String. Write a class called Result which implements both Exam and Classify. The Pass method should return true if the mark is greater than or equal to 50 else false. The Division method must return "First" when the parameter average is 60 or more, "Second" when average is 50 or more but below 60, "No division" when average is less than 50.

**Java Code:**

```java
interface Exam {
    boolean Pass(int mark);
}

interface Classify {
    String Division(int average);
}

class Result implements Exam, Classify {

    @Override
    public boolean Pass(int mark) {
        return mark >= 50;
    }

    @Override
    public String Division(int average) {
        if (average >= 60) {
            return "First";
        } else if (average >= 50) {
            return "Second";
        } else {
            return "No division";
        }
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Result res = new Result();

        int studentMark = 65;
        int studentAvg = 62;

        System.out.println("Mark: " + studentMark + " | Passed: " + res.Pass(studentMark));
        System.out.println("Average: " + studentAvg + " | Division: " + res.Division(studentAvg));

        int studentMark2 = 45;
        int studentAvg2 = 48;

        System.out.println("\nMark: " + studentMark2 + " | Passed: " + res.Pass(studentMark2));
        System.out.println("Average: " + studentAvg2 + " | Division: " + res.Division(studentAvg2));
    }
}
```

**Output:**

```sh
Mark: 65 | Passed: true
Average: 62 | Division: First

Mark: 45 | Passed: false
Average: 48 | Division: No division
```

**MCQs**

1. A
2. B
3. A
4. B
5. A

**Conclusion:**
In this practical, we implemented multiple inheritance in Java using the `Exam` and `Classify` interfaces within a `Result` class. We understood how interfaces define behavioral contracts for evaluating pass status and division classifications.
