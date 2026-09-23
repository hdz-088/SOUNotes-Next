---
header: DBMS-LM
title: DBMS Lab Manual
slug: mca-dbms-lm
semester: 7
image: /rdbms.png
accent: "#395968"
link:
---

## Practical 01

**Aim:** Implement SQL queries to perform various DDL Commands (Create a minimum 5 tables with different data types and operate upon them).

**Code:**

```sql
-- Creating Table 1: Departments
CREATE TABLE departments (
    dept_id NUMBER(4) PRIMARY KEY,
    dept_name VARCHAR2(50) NOT NULL,
    location VARCHAR2(50)
);

-- Creating Table 2: Employees
CREATE TABLE employees (
    emp_id NUMBER(6) PRIMARY KEY,
    first_name VARCHAR2(30),
    last_name VARCHAR2(30) NOT NULL,
    hire_date DATE DEFAULT SYSDATE,
    salary NUMBER(8, 2),
    dept_id NUMBER(4),
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Creating Table 3: Projects
CREATE TABLE projects (
    proj_id NUMBER(5) PRIMARY KEY,
    proj_name VARCHAR2(100) NOT NULL,
    budget NUMBER(12, 2),
    start_date DATE
);

-- Creating Table 4: Clients
CREATE TABLE clients (
    client_id NUMBER(5) PRIMARY KEY,
    client_name VARCHAR2(100) NOT NULL,
    contact_email VARCHAR2(100) UNIQUE,
    phone_no CHAR(10)
);

-- Creating Table 5: Assignments
CREATE TABLE assignments (
    emp_id NUMBER(6),
    proj_id NUMBER(5),
    role VARCHAR2(30),
    hours_allocated NUMBER(4, 1),
    PRIMARY KEY (emp_id, proj_id),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
    FOREIGN KEY (proj_id) REFERENCES projects(proj_id)
);

-- ALTER Commands: Modify, Add, and Rename columns
ALTER TABLE employees ADD (email VARCHAR2(100));
ALTER TABLE employees MODIFY (salary NUMBER(10, 2));
ALTER TABLE clients RENAME COLUMN phone_no TO mobile_no;

-- TRUNCATE Command
TRUNCATE TABLE assignments;

-- DROP Command
DROP TABLE clients;
```

**Output:**

1. `DEPARTMENTS`, `EMPLOYEES`, `PROJECTS`, `CLIENTS`, and `ASSIGNMENTS` tables were created successfully.
2. Primary keys and foreign keys were successfully applied.
3. `EMAIL` was added and `SALARY` was modified in `EMPLOYEES`.
4. `PHONE_NO` was renamed to `MOBILE_NO` in `CLIENTS`.
5. `ASSIGNMENTS` was truncated and `CLIENTS` was dropped.

**The final structure of the `EMPLOYEES` table after ALTER commands is:**

| Column Name | Data Type     | Nullable | Constraint      |
| ----------- | ------------- | -------- | --------------- |
| EMP_ID      | NUMBER(6)     | No       | Primary Key     |
| FIRST_NAME  | VARCHAR2(30)  | Yes      | —               |
| LAST_NAME   | VARCHAR2(30)  | No       | —               |
| HIRE_DATE   | DATE          | Yes      | Default SYSDATE |
| SALARY      | NUMBER(10,2)  | Yes      | —               |
| DEPT_ID     | NUMBER(4)     | Yes      | Foreign Key     |
| EMAIL       | VARCHAR2(100) | Yes      | —               |

**MCQs**

1. A
2. B
3. A
4. A
5. B

**Conclusion:** DDL commands (CREATE, ALTER, TRUNCATE, and DROP) were successfully implemented to define, alter, truncate, and remove table structures in Oracle XE.

---

## Practical 02

**Aim:** Implement SQL queries to perform various DML Commands (Insert minimum 10 rows using different insert methods, edit and remove data using UPDATE and DELETE commands).

**Code:**

```sql
-- Method 1: Standard Insert specifying column list
INSERT INTO departments (dept_id, dept_name, location) VALUES (10, 'IT', 'New York');
INSERT INTO departments (dept_id, dept_name, location) VALUES (20, 'HR', 'Chicago');
INSERT INTO departments (dept_id, dept_name, location) VALUES (30, 'Finance', 'Boston');

-- Method 2: Standard Insert without column list (all columns)
INSERT INTO employees VALUES (101, 'John', 'Doe', TO_DATE('2022-01-15', 'YYYY-MM-DD'), 60000.00, 10, 'john.doe@company.com');
INSERT INTO employees VALUES (102, 'Jane', 'Smith', TO_DATE('2021-03-20', 'YYYY-MM-DD'), 55000.00, 10, 'jane.smith@company.com');
INSERT INTO employees VALUES (103, 'Robert', 'Johnson', TO_DATE('2020-07-10', 'YYYY-MM-DD'), 70000.00, 20, 'robert.j@company.com');

-- Method 3: Inserting rows with NULL values
INSERT INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id)
VALUES (104, 'Emily', 'Davis', SYSDATE, 50000.00, 20);

-- Method 4: Multi-row insert using INSERT ALL
INSERT ALL
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (105, 'Michael', 'Brown', SYSDATE, 48000.00, 30, 'mbrown@company.com')
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (106, 'Sarah', 'Wilson', SYSDATE, 65000.00, 10, 'swilson@company.com')
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (107, 'David', 'Taylor', SYSDATE, 52000.00, 30, 'dtaylor@company.com')
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (108, 'Laura', 'Anderson', SYSDATE, 58000.00, 20, 'landerson@company.com')
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (109, 'James', 'Thomas', SYSDATE, 72000.00, 10, 'jthomas@company.com')
    INTO employees (emp_id, first_name, last_name, hire_date, salary, dept_id, email) VALUES (110, 'Emma', 'White', SYSDATE, 45000.00, 30, 'ewhite@company.com')
SELECT * FROM dual;

-- UPDATE Commands
UPDATE employees SET salary = salary * 1.10 WHERE dept_id = 10;
UPDATE employees SET email = 'emily.davis@company.com' WHERE emp_id = 104;

-- DELETE Commands
DELETE FROM employees WHERE emp_id = 110;

```

**Output:**

| EMP_ID | FIRST_NAME | LAST_NAME | HIRE_DATE | SALARY   | DEPT_ID | EMAIL                   |
| ------ | ---------- | --------- | --------- | -------- | ------- | ----------------------- |
| 101    | John       | Doe       | 15-JAN-22 | 66000.00 | 10      | john.doe@company.com    |
| 102    | Jane       | Smith     | 20-MAR-21 | 60500.00 | 10      | jane.smith@company.com  |
| 103    | Robert     | Johnson   | 10-JUL-20 | 70000.00 | 20      | robert.j@company.com    |
| 104    | Emily      | Davis     | 21-SEP-26 | 50000.00 | 20      | emily.davis@company.com |
| 105    | Michael    | Brown     | 21-SEP-26 | 48000.00 | 30      | mbrown@company.com      |
| 106    | Sarah      | Wilson    | 21-SEP-26 | 71500.00 | 10      | swilson@company.com     |
| 107    | David      | Taylor    | 21-SEP-26 | 52000.00 | 30      | dtaylor@company.com     |
| 108    | Laura      | Anderson  | 21-SEP-26 | 58000.00 | 20      | landerson@company.com   |
| 109    | James      | Thomas    | 21-SEP-26 | 79200.00 | 10      | jthomas@company.com     |

**MCQs**

1. A
2. B
3. B
4. B
5. A

**Conclusion:** DML statements (INSERT, UPDATE, DELETE) were successfully demonstrated using various methods to manage row-level data in Oracle XE.

---

## Practical 03

**Aim:** Retrieve data using the SELECT command and various SQL operators.

**Code:**

```sql
-- 1. Simple SELECT and Relational Operators
SELECT emp_id, first_name, last_name, salary FROM employees WHERE salary > 60000;

-- 2. Logical Operators (AND, OR, NOT)
SELECT emp_id, first_name, last_name, dept_id, salary
FROM employees
WHERE dept_id = 10 AND salary >= 65000;

SELECT emp_id, first_name, last_name, dept_id
FROM employees
WHERE dept_id = 20 OR dept_id = 30;

-- 3. BETWEEN ... AND Operator
SELECT emp_id, first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 50000 AND 65000;

-- 4. IN Operator
SELECT emp_id, first_name, last_name, dept_id
FROM employees
WHERE dept_id IN (10, 30);

-- 5. LIKE Operator (Pattern Matching)
SELECT emp_id, first_name, last_name
FROM employees
WHERE last_name LIKE 'S%';

SELECT emp_id, first_name, last_name
FROM employees
WHERE first_name LIKE '_a%';

-- 6. IS NULL / IS NOT NULL Operators
SELECT emp_id, first_name, last_name, email
FROM employees
WHERE email IS NULL;

SELECT emp_id, first_name, last_name, email
FROM employees
WHERE email IS NOT NULL;
```

**Output:**

**1. Simple SELECT and Relational Operators**

| EMP_ID | FIRST_NAME | LAST_NAME | SALARY |
| :----- | :--------- | :-------- | :----- |
| 101    | John       | Doe       | 66000  |
| 102    | Jane       | Smith     | 60500  |
| 103    | Robert     | Johnson   | 70000  |
| 106    | Sarah      | Wilson    | 71500  |
| 109    | James      | Thomas    | 79200  |

**2. Logical Operators (AND)**

| EMP_ID | FIRST_NAME | LAST_NAME | DEPT_ID | SALARY |
| :----- | ---------- | --------- | :------ | :----- |
| 101    | John       | Doe       | 10      | 66000  |
| 106    | Sarah      | Wilson    | 10      | 71500  |
| 109    | James      | Thomas    | 10      | 79200  |

**Logical Operators (OR)**

| EMP_ID | FIRST_NAME | LAST_NAME | DEPT_ID |
| :----- | ---------- | :-------- | :------ |
| 103    | Robert     | Johnson   | 20      |
| 104    | Emily      | Davis     | 20      |
| 105    | Michael    | Brown     | 30      |
| 107    | David      | Taylor    | 30      |
| 108    | Laura      | Anderson  | 20      |

**3. BETWEEN ... AND Operator**

| EMP_ID | FIRST_NAME | LAST_NAME | SALARY |
| :----- | :--------- | :-------- | :----- |
| 102    | Jane       | Smith     | 60500  |
| 104    | Emily      | Davis     | 50000  |
| 107    | David      | Taylor    | 52000  |
| 108    | Laura      | Anderson  | 58000  |

**4. IN Operator**

| EMP_ID | FIRST_NAME | LAST_NAME | DEPT_ID |
| :----- | :--------- | :-------- | :------ |
| 101    | John       | Doe       | 10      |
| 102    | Jane       | Smith     | 10      |
| 105    | Michael    | Brown     | 30      |
| 106    | Sarah      | Wilson    | 10      |
| 107    | David      | Taylor    | 30      |
| 109    | James      | Thomas    | 10      |

**5. LIKE Operator (Last Name S%)**

| EMP_ID | FIRST_NAME | LAST_NAME |
| :----- | :--------- | :-------- |
| 102    | Jane       | Smith     |

**LIKE Operator (First Name `_a%`)**

| EMP_ID | FIRST_NAME | LAST_NAME |
| :----- | :--------- | :-------- |
| 106    | Sarah      | Wilson    |
| 107    | David      | Taylor    |
| 108    | Laura      | Anderson  |
| 109    | James      | Thomas    |

**6. IS NULL Operator:** `no data found`

**IS NOT NULL Operator**

| EMP_ID | FIRST_NAME | LAST_NAME | EMAIL                  |
| :----- | :--------- | :-------- | :--------------------- |
| 101    | John       | Doe       | john.doe@company.com   |
| 102    | Jane       | Smith     | jane.smith@company.com |
| 103    | Robert     | Johnson   | robert.j@company.com   |
| 105    | Michael    | Brown     | mbrown@company.com     |
| 106    | Sarah      | Wilson    | swilson@company.com    |
| 107    | David      | Taylor    | dtaylor@company.com    |
| 108    | Laura      | Anderson  | landerson@company.com  |
| 109    | James      | Thomas    | jthomas@company.com    |

**MCQs**

1. B
2. B
3. A
4. B
5. B

**Conclusion:** The SELECT statement combined with comparison, logical, pattern matching (LIKE), set membership (IN), range (BETWEEN), and NULL test operators was successfully verified.

---

## Practical 04

**Aim:** Implement SQL queries using Date functions like ADD_MONTHS, MONTHS_BETWEEN, ROUND, NEXT_DAY, TRUNC, GREATEST, NEW_TIME etc.

**Code:**

```sql
-- 1. ADD_MONTHS
SELECT SYSDATE AS current_date,
       ADD_MONTHS(SYSDATE, 6) AS after_6_months
FROM dual;

-- 2. MONTHS_BETWEEN
SELECT SYSDATE AS current_date,
       ADD_MONTHS(SYSDATE, 6) AS future_date,
       MONTHS_BETWEEN(ADD_MONTHS(SYSDATE, 6), SYSDATE) AS months_between
FROM dual;

-- 3. ROUND
SELECT SYSDATE AS current_date,
       ROUND(SYSDATE, 'YEAR') AS rounded_year
FROM dual;

-- 4. NEXT_DAY
SELECT SYSDATE AS current_date,
       NEXT_DAY(SYSDATE, 'MONDAY') AS next_monday
FROM dual;

-- 5. TRUNC
SELECT SYSDATE AS current_date,
       TRUNC(SYSDATE, 'YEAR') AS year_start
FROM dual;

-- 6. GREATEST
SELECT GREATEST(SYSDATE, ADD_MONTHS(SYSDATE, 6)) AS greatest_date
FROM dual;

-- 7. NEW_TIME
SELECT SYSDATE AS GMT_TIME,
       NEW_TIME(SYSDATE, 'GMT', 'IST') AS IST_TIME
FROM dual;
```

**Output:**

| Function Output Column | Sample Output Value |
| ---------------------- | ------------------- |
| SYSDATE                | 23-SEP-26           |
| SIX_MONTHS_LATER       | 23-MAR-27           |
| MONTHS_DIFF            | 6                   |
| NEXT_MONDAY            | 28-SEP-26           |
| END_OF_MONTH           | 30-SEP-26           |
| ROUNDED_MONTH          | 01-OCT-26           |
| TRUNCATED_YEAR         | 01-JAN-26           |
| MAX_DATE               | 23-MAR-27           |
| CONVERTED_TIME         | 23-SEP-26           |

**MCQs**

1. B
2. B
3. A
4. A
5. B

**Conclusion:** Built-in Oracle SQL date functions were successfully implemented to perform date manipulations, calculations, and conversions.

---

## Practical 05

**Aim:** Implement SQL queries using Numeric functions like ABS, CEIL, COS, COSH, EXP, FLOOR, POWER, MOD, ROUND, TRUNC, SQRT etc.

**Code:**

```sql
-- Comprehensive execution of Oracle SQL Numeric Functions
SELECT
    ABS(-45.75) AS abs_val,
    CEIL(14.2) AS ceil_val,
    FLOOR(14.8) AS floor_val,
    COS(0) AS cos_val,
    COSH(0) AS cosh_val,
    EXP(2) AS exp_val,
    POWER(2, 5) AS power_val,
    MOD(17, 5) AS mod_val,
    SQRT(64) AS sqrt_val
FROM DUAL;

-- Demonstration of ROUND and TRUNC on numeric values
SELECT
    ROUND(125.678, 2) AS round_2dec,
    ROUND(125.678, -1) AS round_tens,
    TRUNC(125.678, 2) AS trunc_2dec,
    TRUNC(125.678, 0) AS trunc_zero
FROM DUAL;
```

**Output:**

**1. Comprehensive Numeric Functions Output**

| Function    | Output      |
| ----------- | :---------- |
| ABS(-45.75) | 45.75       |
| CEIL(14.2)  | 15          |
| FLOOR(14.8) | 14          |
| COS(0)      | 1           |
| COSH(0)     | 1           |
| EXP(2)      | 7.389056099 |
| POWER(2, 5) | 32          |
| MOD(17, 5)  | 2           |
| SQRT(64)    | 8           |

**2. ROUND and TRUNC Output**

| Function           | Output |
| ------------------ | :----- |
| ROUND(125.678, 2)  | 125.68 |
| ROUND(125.678, -1) | 130    |
| TRUNC(125.678, 2)  | 125.67 |
| TRUNC(125.678, 0)  | 125    |

**MCQs**

1. A
2. B
3. A
4. B
5. A

**Conclusion:** Oracle SQL numeric functions were tested and validated for performing mathematical calculations and precision handling.

---

## Practical 06

**Aim:** Implement SQL queries using Character Functions like INITCAP, LOWER, UPPER, LTRIM, RTRIM, TRANSLATE, REPLACE, SUBSTR etc.

**Code:**

```sql
-- String Case Conversion Functions
SELECT
    INITCAP('silver oak university') AS initcap_str,
    LOWER('SILVER OAK UNIVERSITY') AS lower_str,
    UPPER('silver oak university') AS upper_str
FROM DUAL;

-- Trimming and Padding Functions
SELECT
    LTRIM('   Oracle', ' ') AS ltrim_str,
    RTRIM('Database***', '*') AS rtrim_str,
    LPAD('SQL', 8, '*') AS lpad_str,
    RPAD('SQL', 8, '#') AS rpad_str
FROM DUAL;

-- String Substring, Translation, and Replacement Functions
SELECT
    SUBSTR('Silver Oak University', 1, 6) AS substr_str,
    REPLACE('Welcome to Java', 'Java', 'Oracle SQL') AS replace_str,
    TRANSLATE('12345 Hello', '12345', 'ABCDE') AS translate_str,
    LENGTH('Oracle Database') AS str_len
FROM DUAL;
```

**Output:**
**1. String Case Conversion Functions**

| INITCAP_STR           | LOWER_STR             | UPPER_STR             |
| --------------------- | --------------------- | --------------------- |
| Silver Oak University | silver oak university | SILVER OAK UNIVERSITY |

**2. Trimming and Padding Functions**

| LTRIM_STR | RTRIM_STR | LPAD_STR  | RPAD_STR |
| --------- | --------- | --------- | -------- |
| Oracle    | Database  | **\***SQL | SQL##### |

**3. String Substring, Translation, and Replacement Functions**

| SUBSTR_STR | REPLACE_STR           | TRANSLATE_STR | STR_LEN |
| ---------- | --------------------- | ------------- | ------: |
| Silver     | Welcome to Oracle SQL | ABCDE Hello   |      15 |

**MCQs**

1. A
2. A
3. B
4. B
5. B

**Conclusion:** Character and string manipulation functions in Oracle SQL were successfully executed and formatted.

---

## Practical 07

**Aim:** Implement SQL queries using Group functions like AVG, MIN, MAX, SUM, COUNT, DECODE etc.

**Code:**

```sql
-- 1. Using Aggregate Group Functions on EMPLOYEES table
SELECT
    COUNT(*) AS total_employees,
    COUNT(email) AS emp_with_email,
    SUM(salary) AS total_salary_expense,
    AVG(salary) AS average_salary,
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM employees;

-- 2. Combining Group Functions with DECODE conditional evaluation
SELECT
    dept_id,
    COUNT(*) AS dept_count,
    SUM(DECODE(dept_id, 10, salary, 0)) AS it_salary_total,
    SUM(DECODE(dept_id, 20, salary, 0)) AS hr_salary_total,
    SUM(DECODE(dept_id, 30, salary, 0)) AS fin_salary_total
FROM employees
GROUP BY dept_id;
```

**Output:**
**1. Aggregate Group Functions Output**

| Function             | Output |
| :------------------- | :----- |
| TOTAL_EMPLOYEES      | 9      |
| TOTAL_SALARY_EXPENSE | 555200 |
| AVERAGE_SALARY       | 61689  |
| MINIMUM_SALARY       | 48000  |
| MAXIMUM_SALARY       | 79200  |

**2. DECODE Conditional Evaluation Output**

| DEPT_ID | DEPT_COUNT | IT_SALARY_TOTAL | HR_SALARY_TOTAL | FIN_SALARY_TOTAL |
| ------: | ---------: | --------------: | --------------: | ---------------: |
|      30 |          2 |               0 |               0 |           100000 |
|      20 |          3 |               0 |          178000 |                0 |
|      10 |          4 |          277200 |               0 |                0 |

**MCQs**

1. B
2. B
3. B
4. A
5. B

**Conclusion:** SQL group (aggregate) functions along with the DECODE function were successfully used to aggregate and summarize dataset records.

---

## Practical 08

**Aim:** Implement SQL queries using GROUP BY HAVING and ORDER BY clauses.

**Code:**

```sql
-- 1. GROUP BY
SELECT dept_id, COUNT(*) AS employee_count
FROM employees
GROUP BY dept_id;

-- 2. HAVING
SELECT dept_id, MAX(salary) AS highest_salary
FROM employees
GROUP BY dept_id
HAVING MAX(salary) > 65000;

-- 3. ORDER BY
SELECT first_name, salary
FROM employees
ORDER BY salary DESC;

-- 4. GROUP BY with HAVING and ORDER BY
SELECT dept_id, AVG(salary) AS average_salary
FROM employees
GROUP BY dept_id
HAVING AVG(salary) > 55000
ORDER BY average_salary DESC;
```

**Output:**

**1. GROUP BY**

| DEPT_ID | EMPLOYEE_COUNT |
| :------ | :------------- |
| 10      | 4              |
| 20      | 3              |
| 30      | 2              |

**2. HAVING**

| DEPT_ID | HIGHEST_SALARY |
| :------ | :------------- |
| 10      | 79200          |
| 20      | 70000          |

**3. ORDER BY**

| FIRST_NAME | SALARY |
| :--------- | :----- |
| James      | 79200  |
| Sarah      | 71500  |
| Robert     | 70000  |
| John       | 66000  |
| Jane       | 60500  |
| Laura      | 58000  |
| David      | 52000  |
| Emily      | 50000  |
| Michael    | 48000  |

**4. GROUP BY, HAVING and ORDER BY**

| DEPT_ID | AVERAGE_SALARY |
| :------ | :------------- |
| 10      | 69300          |
| 20      | 59333.33       |

**MCQs**

1. A
2. B
3. B
4. B
5. B

**Conclusion:** The GROUP BY, HAVING, and ORDER BY clauses were successfully implemented to group, filter, and sort the SQL query results.
