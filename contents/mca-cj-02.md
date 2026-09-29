---
header: CJ-02
title: CJ02-Inheritance & Interface
slug: mca-cj-02
semester: 7
image: /java.jpg
accent: "#FF4341"
link:
---

## Inheritance

- Inheritance is an important pillar of **OOP**(Object Oriented Programming). It is the mechanism in java by which one class is allow to inherit the features(fields and methods) of another class.
- **Super Class:** The class whose features are inherited is known as super class(or a base class or a parent class).
- **Sub Class:** The class that inherits the other class is known as sub class(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods.
- **Reusability**: Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class.
- The keyword used for inheritance is `extends`.

```java showLineNumbers
class derived-class extends base-class {
	//methods and fields
}
```

### Single Inheritance

![](/java/02java02.png)

- In single inheritance, a single subclass is extended from a single superclass and inherits its properties.

```java showLineNumbers
class A {
  int x, y;
  void getdata(int a, int b) {
    x = a;
    y = b;
  }
  int add() {
    System.out.println(“Superclass Method”);
    return (x + y);
  }
}
class B extends A {
  int mult() {
    System.out.println(“Sub - class Method”);
    return (x * y);
  }
}
class Test {
  public static void main(String args[]) {
    B obj = new B();
    int add, mult;
    obj.getdata(5, 3);
    add = obj.add();
    mult = obj.mult();
    System.out.println(“Addition” + add);
    System.out.println(“Multiplication” + mult);
  }
}
```

### Multilevel Inheritance

![](/java/02java03.png)

- In multilevel inheritance, a child class is derived from a parent class and that child class further acts as a parent class and is used to derive another child class.

```java showLineNumbers
class one {
  public void print() {
    System.out.println(“hi ");
    }
  }
  class two extends one {
    public void print1() {
      System.out.println(“hello ");
      }
    }
    class three extends two {
      public void print2() {
        System.out.println(“hi ");
        }
      }
      // Drived class
      public class Main {
        public static void main(String[] args) {
          three g = new three();
          g.print();
          g.print1();
          g.print2();
        }
      }
```

### Hierarchical Inheritance

![](/java/02java04.png)

- In Hierarchical Inheritance, one superclass is used to derive more than one subclass or we can say that multiple subclasses extend from a single superclass.

```java showLineNumbers
class One {
  int x = 10, y = 20;
  void disp() {
    System.out.println(“Method of class One”);
    System.out.println(“Value of X” + x);
    System.out.println(“Value of Y” + y);
  }
}
class Two extends One {
  void add() {
    System.out.println(“Method of class Two”);
    System.out.println(“Addition: ”+(x + y));
  }
}
class Three extends One {
  void mul() {
    System.out.println(“Method of class Three”);
    System.out.println(“Multiplication: ”+(x * y));
  }
}
class Test {
  public static void main(String args[]) {
    Two obj1 = new Two();
    Three obj2 = new Three();
    obj1.disp();
    obj1.add();
    obj2.mul();
  }
}
```

### Multiple Inheritance

![](/java/02java05.png)

- In Multiple Inheritance, one subclass is derived from more than one superclass. Java **doesn't** support multiple inheritances because of high complexity and logic issues but as an alternative, we can implement multiple inheritances in Java using interfaces.

```java showLineNumbers
class Student {
  int m1, m2;
  void getmarks(int x, int y) {
    m1 = x;
    m2 = y;
  }
  void putmarks() {
    System.out.println(“First” + m1);
    System.out.println(“Second” + m2);
  }
}
interface sport {
  int sp = 6;
  void spmarks();
}
class Result extends Student implements
Sport {
  int total;
  public void spmarks() {
    System.out.println(“Sport Mark” + sp);
  }
  void disp() {
    putmarks();
    spmarks();
    total = m1 + m2 + sp;
    System.out.println(“Total” + total);
  }
}
class Test {
  public static void main(String args[]) {
    Result obj = new Result();
    obj.getmarks(80, 60);
    obj.disp();
  }
}
```

### Hybrid Inheritance

![](/java/02java06.png)

- It is a mix of two or more of the above types of inheritance. Since java doesn’t support multiple inheritance with classes, the hybrid inheritance is also not possible with classes. In java, we can achieve hybrid inheritance only through Interfaces.

```java showLineNumbers
class C {

  public void display() {
    System.out.println("C");
  }
}

class A extends C {

  public void display() {
    System.out.println("A");
  }
}

class B extends C {

  public void display() {
    System.out.println("B");
  }
}

class D extends A {

  public void display() {
    System.out.println("D");
  }
}

class Main {

  public static void main(String args[]) {
    D obj = new D();
    obj.display();
  }
}
```

## Super

- The super keyword in java is a reference variable that is used to refer parent class objects.
- The keyword “super” came into the picture with the concept of Inheritance.
- Uses of super keyword
- To call methods of the superclass that is overridden in the subclass.
- To access attributes (fields) of the superclass if both superclass and subclass have attributes with the same name.
- To explicitly call superclass no-arg (default) or parameterized constructor from the subclass constructor.
- **Use of Super with method:**
  - This is used when we want to call parent class method. So whenever a parent and child class have same named methods then to resolve ambiguity we use super keyword.

```java showLineNumbers
// Base class Person
class Person {
  void message() {
    System.out.println("This is person class");
  }
}
class Student extends Person

// Subclass Student
{
  void message() {
    System.out.println("This is student class");
  }
  void display() // Note that display() is
  only in Student class {
    message(); // will invoke or call current
    class message() method
    super.message(); // will invoke or call
    parent class message() method
  }
}
class Test /* Driver program to test */ {
  public static void main(String args[]) {
    Student s = new Student();
    s.display(); // calling display() of
    Student
  }
}
```

- **Use of Super with Constructor:**
  - Super keyword can also be used to access the parent class constructor. One more important thing is that, ‘’super’ can call both parametric as well as non parametric constructors depending upon the situation

```java showLineNumbers
class Person {
// Superclass Person
    Person() {
        System.out.println("Person class Constructor");
    }
}

class Student extends Person {
// Subclass Student extending Person
    Student() {
        super();
        System.out.println("Student class Constructor");
    }
}

class Test {
// Driver class to test
    public static void main(String[] args) {
        Student s = new Student();
    }
}
```

## Method Overloading

- Method overloading means method name will be same but each method should be different parameter list.

```java
public class Main {

    // Method with 2 int parameters
    static int add(int a, int b) {
        return a + b;
    }

    // Method with 3 int parameters
    static int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with 2 double parameters
    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));
        System.out.println(add(10, 20, 30));
        System.out.println(add(10.5, 20.5));
    }
}
```

```bash
// OUTPUT
30
60
31.0
```

## Method Overriding

- When a derived class has a definition for one of the member functions of the base class. That base function is said to be overridden.

```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
    }
}
```

```bash
// OUTPUT
Dog barks
```

## Difference: Method Overloading & Method Overriding

| **Method Overloading**                                               | **Method Overriding**                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Same method name with **different parameters**.                      | Child class provides a new implementation of a **parent class method**. |
| Usually occurs within the **same class**.                            | Occurs between **parent and child classes**.                            |
| **Inheritance is not required**.                                     | **Inheritance is required**.                                            |
| Parameters must be **different**.                                    | Parameters must be **same**.                                            |
| Return type can be different, but **cannot be the only difference**. | Return type must be same or **covariant**.                              |
| It is **compile-time polymorphism**.                                 | It is **runtime polymorphism**.                                         |
| Method binding happens at **compile time**.                          | Method binding happens at **runtime**.                                  |
| `static`, `final`, and `private` methods can be overloaded.          | `final` and `private` methods cannot be overridden.                     |
| Example: `add(int, int)` and `add(int, int, int)`                    | Example: `Animal.sound()` and `Dog.sound()`                             |

## Polymorphism

- The word polymorphism means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more that one form.
- Real life example of polymorphism: A person at the same time can have different characteristic. Like a man at the same time is a father, a husband, an employee. So the same person posses different behaviour in different situations. This is called polymorphism.
- Polymorphism is considered as one of the important features of Object Oriented Programming. Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms.
- In Java polymorphism is mainly divided into two types:
- **Runtime Polymorphism**: Runtime polymorphism means that the method to be executed is decided at runtime, not at compile time.

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {

        Animal a = new Dog();

        a.sound();
    }
}
```

```bash
// OUTPUT
Dog barks
```

- **Compile time polymorphism**: It is also known as static polymorphism. This type of polymorphism is achieved by function overloading or operator overloading.

## `final` Keyword

- The **`final` keyword** is used to restrict changes in Java
- A `final` variable **cannot be changed** after it is assigned a value.

```java
class Main {
    public static void main(String[] args) {
        final int x = 10;
        System.out.println(x);
        // x = 20;  // Error
    }
}
```

- A `final` method **cannot be overridden** by a child class.

```java
class Animal {
    final void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    // Error: cannot override final method
    // void sound() {
    //     System.out.println("Dog barks");
    // }
}
```

- A `final` class **cannot be inherited**.

```java
final class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

// Error: cannot inherit from final class
// class Dog extends Animal {
// }
```

## Abstract Class

- A class that is declared using “abstract” keyword is known as abstract class. It can have abstract methods(methods without body) as well as concrete methods (regular methods with body).
- A normal class(non-abstract class) cannot have abstract methods.
- An abstract class can not be instantiated, which means you are not allowed to create an object of it
  **Why we need an Abstract Class?**
- Suppose, We have a class Animal that has a method sound() and the subclasses of it like Dog, Lion, Horse, Cat etc.
- Since the animal sound differs from one animal to another, there is no point to implement this method in parent class.
- This is because every child class must override this method to give its own implementation details, like Lion class will say “Roar” in this method and Dog class will say “Woof”.
- So when we know that all the animal child classes will override this method, then there is no point to implement this method in parent class.
- Thus, making this method abstract would be the good choice as by making this method abstract we force all the sub classes to implement this method.
- Since the Animal class has an abstract method, you must need to declare this class abstract.

```java showLineNumbers
abstract class Animal { //abstract method
  public abstract void sound();
}
public class Dog extends Animal //Dog class
extends Animal class {
  public void sound() {
    System.out.println("Woof");
  }
  public static void main(String args[]) {
    Dog obj = new Dog();
    obj.sound();
  }
}
```

![](/java/02java07.png)

**Why can’t we create the object of an abstract class?**

- Because these classes are incomplete, they have abstract methods that have no body.
- There would be no actual implementation of the method to invoke.
- An abstract class is like a template, so you have to extend it and build on it before you can use it.
- An abstract class has no use until unless it is extended by some other class.
  **Keypoints:**
- If you declare an abstract method in a class then you must declare the class abstract as well. you can’t have abstract method in a concrete class. If a class is not having any abstract method then also it can be marked as abstract.
- It can have non-abstract method (concrete) as well.
- The subclass of abstract class in java must implement all the abstract methods unless the subclass is also an abstract class.
- We can access the static attributes and methods of an abstract class using the reference of the abstract class. For example, `Animal.staticMethod();`

**Difference between Abstract Class and Interface**

| Abstract Class                                                             | Interface                                                     |
| -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Abstract class can have abstract and non-abstract methods.                 | Interface can have only abstract methods.                     |
| Abstract class doesn't support multiple inheritance.                       | Interface supports multiple inheritance.                      |
| Abstract class can have final, non-final, static and non-static variables. | Interface has only static and final variables.                |
| Abstract class can provide the implementation of interface.                | Interface can't provide the implementation of abstract class. |
| The abstract keyword is used to declare abstract class.                    | The interface keyword is used to declare interface.           |
| An abstract class can be extended using keyword "extends".                 | An interface can be implemented using keyword "implements".   |
| A Java abstract class can have class members like private, protected, etc. | Members of a Java interface are public by default.            |

**When to use Abstract Class and Abstract Method?**

- Abstract methods are usually declared where two or more subclasses are expected to do a similar thing in different ways through different implementations.
- These subclasses extend the same Abstract class and provide different implementations for the abstract methods.
- Abstract classes are used to provide implementation details of the abstract class in the subclass.
