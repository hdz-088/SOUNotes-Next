---
header: ST-LM
title: ST Lab Manual
slug: st-lm
semester: 3
image: /st.png
accent: "#8c75ea"
link: https://drive.google.com/file/d/1purC9QIP0FZ_DuMRAsjG7turKQCKxvOS/view?usp=sharing
---

## Practical 01

**Aim**: Check any website and create a test case in excel.

**Description**: This Practical involves creating a plan to test a website's features using an Excel spreadsheet.

| **Test Case ID** | **Test Scenario**         | **Test Steps**                                                     | **Expected Result**                               | **Actual Result**   | **Status (Pass/Fail)** |
| ---------------- | ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------- | ------------------- | ---------------------- |
| TC001            | Test Login Page           | 1. Open login page<br>2. Enter valid details<br>3. Click "Login"   | User is logged in and redirected to the home page | As expected         | Pass                   |
| TC002            | Test Invalid Login        | 1. Open login page<br>2. Enter invalid details<br>3. Click "Login" | Error message is displayed                        | Error message shown | Pass                   |
| TC003            | Test Search Functionality | 1. Type "pizza" in search bar<br>2. Click search icon              | Pizza-related results appear                      | Results displayed   | Pass                   |
| TC004            | Test Add to Cart          | 1. Select item<br>2. Click "Add to Cart"                           | Item is added to the cart                         | Item added          | Pass                   |
| TC005            | Test Checkout Process     | 1. Go to cart<br>2. Click "Checkout"<br>3. Pay                     | Payment successful and order confirmation shown   | Payment successful  | Pass                   |

**Conclusion:**

- We successfully tested a website's key features using Excel test cases, with all tests passing as expected.

---

## Practical 02

**Aim**: Check VS Code Software, Run different language code and create test cases in excel (i.e. Python, C++, C, C#, and plain text file).

**Description**: In this hands-on session, you'll explore running various programming languages (Python C++, C, C#) and writing test cases in Excel using VS Code as your development environment even including plain text files.

| **Test Case ID** | **Test Scenario**               | **Expected Result**                             | **Actual Result**       | **Status (Pass/Fail)** |
| ---------------- | ------------------------------- | ----------------------------------------------- | ----------------------- | ---------------------- |
| TC001            | Run Python Code in VS Code      | Python script runs and outputs "Hello, World!"  | Output as expected      | Pass                   |
| TC002            | Run C++ Code in VS Code         | C++ code compiles and outputs "Hello, World!"   | Output as expected      | Pass                   |
| TC003            | Run C Code in VS Code           | C code compiles and outputs "Hello, World!"     | Output as expected      | Pass                   |
| TC004            | Run C# Code in VS Code          | C# code compiles and outputs "Hello, World!"    | Output as expected      | Pass                   |
| TC005            | Open Plain Text File in VS Code | Plain text file opens and is saved successfully | File saved successfully | Pass                   |

**Conclusion:**

- We ran Python, C++, C, C#, and plain text files in VS Code, and all executed successfully, confirming VS Code's multi-language support.

---

## Practical 03

**Aim:** Write C language code for odd and even number using do-While loop and create test cases in excel.

**Description:** This practical exercise involves writing C code in VS Code to identify and print odd and even numbers within a user-specified range using a do-while loop, accompanied by creating corresponding test cases in an Excel sheet for verification.

**Code:**

```c
#include <stdio.h>

int main() {
    int start, end;

    // Input range
    printf("Enter the start and end values: ");
    scanf("%d %d", &start, &end);

    // Initialize counter
    int num = start;

    // do-while loop to check odd/even
    do {
        if (num % 2 == 0) {
            printf("%d is even\n", num);
        } else {
            printf("%d is odd\n", num);
        }
        num++;
    } while (num <= end);

    return 0;
}
```

**Test Cases in Excel:**

| **Test Case ID** | **Test Scenario**                        | **Input Range (Start-End)** | **Expected Result**                                          | **Actual Result** | **Status (Pass/Fail)** |
| ---------------- | ---------------------------------------- | --------------------------- | ------------------------------------------------------------ | ----------------- | ---------------------- |
| TC001            | Test odd and even numbers from 1 to 5    | 1-5                         | 1: odd, 2: even, 3: odd, 4: even, 5: odd                     | As expected       | Pass                   |
| TC002            | Test odd and even numbers from 10 to 15  | 10-15                       | 10: even, 11: odd, 12: even, 13: odd, 14: even, 15: odd      | As expected       | Pass                   |
| TC003            | Test with negative range (-3 to 3)       | -3 to 3                     | -3: odd, -2: even, -1: odd, 0: even, 1: odd, 2: even, 3: odd | As expected       | Pass                   |
| TC004            | Test with identical start and end values | 5-5                         | 5: odd                                                       | As expected       | Pass                   |
| TC005            | Test with reverse range (start > end)    | 5-1                         | No output (start is greater than end)                        | No output         | Pass                   |

**Conclusion:**

- This practical demonstrated the use of the `do-while` loop in C to identify odd and even numbers within a range. Test cases were created to verify the program’s correctness for different inputs, and the program worked as expected.

---

## Practical 04

**Aim:** Test cases for the Calculator in a Windows application.

**Description:** This practical session guides you through creating test cases in Excel to verify the functionality of the Windows Calculator application for various mathematical operations.

**Steps:**

1. Check if the calculator window maximizes to a certain window size.
2. Check if the calculator closes when the close button is pressed or if the exit menu is clicked from the File exit option.
3. Check if the help document is accessed from Help > Documentation.
4. Check if the calculator allows copy and paste (text) functionality.
5. Check if all the numbers are working (0 to 9).
6. Check if the arithmetic keys (+, -, \* , /, %) are working.
7. Check if the clear key is working.
8. Check if the brackets keys are working.
9. Check if the sum or equal key is working.
10. Check if the square and square root key is working.

| **Test Case ID** | **Test Scenario**                              | **Expected Result**                                            | **Actual Result** | **Status (Pass/Fail)** |
| ---------------- | ---------------------------------------------- | -------------------------------------------------------------- | ----------------- | ---------------------- |
| TC001            | Maximize Calculator Window                     | Calculator window maximizes to the specified size              | As expected       | Pass                   |
| TC002            | Close Calculator Application                   | Calculator closes when the close button or File > Exit is used | As expected       | Pass                   |
| TC003            | Access Help Document                           | Help document opens when Help > Documentation is selected      | As expected       | Pass                   |
| TC004            | Copy and Paste Functionality                   | Calculator allows text to be copied and pasted                 | As expected       | Pass                   |
| TC005            | Number Keys Functionality (0 to 9)             | All number keys (0-9) are functional                           | As expected       | Pass                   |
| TC006            | Arithmetic Keys Functionality (+, -, \*, /, %) | All arithmetic keys work as expected                           | As expected       | Pass                   |
| TC007            | Clear Key Functionality                        | Clear key clears the current input                             | As expected       | Pass                   |
| TC008            | Brackets Keys Functionality                    | Brackets keys function correctly in calculations               | As expected       | Pass                   |
| TC009            | Sum/Equal Key Functionality                    | Sum or equal key computes the result correctly                 | As expected       | Pass                   |
| TC010            | Square and Square Root Keys Functionality      | Square and square root keys work correctly                     | As expected       | Pass                   |

**Conclusion:**

- This practical involved verifying various functionalities of the Windows Calculator application using test cases. Each functionality was tested and confirmed to be working as expected.

---

## Practical 05

**Aim:** Write test cases for Gmail.

**Description:** This practical exercise involves creating comprehensive test cases to validate various functionalities of Gmail, including login, email composition, sending, receiving, searching, and other features, ensuring optimal user experience and reliability.

**Test Cases:**

1. Verify a user can successfully create a new Gmail account.
2. Verify the system rejects duplicate email addresses during sign-up.
3. Verify password strength requirements.
4. Verify a valid mobile number can be associated with a Gmail address.
5. Verify users pass a CAPTCHA test during sign-up.
6. Verify that users can customize their Gmail address after creating an account.
7. Verify that a valid birthdate is entered during sign-up.
8. Verify that users must accept Gmail's Terms of Service and Privacy Policy.
9. Confirm two-factor authentication during sign-up.
10. Check if the compose button is available and clickable.
11. Verify users can create and send a new email successfully.
12. Confirm that users can add multiple recipients to an email.
13. Verify that users can receive multiple emails at a time.
14. Verify that users can see their profile information.
15. Verify that users can select their preferred language during sign-up.

| **Test Case ID** | **Test Scenario**                          | **Expected Result**                                           | **Actual Result** | **Status (Pass/Fail)** |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------- | ----------------- | ---------------------- |
| TC001            | Create a New Gmail Account                 | User successfully creates a new Gmail account                 | As expected       | Pass                   |
| TC002            | Duplicate Email Address                    | System rejects duplicate email addresses during sign-up       | As expected       | Pass                   |
| TC003            | Password Strength Requirements             | System enforces password strength requirements                | As expected       | Pass                   |
| TC004            | Associate Mobile Number                    | User can successfully associate a valid mobile number         | As expected       | Pass                   |
| TC005            | CAPTCHA Test                               | User passes CAPTCHA test during sign-up                       | As expected       | Pass                   |
| TC006            | Customize Gmail Address                    | User can customize their Gmail address after account creation | As expected       | Pass                   |
| TC007            | Valid Birthdate Entry                      | User successfully enters a valid birthdate during sign-up     | As expected       | Pass                   |
| TC008            | Accept Terms of Service and Privacy Policy | User must accept Gmail's Terms of Service and Privacy Policy  | As expected       | Pass                   |
| TC009            | Two-Factor Authentication                  | Two-factor authentication is confirmed during sign-up         | As expected       | Pass                   |
| TC010            | Compose Button Availability                | Compose button is available and clickable                     | As expected       | Pass                   |
| TC011            | Create and Send Email                      | User can create and send a new email successfully             | As expected       | Pass                   |
| TC012            | Add Multiple Recipients                    | User can add multiple recipients to an email                  | As expected       | Pass                   |
| TC013            | Receive Multiple Emails                    | User can receive multiple emails at a time                    | As expected       | Pass                   |
| TC014            | View Profile Information                   | User can view their profile information                       | As expected       | Pass                   |
| TC015            | Select Preferred Language                  | User can select their preferred language during sign-up       | As expected       | Pass                   |

**Conclusion:**

- This practical involved validating essential functionalities of Gmail through comprehensive test cases. Each test case was executed to ensure Gmail’s features, such as account creation, email composition, and user preferences, perform as expected.

---

## Practical 06

**Aim:** Create a test plan document for the State Bank of India (SBI) application.

**Description:** This practical exercise involves creating a comprehensive test plan document for the SBI application, outlining test objectives, scope, resources, schedule, and exit criteria to ensure the system's quality and functionality.

#### 1. Introduction

**Purpose:**

- The purpose of this test plan is to outline the strategy and approach for testing the State Bank of India (SBI) application. The goal is to ensure the application's functionality, performance, and security meet the required standards.

**Scope:**  
This test plan covers the following aspects of the SBI application:

- Account Management
- Transaction Processing (deposits, withdrawals, transfers)
- Loan Processing
- Report Generation
- Security Features (authentication, authorization)
- User Interface and Usability

#### 2. Test Objectives

- Verify that all banking operations, including deposits, withdrawals, and transfers, function correctly.
- Ensure accuracy in account balances and transaction records.
- Validate user authentication and authorization mechanisms.
- Confirm compliance with security standards and regulations.
- Assess the application's performance under various load conditions.

#### 3. Test Scope

**In-Scope:**

- User account creation and management
- Transaction processing (deposits, withdrawals, transfers)
- Loan application and management
- Report generation
- Security features (authentication, authorization)
- User interface and usability

**Out-of-Scope:**

- Non-banking features such as third-party integrations unrelated to banking
- Mobile app versions (if only the web app is tested)

#### 4. Resources

**Personnel:**

- Test Manager
- Test Analysts
- Test Engineers
- Developers (for fixing identified issues)

**Tools:**

- Test Management Tool (e.g., JIRA, TestRail)
- Automated Testing Tools (e.g., Selenium, JUnit)
- Performance Testing Tools (e.g., JMeter)

#### 5. Schedule

**Test Planning:** September 10, 2024 – September 15, 2024  
**Test Design:** September 16, 2024 – September 22, 2024  
**Test Execution:** September 23, 2024 – September 30, 2024  
**Defect Reporting and Fixes:** October 1, 2024 – October 5, 2024  
**Test Closure:** October 6, 2024 – October 10, 2024

#### 6. Test Deliverables

- Test Plan Document
- Test Case Documents
- Test Scripts (if automated)
- Test Execution Report
- Defect Reports
- Test Summary Report

#### 7. Test Approach

**Types of Testing:**

- **Functional Testing:** Verify core functionalities such as account management and transaction processing.
- **Performance Testing:** Assess how the application performs under load.
- **Security Testing:** Ensure the application meets security requirements and safeguards user data.
- **Usability Testing:** Evaluate the application's user interface and overall user experience.
- **Regression Testing:** Ensure that new changes do not adversely affect existing functionality.

**Test Techniques:**

- Manual Testing
- Automated Testing
- Exploratory Testing
- Boundary Testing

#### 8. Exit Criteria

- All critical and high-priority defects are fixed and verified.
- All planned test cases are executed and their results documented.
- Test coverage meets the defined requirements.
- The test summary report is completed and approved.

#### 9. Risks and Mitigations

**Risk:** Delays in setting up the test environment  
**Mitigation:** Prepare and configure the environment well in advance.

**Risk:** Incomplete requirements leading to insufficient test coverage  
**Mitigation:** Regularly review requirements with stakeholders to ensure completeness.

#### Conclusion:

- The test plan for the State Bank of India (SBI) application provides a clear strategy for ensuring the application’s functionality and reliability. It covers essential areas such as account management, transaction processing, and security, aiming to identify and address issues before release. The outlined schedule and testing approach ensure a thorough evaluation of the application, aiming for a high-quality and user-friendly banking solution.

---

## Practical 07

**Aim:** Case study of a web testing tool (Selenium)

**Description:** In this practical exploration, you'll leverage Selenium WebDriver to automate web application testing, simulating user interactions and validating functionalities across different browsers.

#### 1. Introduction

**Purpose:**

- To explore Selenium WebDriver for automating web application testing. This practical aims to simulate user interactions, validate functionalities, and ensure cross-browser compatibility.

#### 2. Background

- Selenium WebDriver is a popular open-source tool for automating web applications. It supports multiple browsers and programming languages, making it a versatile choice for automated testing. It helps in verifying that web applications function correctly across different environments.

#### 3. Objectives

- **Setup:** Install and configure Selenium WebDriver and necessary browser drivers.
- **Scripting:** Develop test scripts to automate user interactions with the web application.
- **Validation:** Perform functional validation of web applications.
- **Cross-Browser Testing:** Ensure consistent functionality across various browsers.

#### 4. Advantages & Disadvantages

**Advantages:**

- **Cross-Browser Support:** Works with multiple browsers like Chrome, Firefox, and Edge.
- **Open Source:** Free to use with a strong community and support.
- **Flexibility:** Supports multiple programming languages (Java, Python, etc.).
- **Integration:** Can be integrated with various testing frameworks and tools.

**Disadvantages:**

- **Setup Complexity:** Requires configuration and installation of browser drivers.
- **Learning Curve:** Requires knowledge of programming and test scripting.
- **Maintenance:** Test scripts may need frequent updates due to changes in the web application or browser versions.

#### 5. Implementation

**Setup:**

- Install Selenium WebDriver and necessary browser drivers.
- Configure the development environment with required libraries.

**Test Script Development:**

- Create test scripts for various scenarios such as login functionality, form submission, and navigation.
- Example script for login functionality:

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://example.com/login")

username = driver.find_element_by_id("username")
password = driver.find_element_by_id("password")
login_button = driver.find_element_by_id("loginButton")

username.send_keys("testuser")
password.send_keys("testpassword")
login_button.click()

# Validate login
assert "Welcome" in driver.page_source

driver.quit()
```

**Cross-Browser Testing:**

- Execute test scripts on different browsers and validate consistency.

### 6. Conclusion

This practical exercise provided insights into using Selenium WebDriver for automating web application testing. By setting up Selenium, developing test scripts, and performing cross-browser testing, you gained hands-on experience with validating web applications. This approach ensures that applications work correctly across various browsers, enhancing their reliability and user experience.

### 7. References

- Selenium Official Documentation: [https://www.selenium.dev/documentation/](https://www.selenium.dev/documentation/)
- Browser Driver Downloads: [ChromeDriver](https://sites.google.com/chromium.org/driver/), [GeckoDriver](https://github.com/mozilla/geckodriver/releases)
- [Selenium WebDriver Tutorial](https://www.guru99.com/selenium-tutorial.html)

---

## Practical 08

**Aim:** Case study any web testing tool(Win runner)
**Description:** This case study explores using WinRunner's recording and playback capabilities to automate web application testing, focusing on functionalities like form submission and data validation.

#### 1. Introduction

**Purpose:**

- To investigate WinRunner for automating web application testing. This practical aims to utilize WinRunner’s recording and playback features to simulate user interactions and validate functionalities such as form submissions and data integrity.

#### 2. Background

- WinRunner is a testing tool developed by Mercury Interactive (now part of Micro Focus) used for functional and regression testing. It enables users to record and replay user actions to validate web applications. Despite being less common today, it was once a popular choice for automating test scenarios in web applications.

#### 3. Objectives

- **Setup:** Install and configure WinRunner for web application testing.
- **Recording:** Use WinRunner to record user actions and interactions with the web application.
- **Scripting:** Develop test scripts using WinRunner’s GUI and scripting language.
- **Validation:** Perform functional validation of web applications.
- **Playback:** Execute recorded scripts to verify the application's behavior.

#### 4. Advantages & Disadvantages

**Advantages:**

- **Record and Playback:** Simplifies script creation by recording user interactions.
- **Integration:** Can integrate with other Mercury tools like TestDirector.
- **Ease of Use:** User-friendly interface for non-technical testers.

**Disadvantages:**

- **Legacy Tool:** Less commonly used today with the rise of newer tools.
- **Limited Flexibility:** May require complex scripting for advanced test scenarios.
- **Maintenance:** Test scripts may need frequent updates due to changes in the application or environment.

#### 5. Implementation

**Setup:**

- Install WinRunner and configure it to work with web browsers and your web application.

**Recording Test Scripts:**

- Record user interactions for scenarios such as form submission, data entry, and validation.
- Example recorded script for form submission:

```plaintext
// Start of recorded script
window("Login").winEdit("Username").set("testuser");
window("Login").winEdit("Password").set("testpassword");
window("Login").winButton("Login").click();

// Validate login
window("Home").winText("Welcome").check();

// End of recorded script
```

**Playback and Validation:**

- Replay the recorded scripts to validate that the web application performs as expected.
- Check for any discrepancies or errors in form submissions and data validation.

### 6. Conclusion

This practical exercise demonstrated the use of WinRunner for automating web application testing through recording and playback. By setting up WinRunner, recording user actions, and executing test scripts, you gained practical experience in automating functional validation of web applications. Although WinRunner is a legacy tool, its recording and playback capabilities provided valuable insights into test automation.

### 7. References

- WinRunner Official Documentation: [WinRunner Documentation](https://www.microfocus.com/documentation/silk-performer/)
- [WinRunner Overview](https://en.wikipedia.org/wiki/WinRunner)

---

## Practical 09

- **Aim:** Case study on types of software testing
- **Description:** This practical case study explores the application of different software testing types, including functional, non-functional (performance, security), and usability testing. The goal is to understand how these testing types help in identifying and addressing potential issues in a software product to ensure it meets quality standards.

### 1. Introduction

**Purpose:**

- The purpose of this case study is to explore various types of software testing, such as functional, non-functional, and usability testing, to understand their role in ensuring software quality. Each testing type plays a critical role in validating specific aspects of a software product, ensuring it performs as expected under different conditions.

**Scope:**

- This study focuses on key software testing types:
  - **Functional Testing:** Verifies the software behaves according to the specified requirements.
  - **Performance Testing:** Measures the software's responsiveness and stability under load.
  - **Security Testing:** Ensures the software is protected against vulnerabilities and unauthorized access.
  - **Usability Testing:** Evaluates the ease of use and user experience of the application.

### 2. Background

- Software testing is a critical process in the software development lifecycle (SDLC) to ensure the product meets functional and non-functional requirements. Functional testing ensures that the application works as intended, while non-functional testing (performance, security, etc.) ensures the product is reliable, secure, and user-friendly.

### 3. Objectives

- **Functional Testing:** Validate core features and workflows of the software.
- **Performance Testing:** Evaluate the software's behavior under various load conditions.
- **Security Testing:** Identify vulnerabilities and assess the effectiveness of security controls.
- **Usability Testing:** Analyze the user interface and user experience to ensure ease of use.

### 4. Advantages & Disadvantages

**Advantages:**

- **Comprehensive Coverage:** Combines different types of testing to address all aspects of software quality.
- **Risk Mitigation:** Helps identify and resolve issues before they impact end-users.
- **Improved User Experience:** Usability testing helps create a user-friendly interface.

**Disadvantages:**

- **Time-Consuming:** Thorough testing may require significant time and resources.
- **Complex Setup:** Non-functional testing (especially performance and security) can be challenging to configure.
- **Maintenance:** Frequent updates may require repeated testing efforts to maintain coverage.

### 5. Implementation

**Functional Testing:**

- Identify core functionalities such as login, form submission, and navigation.
- Example functional test case:
  ```plaintext
  Test Case: Verify user login functionality
  Steps:
  1. Open the login page.
  2. Enter valid credentials.
  3. Click the login button.
  Expected Result: User is successfully logged in.
  ```

**Performance Testing:**

- Use tools like JMeter to simulate multiple users accessing the software simultaneously and measure its response time.
  ```plaintext
  Scenario: Simulate 100 users accessing the login page.
  Expected Result: The page should load within 3 seconds under the load.
  ```

**Security Testing:**

- Perform vulnerability scans and penetration testing using tools like OWASP ZAP to identify potential security risks.

**Usability Testing:**

- Gather feedback from users about the interface, navigation, and overall user experience. Example task:
  ```plaintext
  Task: Ask users to perform a task, such as creating a new account.
  Expected Result: Users should complete the task without confusion or difficulty.
  ```

### 6. Conclusion

This practical case study highlights the importance of applying various software testing techniques to ensure the software product is of high quality. By combining functional, performance, security, and usability testing, the product can be evaluated from multiple perspectives, allowing potential issues to be identified and resolved before release. These testing types work together to create a robust and user-friendly product.

### 7. References

- ISTQB Foundation Level Syllabus: [https://www.istqb.org/](https://www.istqb.org/)
- JMeter Documentation: [https://jmeter.apache.org/](https://jmeter.apache.org/)
- OWASP ZAP: [https://www.zaproxy.org/](https://www.zaproxy.org/)
- Usability.gov: [https://www.usability.gov/](https://www.usability.gov/)

---

## Practical 10

- **Aim:** Case study on bug tracking tool (Bugzilla)
- **Description:** This practical case study explores Bugzilla, a popular bug tracking tool, focusing on its features for effective defect management. These features include defect reporting, prioritization, assignment, status tracking, and reporting. The objective is to enhance software quality by improving issue management through Bugzilla’s structured approach to handling bugs in the software development lifecycle.

### 1. Introduction

**Purpose:**

- Bug tracking is an essential component of software quality assurance. Bugzilla, an open-source tool, facilitates the reporting and management of defects in a systematic way. This case study aims to demonstrate how Bugzilla can be used to streamline bug tracking, ensuring efficient resolution of software issues and preventing potential problems in future releases.

**Scope:**

- This case study focuses on key Bugzilla features, including:
  - **Defect Reporting:** Logging bugs with detailed descriptions.
  - **Prioritization & Assignment:** Categorizing bugs by severity and assigning them to the appropriate developers.
  - **Status Tracking:** Monitoring bug progress from reporting to resolution.
  - **Reporting:** Generating summaries and detailed reports for analysis and decision-making.

### 2. Background

- Bugzilla was created by the Mozilla Foundation to handle bug tracking for its open-source projects. Today, Bugzilla is widely used by organizations for effective issue management. It offers a customizable and transparent way to track bugs, making it easier to manage software defects and ensure timely fixes.

### 3. Objectives

- **Defect Reporting:** Learn how to log bugs in Bugzilla with relevant details such as title, description, and steps to reproduce.
- **Prioritization:** Understand how to classify bugs based on severity and impact.
- **Assignment:** Explore how bugs are assigned to developers or teams based on expertise and workload.
- **Status Tracking:** Monitor the lifecycle of a bug, from submission to resolution, through different states such as NEW, ASSIGNED, RESOLVED, and CLOSED.
- **Reporting:** Generate reports to track progress, identify trends, and improve decision-making for future development cycles.

### 4. Advantages & Disadvantages

**Advantages:**

- **Efficient Management:** Provides a centralized system for tracking and resolving issues.
- **Transparency:** All team members have access to bug status and history, promoting transparency in issue management.
- **Customizability:** Bugzilla can be tailored to suit various workflows and project needs.
- **Powerful Reporting:** Offers detailed reports for better insight into the status of the project.

**Disadvantages:**

- **Steep Learning Curve:** Users may find it challenging to get familiar with all the features initially.
- **Complex Interface:** The interface can be overwhelming for new users or small teams.
- **Customization Overhead:** Although flexible, customizing Bugzilla can require considerable effort.

### 5. Implementation

**Step 1: Logging into Bugzilla**

- Create an account and log into Bugzilla. Once logged in, navigate to the dashboard.

**Step 2: Reporting a Bug**

- Click on the "File a Bug" button. Provide the following information:
  - **Product/Component:** The part of the project where the bug is found.
  - **Summary:** A brief title of the bug.
  - **Description:** Detailed steps to reproduce the bug.
  - **Severity:** Select the severity of the issue (e.g., minor, major, critical).
  - **Attachment:** If necessary, attach screenshots or logs to support the bug report.

**Step 3: Prioritization and Assignment**

- After logging the bug, assign it to the appropriate developer or team. You can also set the priority (e.g., P1 for critical issues) to ensure important bugs are addressed first.

**Step 4: Tracking the Bug’s Status**

- Monitor the bug's status as it moves through different stages:
  - **NEW:** The bug has just been reported.
  - **ASSIGNED:** The bug has been assigned to a developer.
  - **RESOLVED:** The developer has fixed the issue.
  - **VERIFIED:** The fix has been tested and confirmed.
  - **CLOSED:** The issue is fully resolved and no longer active.

**Step 5: Generating Bug Reports**

- Bugzilla allows you to create detailed reports, which can provide insights into bug frequency, resolution times, and areas of the project that need more attention. These reports are helpful for decision-making and improving future product quality.

### 6. Conclusion

This case study demonstrates the utility of Bugzilla as a bug tracking tool that streamlines defect management. By using Bugzilla for reporting, prioritizing, assigning, and tracking bugs, teams can ensure a more efficient and transparent process. The tool not only helps to resolve issues faster but also provides valuable data through its reporting features to improve the overall software development process. Efficient bug tracking enhances software quality and user satisfaction by addressing issues in a structured manner.

### 7. References

- Bugzilla Official Documentation: [https://www.bugzilla.org/docs/](https://www.bugzilla.org/docs/)
- Mozilla Bugzilla: [https://bugzilla.mozilla.org/](https://bugzilla.mozilla.org/)
- Bugzilla User Guide: [https://www.bugzilla.org/docs/user.html](https://www.bugzilla.org/docs/user.html)

---

## Practical 11

- **Aim:** Open a file in the C Drive using an automation script.
- **Description:** In this practical, you will write a Python script to open a file that is located in the C Drive of your system using an automation method. The script will check if the file exists and then open it, otherwise, it will display a message stating that the file was not found.

### Code & Steps:

1. **Install Python:**

   - Ensure Python is installed on your system. If not, download and install it from [python.org](https://www.python.org/downloads/).

2. **Create the Script:**

   - Open a text editor or Integrated Development Environment (IDE) such as Visual Studio Code.
   - Write the following Python script to open a file from the C Drive:

   ```python
   import os

   file_path = r"C:\example\myfile.txt"

   if os.path.exists(file_path):
       os.startfile(file_path)
       print(f"Opened: {file_path}")
   else:
       print(f"File not found: {file_path}")
   ```

   - This script uses Python's `os` module to check if the file exists at the given path. If the file is found, it opens the file using the `os.startfile()` method. If not, it prints an error message.

3. **Save the Script:**

   - Save the file with the name `open_file.py`.

4. **Run the Script:**
   - Open the terminal or command prompt.
   - Navigate to the folder where you saved the script.
   - Run the script using the following command:
     ```bash
     python open_file.py
     ```

### Output:

- If the file is found at the specified path, the script will open the file and print:

  ```
  Opened: C:\example\myfile.txt
  ```

- If the file is not found, the output will be:

  ```
  File not found: C:\example\myfile.txt
  ```

### Conclusion:

- In this practical, you learned how to automate file handling in Python using the `os` module. By writing a simple script, you were able to check if a file exists in the C Drive and open it if found. This exercise demonstrates how automation can be used to manage files efficiently in a system, which can be extended to other applications such as data processing and file management tasks in real-world scenarios.

---

## Practical 12

- **Aim:** Automate 'Facebook log-in page' using Selenium Python ChromeDriver.
- **Description:** In this practical, you will use Selenium, a powerful web automation tool, to automate the process of logging into Facebook using Python and ChromeDriver. Selenium will be used to control the Chrome browser, fill in the login credentials, and click the login button.

### Code & Steps:

1. **Install Selenium:**

   - Open your terminal or command prompt and install Selenium by running:
     ```bash
     pip install selenium
     ```

2. **Download ChromeDriver:**

   - Download the appropriate version of [ChromeDriver](https://sites.google.com/chromium.org/driver/) based on your browser version.
   - Ensure the `chromedriver.exe` is placed in your project directory or in a location that is included in your system PATH.

3. **Write the Script:**

   - Open a text editor or an IDE like VS Code, and write the following Python script:

   ```python
   from selenium import webdriver
   from selenium.webdriver.common.by import By
   from selenium.webdriver.common.keys import Keys
   import time

   # Set up ChromeDriver path
   driver = webdriver.Chrome(executable_path="path_to_chromedriver")

   # Open Facebook login page
   driver.get("https://www.facebook.com/login")

   # Enter email or phone number
   email = driver.find_element(By.ID, "email")
   email.send_keys("your_email_here")

   # Enter password
   password = driver.find_element(By.ID, "pass")
   password.send_keys("your_password_here")

   # Click the login button
   login_button = driver.find_element(By.NAME, "login")
   login_button.click()

   # Wait for a few seconds to see if the login is successful
   time.sleep(5)

   # Close the browser
   driver.quit()
   ```

   - This script opens the Facebook login page, enters the provided email and password, clicks the login button, and closes the browser after 5 seconds.

4. **Run the Script:**
   - In the terminal, navigate to your script’s directory and run the following command:
     ```bash
     python facebook_login.py
     ```

### Output:

- The script will open Chrome and navigate to the Facebook login page. It will automatically fill in the login credentials and click the login button. If the credentials are correct, Facebook will log in successfully, and you will see your Facebook homepage.

- After 5 seconds, the browser will close automatically. If there is an error in credentials or the login page doesn't load correctly, you might receive an error message in the terminal.

### Conclusion:

- This practical introduced you to web automation using Selenium. You learned how to control a web browser, automate the input of login credentials, and simulate the login process on Facebook. This is a foundational skill in web automation and testing, which can be applied to automate interactions with other web applications or to perform functional testing in web development projects.

---

## Practical 13

- **Aim:** Write a script to navigate to a webpage and capture a screenshot of the page, saving it to your local directory.
- **Description:** In this practical, you will write a Python script using Selenium that will open a website in a browser, capture a screenshot of the page, and save it to a local file. This script can be useful for web testing or for capturing specific moments of a webpage.

### Code & Steps:

1. **Install Selenium:**

   - Open the terminal and run the following command to install Selenium:
     ```bash
     pip install selenium
     ```

2. **Download ChromeDriver:**

   - Download the correct version of [ChromeDriver](https://sites.google.com/chromium.org/driver/).
   - Ensure that the `chromedriver.exe` file is in your project directory or system PATH.

3. **Write the Script:**

   - Open your text editor or IDE and create a file called `screenshot_capture.py` with the following content:

   ```python
   from selenium import webdriver
   from selenium.webdriver.common.by import By
   import time

   # Set up ChromeDriver path
   driver = webdriver.Chrome(executable_path="path_to_chromedriver")

   # Navigate to the webpage
   driver.get("https://www.example.com")

   # Wait for the page to load completely
   time.sleep(3)

   # Capture the screenshot and save it to your local directory
   screenshot_path = "screenshot.png"
   driver.save_screenshot(screenshot_path)

   # Close the browser
   driver.quit()

   print(f"Screenshot saved at {screenshot_path}")
   ```

   - This script opens the webpage `https://www.example.com`, waits for the page to load, captures a screenshot, saves it to the local directory, and then closes the browser.

4. **Run the Script:**
   - In your terminal, navigate to the directory where the script is located and run the command:
     ```bash
     python screenshot_capture.py
     ```

### Output:

- A Chrome browser window will open, navigate to `https://www.example.com`, and take a screenshot.
- The screenshot will be saved in the local directory as `screenshot.png`.
- You will see the following message in the terminal:

  ```
  Screenshot saved at screenshot.png
  ```

- The browser will close automatically after the script runs.

### Conclusion:

- In this practical, you used Selenium to automate the opening of a webpage and capture a screenshot of the page. The ability to automate tasks such as screenshot capture is valuable for web testing and documentation purposes. This practical also helped you understand how Selenium can be used for automated browsing and basic interaction with web elements.

---

## Practical 14

- **Aim:** Automate sending an email using Python and SMTP.
- **Description:** In this practical, you will write a Python script that sends an email using SMTP (Simple Mail Transfer Protocol). This script will automate the process of logging into an SMTP server (like Gmail) and sending an email.

### Code & Steps:

1. **Install Required Libraries:**

   - Install the necessary libraries by running:
     ```bash
     pip install secure-smtplib email-validator
     ```

2. **Write the Script:**

   - Create a new Python file (e.g., `send_email.py`) and use the following code to send an email:

   ```python
   import smtplib
   import ssl
   from email.mime.multipart import MIMEMultipart
   from email.mime.text import MIMEText

   smtp_server = "smtp.gmail.com"
   smtp_port = 465
   sender_email = "your_email@gmail.com"
   sender_password = "your_password"
   recipient_email = "recipient_email@gmail.com"
   subject = "Your Predefined Subject"
   body = "This is the body content of the email."

   msg = MIMEMultipart()
   msg['From'] = sender_email
   msg['To'] = recipient_email
   msg['Subject'] = subject
   msg.attach(MIMEText(body, 'plain'))

   context = ssl.create_default_context()

   try:
       with smtplib.SMTP_SSL(smtp_server, smtp_port, context=context) as server:
           server.login(sender_email, sender_password)
           server.sendmail(sender_email, recipient_email, msg.as_string())
           print("Email sent successfully")
   except Exception as e:
       print(f"Error: {e}")
   ```

   - This script uses the Gmail SMTP server to send an email. You need to provide your Gmail credentials and the recipient's email.

3. **Run the Script:**
   - In your terminal, navigate to the directory where the script is located and run:
     ```bash
     python send_email.py
     ```

### Output:

- If the email is sent successfully, the output will be:

  ```
  Email sent successfully to recipient_email@gmail.com
  ```

- If there is an issue, you will receive an error message like:

  ```
  Error: [Error details]
  ```

### Conclusion:

- In this practical, you learned how to send emails programmatically using Python’s `smtplib`. By automating the email sending process, you can streamline communication tasks, making it useful in scenarios like bulk email sending, notifications, and alerts. This practical is essential for tasks in automation and data-driven systems that require communication via email.

---
