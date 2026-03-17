---
header: DVBI-LM
title: DVBI Lab Manual
slug: dvbi-lm
semester: 6
image: /dvbi.jpg
accent: "#ea9500"
link:
---

## Output PDF: [Link](https://drive.google.com/file/d/1BiFaNI3CWz4qloXXDwgGBMJcQHZ0SP40/view?usp=sharing)

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

**Conclusion**

- Conditional formatting, themes, and company branding were successfully applied to create an interactive and visually appealing Power BI dashboard.
