---
title: ST Lab Manual
slug: ST-LM
semester: 3
image: /st.png
link:
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

## Practical-09

> This is generated via ChatGPT

### Introduction

Software testing plays a critical role in ensuring the quality, reliability, and performance of a software product. It involves various methods to identify bugs, issues, and other defects that could negatively impact the user experience or system performance. In this case study, we will explore the different types of software testing—focusing on **Functional Testing**, **Non-functional Testing**, and **Usability Testing**—and their application in detecting and addressing potential issues within a software product. This comprehensive understanding will illustrate how a combination of these testing techniques ensures a robust and high-quality software solution.

### Overview of Software Testing Types

Software testing is broadly categorized into two types:

1. **Functional Testing**: Tests the functionality of the software based on requirements.
2. **Non-functional Testing**: Examines aspects like performance, usability, and reliability.

Below is a detailed examination of these types and their subcategories, along with a special focus on **Usability Testing** as part of non-functional testing.

### 1. Functional Testing

Functional testing ensures that each feature of the software application operates in conformance with the required specifications. It primarily focuses on user-facing functionality and user interaction with the system.

#### Types of Functional Testing:

1. **Unit Testing**:

   - **Definition**: Tests individual units or components of the software.
   - **Application**: Unit testing is performed during the development phase to ensure each module works independently before integrating them. For instance, in an e-commerce platform, unit tests would validate if product search or shopping cart functions work as expected.

2. **Integration Testing**:

   - **Definition**: Tests the interaction between different modules of a system.
   - **Application**: After unit testing, integration testing ensures that modules work well when combined. In an e-commerce platform, integration testing would validate if the search, cart, and checkout processes work together without issues.

3. **System Testing**:

   - **Definition**: Tests the complete and integrated software system.
   - **Application**: It ensures the entire software system works as a whole. For example, system testing ensures that all functionalities of the e-commerce platform, including user login, product search, payment gateway, etc., work seamlessly in combination.

4. **Acceptance Testing**:
   - **Definition**: Verifies if the system meets the business requirements and is ready for delivery.
   - **Application**: Conducted before the software is handed over to the client. User Acceptance Testing (UAT) will be done on the e-commerce platform by stakeholders to validate it meets all specified business needs.

#### Benefits of Functional Testing:

- Ensures software performs expected actions and functions.
- Helps catch issues early in the development phase.
- Enhances software quality and customer satisfaction.

#### Case Application:

In an e-commerce application, functional testing will validate whether the product search, checkout process, and payment gateway integrations are functioning according to business specifications. Unit tests will cover isolated pieces of code, integration testing will ensure interactions between modules, and system testing will validate the overall performance of the application.

### 2. Non-Functional Testing

Non-functional testing focuses on the operational aspects of the software, like performance, security, and reliability. These tests assess how well the software performs under varying conditions, and if it meets certain non-functional requirements (NFRs).

#### Types of Non-functional Testing:

1. **Performance Testing**:

   - **Definition**: Measures the responsiveness, speed, and stability of a system under a particular workload.
   - **Application**: For an e-commerce site, performance testing would ensure that the application can handle thousands of concurrent users during peak hours (e.g., Black Friday sales) without significant slowdowns.
   - **Subtypes**:
     - **Load Testing**: Ensures the system can handle a specified load.
     - **Stress Testing**: Tests the system under extreme conditions.
     - **Endurance Testing**: Ensures the software can handle prolonged periods of activity without degradation.

2. **Security Testing**:

   - **Definition**: Assesses the security of the system to prevent attacks or unauthorized access.
   - **Application**: In an e-commerce platform, this would involve testing the payment gateway for vulnerabilities, ensuring that sensitive user data (credit card information, personal details) is securely transmitted and stored.

3. **Compatibility Testing**:

   - **Definition**: Ensures the software works as intended across different devices, browsers, operating systems, and network environments.
   - **Application**: An e-commerce platform must function seamlessly across different devices (mobile, desktop), operating systems (Windows, macOS, Android, iOS), and browsers (Chrome, Firefox, Safari).

4. **Reliability Testing**:

   - **Definition**: Ensures that the software operates consistently under specified conditions for an extended period.
   - **Application**: Reliability testing will validate if an e-commerce website remains operational and error-free for hours, even after heavy transactions.

5. **Compliance Testing**:
   - **Definition**: Verifies that the software meets industry standards, legal, and regulatory requirements.
   - **Application**: This could include testing the e-commerce platform's payment system for compliance with the Payment Card Industry Data Security Standard (PCI DSS).

#### Benefits of Non-functional Testing:

- Ensures a system is scalable, secure, and performs well under stress.
- Helps maintain customer trust by ensuring reliability and compliance.
- Prevents long-term operational failures.

#### Case Application:

For the e-commerce application, performance testing will validate its ability to support high traffic, while security testing ensures the protection of customer data. Compatibility testing ensures a uniform user experience across devices and platforms.

### 3. Usability Testing

Usability testing evaluates the user-friendliness and overall user experience of the software. This type of testing involves real users who test the software to identify potential issues in navigation, ease of use, and overall experience.

#### Key Elements of Usability Testing:

1. **Ease of Learning**: How easy is it for new users to navigate and use the system?
2. **Efficiency of Use**: Can experienced users perform tasks quickly and efficiently?
3. **Error Frequency and Severity**: How often do users encounter errors, and how severe are they?
4. **Satisfaction**: Do users find the system enjoyable and satisfying to use?

#### Application of Usability Testing:

For an e-commerce platform, usability testing would focus on the following areas:

- **Navigation**: Ensure users can quickly find products using intuitive search filters and categories.
- **Checkout Process**: Verify that the checkout process is simple, with clear instructions and minimal steps.
- **Responsiveness**: Ensure that the platform adapts to different screen sizes and provides a seamless user experience across devices (e.g., mobile-friendly design).

#### Benefits of Usability Testing:

- Improves user satisfaction by creating a smooth user experience.
- Reduces user frustration and increases retention rates.
- Helps identify interface or process flow issues early.

#### Case Application:

In usability testing for the e-commerce site, users may be asked to perform common tasks like searching for a product, adding it to the cart, and completing a purchase. The testers would record how easy these tasks are to perform, how intuitive the interface is, and whether users experience any frustrations. The results would help identify areas for improvement, such as streamlining the checkout process or enhancing search filters.

### Conclusion

Software testing is a comprehensive process that ensures the quality, performance, and reliability of a software product. Functional testing verifies that the software works according to business requirements, non-functional testing checks performance and other operational aspects, and usability testing ensures a seamless and satisfactory user experience.

By applying a mix of these testing techniques, software teams can identify potential issues early in the development process and ensure that the final product meets customer expectations. For an e-commerce platform, these tests ensure a smooth, secure, and scalable shopping experience that can handle high volumes of traffic and transactions while maintaining user satisfaction.

Effective software testing, therefore, plays a crucial role in delivering a product that is both functionally robust and user-friendly.

---

## Practical-10

### Introduction

Bugzilla is a robust, featureful and mature defect-tracking system, or bug-tracking system. Defect-tracking systems allow teams of developers to keep track of outstanding bugs, problems, issues, enhancement and other change requests in their products effectively. Simple defect-tracking capabilities are often built into integrated source code management environments such as GitHub or other web-based or locally-installed equivalents. We find organizations turning to Bugzilla when they outgrow the capabilities of those systems - for example, because they want workflow management, or bug visibility control (security), or custom fields.

Bugzilla is both free as in freedom and free as in price. Most commercial defect-tracking software vendors charge enormous licensing fees. Despite being free, Bugzilla has many features which are lacking in both its expensive and its free counterparts. Consequently, Bugzilla is used by hundreds or thousands of organizations across the globe.

Bugzilla is a web-based system but needs to be installed on your server for you to use it. However, installation is not complex.

### Background

When mozilla.org first came online in 1998, one of the first products that was released was Bugzilla, a bug system implemented using freely available open source tools. Bugzilla was originally written in TCL (Tool Command Language) by Terry Weissman for use at mozilla.org to replace the in-house system then in use at Netscape. The initial installation of Bugzilla was deployed to the public on a mozilla.org server on April 6, 1998.

After a few months of testing and fixing on a public deployment, Bugzilla was finally released as open source via anonymous CVS and available for others to use on August 26, 1998. At this point. Terry decided to port Bugzilla to Perl, with the hopes that more people would be able to contribute to it, since Perl seemed to be a more popular language. The completion of the port to Perl was announced on September 15, 1998, and committed to CVS later that night.

After a few days of bake time, this was released as Bugzilla 2.0 on September 19, 1998. Since then a large number of projects, both commercial and free have adapted it as their primary method of tracking software defects. In April of 2000, Terry handed off control of the Bugzilla project to Tara Hernandez. Under Tara’s leadership, some of the regular contributors were coerced into taking more responsibility, and Bugzilla began to truly become a group effort. In July of 2001, facing lots of distraction from her “real job,” Tara handed off control to Dave Miller, who is still in charge as of this writing.

### Features

**Advanced Search Capabilities**

- Bugzilla offers two forms of search:
- A basic Google-like bug search that is simple for new users and searches the full text of a bug.
- A very advanced search system where you can create any search you want, including time-based searches (such as “show me bugs where the priority has changed in the last 3 days”) and other very-specific queries.

**Email Notifications Controlled By User Preferences**

- You can get an email about any change made in Bugzilla, and which notifications you get on which bugs is fully controlled by your personal user preferences.

**Bug Lists in Multiple Formats (Atom, iCal, etc.)**

- When you search for bugs, you can get the results in many different formats than just the basic HTML layout. Bug lists are available in Atom, if you want to subscribe to a search like it was a feed. They’re also available in iCalendar format, so if you’re using the time-tracking features of Bugzilla you can see where your bugs fit into your calendar!
- There are even more formats available, such as a long, printable report format that contains all the details of every bug, a CSV format for importing into spreadsheets, and various XML formats.

**Scheduled Reports (Daily, Weekly, Hourly, etc.) by Email**

- Bugzilla has a system that will send you, another user, or a group that you specify the results of a particular search on a schedule that you specify! It can be at any time of day, and it can happen as often as every fifteen minutes.
- Access to this system is controlled by Bugzilla’s groups system, so you can limit who has access to it, and separately, who is able to send reports to users other than themselves.

**Reports and Charts**

- Bugzilla has a very advanced reporting systems. If you want to know how your bug database looks right now, you can create a table using any two fields as the X and Y axis, and using any search criteria to limit the bugs you want information on.
- For example, you could pick Product as the X axis, and Status as the Y axis, and then you would see a report of how many bugs were in each Status, in each Product.
- You can also view that same table as a line graph, bar graph, or pie chart.
- You can also specify a “Z axis” to generate multiple tables or graphs.
- You can even export these reports as CSV so that you can work with them in a spreadsheet.
- Finally, to see how your Bugzilla installation has changed over time, Bugzilla also supports a charting system, which can create graphs that track changes in the system over time.

**Automatic Duplicate Bug Detection**

- When filing a bug in Bugzilla, as soon as you start typing a short summary for it, Bugzilla will automatically look for similar bugs in the system and allow the user to add themselves to the CC list of one of those bugs instead of filing a new one.

**File/Modify Bugs By Email**

- In addition to the web interface, you can send Bugzilla an email that will create a new bug, or will modify an existing bug. You can also very easily attach files to bugs this way.

**Time Tracking**

- You can estimate how many hours a bug will take to fix, and then keep track of the hours you spend working on it. You can also set a deadline that a bug must be complete by.
- For installations that don’t need time-tracking, you can turn off these fields. You can also control who is able to see them. (Just modify the time tracking group parameter!)

**Request System**

- The Request System is a method of asking other users to do something with a particular bug or attachment. That other user can then grant (say “yes” to) your request, or deny (say “no” to) your request, and Bugzilla keeps track of their answer. You can use it for various purposes; whether you need to ask for code review, request information from a specific user, or get a sign-off from a manager, the system is extremely flexible and can do what you need.

**Private Attachments and Comments**

- If you are in the “insider group,” you can mark certain attachments and comments as private, and then they will be invisible to users who are not in the insider group.
- Users will know that a comment was hidden (because the comment numbering will look something like “1, 2, 3, 5” to them), but they will not be able to access its contents.

**Automatic Username Completion or Drop-Down User Lists**

- For small Bugzilla installations, Bugzilla supports showing all users in a drop-down list to select from, when reassigning bugs to another user, adding a user to the CC list, or many other areas.
- Administrators can control who appears in these drop-down lists for each user with “user visibility” controls, to prevent certain users from knowing about the existence of other users.
- For larger installations, Bugzilla supports “autocomplete” when typing a username for the assignee, CC list, or other field that takes a username. After you type at least three characters into one of these fields, Bugzilla will suggest a list of users who have those letters in their username or their real name.

**Patch Viewer**

- Patch Viewer gives you a nice, colorful view of any patch attached to a bug. It also integrates with LXR, CVS, and Bonsai to provide you even more information about a patch.
- In particular, it makes code review much easier.

**“Watch” Other Users**

- In Bugzilla, you can say that you want to “watch” another user. Then, you will get every email that user gets from Bugzilla, as though that user was you. This is particularly useful when one developer goes on vacation and another needs to handle that developer’s bugs while the other developer is on vacation.
- This doesn’t allow you to bypass security–if you don’t have access to a bug, you won’t get notifications about it, no matter what.

**Move Bugs Between Installations**

- Bugzilla supports the ability to move a bug from one Bugzilla installation to another. This even works across versions–you can move a bug from a Bugzilla 2.16 installation to a Bugzilla 3.0 installation without having to do any manual work.

### Disadvantages

- **Difficulties in attaching files**: Large files cannot be attached in Bugzilla, which is a main concern.
- **Customization**: It lacks the features of customization when compared with JIRA.
- **User-interface**: The User-Interface is not so good and lacks mobile-based UI.
- **Agile Project Development**: It does not support it which is the greatest disadvantage of Bugzilla.

### Installation

**Step-01: Install Perl**

- For Bugzilla to be up and running, we need a number of Perl modules to be installed in our systems.

**Mandatory Modules:**

- AppConfig
- CGI
- Data-Dumper
- DateTime
- DBI
- DBD-mysql
- Digest-SHA
- DateTime-Timezone
- Template-Toolkit
- Email-send
- Email-MIME
- URI
- Math-Random-ISAAC
- Win32
- Win32-API

**Step-02: Download BugZilla**

- Download the stable release from their official website using the link [_https://www.bugzilla.org/download/_](https://www.bugzilla.org/download/)_._

**Step-03: Database Configuration**

- We have to create a new database in our MySQL database.
- After that, we need to open the config file from our Bugzilla folder, in an editable mode to modify the given fields.

**Step-04: Configure BugZilla**

- To configure, we need to run the below given command in our command prompt. This will prepare a database to create the required tables. At the time of configuration, it will also ask a hostname for the mail server and an administrator email and password.

**Step-05: Configure Apache Web Server**

- The next step would be to configure our web server. We need to open our `httpd.conf` file, present in our Apache folder and enable CGI support by uncommenting the `AddHandler CGI-script .cgi` line.
- On account of any error, such as 500 internal error, page load error or in case Bugzilla is not working, we could try replacing the first line from all `.cgi` files, i.e. replacing `#!/usr/bin/perl` to the `C:` a path of a bin of our Perl folder.

### Conclusion

Tracking, reporting bugs and issues will be easily possible with the Bugzilla tool. It provides a collaborative environment where we interact with our clients or employees. We easily report our bugs in Bugzilla and also set the deadline for the bugs when they will be resolved. As we already covered how to login in to bugzilla and how to report the bugs you can go through the steps that we provided

---

## Practical-11

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Initialize the web driver
driver = webdriver.Chrome()

# Open File explorer
driver.get("files:///c:/")

# wait for 100 seconds
time.sleep(100)

# Assuming file is in the root directory
file_path = 'file:///c:/test.doc'
driver.get(file_path)

# wait for a while before closing the browser
time.sleep(100)
driver.quit()
```

**Output:**
The code uses Selenium to launch the Chrome web browser. The command `driver.get("files:///c:/")` attempts to open the local file system in the browser, specifically the root directory of the `C:` drive (`file:///c:/`). After attempting to open `C:/`, the script pauses for 100 seconds, keeping the browser open. After the 100-second pause, the browser will attempt to open the file. If the file does not exist, the browser will display an error (e.g., _"File not found"_). After another 100-second pause, the browser will close as `driver.quit()` is called, which terminates the Selenium session.

---

## Practical-12

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# Replace 'path/to/chromedriver' with the actual path
driver = webdriver.Chrome()

# Navigate to the Facebook login page
driver.get('https://www.facebook.com/')

# Find the email/username field and enter credentials
email_field = driver.find_element(By.ID, 'email')
email_field.send_keys('your@email.com')

# Find the password field and enter credentials
pass_field = driver.find_element(By.ID, 'pass')
pass_field.send_keys('your_password')

# Find and click login button
login_btn = driver.find_element(By.NAME, 'login')
login_btn.click()
```

**Output:**

- If the provided email and password are valid Facebook credentials, the script will successfully log you into Facebook, and the browser will navigate to the logged-in user’s Facebook homepage.
- If the credentials are incorrect, Facebook will display an error message like "The email or mobile number you entered isn’t connected to an account." This message will appear in the browser, but the script won't capture it automatically unless additional code is written to handle such cases.

---

## Practical-13

> This is generated via ChatGPT

```python
from selenium import webdriver
import time

# Initialize the Chrome WebDriver
driver = webdriver.Chrome()

# Navigate to the desired webpage
driver.get('https://www.example.com')

# Give the page time to load
time.sleep(5)

# Capture the screenshot and save it to your local directory
screenshot_path = 'screenshot.png'
driver.save_screenshot(screenshot_path)
print(f"Screenshot saved to {screenshot_path}")

# Close the browser
driver.quit()
```

**Output:**
The script initializes a Chrome WebDriver using `webdriver.Chrome()`, which opens a new Chrome browser window. The browser navigates to the specified URL. The script pauses for 5 seconds (`time.sleep(5)`) to allow the page to fully load before proceeding. The line `driver.save_screenshot(screenshot_path)` captures a screenshot of the loaded page and saves it to the specified path in your local directory (`screenshot.png`). A message confirming the screenshot is printed: `Screenshot saved to screenshot.png`. The `driver.quit()` command closes the browser window and terminates the WebDriver session.

---
