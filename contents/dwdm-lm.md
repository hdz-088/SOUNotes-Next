---
header: DWDM-LM
title: DWDM Lab Manual
slug: dwdm-lm
semester: 5
image: /dwdm.jpg
accent: "#1f6ac7"
link:
---

> We’d like to inform you that the study material on our website will be updated as soon as we receive the latest content. Our team is continuously working to bring the best and most reliable resources for students.
>
> Thank you for your patience and support — stay tuned for regular updates!

## Practical 01

**Aim:** Installation of WEKA Tool.

**Description:**  
The installation of the WEKA tool ensures that users can perform various machine learning experiments and analyze datasets with a user-friendly graphical interface. It's widely used for data mining, data preprocessing, classification, clustering, regression, and visualization.

**Code:**

**Steps to install WEKA:**

1. Download the WEKA software from the official website: https://www.cs.waikato.ac.nz/ml/weka/
2. Choose the appropriate version for your operating system (Windows/Linux/Mac).
3. Install Java Runtime Environment (JRE) if not already installed, since WEKA is a Java-based application.
4. Run the installer or executable file.
5. Launch WEKA GUI Chooser to start working with the tool.

**Output**: Successful installation of WEKA with GUI Chooser window displaying options like Explorer, Experimenter, KnowledgeFlow, and Simple CLI.

**Conclusion:** WEKA was successfully installed, enabling the user to perform machine learning tasks such as preprocessing, classification, clustering, and visualization using its GUI-based environment.

---

## Practical 02

**Aim:** Create a new weather ARFF file with appropriate attributes and data types.

**Description:**
The ARFF (Attribute-Relation File Format) is a text file format used in WEKA for representing datasets. It contains a description of the dataset's attributes (name, type, possible values) and the actual data instances. The ARFF file will later be used for applying classification algorithms (e.g., Decision Tree, Naive Bayes) in WEKA. In this practice, we'll create a Weather dataset in ARFF format with proper attributes such as Outlook, Temperature, Humidity, Windy, and Play, along with their respective data types.

**Code:**

```json
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature {hot, mild, cool}
@attribute humidity {high, normal}
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny, hot, high, FALSE, no
sunny, hot, high, TRUE, no
overcast, hot, high, FALSE, yes
rainy, mild, high, FALSE, yes
rainy, cool, normal, FALSE, yes
rainy, cool, normal, TRUE, no
overcast, cool, normal, TRUE, yes
sunny, mild, high, FALSE, no
sunny, cool, normal, FALSE, yes
rainy, mild, normal, FALSE, yes
sunny, mild, normal, TRUE, yes
overcast, mild, high, TRUE, yes
overcast, hot, normal, FALSE, yes
rainy, mild, high, TRUE, no
sunny, cool, high, TRUE, no
```

**Output**:

**Conclusion:** A weather dataset ARFF file was successfully created with proper attributes and data types, making it ready for classification tasks in WEKA.

---

## Practical 03

**Aim:** Create an employee ARFF file using the WEKA data mining tool.

**Description:**
The ARFF (Attribute-Relation File Format) is used in WEKA to represent datasets in a structured format. In this practice, we'll create an Employee dataset in ARFF format by defining attributes (such as Employee ID, Name, Department, Age, Salary, and Status) with their appropriate data types (nominal or numeric). This dataset can later be used in WEKA for performing classification, clustering, and other data mining tasks.

**Code:**

```json
@relation employee

@attribute emp_id numeric
@attribute name string
@attribute department {HR, IT, Sales, Marketing, Finance}
@attribute age numeric
@attribute salary numeric
@attribute status {Active, Inactive}

@data
101, John, IT, 28, 50000, Active
102, Alice, HR, 32, 45000, Active
103, Bob, Sales, 29, 40000, Active
104, Carol, Marketing, 35, 48000, Inactive
105, David, Finance, 40, 60000, Active
106, Eva, IT, 26, 42000, Active
107, Frank, HR, 31, 47000, Inactive
108, Grace, Sales, 27, 39000, Active
109, Henry, Marketing, 38, 52000, Active
110, Irene, Finance, 33, 58000, Active
111, Jack, IT, 30, 51000, Active
112, Kate, HR, 29, 44000, Active
113, Leo, Sales, 34, 43000, Inactive
114, Mia, Marketing, 36, 50000, Active
115, Nick, Finance, 41, 62000, Active
```

**Output**:

**Conclusion:** An employee dataset ARFF file was successfully created with proper attributes and data types, making it ready for classification and other data mining tasks in WEKA.

---

## Practical 04

**Aim:** Apply Pre-Processing techniques to the training data set of Weather Table.

**Description:**  
Real-world databases are highly influenced by noise, missing, and inconsistency due to their huge size. Data can be pre-processed to improve the quality, handle missing values, and enhance efficiency. There are 3 main pre-processing techniques:

1. **Add** – Adding new attributes or instances to enrich the dataset.
2. **Remove** – Removing irrelevant or redundant attributes/instances to clean the data.
3. **Normalization** – Scaling numeric values to a standard range to improve algorithm performance.

**Code:**

**Steps to pre-process the Practical-02 Weather dataset in WEKA**:

1. Open weather.arff (Practical-02 dataset) in WEKA Explorer.
2. Go to the Preprocess tab.
   - To Add attribute:
     - Click "Edit" → "Add new attribute" → Define name and type.
   - To Remove attribute:
     - Select unwanted attribute → Click "Remove".
   - To Normalize numeric attributes:
     - Click "Choose" → Filters → unsupervised → attribute → Normalize
     - Apply filter to scale numeric values (if any numeric attributes exist).

**Output**: Pre-processing operations (Add, Remove, Normalize) were successfully applied to the Practical-02 Weather dataset, with improved data quality and prepared attributes for analysis in WEKA.

**Conclusion:** Pre-processing techniques were successfully applied to the Weather dataset, improving data quality and preparing it for efficient analysis in WEKA.

---

## Practical 05

**Aim:** Apply Pre-Processing techniques to the training dataset of Employee Table.

**Description:**
The Employee dataset created in Practical-03 can be pre-processed to improve data quality, handle missing or inconsistent values, and enhance efficiency. Pre-processing in WEKA includes:

1. **Add** – Adding new attributes or instances.
2. **Remove** – Deleting irrelevant or redundant attributes/instances.
3. **Normalization** – Scaling numeric values to a standard range for better algorithm performance.

**Code:**

**Steps to pre-process the Employee dataset in WEKA**:

1. Open employee.arff in WEKA Explorer.
2. Go to the Preprocess tab.

- To Add attribute:
  - Click "Edit" → "Add new attribute" → Define name and type.
- To Remove attribute:
  - Select unwanted attribute → Click "Remove".
- To Normalize numeric attributes (e.g., Age, Salary):
  - Click "Choose" → Filters → unsupervised → attribute → Normalize
  - Apply filter to scale numeric values between 0 and 1.

**Output**: Pre-processing operations (Add, Remove, Normalize) were successfully applied to the Practical-03 Employee dataset, improving data quality and preparing the dataset for further analysis in WEKA.

**Conclusion:** Pre-processing techniques were successfully applied to the Practical-03 Employee dataset, improving its quality and making it ready for further analysis in WEKA.

---

## Practical 06

**Aim:** Find Association Rules for Buying Data.

**Description:**  
In data mining, association rule learning is a popular method for discovering interesting relationships between variables in large databases. It involves analyzing and presenting strong rules discovered in datasets using different measures of interestingness such as support, confidence, and lift. Association rules are commonly used in market basket analysis and are also applied in areas like web usage mining, intrusion detection, and bioinformatics.

**Code:**

```json
@relation buying

@attribute item1 {Bread, Milk, Butter, Cheese, Eggs}
@attribute item2 {Bread, Milk, Butter, Cheese, Eggs}
@attribute item3 {Bread, Milk, Butter, Cheese, Eggs}
@attribute item4 {Bread, Milk, Butter, Cheese, Eggs}
@attribute item5 {Bread, Milk, Butter, Cheese, Eggs}

@data
Bread, Milk, Butter, Cheese, Eggs
Milk, Bread, Eggs, Butter, Cheese
Bread, Cheese, Milk, Eggs, Butter
Butter, Bread, Milk, Cheese, Eggs
Eggs, Butter, Bread, Milk, Cheese
Milk, Eggs, Butter, Bread, Cheese
Bread, Milk, Cheese, Butter, Eggs
Cheese, Eggs, Milk, Bread, Butter
Butter, Milk, Bread, Cheese, Eggs
Bread, Butter, Eggs, Milk, Cheese
Milk, Bread, Cheese, Butter, Eggs
Eggs, Milk, Bread, Butter, Cheese
Cheese, Bread, Milk, Eggs, Butter
Bread, Milk, Butter, Eggs, Cheese
Butter, Cheese, Milk, Bread, Eggs
```

Steps to find association rules using the Buying dataset in WEKA:

1. Open WEKA Explorer.
2. Go to the "Associate" tab.
3. Click "Open file…" and select buying.arff.
4. Choose the algorithm "Apriori".
5. Configure the following parameters:
   - lowerBoundMinSupport = 0.1
   - minMetric = 0.9
   - numRules = 10
6. Click "Start" to generate association rules.
7. Review the generated rules along with their support, confidence, and lift values.

**Output**:

**Conclusion:** Association rules were successfully generated from the Buying dataset, highlighting strong relationships between items and providing insights for decision-making.

---
