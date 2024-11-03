---
header: JAVA-04
title: Java-04 Multithreading and Applet
slug: java-04
semester: 3
image: /java.png
accent: "#db380e"
link: https://drive.google.com/file/d/1NEfoCSjj_1Qrhx8Qdq0qrQS50YCA9nYt/view?usp=sharing
---

## Multithreading

- Multithreading in Java is a process of executing multiple threads simultaneously.
- A thread is a lightweight sub-process, the smallest unit of processing.
- Multiprocessing and multithreading, both are used to achieve multitasking.
- However, we use multithreading than multiprocessing because threads use a shared memory area.
- They don't allocate separate memory area so saves memory, and context switching between the threads takes less time than process.
- Java Multithreading is mostly used in games, animation, etc.
- **Advantages of Java Multithreading:**
  - It doesn't block the user because threads are independent and you can perform multiple operations at the same time.
  - You can perform many operations together, so it saves time
  - Threads are independent, so it doesn't affect other threads if an exception occurs in a single thread.
- **java.fang.Thread:**
  - Multithreading is a Java feature that allows concurrent execution of two or more parts of a program for maximum utilization of CPU.
  - Each part of such program is called a thread. So, threads are light-weight processes within a process.
  - **Threads can be created by using two mechanisms:**
    - Extending the Thread class
    - Implementing the Runnable Interface
- **Thread creation by extending the Thread class:**
  - We create a class that extends the `java.lang.Thread` class.
  - This class overrides the `run()` method available in the Thread class.
  - A thread begins its life inside `run()` method.
  - We create an object of our new class and call `start()` method to start the execution of a thread. `start()` invokes the `run()` method on the Thread object.

```java
// Java code for thread creation by extending
// the Thread class
class MultithreadingDemo extends Thread {
  public void run() {
    try {
      // Displaying the thread that is running
      System.out.println("Thread " + Thread.currentThread().getId() +
        " is running");
    } catch (Exception e) {
      // Throwing an exception
      System.out.println("Exception is caught");
    }
  }
}

// Main Class
public class Multithread {
  public static void main(String[] args) {
    int n = 8; // Number of threads
    for (int i = 0; i < n; i++) {
      MultithreadingDemo object = new MultithreadingDemo();
      object.start();
    }
  }
}
```

- **Thread creation by implementing the Runnable Interface:**
  - We create a new class which implements `java.lang.Runnable` interface and override `run()` method.
  - Then we instantiate a Thread object and call `start()` method on this object.

```java
// Java code for thread creation by implementing
// the Runnable Interface
class MultithreadingDemo implements Runnable {
  public void run() {
    try {
      // Displaying the thread that is running
      System.out.println("Thread " + Thread.currentThread().getId() +
        " is running");
    } catch (Exception e) {
      // Throwing an exception
      System.out.println("Exception is caught");
    }
  }
}

// Main Class
class Multithread {
  public static void main(String[] args) {
    int n = 8; // Number of threads
    for (int i = 0; i < n; i++) {
      Thread object = new Thread(new MultithreadingDemo());
      object.start();
    }
  }
}
```

#### Thread Class vs Runnable Interface

1. If we extend the Thread class, our class cannot extend any other class because Java doesn’t support multiple inheritance. But, if we implement the Runnable interface, our class can still extend other base classes.
2. We can achieve basic functionality of a thread by extending Thread class because it provides some inbuilt methods like `yield()`, `interrupt()` etc. that are not available in Runnable interface.
3. Using runnable will give you an object that can be shared amongst multiple threads.

## Main Thread

- Java provides built-in support for multithreaded programming. A multi-threaded program contains two or more parts that can run concurrently.
- Each part of such a program is called a thread, and each thread defines a separate path of execution.
- When a Java program starts up, one thread begins running immediately.
- This is usually called the main thread of our program because it is the one that is executed when our program begins.
- There are certain properties associated with the main thread which are as follows:
- It is the thread from which other “child” threads will be spawned.
- Often, it must be the last thread to finish execution because it performs various shutdown actions

![](/java/04java01.png)

## How to control Main thread

- The main thread is created automatically when our program is started.
- To control it we must obtain a reference to it.
- This can be done by calling the method `currentThread()` which is present in Thread class.
- This method returns a reference to the thread on which it is called.
- The default priority of Main thread is 5 and for all remaining user threads priority will be inherited from parent to child.

```java
// Java program to control the Main Thread
// Importing required classes
import java.io.*;
import java.util.*;

// Class 1
// Main class extending thread class
public class Test extends Thread {
  // Main driver method
  public static void main(String[] args) {
    // Getting reference to Main thread
    Thread t = Thread.currentThread();
    // Getting name of Main thread
    System.out.println("Current thread: " + t.getName());
    // Changing the name of Main thread
    t.setName("Geeks");
    System.out.println("After name change: " + t.getName());
    // Getting priority of Main thread
    System.out.println("Main thread priority: " + t.getPriority());
    // Setting priority of Main thread to MAX(10)
    t.setPriority(MAX_PRIORITY);
    // Print and display the main thread priority
    System.out.println("Main thread new priority: " + t.getPriority());
    for (int i = 0; i < 5; i++) {
      System.out.println("Main thread");
    }
    // Main thread creating a child thread
    Thread ct = new Thread() {
      // run() method of a thread
      public void run() {
        for (int i = 0; i < 5; i++) {
          System.out.println("Child thread");
        }
      }
    };
    // Getting priority of child thread
    // which will be inherited from Main thread
    // as it is created by Main thread
    System.out.println("Child thread priority: " + ct.getPriority());
    // Setting priority of Main thread to MIN(1)
    ct.setPriority(MIN_PRIORITY);
    System.out.println("Child thread new priority: " + ct.getPriority());
    // Starting child thread
    ct.start();
  }
}

// Class 2
// Helper class extending Thread class
// Child Thread class
class ChildThread extends Thread {
  @Override public void run() {
    for (int i = 0; i < 5; i++) {
      // Print statement whenever child thread is
      // called
      System.out.println("Child thread");
    }
  }
}
```

## Creation of new Threads

- In Java, you can create a thread by either extending the Thread class or implementing the Runnable interface.
- There are two ways to create a thread:
  - By extending Thread class
  - By implementing Runnable interface.
- **Commonly used Constructors of Thread class:**
  - `Thread()`
  - `Thread(String name)`
  - `Thread(Runnable r)`
  - `Thread(Runnable r,String name)`

### Commonly used methods of Thread class

1. `public void run()`: is used to perform action for a thread.
2. `public void start()`: starts the execution of the thread.JVM calls the run() method on the thread.
3. `public void sleep(long miliseconds)`: Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds.
4. `public void join()`: waits for a thread to die.
5. `public void join(long miliseconds)`: waits for a thread to die for the specified miliseconds.
6. `public int getPriority()`: returns the priority of the thread.
7. `public int setPriority(int priority)`: changes the priority of the thread.
8. `public String getName()`: returns the name of the thread.
9. `public void setName(String name)`: changes the name of the thread.
10. `public Thread currentThread()`: returns the reference of currently executing thread.
11. `public int getId()`: returns the id of the thread.
12. `public Thread.State getState()`: returns the state of the thread.
13. `public boolean isAlive()`: tests if the thread is alive.
14. `public void yield()`: causes the currently executing thread object to temporarily pause and allow other threads to execute.
15. `public void suspend()`: is used to suspend the thread(depricated).
16. `public void resume()`: is used to resume the suspended thread(depricated).
17. `public void stop()`: is used to stop the thread(depricated).
18. `public boolean isDaemon()`: tests if the thread is a daemon thread.
19. `public void setDaemon(boolean b)`: marks the thread as daemon or user thread.
20. `public void interrupt()`: interrupts the thread.
21. `public boolean isInterrupted()`: tests if the thread has been interrupted.
22. `public static boolean interrupted()`: tests if the current thread has been interrupted.

## Extending Thread class

```java
class MyThread extends Thread {
  public void run() {
    // Code to be executed by the thread
    System.out.println("Thread running");
  }
}
public class Main {
  public static void main(String[] args) {
    MyThread thread = new MyThread();
    thread.start(); // Start the thread
  }
}
```

### Implementing Runnable interface example (often preferred for better class design and flexibility):

```java
class MyRunnable implements Runnable {
  public void run() {
    // Code to be executed by the thread
    System.out.println("Runnable running");
  }
}
public class Main {
  public static void main(String[] args) {
    MyRunnable myRunnable = new MyRunnable();
    Thread thread = new Thread(myRunnable);
    thread.start(); // Start the thread
  }
}
```

## Thread State in Java

- A thread is a program in execution created to perform a specific task. Life cycle of a Java thread starts with its birth and ends on its death.
- The start() method of the Thread class is used to initiate the execution of a thread and it goes into runnable state and the sleep() and wait() methods of the Thread class sends the thread into non runnable state.
- After non runnable state, thread again comes into runnable state and starts its execution. The run() method of thread is very much important. After executing the run() method, the lifecycle of thread is completed.
- All these phases of threads are the states of thread in Java.
- To work with threads in a program, it is important to identify thread state. The following figure shows thread states in Java thread life cycle.

![](/java/04java02.png)

**Threads in Java can be in different states:**

- A thread is a path of execution in a program that goes through the following states of a thread. The five states are as follows:
  - New (Newborn State):
    - When an instance of the Thread class is created a new thread is born and is known to be in New-born state.
    - That is, when a thread is born, it enters into new state but its execution phase has not been started yet on the instance.
    - In simpler terms, Thread object is created but it cannot execute any program statement because it is not in an execution state of the thread.
    - Only start() method can be called on a new thread; otherwise, an `IllegalThreadStateException` will be thrown.
  - Runnable State:
    - The second phase of a new-born thread is the execution phase.
    - When the start() method is called on a the new instance of a thread, it enters into a runnable state.
    - In the runnable state, thread is ready for execution and is waiting for availability of the processor (CPU time).
    - There are many threads that are ready for execution, they all are waiting in a queue (line).
    - If all threads have equal priority, a time slot is assigned for each thread execution on the basis of first-come, first-serve manner by CPU.
    - The process of allocating time to threads is known as time slicing.
    - A thread can come into runnable state from running, waiting, or new states.
  - Running State:
    - Running means Processor (CPU) has allocated time slot to thread for its execution.
    - When thread scheduler selects a thread from the runnable state for execution, it goes into running state. Look at the above figure.
    - In running state, processor gives its time to the thread for execution and executes its run method.
    - It is the state where thread performs its actual functions. A thread can come into running state only from runnable state.
    - A running thread may give up its control in any one of the following situations and can enter into the blocked state:
      - When **sleep() method** is invoked on a thread to sleep for specified time period, the thread is out of queue during this time period. The thread again re-enters into the runnable state as soon as this time period is elapsed.
      - When a thread is suspended using **suspend() method** for some time in order to satisfy some conditions. A suspended thread can be revived by using resume() method.
      - When **wait() method** is called on a thread to wait for some time. The thread in wait state can be run again using notify() or notifyAll() method.
  - Blocked (Non-runnable state) State:
    - A thread is considered to be in the blocked state when it is suspended, sleeping, or waiting for some time in order to satisfy some condition.
  - Dead State:
    - A thread dies or moves into dead state automatically when its run() method completes the execution of statements.
    - That is, a thread is terminated or dead when a thread comes out of run() method. A thread can also be dead when the stop() method is called.
    - During the life cycle of thread in Java, a thread moves from one state to another state in a variety of ways. This is because in multithreading environment, when multiple threads are executing, only one thread can use CPU at a time.
    - All other threads live in some other states, either waiting for their turn on CPU or waiting for satisfying some conditions. Therefore, a thread is always in any of the five states.

## Java Thread Program

```java
/* Thread 1 */
class Thread1 extends Thread {
  public void run() {
    System.out.println("Thread 1");
    System.out.println("i in Thread 1 ");
    for (int i = 1; i <= 5; i++) {
      System.out.println("i = " + i);
      try {
        Thread.sleep(1000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
    System.out.println("Thread 1 Completed.");
  }
}

/* Thread 2 */
class Thread2 extends Thread {
  public void run() {
    System.out.println("Thread 2");
    System.out.println("i in Thread 2 ");
    for (int i = 1; i <= 5; i++) {
      System.out.println("i = " + i);
    }
    System.out.println("Thread 2 Completed.");
  }
}

/* Driver code */
public class ThreadDemo {
  public static void main(String[] args) {
    // life cycle of Thread
    // Thread's New State
    Thread1 t1 = new Thread1();
    Thread2 t2 = new Thread2();
    // Both the above threads are in runnable state
    // Running state of Thread1 and Thread2
    t1.start();
    // Move control to another thread
    t2.yield();
    // Blocked State Thread1
    try {
      t1.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    t2.start();
    System.out.println("Main Thread End");
  }
}
```

## Applet

- **Applet class**: Applet is a special type of program that is embedded in the webpage to generate the dynamic content. It runs inside the browser and works at client side.
- **Advantage of Applet:**
  - It works at client side so less response time.
  - Secured
  - It can be executed by browsers running under many platforms, including Linux, Windows, MacOs etc.

```java
// A Hello World Applet
// Save file as HelloWorld.java
import java.applet.Applet;
import java.awt.Graphics;
// HelloWorld class extends Applet
public class HelloWorld extends Applet {
  // Overriding paint() method
  @Override
  public void paint(Graphics g) {
    g.drawString("Hello World", 20, 20);
  }
}
```

**java.applet.Applet class**:

- For creating any applet java.applet.Applet class must be inherited. It provides 4 life cycle methods of applet.

1. `public void init()`: is used to initialized the Applet. It is invoked only once.
2. `public void start()`: is invoked after the `init()` method or browser is maximized. It is used to start the Applet.
3. `public void stop()`: is used to stop the Applet. It is invoked when Applet is stop or browser is minimized.
4. `public void destroy()`: is used to destroy the Applet. It is invoked only once

## Applet Structure

- In Java, an applet is a small Java program that runs within a web browser on the client machine.
- Applets were more commonly used in the early days of the internet for interactive web applications, but their usage has declined with the advent of more powerful web technologies like JavaScript and HTML5.
- Nevertheless, understanding the basic structure of an applet in Java is still valuable for learning purposes.

1. Imports:
   - `import java.applet.Applet;`: This imports the Applet class from the `java.applet` package, which is necessary for creating applets.
   - `import java.awt.Graphics;`: This imports the Graphics class from the `java.awt` package, which provides methods for drawing shapes and text.
2. Class Definition:
   - `public class BasicApplet extends Applet`: Defines a subclass named `BasicApplet` that extends the Applet class. This means `BasicApplet` inherits all methods and properties of the Applet class.
3. Lifecycle Methods:
   - `init()`: This method is called when the applet is first loaded into memory. It is typically used for initialization tasks such as setting up variables, loading resources, etc.
   - `start()`: This method is called when the applet is started, either after initialization or when the user revisits the applet. It can be used to start animations or other ongoing processes.
   - `paint(Graphics g)`: This method is called whenever the applet needs to be redrawn, such as when it is first displayed or when it is uncovered after being hidden by another window. It is where you define the graphical content of the applet using the Graphics object g.
   - `stop()`: This method is called when the applet is stopped, such as when the user navigates away from the webpage containing the applet. It can be used to pause animations or other ongoing processes.
   - `destroy()`: This method is called when the applet is destroyed, such as when the browser is closed or the webpage is refreshed. It can be used to release resources or perform clean-up tasks.
4. Graphics Drawing
   - In the `paint(Graphics g)` method, you use methods of the Graphics object g to draw shapes, text, images, etc. In the example provided `(g.drawString("Hello, World!", 20, 20);)`, it draws the text "Hello, World!" at coordinates (20, 20) on the applet.

**java.awt.Component class**

- The Component class provides 1 life cycle method of applet
- `public void paint(Graphics g)`: is used to paint the Applet. It provides Graphics class object that can be used for drawing oval, rectangle, arc etc

## Applet Life Cycle

![](/java/04java03.png)

- The `java.applet.` Applet class 4 life cycle methods and `java.awt.Component` class provides 1 life cycle methods for an applet.

**Simple example of Applet by html file:**

- To execute the applet by html file, create an applet and compile it. After that create an html file and place the applet code in html file. Now click the html file.

```java
//First.java
import java.applet.Applet;
import java.awt.Graphics;
public class First extends Applet {

  public void paint(Graphics g) {
    g.drawString("welcome", 150, 150);
  }
}
```

**myapplet.html**

```html
<html>
  <body>
    <applet code="First.class" width="300" height="300"> </applet>
  </body>
</html>
```

**Simple example of Applet by applet viewer tool:**

- To execute the applet by appletviewer tool, create an applet that contains applet tag in comment and compile it. After that run it by: appletviewer First.java. Now Html file is not required but it is for testing purpose only.

```java
//First.java
import java.applet.Applet;
import java.awt.Graphics;
public class First extends Applet {

  public void paint(Graphics g) {
    g.drawString("welcome to applet", 150, 150);
  }

}
/*
<applet code="First.class" width="300" height="300">
</applet>
*/
```

#### Common methods used in displaying the output

- In Java, there are several common methods used to display output to the user. Here are the most frequently used ones:

Using `System.out.println():`

- This method prints the string followed by a newline character, moving the cursor to the next line.
- Ex.: `System.out.println("Hello, World!");`

Using `System.out.print()`:

- This method prints the string without adding a newline character, so subsequent output continues on the same line.
- Ex.: `System.out.print("Hello");`

Using `System.out.printf()`:

- This method allows for formatted output using format specifiers (%s for strings, %d for integers, etc.).
- Ex.: `System.out.printf("Name: %s, Age: %d%n", name, age);`

Using `System.out.format()`:

- Similar to `printf()`, this method formats the output but does not include automatic newline character (use %n for newline).
- Ex.: `System.out.format("Value of pi: %.2f%n", pi);`

Using `System.console().printf()`:

- This is similar to `System.out.printf()` but allows interaction when running the program in a console environment.

```java
Console console = System.console();
if (console != null) {
  console.printf("Hello, World!%n");
}
```

Using `JOptionPane.showMessageDialog()`:

- This displays a popup dialog with the specified message. These methods cover a range of scenarios from simple console output to formatted output and GUI-based output. The choice of method depends on whether you're working with console-based applications, graphical user interfaces (GUIs), or need specific formatting of your output.

```java
mport javax.swing.JOptionPane;
JOptionPane.showMessageDialog(null, "Hello, World!");
```

#### Paint(), update() and repaint() methods

- In Java applets, the `paint()`, `update()`, and `repaint()` methods are crucial for drawing and updating graphical content on the applet's surface. Here’s an explanation of each method and their roles:

##### paint(Graphics g)

- The paint(Graphics g) method is a fundamental method in Java applets (and in AWT/Swing components) that is automatically called whenever the applet needs to redraw its graphical content.
- This method is responsible for rendering the visual representation of the applet or component.
- **Parameters**: `g`-The Graphics object passed to the method, which provides methods for drawing shapes, text, and images on the applet's surface
- **Usage**: Typically, you override the paint(Graphics g) method to define what should be drawn on the applet.
  - You should avoid calling paint() directly; instead, the Java runtime calls it when necessary (e.g., when the applet is first displayed, resized, or needs to refresh its appearance due to updates).

```java
public void paint(Graphics g) {
  g.drawString("Hello, World!", 20, 20);
  // Draw other shapes, images, or text as needed
}
```

##### update(Graphics g)

- The update(Graphics g) method is called automatically after paint(Graphics g) and is responsible for clearing the applet's previous content before repainting it.
- By default, `update()` clears the background of the applet with the background color (set by `setBackground()` method).
- **Parameters**: `g`-The Graphics object passed to the method, which allows you to redraw the applet's content.
- **Usage**: You generally do not need to override update(Graphics g) unless you need custom behavior before repainting.
  - The default implementation clears the applet's background and then calls paint(Graphics g) to redraw the applet's content

```java
public void update(Graphics g) {
  // Custom behavior before repainting
  super.update(g); // Calls the default update behavior
}
```

##### repaint()

- The `repaint()` method is used to request that the applet or component should be repainted at the next available opportunity.
- It is typically called when you want to update the graphical content programmatically, such as in response to user input or changes in the applet's state.
- Usage: You call repaint() to schedule a call to `update()` and subsequently `paint()` to redraw the applet. It does not immediately repaint the applet; instead, it schedules the repaint operation to occur asynchronously.

```java
public void mouseClicked(MouseEvent e) {
  // Update some state based on mouse click
  // Then request a repaint to reflect the updated state
  repaint();
}
```

#### Important Notes

- **Thread Safety**: Swing and AWT components, including applets, are not thread-safe for rendering operations.
  - You should ensure that all updates to graphical components (including calls to repaint()) are done on the Event Dispatch Thread (EDT) using mechanisms like `SwingUtilities.invokeLater()`.
- **Optimization**: To optimize performance, especially in complex applets or animations, consider using techniques like double buffering (`BufferedImage` for off-screen rendering) to reduce flickering and improve responsiveness.
- These methods (`paint()`, `update()`, and `repaint()`) provide the foundational mechanisms for rendering and updating graphical content in Java applets, allowing for dynamic and interactive visualizations within web browser environments.

## Applet tag

- The `<applet>` tag in HTML is used to embed a Java applet into a web page.
- It was commonly used in the past to include interactive Java-based applications within web pages, but its usage has declined with the deprecation of Java applets in modern web development.
- Here's a basic overview of the `<applet>` tag and its attributes

```java
<applet>
 code="AppletClassName.class"
 width="width_in_pixels"
 height="height_in_pixels">
 Your browser does not support Java applets.
</applet>
```

- **Attributes**

  - **code**: Specifies the name of the compiled Java applet class file. This attribute should include the `.class` extension. For example, if your applet class file is named `MyApplet.class`, you would use `code="MyApplet.class"`.
  - **width**: Specifies the width of the applet in pixels.
  - **height**: Specifies the height of the applet in pixels

- **Deprecated Features**
  - **Plugin Requirement**: Java applets require the Java plugin to be installed and enabled in the browser, which is not supported by most modern browsers anymore.
  - **Security Concerns**: Java applets are generally considered insecure due to past vulnerabilities, and browsers have largely disabled support for Java plugins.

```html
<applet code="MyApplet.class" width="300" height="200">
  <p>Your browser does not support Java applets.</p>
</applet>
```

## Modern Alternatives

- Instead of using Java applets, modern web development favors using HTML5, JavaScript, and CSS for interactive and dynamic web content. Technologies like WebGL, SVG, Canvas API, and various JavaScript libraries and frameworks (e.g., React, Angular, Vue.js) provide powerful alternatives for creating rich web applications without the need for plugins like Java applets.
- In conclusion, while the `<applet>` tag was once common for embedding Java applets in web pages, its usage has diminished due to security concerns and the evolution of web standards.

#### drawLine(int x1, int y1, int x2, int y2)

- The `drawLine()` method is used to draw a line between two points specified by their coordinates (x1, y1) and (x2, y2).
- **Parameters**:
  - x1, y1: Coordinates of the starting point of the line.
  - x2, y2: Coordinates of the ending point of the line.

```java
// Drawing a line from (10, 20) to (100, 50)
g.drawLine(10, 20, 100, 50);
```

#### drawArc(int x, int y, int width, int height, int startAngle, int arcAngle)

- The `drawArc()` method draws an arc defined by a bounding rectangle (x, y, width, height), starting at `startAngle` and extending for `arcAngle` degrees.
- **Parameters**:
  - x, y: Coordinates of the top-left corner of the bounding rectangle.
  - width, height: Width and height of the bounding rectangle.
  - startAngle: Starting angle of the arc in degrees, measured clockwise from the xaxis.
  - arcAngle: Extent of the arc in degrees, also measured clockwise.

```java
// Drawing an arc inside a bounding rectangle (x=50, y=50, width=100, height=100)
g.drawArc(50, 50, 100, 100, 45, 90);
```

#### fillArc(int x, int y, int width, int height, int startAngle, int arcAngle)

- The `fillArc()` method fills an arc with the specified properties (bounding rectangle, start angle, arc angle).
- **Parameters**:
  - x, y: Coordinates of the top-left corner of the bounding rectangle.
  - width, height: Width and height of the bounding rectangle.
  - startAngle: Starting angle of the arc in degrees, measured clockwise from the xaxis.
  - arcAngle: Extent of the arc in degrees, also measured clockwise.

```java
// Filling an arc inside a bounding rectangle (x=50, y=50, width=100, height=100)
g.fillArc(50, 50, 100, 100, 45, 90);
```

#### drawOval(int x, int y, int width, int height)

- The drawOval() method draws an oval (ellipse) inscribed within the specified bounding rectangle.
- **Parameters**:
  - x, y: Coordinates of the top-left corner of the bounding rectangle.
  - width, height: Width and height of the bounding rectangle.

```java
// Drawing an oval inside a bounding rectangle (x=50, y=50, width=100, height=80)
g.drawOval(50, 50, 100, 80);
```

#### Usage Note:

- These methods (`drawLine()`, `drawArc()`, `fillArc()`, `drawOval()`) are typically used within the `paint(Graphics g)` or `paintComponent(Graphics g)` methods of a Canvas, Panel, or JPanel class.
- The Graphics object g is usually passed as a parameter to these methods, allowing you to draw directly onto the component's surface.
- Ensure that you perform drawing operations within the appropriate method (`paint()` or `paintComponent()`) to ensure proper rendering and to adhere to Swing's or AWT's threading rules.
- These methods provide basic capabilities for drawing lines, arcs, and ovals in Java graphical applications.
- For more complex shapes and interactions, consider exploring additional methods and features provided by the Graphics class, such as `drawPolygon()`, `drawRect()`, `fillRect()`, and more.

#### fillOval(int x, int y, int width, int height)

- The `fillOval()` method draws a filled oval (ellipse) inscribed within the specified bounding rectangle.
- **Parameters:**
  - x, y: Coordinates of the top-left corner of the bounding rectangle.
  - width, height: Width and height of the bounding rectangle.

```java
// Filling an oval inside a bounding rectangle (x=50, y=50, width=100, height=80)
g.fillOval(50, 50, 100, 80);
```

#### drawPolygon(int[] xPoints, int[] yPoints, int nPoints)

- The drawPolygon() method draws a polygon defined by arrays of x and y coordinates (xPoints and yPoints) and the number of points (nPoints)
- **Parameters**:
  - xPoints: Array of x coordinates of the polygon vertices.
  - yPoints: Array of y coordinates of the polygon vertices.
  - nPoints: Number of vertices (number of elements in xPoints and yPoints arrays).

```java
// Drawing a triangle with vertices at (50, 50), (100, 100), and (150, 50)
int[] xPoints = {
  50,
  100,
  150
};
int[] yPoints = {
  50,
  100,
  50
};
int nPoints = 3;
g.drawPolygon(xPoints, yPoints, nPoints);
```

#### Usage Notes:

- These methods (`fillOval()` and `drawPolygon()`) are also typically used within the `paint(Graphics g)` or `paintComponent(Graphics g)` methods of a Canvas, Panel, or JPanel class.
- Ensure that the arrays `xPoints` and `yPoints` contain enough elements to define the desired shape, and that `nPoints` corresponds to the number of vertices in the polygon.
- You can use `Graphics.setColor()` to set the color before calling these methods to draw or fill shapes with different colors.

#### Combining fillOval() and drawPolygon()

```java
import java.awt.*;
import javax.swing.*;
public class ShapesExample extends JPanel {

  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    // Set color for drawing and filling
    g.setColor(Color.BLUE);

    // Fill an oval
    g.fillOval(50, 50, 100, 80);

    // Set color for drawing polygon
    g.setColor(Color.RED);

    // Draw a polygon (triangle)
    int[] xPoints = {
      200,
      250,
      300
    };
    int[] yPoints = {
      150,
      250,
      200
    };
    int nPoints = 3;
    g.drawPolygon(xPoints, yPoints, nPoints);
  }

  public static void main(String[] args) {
    JFrame frame = new JFrame("Shapes Example");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 300);
    frame.add(new ShapesExample());
    frame.setVisible(true);
  }
}
```

## Questions

1. What is Multithreading in java? Explain in detail.
2. Explain Commonly used methods of Thread class.
3. Explain Thread State in java.
4. Explain Applet class in detail.
5. Explain Applet Structure in detail.
6. Explain Applet Life Cycle in detail.
7. Explain Common methods used in displaying the output.
8. Explain Applet tag in detail

---
