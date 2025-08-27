---
header: PHP-LM
title: PHP Lab Manual
slug: php-lm
semester: 5
image: /php.png
accent: "#4D588E"
link:
---

## Practical 01

**Aim:** (A) Write a PHP script to display a welcome message

**Description:**
This program uses PHP’s `echo` statement to display a welcome message on the web page.

**Code:**

```php
<?php
echo "Welcome to PHP Programming!";
?>
```

**Output**:

```
Welcome to PHP Programming!
```

**Conclusion:**
We learned how to display text using the `echo` statement in PHP.

**Aim:** (B) Write a PHP script to demonstrate arithmetic operator, comparison operator, logical operator and Bitwise operator.

**Description:**
This program demonstrates four categories of operators in PHP:

- **Arithmetic Operators** for basic mathematical calculations.
- **Comparison Operators** to compare values.
- **Logical Operators** for combining conditions.
- **Bitwise Operators** for bit-level operations.

**Code:**

```php
<?php
$a = 10; $b = 5;

// Arithmetic Operators
echo "Arithmetic:<br>";
echo "$a + $b = ".($a+$b)."<br>";
echo "$a - $b = ".($a-$b)."<br>";
echo "$a * $b = ".($a*$b)."<br>";
echo "$a / $b = ".($a/$b)."<br>";
echo "$a % $b = ".($a%$b)."<br><br>";

// Comparison Operators
echo "Comparison:<br>";
echo "Equal? ".var_export($a==$b,true)."<br>";
echo "Not Equal? ".var_export($a!=$b,true)."<br>";
echo "Greater? ".var_export($a>$b,true)."<br>";
echo "Less/Equal? ".var_export($a<=$b,true)."<br><br>";

// Logical Operators
echo "Logical:<br>";
echo "Both > 0? ".var_export(($a>0)&&($b>0),true)."<br>";
echo "Any > 0? ".var_export(($a>0)||($b<0),true)."<br>";
echo "Not > 0? ".var_export(!($a>0),true)."<br><br>";

// Bitwise Operators
echo "Bitwise:<br>";
echo "$a & $b = ".($a & $b)."<br>";
echo "$a | $b = ".($a | $b)."<br>";
echo "$a ^ $b = ".($a ^ $b)."<br>";
echo "$a << 1 = ".($a << 1)."<br>";
echo "$a >> 1 = ".($a >> 1)."<br>";
?>
```

**Output**:

```
Arithmetic:
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2
10 % 5 = 0

Comparison:
Equal? false
Not Equal? true
Greater? true
Less/Equal? false

Logical:
Both > 0? true
Any > 0? true
Not > 0? false

Bitwise:
10 & 5 = 0
10 | 5 = 15
10 ^ 5 = 15
10 << 1 = 20
10 >> 1 = 5
```

**Conclusion:**
We successfully demonstrated arithmetic, comparison, logical, and bitwise operators in PHP.

### Post Practical Questions:

1. **What will the output of `echo "Welcome to PHP Programming!";` be?**

   - C) Welcome to PHP Programming!

2. **What will `Sa + Sb` output if `Sa = 10` and `Sb = 57`?**

   - D) 105

3. **Which operator is used to compare two values for equality in PHP?**

   - (c)==

4. **What is the output of `10 % 3` in PHP?**

   - A) 1

5. **What does the `&&` operator do in PHP?**
   - A) Logical AND

---

## Practical 02

**Aim:** (A) Write a PHP script to find out whether a given number is even or odd.

**Description:**
This program takes a number, checks the remainder when divided by 2 using the modulus operator (`%`), and determines whether it is even or odd.

**Code:**

```php
<?php
$num = 7;

if ($num % 2 == 0) {
    echo "$num is Even";
} else {
    echo "$num is Odd";
}
?>
```

**Output**:

```
7 is Odd
```

**Conclusion:**
We learned how to check whether a number is even or odd using the modulus operator in PHP.

**Aim:** (B) Write a PHP script to check whether a given number is prime.

**Description:**
This program takes a number and checks if it is divisible by any number other than 1 and itself. If not, it is considered a prime number.

**Code:**

```php
<?php
$num = 13;
$isPrime = true;

if ($num <= 1) {
    $isPrime = false;
} else {
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            $isPrime = false;
            break;
        }
    }
}

if ($isPrime) {
    echo "$num is Prime";
} else {
    echo "$num is Not Prime";
}
?>
```

**Output**:

```
13 is Prime
```

**Conclusion:**
We learned how to check if a number is prime by testing divisibility from 2 to the square root of the number in PHP.

### Post Practical Questions

1. **Which of the following conditions checks if a number is even?**

   - C) $num % 2 == 0

2. **Which is the correct way to check if a number is odd in PHP?**

   - A) if ($num % 2 == 1)

3. **What is the modulus operator used for in PHP?**

   - C) Remainder

4. **Which of the following is a prime number?**

   - C) 11

5. **What is the smallest prime number?**
   - C) 2

---

## Practical 03

**Aim:** (A) Write a PHP script to print Fibonacci series.

**Description:**
This program generates the Fibonacci series, where each number is the sum of the previous two numbers. The first two numbers are 0 and 1.

**Code:**

```php
<?php
$n = 10;
$a = 0;
$b = 1;

echo "Fibonacci Series: ";
for ($i = 0; $i < $n; $i++) {
    echo $a . " ";
    $next = $a + $b;
    $a = $b;
    $b = $next;
}
?>
```

**Output**:

```
Fibonacci Series: 0 1 1 2 3 5 8 13 21 34
```

**Conclusion:**
We learned how to generate the Fibonacci series using a loop in PHP.

**Aim:** (B) Write a PHP script to generate results and display grade.

**Description:**
This program calculates the percentage from marks and assigns a grade based on the percentage range.

**Code:**

```php
<?php
$marks = [85, 78, 92, 74, 88]; // marks in 5 subjects
$total = array_sum($marks);
$percentage = $total / count($marks);

echo "Total Marks: $total<br>";
echo "Percentage: $percentage%<br>";

if ($percentage >= 90) {
    $grade = "A+";
} elseif ($percentage >= 80) {
    $grade = "A";
} elseif ($percentage >= 70) {
    $grade = "B";
} elseif ($percentage >= 60) {
    $grade = "C";
} else {
    $grade = "Fail";
}

echo "Grade: $grade";
?>
```

**Output**:

```
Total Marks: 417
Percentage: 83.4%
Grade: A
```

**Conclusion:**
We learned how to calculate the percentage and assign grades based on conditions in PHP.

### Post Practical Questions

1. **What are the first two numbers in the Fibonacci sequence?**

   - B) 0 and 1

2. **In a Fibonacci loop, which formula calculates the next term?**

   - A) $f3 = $f1 + $f2

3. **How many terms will this code print: `for ($i = 3; $i <= 10; $i++)`?**

   - A) 7

4. **What will be the output for `$marks = 45` (grade)?**

   - C) F

5. **Which control structure is used to assign grades in the result script?**
   - C) if-else

---

## Practical 04

**Aim:** (A) Write a PHP script to find the maximum number out of three given numbers.

**Description:**
This program compares three given numbers using conditional statements and finds the maximum value.

**Code:**

```php
<?php
$a = 15;
$b = 25;
$c = 10;

$max = $a;

if ($b > $max) {
    $max = $b;
}
if ($c > $max) {
    $max = $c;
}

echo "The maximum number among $a, $b, and $c is: $max";
?>
```

**Output**:

```
The maximum number among 15, 25, and 10 is: 25
```

**Conclusion:**
We learned how to compare multiple numbers and find the maximum using conditional statements in PHP.

**Aim:** (B) Write a PHP script to calculate the factorial of a number.

**Description:**
This program calculates the factorial of a number using a loop. The factorial of a number `n` is the product of all positive integers from 1 to `n`.

**Code:**

```php
<?php
$num = 5;
$fact = 1;

for ($i = 1; $i <= $num; $i++) {
    $fact *= $i;
}

echo "Factorial of $num is: $fact";
?>
```

**Output**:

```
Factorial of 5 is: 120
```

**Conclusion:**
We learned how to calculate the factorial of a number using loops in PHP.

### Post Practical Questions

1. **Which PHP function returns the largest number among multiple arguments?**

   - A) max()

2. **What is the value of 5 factorial (5!)?**

   - C) 120

3. **Which statement correctly initializes factorial in PHP before a loop?**

   - B) $fact = 1;

4. **Which built-in PHP extension is used for large factorials?**

   - C) bcmath

5. **What will happen if a factorial recursive function has no base condition?**
   - C) It will cause infinite recursion

---

## Practical 05

**Aim:** (A) Write a PHP script to print the multiplication table of a number using a `for` loop.

**Description:**  
This program takes a number and uses a `for` loop to display its multiplication table from 1 to 10.

**Code:**

```php
<?php
$num = 5; // change number as needed

echo "Multiplication Table of $num:<br>";
for ($i = 1; $i <= 10; $i++) {
    echo "$num x $i = " . ($num * $i) . "<br>";
}
?>
```

**Output**:

```
Multiplication Table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

**Conclusion:**  
We learned how to use a `for` loop to generate a multiplication table in PHP.

**Aim:** (B) Write a PHP script to print the following pattern for a given number:

```
1
12
123
1234
12345
```

**Description:**  
This program uses nested loops to print a pattern where each line prints an increasing sequence of numbers.

**Code:**

```php
<?php
$n = 5; // number of lines

for ($i = 1; $i <= $n; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j;
    }
    echo "<br>";
}
?>
```

**Output**:

```
1
12
123
1234
12345
```

**Conclusion:**  
We learned how to use nested loops in PHP to generate number patterns.

### Post Practical Questions

1. **Which loop is used when the number of iterations is known in PHP?**

   - C) for

2. **Which keyword is used to exit a loop prematurely in PHP?**

   - D) break

3. **In nested loops for a triangle pattern, the outer loop controls:**

   - C) Number of rows

4. **What will be the first line of output of the given pattern code?**

   - C) 1

5. **What is the purpose of the inner loop in the pattern program?**
   - C) It prints numbers in each row

---

## Practical 06

**Aim:** (A) Write a PHP script to demonstrate a user-defined function.

**Description:**  
This program defines a custom function in PHP that takes parameters, processes them, and returns a result. User-defined functions help in code reusability and organization.

**Code:**

```php
<?php
// User-defined function to add two numbers
function addNumbers($x, $y) {
    return $x + $y;
}

$a = 10;
$b = 20;
$sum = addNumbers($a, $b);

echo "The sum of $a and $b is: $sum";
?>
```

**Output**:

```
The sum of 10 and 20 is: 30
```

**Conclusion:**  
We learned how to create and use a user-defined function in PHP for reusability and better code structure.

**Aim:** (B) Write a PHP script to demonstrate the use of `switch` case.

**Description:**  
This program uses a `switch` statement to execute different blocks of code based on the value of a variable.

**Code:**

```php
<?php
$day = 3; // 1 = Monday, 2 = Tuesday, etc.

switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    case 3:
        echo "Wednesday";
        break;
    case 4:
        echo "Thursday";
        break;
    case 5:
        echo "Friday";
        break;
    case 6:
        echo "Saturday";
        break;
    case 7:
        echo "Sunday";
        break;
    default:
        echo "Invalid day number!";
}
?>
```

**Output**:

```
Wednesday
```

**Conclusion:**  
We learned how to use the `switch` statement in PHP to select and execute code blocks based on variable values.

### Post Practical Questions

1. **Which keyword is used to declare a user-defined function in PHP?**

   - B) function

2. **What is the correct syntax to define a function in PHP?**

   - B) function myFunc() {}

3. **How do you call a function named greetUser with one argument "John"?**

   - D) greetUser("John")

4. **What does a return statement do in a PHP function?**

   - D) Sends back a value

5. **What is the scope of a variable declared inside a PHP function?**
   - C) Local

---

## Practical 07

**Aim:** (A) Write a PHP script to demonstrate string functions.

**Description:**
This program demonstrates commonly used string functions in PHP such as `strlen()`, `strrev()`, `strtoupper()`, `strtolower()`, and `substr()`.

**Code:**

```php
<?php
$str = "Hello PHP";

echo "Original String: $str<br>";
echo "Length: " . strlen($str) . "<br>";
echo "Reverse: " . strrev($str) . "<br>";
echo "Uppercase: " . strtoupper($str) . "<br>";
echo "Lowercase: " . strtolower($str) . "<br>";
echo "Substring (0-5): " . substr($str, 0, 5) . "<br>";
?>
```

**Output**:

```
Original String: Hello PHP
Length: 9
Reverse: PHP olleH
Uppercase: HELLO PHP
Lowercase: hello php
Substring (0-5): Hello
```

**Conclusion:**
We learned how to use different string functions in PHP to manipulate and analyze text.

**Aim:** (B) Write a PHP program to display the current date and time.

**Description:**
This program uses PHP’s `date()` function to display the current date and time in different formats.

**Code:**

```php
<?php
date_default_timezone_set("Asia/Kolkata"); // Set timezone
echo "Current Date: " . date("d-m-Y") . "<br>";
echo "Current Time: " . date("h:i:s A") . "<br>";
?>
```

**Output**:

```
Current Date: 08-08-2025
Current Time: 10:45:30 AM
```

**Conclusion:**
We learned how to use the `date()` function in PHP to display the current date and time.

### Post Practical Questions

1. **Which function returns the length of a string?**

   - C) strlen()

2. **Which function is used to convert a string to uppercase in PHP?**

   - B) strtoupper()

3. **What does `strrev("PHP")` return?**

   - A) PHP

4. **Which function replaces a word in a string?**

   - C) str_replace()

5. **Which function is used to display the current date in PHP?**

   - B) date()

6. **Which format returns the year in 4 digits in `date()` function?**
   - C) Y

---

## Practical 08

**Aim:** (A) Write a PHP script to demonstrate math functions.

**Description:**
This program demonstrates PHP’s built-in math functions such as `abs()`, `sqrt()`, `pow()`, `round()`, `ceil()`, and `floor()`.

**Code:**

```php
<?php
$num = -15.7;

echo "Absolute: " . abs($num) . "<br>";
echo "Square Root of 16: " . sqrt(16) . "<br>";
echo "2 power 5: " . pow(2, 5) . "<br>";
echo "Round: " . round($num) . "<br>";
echo "Ceil: " . ceil($num) . "<br>";
echo "Floor: " . floor($num) . "<br>";
?>
```

**Output**:

```
Absolute: 15.7
Square Root of 16: 4
2 power 5: 32
Round: -16
Ceil: -15
Floor: -16
```

**Conclusion:**
We learned how to use PHP’s built-in mathematical functions for calculations.

**Aim:** (B) Write a PHP program to sort an array in ascending order.

**Description:**
This program sorts an array in ascending order using PHP’s `sort()` function.

**Code:**

```php
<?php
$numbers = [5, 2, 9, 1, 7];

sort($numbers); // Ascending order

echo "Sorted Array: ";
foreach ($numbers as $num) {
    echo $num . " ";
}
?>
```

**Output**:

```
Sorted Array: 1 2 5 7 9
```

**Conclusion:**
We learned how to use the `sort()` function in PHP to arrange array elements in ascending order.

### Post Practical Questions

1. **What does `abs(-5)` return?**

   - C) 5

2. **Which PHP function returns the square root of a number?**

   - B) sqrt()

3. **What is the output of `pow(3, 2)`?**

   - A) 9

4. **What does `round(4.6)` return?**

   - C) 5

5. **Which function returns the lowest integer greater than or equal to the number?**

   - A) ceil()

6. **Which function generates a random number in PHP?**

   - C) rand()

7. **What does `floor(5.9)` return?**
   - B) 5

---

## Practical 09

**Aim:** (A) Write a PHP program to demonstrate super global variables (`$_GET`, `$_POST`, `$_SERVER`).

**Description:**
This program demonstrates how to use PHP super global variables:

- **`$_GET`** to collect data from the URL.
- **`$_POST`** to collect form data securely.
- **`$_SERVER`** to get server and execution environment details.

**Code:**

```php
<!-- save this file as superglobals.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    echo "Hello (POST): $name <br>";
}

if (isset($_GET['name'])) {
    echo "Hello (GET): " . $_GET['name'] . "<br>";
}

echo "Server Name: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Request Method: " . $_SERVER['REQUEST_METHOD'] . "<br>";
?>
<hr>
<form method="post">
    Enter Name (POST): <input type="text" name="name">
    <input type="submit" value="Submit">
</form>
<hr>
<a href="superglobals.php?name=John">Click for GET Example</a>
```

**Output**:

```
Hello (POST): [Name entered in form]
Hello (GET): John
Server Name: localhost
Request Method: GET
```

**Conclusion:**
We learned how to use `$_GET`, `$_POST`, and `$_SERVER` to collect and display data in PHP.

**Aim:** (B) Write a PHP script to upload a file and display the uploaded file information.

**Description:**
This program uses the `$_FILES` super global to upload a file and then displays its name, type, and size.

**Code:**

```php
<!-- save this file as upload.php -->
<?php
if (isset($_FILES['file'])) {
    $fileName = $_FILES['file']['name'];
    $fileType = $_FILES['file']['type'];
    $fileSize = $_FILES['file']['size'];

    // Move file to uploads folder
    move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $fileName);

    echo "File Uploaded Successfully!<br>";
    echo "File Name: $fileName<br>";
    echo "File Type: $fileType<br>";
    echo "File Size: " . ($fileSize / 1024) . " KB<br>";
}
?>
<form method="post" enctype="multipart/form-data">
    Select file: <input type="file" name="file">
    <input type="submit" value="Upload">
</form>
```

**Output**:

```
File Uploaded Successfully!
File Name: example.jpg
File Type: image/jpeg
File Size: 120 KB
```

**Conclusion:**
We learned how to upload a file using `$_FILES` and display the file’s information in PHP.

### Post Practical Questions

1. **Which PHP superglobal variable is used to collect form data sent with the GET method?**

   - B) `$_GET `

2. **Which PHP superglobal variable holds information about the current script and server environment?**

   - C) `$_SERVER `

3. **Which attribute must be added to a `<form>` tag to enable file uploads?**

   - B) `enctype="multipart/form-data" `

4. **What is the temporary location of an uploaded file accessible through PHP?**

   - B) `$_FILES["file"]["tmp_name"]`

5. **What will `$_SERVER['PHP_SELF']` return?**
   - A) The current script's filename

---

## Practical 10

**Aim:** (A) Write a PHP script to process a form and display user input

**Description:**
This program demonstrates how to collect data from an HTML form using the POST method and then process and display the user’s input using PHP.

**Code:**

```php
<!DOCTYPE html>
<html>
<head>
    <title>Form Processing</title>
</head>
<body>
    <h2>User Input Form</h2>
    <form method="post" action="">
        Name: <input type="text" name="username"><br><br>
        Email: <input type="email" name="email"><br><br>
        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    if(isset($_POST['submit'])){
        $name = $_POST['username'];
        $email = $_POST['email'];

        echo "<h3>User Input:</h3>";
        echo "Name: " . htmlspecialchars($name) . "<br>";
        echo "Email: " . htmlspecialchars($email);
    }
    ?>
</body>
</html>
```

**Output**:

- The browser will display a form asking for **Name** and **Email**.
- After submission, it will show:

  ```
  User Input:
  Name: Nick
  Email: nick@example.com
  ```

**Conclusion:**
We successfully created a PHP script that processes a form using the POST method and displays the user’s input securely.

**Aim:** (B) Write a PHP script to set and get a cookie

**Description:**
This program demonstrates how to set a cookie with PHP and then retrieve its value to display on the page.

**Code:**

```php
<?php
// Setting a cookie (name, value, expire time)
setcookie("user", "Nick", time() + (86400 * 7), "/"); // expires in 7 days
?>

<!DOCTYPE html>
<html>
<head>
    <title>Cookie Example</title>
</head>
<body>
    <?php
    if(isset($_COOKIE["user"])) {
        echo "Cookie Value: " . $_COOKIE["user"];
    } else {
        echo "Cookie is not set yet. Refresh the page to see it.";
    }
    ?>
</body>
</html>
```

**Output**:

- On the first load:
  ```
  Cookie is not set yet. Refresh the page to see it.
  ```
- After refresh (or next visit within 7 days):
  ```
  Cookie Value: Nick
  ```

**Conclusion:**
We successfully created a PHP script to set a cookie and retrieve its value for display.

### Post Practical Questions

1. **Which method is used to send form data securely?**

   - B) POST

2. **Which function is used to prevent XSS in user inputs?**

   - A) `htmlspecialchars()`

3. **What will `$_SERVER["REQUEST_METHOD"]` return when a form is submitted via POST?**

   - B) POST

4. **Which function retrieves a cookie in PHP?**

   - B) $\_COOKIE

5. **What happens if a cookie is not found?**
   - C) $\_COOKIE returns null or not set

---
