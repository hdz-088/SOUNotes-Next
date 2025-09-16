---
header: DWDM-LM
title: DWDM Lab Manual
slug: dwdm-lm
semester: 5
image: /dwdm.jpg
accent: "#1f6ac7"
link:
---

## OUTPUT PDF: [Link](https://drive.google.com/file/d/1lYHRXZYoN1XZkmIg5tSzmRcvsatqF8_e/view?usp=sharing)

## Practical 01

**Aim:** Installation of WEKA Tool.

**Description:** The installation of the WEKA tool ensures that users can perform various machine learning experiments and analyze datasets with a user-friendly graphical interface. It's widely used for data mining, data preprocessing, classification, clustering, regression, and visualization.

**Code:**

```txt

1. Download the WEKA software from the official website: https://www.cs.waikato.ac.nz/ml/weka/

2. Choose the appropriate version for your operating system (Windows/Linux/Mac).

3. Install Java Runtime Environment (JRE) if not already installed,since WEKA is a Java-based application.

4. Run the installer or executable file.

5. Launch WEKA GUI Chooser to start working with the tool.
```

**Output**: Successful installation of WEKA with GUI Chooser window displaying options like Explorer, Experimenter, KnowledgeFlow, and Simple CLI.

### Post Practical Questions:

1. **WEKA stands for -**

   - a) Waikato Environment for Knowledge Analysis

2. **WEKA is mainly used for -**

   - b) Data Mining and Machine Learning

3. **Which programming language is WEKA primarily written in?**
   - b) Java

**Conclusion:** WEKA was successfully installed, enabling the user to perform machine learning tasks such as preprocessing, classification, clustering, and visualization using its GUI-based environment.

---

## Practical 02

**Aim:** Create a new weather ARFF file with appropriate attributes and data types.

**Description:** The ARFF (Attribute-Relation File Format) is a text file format used in WEKA for representing datasets. It contains a description of the dataset's attributes and the actual data instances. This file can then be used for applying classification algorithms like Decision Trees or Naive Bayes in WEKA.

**Steps:**

1.  Launch a plain text editor like Notepad or VS Code.
2.  Create a new file and paste the ARFF code provided below.
3.  Save the file as **`weather.arff`**, making sure to use the `.arff` extension.
4.  To load the dataset, open WEKA and navigate the following path: **Explorer → Preprocess → Open file... → select `weather.arff`**.

```arff
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
```

### Post Practical Questions:

1. **The full form of ARFF is -**

   - a) Attribute Relation File Format

2. **Which symbol is used to define the data section in the ARFF file?**

   - b) @data

3. **The file extension of ARFF file is -**

   - b) `.arff `

4. **Which of the following is a valid nominal attribute declaration?**
   - a) @attribute temperature {hot, mild, cool}

**Conclusion:** A correctly formatted `weather.arff` file has been successfully created, demonstrating the basic ARFF structure and making the dataset ready for analysis in WEKA.

---

## Practical 03

**Aim:** Create an employee ARFF file using the WEKA data mining tool.

**Description:** The ARFF (Attribute-Relation File Format) is used in WEKA to represent datasets in a structured format. In this practice, we'll create an Employee dataset in ARFF format by defining attributes (such as Employee ID, Name, Department, Age, Salary, and Status) with their appropriate data types (nominal or numeric). This dataset can later be used in WEKA for performing classification, clustering, and other data mining tasks.

**Steps:**

1.  Open a plain text editor such as Notepad or VS Code.
2.  Create a new file and paste the ARFF code provided below.
3.  Save the file with the name **`employee.arff`**.
4.  Load the file into WEKA by navigating the path: **Explorer → Preprocess → Open file... → select `employee.arff`**.

```arff
@relation employee

@attribute EmployeeID numeric
@attribute Name string
@attribute Department {HR, Sales, IT, Finance}
@attribute Age numeric
@attribute Salary numeric
@attribute Status {Permanent, Contract}

@data
1, "Amit", HR, 25, 30000, Permanent
2, "Neha", Sales, 28, 35000, Contract
3, "Raj", IT, 30, 45000, Permanent
4, "Simran", Finance, 26, 32000, Contract
5, "Karan", IT, 35, 60000, Permanent
6, "Pooja", HR, 29, 28000, Contract
7, "Arjun", Sales, 31, 40000, Permanent
8, "Meena", Finance, 27, 31000, Contract
9, "Vivek", IT, 40, 75000, Permanent
10, "Riya", HR, 24, 25000, Contract
```

### Post Practical Questions:

1. **Which keyword defines a relation name in an ARFF file?**

   - b) @relation

2. **Which data type is used for storing employee names in ARFF?**

   - b) string

3. **Which of the following is a nominal attribute in the Employee ARFF file?**
   - c) department

**Conclusion:** We successfully created a formatted `employee.arff` file with multiple attributes. The dataset is now loaded in WEKA and is ready for data mining tasks like classification and clustering.

---

## Practical 04

**Aim:** Apply Pre-Processing techniques to the training data set of Weather Table.

**Description:** Real-world databases are highly influenced by noise, missing values, and inconsistency due to their huge size. Data can be pre-processed to improve quality, handle missing values, and enhance efficiency. There are 3 main pre-processing techniques:

1. **Add** – Adding new attributes or instances to enrich the dataset.
2. **Remove** – Removing irrelevant or redundant attributes/instances to clean the data.
3. **Normalization** – Scaling numeric values to a standard range to improve algorithm performance.

**Steps:**

1. Open WEKA → Explorer → Preprocess tab.
2. Load the dataset ( `weather.arff` ).
3. Apply the following pre-processing techniques:
   - **Add attribute** → Insert a new attribute (e.g., “Temperature_Celsius”).
   - **Remove attribute** → Delete unwanted attributes (e.g., remove “Outlook”).
   - **Normalize** → Scale numeric attributes (e.g., Temperature, Humidity) to the range \[0,1].
4. Save the modified dataset if required.
5. Observe the changes in the dataset after applying filters.

**Code:**

```arff
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature numeric
@attribute humidity numeric
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny, 85, 85, FALSE, no
sunny, 80, 90, TRUE, no
overcast, 83, 78, FALSE, yes
rainy, 70, 96, FALSE, yes
rainy, 68, 80, FALSE, yes
rainy, 65, 70, TRUE, no
overcast, 64, 65, TRUE, yes
sunny, 72, 95, FALSE, no
sunny, 69, 70, FALSE, yes
rainy, 75, 80, FALSE, yes
sunny, 75, 70, TRUE, yes
overcast, 72, 90, TRUE, yes
overcast, 81, 75, FALSE, yes
rainy, 71, 91, TRUE, no
```

### Post Practical Questions:

1. **What is the difference between Normalize and Standardize filters in WEKA?**

   - **Ans:** Normalize scales numeric values into a fixed range (usually [0,1]), while Standardize transforms data to have mean 0 and standard deviation 1.

2. **Which filter in WEKA is used to replace missing values?**

   - b) `ReplaceMissingValues`

3. **What is the primary reason for applying data pre-processing?**
   - b) To clean and prepare data for better model performance

**Conclusion:** Pre-processing (Add, Remove, Normalize) was applied to the Weather dataset, improving its quality and making it ready for analysis in WEKA.

---

## Practical 05

**Aim:** Apply Pre-Processing techniques to the training dataset of Employee Table.

**Description:** The Employee dataset created in Practical-03 can be pre-processed to improve data quality, handle missing or inconsistent values, and enhance efficiency. Pre-processing in WEKA includes:

1. **Add** – Adding new attributes or instances.
2. **Remove** – Deleting irrelevant or redundant attributes/instances.
3. **Normalization** – Scaling numeric values to a standard range for better algorithm performance.

**Steps:**

1. Open WEKA → Explorer → Preprocess.
2. Load the `employee.arff`
3. Apply filters one by one:
   - **Add attribute** → Adds a new attribute (e.g., Experience).
   - **Remove attribute** → Removes unwanted attributes (e.g., EmployeeID, Experience).
   - **Normalize** → Scales numeric attributes (Age, Salary, Experience) into the range \[0,1].
4. Save the pre-processed dataset if required.
5. Observe the transformed dataset.

**Code:**

```arff
@relation employee

@attribute EmployeeID numeric
@attribute Name string
@attribute Department {HR, Sales, IT, Finance}
@attribute Age numeric
@attribute Salary numeric
@attribute Status {Permanent, Contract}

@data
1, "Amit", HR, 25, 30000, Permanent
2, "Neha", Sales, 28, 35000, Contract
3, "Raj", IT, 30, 45000, Permanent
4, "Simran", Finance, 26, 32000, Contract
5, "Karan", IT, 35, 60000, Permanent
6, "Pooja", HR, 29, 28000, Contract
7, "Arjun", Sales, 31, 40000, Permanent
8, "Meena", Finance, 27, 31000, Contract
9, "Vivek", IT, 40, 75000, Permanent
10, "Riya", HR, 24, 25000, Contract
```

### Post Practical Questions:

1. **Why is pre-processing important in the Employee dataset?**

   - **Ans:** Pre-processing improves data quality, handles missing or inconsistent values, and prepares the dataset for accurate analysis and model building.

2. **Why is Employee_ID removed during pre-processing?**

   - **Ans:** Employee_ID is a unique identifier and does not contribute to patterns or classification, so it is removed to avoid bias in the model.

3. **Which of the following can be used after pre-processing the employee data?**
   - b) Decision Tree (J48)

**Conclusion:** Pre-processing (Add, Remove, Normalize) was applied to the Employee dataset, improving its quality and making it ready for analysis in WEKA.

---

## Practical 06

**Aim:** Find Association Rules for Buying Data.

**Description:** In data mining, association rule learning is a popular method for discovering interesting relationships between variables in large databases. It involves analyzing and presenting strong rules discovered in datasets using different measures of interestingness such as support, confidence, and lift. Association rules are commonly used in market basket analysis and are also applied in areas like web usage mining, intrusion detection, and bioinformatics.

**Steps:**

1. Prepare the dataset:
   - Open a text editor and paste the ARFF code below.
   - Save the file as `shopping.arff`.
2. Open WEKA → Explorer.
3. Load the dataset (`shopping.arff`).
4. Go to the **Associate** tab.
   - Select `weka.associations.Apriori`.
   - Click **Start**.
5. View the results. WEKA will display frequent itemsets and association rules such as:
   - `milk=t => bread=t   confidence: 1.0  support: 0.6`
   - `butter=t => bread=t confidence: 1.0  support: 0.6`

**Code:**

```arff
@relation shopping

@attribute milk {t, f}
@attribute bread {t, f}
@attribute butter {t, f}
@attribute jam {t, f}

@data
t,t,t,f
f,t,t,f
t,t,f,f
t,t,t,t
f,t,f,t
```

### Post Practical Questions:

1. **Which of the following is an example of an association rule?**

   - B) {Milk, Bread} → {Butter}

2. **What is Association Rule Mining?**

   - **Ans:** Association Rule Mining is a data mining technique used to discover interesting relationships, patterns, or correlations among items in large datasets.

3. **What is the main use of Association Rules?**
   - **Ans:** The main use of Association Rules is in market basket analysis to identify items that are frequently bought together, helping in decision-making like product placement, cross-selling, and promotions.

**Conclusion:** Using WEKA and the Apriori algorithm, we extracted strong association rules from buying data. For example, customers buying milk also tend to buy bread with 100% confidence.

---

## Practical 07

**Aim:** Construct a Decision Tree for Weather data and classify it.

**Description:**
Classification is the process of building a model to describe and predict data values. A Decision Tree is a classification scheme with root, internal, and external nodes, where branches represent attribute values and leaves represent classes. It also generates rules from the dataset, using training data for model building and testing data for evaluation.

**Steps:**

1. Prepare the dataset (**weather.arff**) and save it.
2. Open WEKA → Explorer → Preprocess → Load weather.arff.
3. Go to Classify → Choose → trees → J48 → Start.
4. Right-click the result in Result list → Select **Visualize tree** to see the tree diagram.

**Code:**

```arff
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature {hot, mild, cool}
@attribute humidity {high, normal}
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny,hot,high,FALSE,no
sunny,hot,high,TRUE,no
overcast,hot,high,FALSE,yes
rainy,mild,high,FALSE,yes
rainy,cool,normal,FALSE,yes
rainy,cool,normal,TRUE,no
overcast,cool,normal,TRUE,yes
sunny,mild,high,FALSE,no
sunny,cool,normal,FALSE,yes
rainy,mild,normal,FALSE,yes
sunny,mild,normal,TRUE,yes
overcast,mild,high,TRUE,yes
overcast,hot,normal,FALSE,yes
rainy,mild,high,TRUE,no
```

### Post Practical Questions:

1. **What is a Decision Tree?**

   - **Ans:** A Decision Tree is a classification model that uses a tree-like structure, where internal nodes represent tests on attributes, branches represent outcomes, and leaf nodes represent class labels or decisions.

2. **Which algorithm in WEKA is used to generate a Decision Tree?**
   - B) J48

**Conclusion:** Using the J48 algorithm in WEKA, we built a decision tree for weather data and visualized it in a tree diagram. The model classified instances with high accuracy.

---

## Practical 08

**Aim:** Construct a Decision Tree for Customer data and classify it.

**Description:**
Classification builds predictive models from data. A Decision Tree is widely used, consisting of root, internal, and external nodes, with branches representing attribute values and leaves representing decision classes. It uses training datasets for model construction and testing datasets for evaluation.

**Steps:**

1. Prepare the dataset (**customer.arff**) and save it.
2. Open WEKA → Explorer → Preprocess → Load customer.arff.
3. Go to Classify → Choose → trees → J48 → Start.
4. Right-click the result in Result list → Select **Visualize tree** to see the tree diagram.

**Code:**

```arff
@relation customer

@attribute age {young, middle, senior}
@attribute income {low, medium, high}
@attribute student {yes, no}
@attribute credit_rating {fair, excellent}
@attribute buys_computer {yes, no}

@data
young,high,no,fair,no
young,high,no,excellent,no
middle,high,no,fair,yes
senior,medium,no,fair,yes
senior,low,yes,fair,yes
senior,low,yes,excellent,no
middle,low,yes,excellent,yes
young,medium,no,fair,no
young,low,yes,fair,yes
senior,medium,yes,fair,yes
young,medium,yes,excellent,yes
middle,medium,no,excellent,yes
middle,high,yes,fair,yes
senior,medium,no,excellent,no
```

### Post Practical Questions:

1. **Which algorithm in WEKA is used to construct a Decision Tree?**

   - C) J48

2. **Which WEKA tab is used to build a Decision Tree?**

   - B) Classify

3. **Write one real-life application of Decision Trees.**
   - **Ans:** Decision Trees are used in banking to evaluate whether a loan applicant should be approved or rejected based on attributes like income, credit score, and employment status.

**Conclusion:** Using the J48 algorithm in WEKA, we built and visualized a decision tree for customer data. The model classified customer behavior effectively and identified key attributes for purchase prediction.

---

## Practical 09

**Aim:** Apply filters on the Weather dataset using WEKA.

**Description:** Preprocessing with filters is an important step in data mining that improves data quality and prepares it for classification. In WEKA, filters can be used to handle missing values, discretize numeric attributes, or remove irrelevant attributes. Applying filters ensures the dataset is clean, consistent, and ready for building accurate models like decision trees.

**Steps:**

1. Create and save the dataset as **`weather.arff`** (use the given Weather dataset).
2. Open **Weka GUI Chooser → Explorer**.
3. Load the dataset (**weather.arff**).
4. In the **Preprocess** tab, apply filters one by one:
   - `weka.filters.unsupervised.attribute.ReplaceMissingValues` → handles missing data.
   - `weka.filters.unsupervised.attribute.Discretize` → converts numeric attributes to nominal.
   - `weka.filters.unsupervised.attribute.Remove` → removes unwanted attributes.
     Click **Apply** each time and observe the changes.
5. After preprocessing, go to the **Classify** tab → Choose **trees → J48** → Click **Start** to build the model.

**Code:**

```arff
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature {hot, mild, cool}
@attribute humidity {high, normal}
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny,hot,high,FALSE,no
sunny,hot,high,TRUE,no
overcast,hot,high,FALSE,yes
rainy,mild,high,FALSE,yes
rainy,cool,normal,FALSE,yes
rainy,cool,normal,TRUE,no
overcast,cool,normal,TRUE,yes
sunny,mild,high,FALSE,no
sunny,cool,normal,FALSE,yes
rainy,mild,normal,FALSE,yes
sunny,mild,normal,TRUE,yes
overcast,mild,high,TRUE,yes
overcast,hot,normal,FALSE,yes
rainy,mild,high,TRUE,no
```

### Post Practical Questions:

1. **WEKA does not allow applying more than one filter at a time......**

   - False

2. **WEKA filters are mainly used for.......... and.......... of data.**

   - **Ans:** Cleaning and transformation of data.

3. **Filters in WEKA can be applied under which panel?**

   - a) Preprocess

4. **What is the file format of the Weather dataset used in WEKA?**
   - **Ans:** ARFF (Attribute-Relation File Format)

**Conclusion:** In this practical, we applied filters like `ReplaceMissingValues`, Discretize, and Remove on the Weather dataset in WEKA. These preprocessing steps improved dataset quality, making the data suitable for classification. After applying filters, the J48 decision tree was built successfully, giving more accurate results.

---

## Practical 10

**Aim:** Apply filters on the customer dataset using WEKA.

**Description:** Data preprocessing is an important step in data mining to improve dataset quality, handle missing values, remove irrelevant attributes, and prepare it for classification. In this practical, we will apply filters such as **Remove**, **ReplaceMissingValues**, and **Discretize** on the Customer dataset. After preprocessing, we will classify the data using the **J48 Decision Tree** to observe the impact of filtering on model performance.

**Steps:**

1. Create and save the dataset as **`customer.arff`** using the provided Customer dataset.
2. Open **Weka GUI Chooser → Explorer**.
3. Load the dataset (**customer.arff**).
4. In the **Preprocess** tab, apply filters one by one:
   - `weka.filters.unsupervised.attribute.ReplaceMissingValues` → handles missing entries (if any).
   - `weka.filters.unsupervised.attribute.Discretize` → converts numeric attributes to nominal (if present).
   - `weka.filters.unsupervised.attribute.Remove` → removes the `credit_rating` attribute.
     Click **Apply** after each filter and observe the changes.
5. After preprocessing, go to the **Classify** tab → Choose **trees → J48** → Click **Start** to build the model.

**Code:**

```arff
@relation customer

@attribute age {young, middle, senior}
@attribute income {low, medium, high}
@attribute student {yes, no}
@attribute credit_rating {fair, excellent}
@attribute buys_computer {yes, no}

@data
young,high,no,fair,no
young,high,no,excellent,no
middle,high,no,fair,yes
senior,medium,no,fair,yes
senior,low,yes,fair,yes
senior,low,yes,excellent,no
middle,low,yes,excellent,yes
young,medium,no,fair,no
young,low,yes,fair,yes
senior,medium,yes,fair,yes
young,medium,yes,excellent,yes
middle,medium,no,excellent,yes
middle,high,yes,fair,yes
senior,medium,no,excellent,no
```

### Post Practical Questions:

1. **Which filter is used to normalize numeric attributes in a customer dataset?**

   - b) Normalize

2. **Which of the following is an example of an unsupervised filter?**

   - d) All of these

3. **A filter used for selecting important attributes from the customer dataset is**

   - **Ans:** AttributeSelection

4. **What is the main purpose of applying filters in WEKA?**
   - **Ans:** Filters are applied to clean, transform, or modify the dataset to improve the quality of data and prepare it for better model performance.

**Conclusion:** Pre-processing filters were successfully applied to the Customer dataset, including removal of unnecessary attributes and handling of missing values. The J48 Decision Tree classifier was built on the filtered data, demonstrating improved data quality and readiness for accurate classification.

---

## Practical 11

**Aim:** Implementation of K-means algorithm.

**Description:** K-Means is an unsupervised learning algorithm used to partition datasets into clusters based on similarity. In this practical, we will group customers using their age and income attributes. This helps in understanding customer segmentation and unsupervised learning concepts.

**Steps:**

1. Open WEKA → Explorer and go to **Preprocess** → Load **customer_kmeans.arff**.
2. Run K-Means clustering:
   - Go to **Cluster** tab → Click **Choose → SimpleKMeans**.
   - Configure the number of clusters → Click **Start**.

**Code:**

```arff
@relation customer

@attribute name {x,y,z,u,v,l}
@attribute age {youth,middle,senior}
@attribute income {high,medium,low}
@attribute class {A,B}

@data
x,youth,high,A
y,youth,low,B
z,middle,high,A
u,middle,low,B
v,senior,high,A
l,senior,low,B
```

### Post Practical Questions:

1. **What does the K in K-Means stand for?**

   - b) Number of clusters

2. **Which of the following is commonly used to measure distance in K-Means?**

   - b) Euclidean Distance

3. **The value of K can be automatically determined by the algorithm. True/False**

   - **Ans:** False

4. **What is the main purpose of the K-Means algorithm?**
   - **Ans:** The main purpose of K-Means is to partition the dataset into K clusters such that data points in the same cluster are more similar to each other than to those in other clusters.

**Conclusion:**
The K-Means algorithm successfully grouped the customers into clusters based on age and income. This practical demonstrates unsupervised learning and customer segmentation effectively.

---

## Practical 12

**Aim:** Apply k-Means clustering and visualize the results.

**Description:**
Cluster analysis assigns objects into groups (clusters) so that items in the same cluster are more similar to each other than to those in other clusters. In this practical, we apply **k-Means clustering** on a small customer dataset and visualize the results in WEKA.

**Steps:**

1. Open WEKA → **Explorer**.
2. Go to **Preprocess** tab → Click **Open file** → Load **customer_kmeans_12.arff**.
3. Run K-Means clustering:
   - Go to **Cluster** tab → Click **Choose → SimpleKMeans**.
   - Configure the number of clusters → Click **Start**.
4. Right-click result → Select **Visualize cluster assignments** to see the scatter plot.

**Code:**

```arff
@relation customer

@attribute name {x,y,z,u,v,l}
@attribute age {youth,middle,senior}
@attribute income {high,medium,low}
@attribute class {A,B}

@data
x,youth,high,A
y,youth,low,B
z,middle,high,A
u,middle,low,B
v,senior,high,A
l,senior,low,B
```

### Post Practical Questions:

1. **What type of machine learning does K-Means belong to?**

   - b) Unsupervised Learning

2. **Which type of visualization is best for showing K-Means clusters?**

   - b) Scatter Plot

3. **What is the effect of choosing the wrong K value?**
   - **Ans:** Choosing the wrong K value can lead to poor clustering results — either too many small, fragmented clusters (over-segmentation) or too few large clusters that mix dissimilar data points (under-segmentation).

**Conclusion:**
k-Means clustering was successfully applied to the customer dataset. The algorithm grouped the customers into 2 distinct clusters, and visualization confirmed the natural groupings based on age and income.

---

## Practical 13

**Aim:** Write a procedure for visualization of the weather dataset in WEKA.

**Description:**
Data visualization is a key step in preprocessing to explore attributes and patterns before applying machine learning. In this practical, we load the **weather dataset** in WEKA and visualize attribute distributions and relationships.

**Steps:**

1. Open **WEKA → Explorer**.
2. Go to **Preprocess tab** → Click **Open file** → Load **weather.arff**.
   - Attributes (Outlook, Temperature, Humidity, Windy, Play) will be displayed.
3. Visualize dataset:
   - Click **Visualize** button to see the default scatter plot matrix.
   - Adjust **PointSize** and **Jitter** values to change visualization style.
   - Select different attribute → Click **Update** to see output.
   - Repeat with other attribute, adjust point size/jitter for clearer patterns.

**Code:**

```arff
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature {hot, mild, cool}
@attribute humidity {high, normal}
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny,hot,high,FALSE,no
sunny,hot,high,TRUE,no
overcast,hot,high,FALSE,yes
rainy,mild,high,FALSE,yes
rainy,cool,normal,FALSE,yes
rainy,cool,normal,TRUE,no
overcast,cool,normal,TRUE,yes
sunny,mild,high,FALSE,no
sunny,cool,normal,FALSE,yes
rainy,mild,normal,FALSE,yes
sunny,mild,normal,TRUE,yes
overcast,mild,high,TRUE,yes
overcast,hot,normal,FALSE,yes
rainy,mild,high,TRUE,no
```

### Post Practical Questions:

1. **What is the purpose of visualizing the Weather dataset in WEKA?**

   - **Ans:** To understand patterns, relationships, and distributions of attributes in the dataset for better analysis.

2. **The color of data points in the scatter plot indicates:**

   - b) Class labels

3. **Visualization helps in identifying ......... and ........ in the dataset.**

   - **Ans:** Outliers and patterns

4. **The Visualize panel in WEKA uses only bar charts. True/False**
   - **Ans:** False

**Conclusion:** We successfully visualized the weather dataset in WEKA. Visualization helped identify strong patterns such as the effect of weather conditions on the decision to play. Adjusting point size and jitter improved clarity, making trends easier to observe.

---

## Practical 14

**Aim:** Write a procedure for visualization of the banking dataset in WEKA.

**Description:**
Visualization allows us to explore distributions and relationships in datasets before applying models. In this practical, we load the **banking dataset** in WEKA and visualize attributes like gender, bank name, location, and deposit behavior.

**Steps:**

1. Launch **WEKA GUI Chooser** → Click **Explorer**.
2. Go to **Preprocess tab** → Click **Open file** → Load **banking.arff**.
   - Attributes (cust, accno, bankname, location, deposit) will be displayed.
3. Visualize dataset:
   - Click **Visualize** button to see the default scatter plot matrix.
   - Adjust **PointSize** and **Jitter** values to change visualization style.
   - Select different attribute → Click **Update** to see output.
   - Repeat with other attribute, adjust point size/jitter for clearer patterns.

**Code:**

```arff
@relation bank

@attribute cust {male, female}
@attribute accno {0101, 0102, 0103, 0104, 0105, 0106, 0107, 0108, 0109}
@attribute bankname {sbi, hdfc, sbh, abi}
@attribute location {hyd, jmd, antr, pdt2, kdp}
@attribute deposit {yes, no}

@data
male,0101,sbi,hyd,yes
female,0102,hdfc,jmd,no
male,0103,sbh,antr,yes
female,0104,abi,pdt2,no
male,0105,abi,kdp,yes
female,0106,sbi,hyd,no
male,0107,hdfc,jmd,yes
female,0108,sbh,antr,no
male,0109,abi,pdt2,yes

```

### Post Practical Questions:

1. **Why is visualization important in data preprocessing?**

   - **Ans:** Visualization helps detect errors, missing values, outliers, and relationships between attributes, making data cleaning and transformation more effective.

2. **The Weather dataset is usually saved in ........... format in WEKA.**

   - **Ans:** ARFF format

3. **To inspect a specific plot in WEKA, ......... on it.**
   - **Ans:** Double-click on it

**Conclusion:** We successfully visualized the banking dataset in WEKA. The visualizations helped analyze deposit behavior across banks, genders, and locations. Adjusting jitter and point size improved readability of plots, making patterns and anomalies easier to identify.

---
