---
header: DVBI-02
title: DVBI-02 Digital Marketing Tools & Techniques
slug: dvbi-02
semester: 6
image: /dvbi.jpg
accent: "#ea9500"
link:
---

## Data Cleaning Using Power BI Query Editor

- Power BI Query Editor (Power Query) is used to import, clean, transform, and prepare data before analysis.

### 1. Importing Data

Power BI supports multiple data sources:

- Excel files
- CSV / Text files
- Databases (SQL Server, Oracle, MySQL)
- Web sources
- SharePoint
- Cloud services (Azure, Google Analytics)

**Steps to Import Data:**

1. Open Power BI Desktop
2. Click Get Data
3. Select the data source
4. Load or Transform Data to open Query Editor

### 2. Cleaning Data

Data cleaning ensures accuracy and consistency.

**Common cleaning tasks:**

- Removing unnecessary rows and columns
- Correcting data types (Text, Number, Date)
- Renaming columns for clarity
- Removing blank rows
- Formatting values (uppercase/lowercase)

### 3. Shaping and Transforming Data

Shaping means modifying the structure of data.

**Key transformation options:**

- Split columns (by delimiter, position)
- Merge columns
- Pivot and Unpivot columns
- Filter rows
- Sort data
- Group data (Group By)
- Replace values

These transformations are stored as applied steps and can be modified anytime.

## Handling Data Issues in Power BI

### 1. Handling Missing Values

- Missing values can affect analysis.

**Techniques:**

- Replace null values with: Zero, Average, Custom value
- Remove rows with null values
- Fill values (Fill Up / Fill Down).

### 2. Handling Duplicate Data

- Duplicate records lead to incorrect results.

**Methods:**

- Select column(s)
- Click Remove Duplicates
- Identify duplicates using grouping and count

### 3. Handling Outliers

- Outliers are abnormal values that deviate from data trends.

**Approaches:**

- Identify outliers using filters
- Remove extreme values
- Replace outliers with average or median
- Analyze outliers separately for business insights

## Skills You Will Learn in Power BI Query Editor

- Data transformation techniques
- Data cleansing best practices
- Use of Power Query interface
- Writing and understanding basic M language
- Automation of data preparation steps
- Error handling in datasets

## Data Modeling in Power BI

- Data modeling defines how tables relate to each other.

### 1. Importance of Data Modeling

- Improves performance
- Enables accurate calculations
- Simplifies report design
- Supports complex analysis

### 2. Managing Data Relationships

- Relationships define how tables connect.

**Types of relationships:**

- One-to-One (1 : 1)
- One-to-Many (1 : \* )
- Many-to-Many (:)

**Relationship properties:**

- Cardinality
- Cross-filter direction
- Active vs. inactive relationships

## Star Schema vs. Snowflake Schema in Power BI

### Star Schema

**Structure:**

- One central Fact table
- Multiple surrounding Dimension tables

**Advantages:**

- Simple design
- Faster performance
- Easy to understand
- Recommended for Power BI

**Example:**

- Fact_Sales
- Dim_Product
- Dim_Customer
- Dim_Date

### Snowflake Schema

**Structure:**

- Fact table
- Dimensions split into sub-dimension tables

**Advantages:**

- Reduced data redundancy
- Better normalization

**Disadvantages:**

- Complex design
- Slower performance
- Not preferred in Power BI

**Comparison: Star vs Snowflake Schema**

| Feature                  | Star Schema | Snowflake Schema |
| ------------------------ | ----------- | ---------------- |
| Complexity               | Simple      | Complex          |
| Performance              | High        | Lower            |
| Number of Joins          | Fewer       | More             |
| Recommended for Power BI | Yes         | No               |

## Loading Data in Power BI Desktop

**After cleaning and modeling:**

- Click Close & Apply
- Data is loaded into the Power BI model
- Data becomes available for visualization and DAX calculations

## Views in Power BI Desktop

- Power BI Desktop has three main views:

### Report View

- Create visualizations
- Design dashboards
- Use charts, tables, slicers

### Data View

- View data in tabular form
- Create calculated columns and measures
- Verify cleaned data

### Model View

- Manage relationships
- View schema (Star/Snowflake)
- Edit relationships and properties
