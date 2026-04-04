---
header: DVBI-LM
title: DVBI Lab Manual
slug: dvbi-lm
semester: 6
image: /dvbi.jpg
accent: "#ea9500"
link:
---

## Output PDF: [Link](https://drive.google.com/file/d/1gARu8QsnvwBVcD1LiwaQMUBmenqpLA8F/view?usp=sharing)

## Practical 01

**Aim:** Import data from CSV/Excel into Microsoft Power BI and perform data cleaning (remove duplicates, handle missing values).

**Steps:**

Step 1: Open Power BI

- Open Microsoft Power BI Desktop and click on the Home tab.

Step 2: Import CSV File

- Click Get Data → Select Text/CSV → Browse and select the CSV file → Click Open.
- Preview the dataset and click Transform Data.

Step 3: Import Excel File

- Click Get Data → Select Excel → Browse and select the Excel file → Click Open.
- In Navigator, select the required sheet/table → Click Transform Data.

Step 4: Remove Duplicates

- In Power Query Editor, select the required column(s) → Home tab → Remove Rows → Remove Duplicates.

Step 5: Handle Missing Values

- To remove: Select column → Filter dropdown → Uncheck (null) or Home → Remove Rows → Remove Blank Rows.
- To replace: Select column → Right-click → Replace Values → Replace null with 0 or "Not Available" → Click OK.

Step 6: Change Data Types

- Click the data type icon next to the column name → Select appropriate data type (Whole Number, Decimal, Text, Date).

Step 7: Rename Columns

- Double-click the column name → Enter meaningful name → Press Enter.

Step 8: Apply Changes

- Click Close & Apply to load the cleaned data into report view.

**MCQs**

1. B
2. C
3. C
4. C

**Conclusion**

- Data was successfully imported and cleaned by removing duplicates and handling missing values, making it ready for analysis and visualization.

---

## Practical 02

**Aim:** Split columns, merge queries, and create relationships between multiple tables.

**Steps:**

Step 1: Open Power BI

- Open Microsoft Power BI Desktop → Click Home tab → Load the required dataset using Get Data.

Step 2: Split Columns

- Click Transform Data to open Power Query Editor.
- Select the column to split → Click Split Column (from Home or Transform tab).
- Choose By Delimiter (comma, space, dash, etc.) or By Number of Characters.
- Select the appropriate option → Click OK.

Step 3: Merge Queries

- In Power Query Editor, go to Home tab → Click Merge Queries.
- Select the primary table and the related table.
- Select the common column in both tables.
- Choose the Join Kind (Inner, Left Outer, Right Outer, etc.).
- Click OK → Expand the merged column to select required fields.

Step 4: Load Data

- Click Close & Apply to load the transformed data into Power BI.

Step 5: Create Relationships

- Go to Model View.
- Drag the common field from one table to the related field in another table.
- Set the relationship type (One-to-Many or Many-to-One).
- Set Cross filter direction if required → Click OK.

Step 6: Verify Relationship

- Ensure the relationship line appears between tables in Model View.
- Use fields from both tables in a visual to confirm proper data interaction.

**MCQs**

1. B
2. A
3. D

**Conclusion**

- Columns were successfully split, queries were merged, and relationships were created between multiple tables to enable proper data modeling and analysis.

---

## Practical 03

**Aim:** Create measures for sales analysis (Total Sales, Profit, Average Order Value).

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop.
- Click Get Data → Select Excel → Choose Sales_Data → Click Open.
- Select the required sheet → Click Load.

Step 2: Create Total Sales Measure

- Go to Modeling tab → Click New Measure.
- Enter the formula:
  - Total Sales = SUM(Sales_Data[Total_Sales])
- Press Enter.

Step 3: Create Profit Measure

- Click Modeling → New Measure.
- Enter the formula:
  - Profit = SUM(Sales_Data[Total_Sales]) - SUM(Sales_Data[Total_Cost])
- Press Enter.

Step 4: Create Average Order Value Measure

- Click Modeling → New Measure.
- Enter the formula:
  - Average Order Value = DIVIDE([Total Sales], DISTINCTCOUNT(Sales_Data[Order_Number]))
- Press Enter.

Step 5: Format Measures

- Select each measure → Go to Measure Tools → Set format to Currency or Decimal Number.

Step 6: Use Measures in Visuals

- Insert Card or Table visual in Report View.
- Drag Total Sales, Profit, and Average Order Value into the visual.
- Analyze the sales performance.

**MCQs**

1. C
2. C
3. C

**Conclusion**

- Sales analysis measures were successfully created using Sales_Data, enabling evaluation of total revenue, profit, and average order value.

---

## Practical 04

**Aim:** Build visuals : Bar Chart, Line Chart, and Pie Chart for sales trends.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop.
- Click Get Data → Select Excel → Choose Sales_Data → Click Open.
- Select the required sheet → Click Load.

Step 2: Create Bar Chart (Total Sales by Category)

- Go to Report View.
- Select Clustered Bar Chart from the Visualizations pane.
- Drag Category field to Axis.
- Drag Total_Sales field to Values.
- Rename the title to "Total Sales by Category".

Step 3: Create Line Chart (Sales Trend Over Time)

- Select Line Chart from the Visualizations pane.
- Drag Order_Date field to X-Axis.
- Drag Total_Sales field to Values.
- Use Date hierarchy and select Year and Month for better trend analysis.
- Rename the title to "Monthly Sales Trend".

Step 4: Create Pie Chart (Sales Distribution by Brand)

- Select Pie Chart from the Visualizations pane.
- Drag Brand field to Legend.
- Drag Total_Sales field to Values.
- Turn on Data Labels to display percentage contribution.
- Rename the title to "Sales Distribution by Brand".

Step 5: Format and Arrange Visuals

- Use the Format pane to adjust titles, colors, and data labels.
- Resize and align all visuals neatly on the report page.

**MCQs**

1. C
2. C
3. B

**Conclusion**

- Bar chart, line chart, and pie chart were successfully created using Sales_Data to analyze category-wise sales, monthly trends, and brand-wise sales distribution.

---

## Practical 05

**Aim:** Create a Map visualization for regional sales distribution.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop.
- Click Get Data → Select Excel → Choose Sales_Data → Click Open.
- Select the required sheet → Click Load.

Step 2: Check Location Data

- Ensure the dataset contains a geographic field such as Region, State, or City.
- Go to Data View → Select the Region/State column.
- In Column Tools → Set Data Category to State, City, or Country (as applicable).

Step 3: Create Map Visualization

- Go to Report View.
- Select Map visual from the Visualizations pane.
- Drag Region/State field to Location.
- Drag Total_Sales field to Size (or Bubble Size).
- Drag Total_Sales to Tooltips (optional for better details).

Step 4: Format the Map

- Go to Format pane (paint roller icon).
- Turn on Title → Rename it to "Regional Sales Distribution".
- Adjust bubble size, zoom level, and map style if required.

Step 5: Analyze the Map

- Larger bubbles represent higher sales.
- Hover over regions to see detailed sales values.

**MCQs**

1. C
2. C
3. B

**Conclusion**

- A Map visualization was successfully created to display regional sales distribution, helping identify high and low performing regions geographically.

---

## Practical 06

**Aim:** Add slicers and filters to enhance interactivity.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet and click Load.

Step 2: Create a Stacked Bar Chart

- In Report View, select Stacked Bar Chart from the Visualizations pane.
- Drag Category to Axis and Total_Sales to Values to display category-wise sales.

Step 3: Insert a Slicer

- Select the Slicer visual from the Visualizations pane.
- Drag the State field into the slicer.

Step 4: Apply Slicer Filtering

- Select any State in the slicer.
- The Stacked Bar Chart will update automatically to show category-wise sales for the selected state.

Step 5: Apply Top N Filter to the Slicer

- Select the Slicer visual and open the Filters pane.
- Under Filters on this visual, change the filter type of State to Top N.
- Enter 15 in Show items and drag Total_Sales into By value.
- Click Apply filter.

Step 6: Format the Visuals

- Open the Format pane of the slicer → Go to Selection Controls.
- Set Multi-select with CTRL → Off and turn "Select All" option → On.
- Rename the chart title to Total Sales by Category.

Step 7: Test Interactivity

- Select different states from the slicer and observe how the Stacked Bar Chart dynamically updates.

**MCQs**

1. C
2. B
3. C

**Conclusion**

- Slicers and Top N filters were successfully used to create an interactive report that allows users to analyze category-wise sales for the top performing states.

---

## Practical 07

**Aim:** Design a dashboard combining multiple visuals (charts, maps)

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet and click Load.

Step 2: Create a Clustered Column Chart

- In Report View, select Clustered Column Chart from the Visualizations pane.
- Drag Category to Axis and Total_Sales to Values to display category-wise sales.

Step 3: Create a Pie Chart

- Select Pie Chart from the Visualizations pane.
- Drag Order_Date (Quarter) to Legend.
- Drag Total_Sales to Values to display quarterly sales distribution.

Step 4: Create a Map Visualization

- Select the Map visual from the Visualizations pane.
- Drag State_Code to Location.
- Drag Total_Sales to Bubble Size to display regional sales distribution.

Step 5: Arrange the Dashboard

- Resize and arrange the Column Chart, Pie Chart, and Map neatly on the report page.

Step 6: Format the Visuals

- Turn on Titles, Data Labels, and adjust colors if required for better readability.

Step 7: Analyze the Dashboard

- Observe how the visuals display category-wise sales, quarterly distribution, and regional sales performance.

**MCQs**

1. B
2. C
3. A

**Conclusion**

- A dashboard was successfully created using multiple visuals such as a clustered column chart, pie chart, and map to analyze sales data effectively.

---

## Practical 08

**Aim:** Use DAX to create calculated columns (e.g., Customer Segmentation: High/Medium/Low value).

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet and click Load.

Step 2: Create a Calculated Column using DAX

- Go to the Modeling tab and click New Column.
- In the formula bar, enter a DAX expression to classify customers based on Total_Sales values.

Step 3: Enter the DAX Formula

- Type the following formula and press Enter to create the segmentation column.

```spreadsheet
Customer_Segment =
IF(Sales_Data[Total_Sales] >= 10000, "High Value",
IF(Sales_Data[Total_Sales] >= 5000, "Medium Value",
"Low Value"))
```

Step 4: Verify the Calculated Column

- Switch to table View and check the new column Customer_Segment.
- Ensure each row is categorized as High Value, Medium Value, or Low Value based on sales.

Step 5: Create a Visualization for Customer Segmentation

- Go to Report View and select Clustered Column Chart from the Visualizations pane.
- Drag Customer_Segment to Axis and Total_Sales to Values to display sales contribution of each segment.

Step 6: Format and Analyze the Visual

- Turn on the chart title and rename it Customer Segmentation by Sales.
- Adjust labels or colors if needed and observe how sales are distributed among High, Medium, and Low value customers.

**MCQs**

1. B
2. B
3. C

**Conclusion**

- A calculated column was created using DAX to segment customers into High, Medium, and Low value groups, enabling better analysis through visualization.

---

## Practical 09

**Aim:** Implement Time Intelligence DAX functions (YoY growth, MTD, QTD).

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet and click Load.

Step 2: Create a Total Sales Measure

- Go to the Modeling tab and click New Measure.
- In the formula bar, create a measure to calculate total sales using the Total_Sales column.

```spreadsheet
Total Sales = SUM(Sales_Data[Total_Sales])
```

Step 3: Create MTD, QTD, and YTD Measures

- In the Modeling tab, create three new measures to calculate sales performance for different time periods using Order_Date.

```spreadsheet
Sales MTD = TOTALMTD([Total Sales], Sales_Data[Order_Date])
Sales QTD = TOTALQTD([Total Sales], Sales_Data[Order_Date])
Sales YTD = TOTALYTD([Total Sales], Sales_Data[Order_Date])
```

Step 4: Prepare the Date Hierarchy

- Go to Report View and ensure the Order_Date field is available with its date hierarchy.
- Use the Year level from the Order_Date hierarchy for time-based analysis.

Step 5: Create a Visualization for Time Analysis

- Insert a Stacked Bar Chart from the Visualizations pane.
- Drag Order_Date (Year) to the Y-axis and add Sales MTD, Sales QTD, and Sales YTD to the Values field.

Step 6: Format and Analyze the Chart

- Turn on data labels and rename the chart title to Time Intelligence Sales Analysis (MTD, QTD, YTD).
- Observe how MTD, QTD, and YTD values compare across different years.

**MCQs**

1. B
2. A
3. B

**Conclusion**

- Time intelligence functions were implemented using DAX to calculate MTD, QTD, and YTD sales, enabling comparison of sales performance across years.

---

## Practical 10

**Aim:** Apply conditional formatting, themes, and company branding in dashboards.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet and click Load.

Step 2: Create Cards

- In Report View, select the Card visual from the Visualizations pane.
- Drag Total_Sales to the card to display Total Sales.
- Create additional cards for Profit and Average Order Value to display key performance indicators.

Step 3: Add a Slicer for Filtering

- Select the Slicer visual from the Visualizations pane.
- Drag the State field into the slicer so users can filter the dashboard by state.

Step 4: Create Visual Charts

- Insert a Stacked Bar Chart to show Time Intelligence Sales Analysis (MTD, QTD, YTD) by Year.
- Insert a Pie Chart and drag Year to Legend and Total_Sales to Values to display yearly sales distribution.

Step 5: Create a Table with Conditional Formatting

- Insert a Table visual and add Category and Total_Sales fields.
- Open the Format pane → Specific column → select Total_Sales → click the fx button next to Background color.
- Choose Color scale so higher sales values appear darker.

Step 6: Apply Theme and Branding

- Go to the View tab and select a theme to apply consistent colors.
- Insert a company logo using Insert → Image and add a Text box with the title "Sales Performance Dashboard".

Step 7: Arrange and Finalize the Dashboard

- Align cards, slicer, charts, and table neatly on the report page.
- Ensure the theme, branding, and conditional formatting make the dashboard clear and visually appealing.

**MCQs**

1. C
2. B
3. C

**Conclusion**

- Conditional formatting, themes, and company branding were successfully applied to create an interactive and visually appealing Power BI dashboard.

---

## Practical 11

**Aim:** Connect Power BI to SQL Database and merge with Excel/CSV data.

**Steps:**

Step 1: Open Power BI

- Open Microsoft Power BI Desktop → Click Home tab.

Step 2: Connect to SQL Database

- Click Get Data → Select SQL Server.
- Enter Server name and Database name.
- Select Import mode → Click OK.
- Choose the required table → Click Transform Data.

Step 3: Load Excel/CSV Data

- Click Get Data → Select Excel or Text/CSV.
- Browse and select Sales_Data.xlsx (or CSV file) → Click Open.
- Select the required sheet/table → Click Transform Data.

Step 4: Open Power Query Editor

- Ensure both SQL table and Excel/CSV data are visible in Power Query Editor.

Step 5: Merge Data

- Click Home tab → Click Merge Queries.
- Select Excel/CSV table as primary table.
- Select SQL table as secondary table.
- Select common column (e.g., Category or Product_ID) in both tables.
- Select Join Kind as Inner → Click OK.

Step 6: Expand Merged Data

- Click the expand icon in the merged column.
- Select required fields from SQL table → Click OK.

Step 7: Apply Changes

- Click Close & Apply to load merged data into Power BI.

Step 8: Verify Data

- Go to Data View or Report View.
- Check that merged columns appear correctly.

**Output**

- Data from Excel/CSV and secondary dataset was successfully loaded into Power BI.
- Merge Queries operation was performed using a common column (Category).
- Data from both sources was combined into a single unified table.
- Merged columns were expanded and verified in Power Query Editor.
- Final dataset was successfully displayed in Report View for analysis.

**MCQs**

1. C
2. C
3. B

**Conclusion**

- Power BI was successfully connected to a SQL database, and data was merged with Excel/CSV data to create a unified dataset for analysis.

---

## Practical 12

**Aim:** Apply Grouping and Binning in Power BI to categorize products and segment customers by sales ranges.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet → Click Load.

Step 2: Create Product Grouping

- Go to Report View.
- In the Fields pane, right-click on Category → Click New Group.
- In the Groups window, select CPU, Graphic Card, and MotherBoard → Click Group → Rename to Core Components.
- Select Keyboard, Mouse, and Monitor → Click Group → Rename to Peripherals.
- Select HDD, Cabinet, and Computer Case → Click Group → Rename to Storage/Accessories.
- Click OK.

Step 3: Verify Product Groups

- Drag the newly created grouped field into a Table visual.
- Check that products are correctly categorized.

Step 4: Create Bins for Sales Segmentation

- In the Fields pane, right-click on Total_Sales → Click New Group.
- Select Bin → Set bin size to 5000 → Click OK.

Step 5: Verify Bins

- Drag Total_Sales (bins) into a Table visual.
- Confirm that sales values are divided into ranges.

Step 6: Create Visualization

- Insert a Clustered Column Chart in Report View.
- Drag Total_Sales (bins) to Axis.
- Drag Total_Sales to Values.
- Drag Category (Groups) to Legend.

Step 7: Format and Analyze

- Rename the chart title to "Sales Segmentation using Bins and Groups".
- Turn on Data Labels.
- Analyze the distribution of sales across bins and product groups.

**MCQs**

1. C
2. C
3. C

**Conclusion**

- Grouping and binning were successfully applied to categorize products and segment customers based on sales ranges, enabling better analysis and insights.

---

## Practical 13

**Aim:** Create calculated tables and apply advanced DAX filtering techniques for analytical insights.

**Steps:**

Step 1: Load Dataset

- Open Microsoft Power BI Desktop → Click Get Data → Excel → Select Sales_Data.xlsx → Choose the required sheet → Click Load.

Step 2: Create a Calculated Table (Data Model)

- Go to Modeling tab → Click New Table.
- Enter the DAX formula:

```spreadsheet
Sales_Analysis =
ADDCOLUMNS(
    Sales_Data,
    "Sales Category",
    IF(Sales_Data[Total_Sales] > 10000, "High Sales", "Low Sales")
)
```

- Press Enter.

Step 3: Verify Table in Data View

- Go to Data View.
- Select Sales_Analysis table.
- Confirm new column "Sales Category" is created.

Step 4: Apply Advanced Filtering using DAX

- Go to Modeling → Click New Measure.
- Enter the formula:

```spreadsheet
High Sales Total =
CALCULATE(
    SUM(Sales_Analysis[Total_Sales]),
    Sales_Analysis[Sales Category] = "High Sales"
)
```

- Press Enter.

Step 5: Create Visualization

- Go to Report View.
- Insert a Clustered Bar Chart.
- Drag Category to Y-axis.
- Drag Total_Sales to X-axis.
- Drag Sales Category to Legend.

Step 6: Add Filter-Based Insight

- Insert a Card visual.
- Drag High Sales Total measure to display filtered sales.

Step 7: Format and Analyze

- Rename chart title to "Sales Analysis using DAX Filtering".
- Turn on Data Labels.
- Observe differences between High Sales and Low Sales categories.
- Analyze which categories contribute most to high sales.

**MCQs**

1. C
2. B
3. B

**Conclusion**

- A calculated table was created in the data model and advanced DAX filtering was applied to generate meaningful analytical insights, visualized using a clustered bar chart.

---

## Practical 14

**Aim:** Publish Power BI reports to Power BI Service and configure an interactive report for data analysis.

**Steps:**

Step 1: Save the Report

- Open Microsoft Power BI Desktop → Click File → Save As → Save the report with an appropriate name.

Step 2: Sign in to Power BI

- Click Sign In (top right corner) → Enter your Microsoft account credentials → Sign in.

Step 3: Publish the Report

- Click Home tab → Click Publish.
- Select My Workspace → Click Select.
- Wait for the message "Publish successful".

Step 4: Open Power BI Service

- Go to https://app.powerbi.com → Sign in → Open My Workspace.

Step 5: Open the Published Report

- In My Workspace, click on the published report.

Step 6: Configure Report

- Use slicers and filters available in the report.
- Interact with visuals to explore data.
- Ensure all visuals respond correctly.

Step 7: Test Interactivity

- Click on charts and slicers.
- Verify that filtering and cross-highlighting work properly.

**MCQs**

1. B
2. C
3. B

**Conclusion**

- The Power BI report was successfully published and configured as an interactive report for effective data analysis and sharing.

---
