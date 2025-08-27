---
header: PHP-01
title: PHP-01 Introduction
slug: php-01
semester: 5
image: /php.png
accent: "#4D588E"
link: https://drive.google.com/file/d/1XnVNjuYQpbFVXy4End07XNLpuUShU83G/view?usp=sharing
---

- PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language. It is especially suited for web development and can be embedded into HTML
- PHP is a server side scripting language; server side scripting language is one, which has the capability of executing the script on the server and serving the output as a HTML File, server side script has the main advantage of interacting with the databases and to perform all types of server manipulations directly.
- Server side scripting language is responsible for manipulating the data which is filled in the entire web forms, anywhere in the net.

| Client Side Scripting                                                                                                                        | Server Side Scripting                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| It executes on client                                                                                                                        | It executes on server                                         |
| Examples: DHTML, JavaScript, VBScript, Flash animation, CSS, Java applets                                                                    | Online forms with some dropdown list that assembles on server |
| It is glamorous, eye catching part of web development                                                                                        | It is invisible to user                                       |
| It reduces the round trip so quickly response to user input                                                                                  | It has round trip                                             |
| They depend entirely on Browsers. Wide variations exist in capability of each browsers, some people disable JavaScript for security reasons. | They do not depends entirely on browsers.                     |

## History of PHP

- **1994: Created by Rasmus Lerdorf. PHP started as a set of Common** Gateway Interface (CGI) scripts called "Personal Home Page Tools" to track visits to his online resume.
- **1995**: PHP 1.0 Released Rasmus released PHP Tools publicly to help developers build dynamic web pages.
- **1997**: PHP/FI2.0 Gained popularity in the web community. Supported MySQL, and basic database operations. Began to be used on a larger scale for server-side scripting.
- **1998**: PHP3.0 Renamed to “PHP: Hypertext Pre-processors” (recursive acronym). Added modular architecture and support for more databases. Marked the beginning of PHP's global popularity.
- **2023–2024**: PHP8.3and Upcoming 8.4 Enhanced performance, bug fixes, and stability improvements. Preparing for PHP 9 (expected to drop support for legacy features).

## Features Merits and Demerits of PHP

- **Open Source**: Freely available and supported by a large community.
- **Server-Side Scripting**: Executes on the server and sends HTML to the client.
- **Cross-Platform Compatibility**: Works on major operating systems: Windows, Linux, macOS.
- **Database Integration**: **Supports** many databases (MySQL, PostgreSQL, Oracle, MongoDB, etc.).
- **Embedded in HTML**: PHP code can be embedded directly into HTML code.
- **Object-Oriented Programming (OOP)**: Supports OOP principles, making it scalable and maintainable.
- **Security Features**: Offers features like data encryption and hashing for secure web development.
- **Fast Load Time and Execution**: Generally fast compared to interpreted languages like Python or Ruby.
- **Built-in Support for Web Services**: Supports protocols like HTTP, FTP, and can handle JSON, XML, etc.
- **Security Issues**: PHP is open-source, so vulnerabilities are well known, and if not coded properly, it may lead to security threats (e.g., SQL injection, XSS).
- **Not Suitable for Large Applications**: PHP is not ideal for very large or complex applications, as it can become difficult to manage and maintain at scale.
- **Performance for Large-Scale Apps**: Compared to languages like Java or C#, PHP may lag in performance for CPU-intensive or real-time applications.
- **Too Flexible**: While flexibility is a strength, PHP allows poor coding practices, making it harder to enforce standards across teams.

## General Structure of PHP

- All PHP code must be inside `<?php...?>` tags. The PHP engine interprets code inside these tags.
- Each PHP statement must end with a semicolon.
- PHP can be embedded (mixed up) with HTML. It’s very easy to write php code in HTML anywhere by starting and ending php tag in between HTML. HTML tags can also be added with echo or print command in double quote.

```php
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    echo "<h1>Hello World</h1>";
  ?>
</body>
</html>
```

## Comments

- Comments are used to explain code and make it easier to understand.
- They are ignored by the PHP interpreter when the script runs.
- Types of Comments:
  - Single-line comments
  - Multi-line comments

```php
// This is a single-line comment

# This is also a single-line comment

/* This is a
multi-line
comment
* /
```

## Variable

- Variables are used to store data values
- Rules for Variable Names:
  - Must begin with a letter (A-Z or a-z) or an underscore `(_)`.
  - Can contain letters, numbers (0-9), and underscores.
  - Variable names are case-sensitive(`$age` and `$Age` different)
  - No spaces or special characters allowed

```php
$name = "Hello World";
```

## Data Types

![](/php/1php01.png)

```php
<?php
echo "<h2>PHP Data Types Examples</h2>";

// 1. String
$string = "Hello, PHP!";
echo "<b>String:</b> ";
var_dump($string);
echo "<br>";

// 2. Integer
$integer = 2025;
echo "<b>Integer:</b> ";
var_dump($integer);
echo "<br>";

// 3. Float (double)
$float = 3.14159;
echo "<b>Float:</b> ";
var_dump($float);
echo "<br>";

// 4. Boolean
$bool = true;
echo "<b>Boolean:</b> ";
var_dump($bool);
echo "<br>";

// 5. Array
$array = array("apple", "banana", "cherry");
echo "<b>Array:</b> ";
var_dump($array);
echo "<br>";

// 6. Object
class Car {
  public $brand;
  public function __construct($brand) {
    $this->brand = $brand;
  }
}
$myCar = new Car("Toyota");
echo "<b>Object:</b> ";
var_dump($myCar);
echo "<br>";

// 7. NULL: A variable with no value assigned
$nullVar = null;
echo "<b>NULL:</b> ";
var_dump($nullVar);
echo "<br>";

// 8. Resource: Many modules provide several functions for dealing with the outside world. For example, every database extension has at least a function to connect to the database, a function to send a query to the database, and a function to close the connection to the database. Because you can have multiple database connections open at once, the connect function gives you something by which to identify that connection when you call the query and close functions: a resource.

echo "<b>Resource:</b> ";
$file = fopen("php://temp", "r");
var_dump($file);
fclose($file);
echo "<br>";
?>

```

## Operators

### Arithmetic Operators

| **Operator** | **Description** | **Example**    |
| ------------ | --------------- | -------------- |
| `+`          | Addition        | `5 + 3` → `8`  |
| `-`          | Subtraction     | `5 - 2` → `3`  |
| `*`          | Multiplication  | `4 * 2` → `8`  |
| `/`          | Division        | `10 / 2` → `5` |
| `%`          | Modulus         | `7 % 2` → `1`  |
| `**`         | Exponentiation  | `2 ** 3` → `8` |

### Assignment Operator

| **Operator** | **Description**     | **Example**               |
| ------------ | ------------------- | ------------------------- |
| `=`          | Assign value        | `$x = 10`                 |
| `+=`         | Add and assign      | `$x += 5` → `$x = $x + 5` |
| `-=`         | Subtract and assign | `$x -= 3` → `$x = $x - 3` |
| `*=`         | Multiply and assign | `$x *= 2` → `$x = $x * 2` |
| `/=`         | Divide and assign   | `$x /= 4` → `$x = $x / 4` |
| `%=`         | Modulus and assign  | `$x %= 3` → `$x = $x % 3` |

### Comparison Operator

| **Operator** | **Description**              | **Example**           |
| ------------ | ---------------------------- | --------------------- |
| `==`         | Equal (value only)           | `5 == '5'` → `true`   |
| `===`        | Identical (value + type)     | `5 === '5'` → `false` |
| `!=`, `<>`   | Not equal                    | `4 != 5` → `true`     |
| `!==`        | Not identical                | `4 !== '4'` → `true`  |
| `>`          | Greater than                 | `5 > 3` → `true`      |
| `<`          | Less than                    | `2 < 5` → `true`      |
| `>=`         | Greater than or equal        | `5 >= 5` → `true`     |
| `<=`         | Less than or equal           | `3 <= 3` → `true`     |
| `<=>`        | Spaceship (3-way comparison) | `5 <=> 3` → `1`       |

### Increment/ Decrement Operator

| **Operator** | **Description** | **Example**                          |
| ------------ | --------------- | ------------------------------------ |
| `++$x`       | Pre-increment   | Increments first, then returns value |
| `$x++`       | Post-increment  | Returns value, then increments       |
| `--$x`       | Pre-decrement   | Decrements first, then returns value |
| `$x--`       | Post-decrement  | Returns value, then decrements       |

### Logical Operator

| **Operator** | **Description**              | **Example** |
| ------------ | ---------------------------- | ----------- |
| `&&`         | Logical AND                  | `$x && $y`  |
| `            |                              | `           |
| `!`          | Logical NOT                  | `!$x`       |
| `and`        | Logical AND (low precedence) | `$x and $y` |
| `or`         | Logical OR (low precedence)  | `$x or $y`  |
| `xor`        | Logical XOR                  | `$x xor $y` |

### String Operator

| **Operator** | **Description**        | **Example**                            |
| ------------ | ---------------------- | -------------------------------------- |
| `.`          | Concatenation          | `"Hello " . "World"` → `"Hello World"` |
| `.=`         | Concatenate and assign | `$str .= "PHP"`                        |

### Array Operator

| **Operator** | **Description**                   | **Example** |
| ------------ | --------------------------------- | ----------- |
| `+`          | Union (keys from left array only) | `$a + $b`   |
| `==`         | Equal (same key-value pairs)      | `$a == $b`  |
| `===`        | Identical (same order & types)    | `$a === $b` |
| `!=`, `<>`   | Not equal                         | `$a != $b`  |
| `!==`        | Not identical                     | `$a !== $b` |

### Type & Special Operator

| **Operator** | **Description**         | **Example**                    |
| ------------ | ----------------------- | ------------------------------ |
| `instanceof` | Check object class type | `$obj instanceof Car`          |
| `??`         | Null coalescing         | `$x = $val ?? 'default'`       |
| `?:`         | Ternary (shorthand)     | `$x = $y ?: 'default'`         |
| `? :`        | Ternary (full form)     | `$x = ($y > 5) ? 'Yes' : 'No'` |

### Bitwise Operator

| **Operator** | **Description**   | **Example** |
| ------------ | ----------------- | ----------- |
| `&`          | AND               | `$a & $b`   |
| `            | `                 | OR          |
| `^`          | XOR               | `$a ^ $b`   |
| `~`          | NOT (invert bits) | `~$a`       |
| `<<`         | Left shift        | `$a << 1`   |
| `>>`         | Right shift       | `$a >> 1`   |

### Error Control Operator

| **Operator** | **Description** | **Example**                    |
| ------------ | --------------- | ------------------------------ |
| `@`          | Suppress errors | `@file_get_contents("no.txt")` |

### Execution Operator

| **Operator** | **Description**        | **Example** |
| ------------ | ---------------------- | ----------- |
| `` ` ` ``    | Execute shell commands | `` `ls` ``  |

### Concatenation Operator

| **Operator** | **Description**                             | **Example** |
| ------------ | ------------------------------------------- | ----------- |
| `.`          | Combines `$x` and `$y` into a single string | `$x. $y`    |

## Super Global Variables

- Several predefined variables in PHP are "**superglobals**", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

| **Superglobal** | **Description**                                                       | **Usage**                                     |
| --------------- | --------------------------------------------------------------------- | --------------------------------------------- |
| `$_GET`         | Used to collect data sent via URL query parameters (HTTP GET method). | Access form/query string values sent via GET. |
| `$_POST`        | Collects data from HTML forms with method="post".                     | Securely sends form data to server.           |
| `$_REQUEST`     | Contains data from `$_GET`, `$_POST`, and `$_COOKIE`.                 | Can access all input methods in one place.    |
| `$_SERVER`      | Contains server and execution environment information.                | Access headers, paths, IP, etc.               |
| `$_SESSION`     | Stores session variables across multiple pages.                       | Used to track user login/data across pages.   |
| `$_COOKIE`      | Stores small pieces of data in the user's browser.                    | Used for saving preferences or login data.    |
| `$_FILES`       | Used to upload files via HTTP POST.                                   | Handles uploaded file data.                   |
| `$_ENV`         | Contains environment variables from the server.                       | Access predefined environment settings.       |
| `$_GLOBALS`     | Access global variables from anywhere in the script.                  | Useful in functions to access global scope.   |

### `$_GLOBALS`

- `$_GLOBALS` is a PHP super global variable which is used to access global variables from anywhere in the PHP script (also from within functions or methods).
- PHP stores all global variables in an array called `$_GLOBALS[index]`. The index holds the name of the variable.

```php
<?php
if (isset($_GET['name'])) {
    echo "Hello, " . $_GET['name'];
} else {
    echo "Name not provided!";
}
?>
```

### `$_SERVER`

- `$_SERVER`:`$_SERVER` is a PHP super global variable which holds information about headers, paths, and script locations. The example below shows how to use some of the elements in `$_SERVER`

```php
echo $_SERVER['SERVER_NAME']; // Output: localhost (or server domain)
```

### `$_REQUEST`

- PHP `$_REQUEST` is used to collect data after submitting an HTML form

```php
<?php
echo "User: " . $_REQUEST['user']; // works with GET or POST
?>
```

### `$_POST`

- It is widely used to collect form data after submitting an HTML form with `method="post"`.
- `$_POST` is also widely used to pass variables.

```html
<!-- form.html -->
<form action="submit.php" method="post">
  Email: <input type="email" name="email" />
  <input type="submit" value="Submit" />
</form>
```

```php
// submit.php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "Submitted Email: " . $_POST['email'];
}
?>
```

### `$_GET`

- PHP `$_GET` can also be used to collect form data after submitting an HTML form with `method="get“`
- `$_GET` can also collect data sent in the URL

```php
// URL: http://localhost/example.php?name=John

<?php
if (isset($_GET['name'])) {
    echo "Hello, " . $_GET['name'];
} else {
    echo "Name not provided!";
}
?>
```

### Session

- A session is a way to store information (in variables) to be used across multiple pages
- Unlike a cookie, the information is not stored on the users computer.
- Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc).
- By default, session variables last until the user closes the browser.  Start a PHP Session
- A session is started with the `session_start()` function.
- Session variables are set with the PHP global variable: `$_SESSION`
- Let's create a new page called `start.php`. In this page, we start a new PHP session:

```php
// start.php
<?php
	session_start();
	$_SESSION['username'] = "admin";
	echo "Session started!";
?>
```

- Next, we create another page called `dashboard.php`. From this page, we will access the session information we set on the first page

```php
// dashboard.php
<?php
	session_start();
	echo "Welcome " . $_SESSION['username'];
?>
```

### `$_COOKIE`

- A cookie is often used to identify a user. A cookie is a small file that the server embeds on the user's computer.
- Each time the same computer requests a page with a browser, it will send the cookie too.
- With PHP, you can both create and retrieve cookie values.
- A cookie is created with the `setcookie()` function.

```php
// set_cookie.php

<?php
	setcookie("language", "English", time() + (86400 * 30), "/");
	echo "Cookie set!";
?>
```

```php
// get_cookie.php

<?php
	if (isset($_COOKIE['language'])) {
	    echo "Language: " . $_COOKIE['language'];
	} else {
	    echo "No cookie set!";
	}
?>
```

- **Create/Retrieve a Cookie:**
  - The cookie will expire after 30 days (86400 \* 30). The "`/`" means that the cookie is available in entire website (otherwise, select the directory you prefer).
  - We then retrieve the value of the cookie using the global variable `$_COOKIE`
  - We also use the `isset()` function to find out if the cookie is set

## Questions

---
