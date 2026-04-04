---
header: DVBI-04
title: DVBI-04 Data Visualization
slug: dvbi-04
semester: 6
image: /dvbi.jpg
accent: "#ea9500"
link:
---

## Creating Different Visuals

- The basic process for any visual involves selecting a type from the `Visualizations pane` and dragging fields from the `Data pane` into specific field wells (like Axis, Legend, or Values).
- **Charts:**
  - **Bar & Column**: Used to compare categories. Use Column charts for time-based data and Bar charts when category names are long.
  - **Line & Area**: Ideal for showing trends over time. Area charts emphasize the magnitude of change by filling the space below the line.
  - **Creation**: Select the chart icon, drag a category to the X-axis and a numeric measure to the Y-axis.
- **Tables & Matrices:**
  - **Tables**: Best for displaying detailed data in a flat grid.
  - **Matrices**: Similar to pivot tables, these support multiple dimensions and allow "drilling down" into hierarchical data.
  - **Creation**: Select the Table or Matrix icon. For a matrix, drag fields into the Rows, Columns, and Values wells.
- **Cards:**
  - Used to highlight a single critical number, such as Total Revenue or Store Count
  - **New Card Visual (Nov 2025)**: Supports grouping multiple cards into one visual and adding images or reference labels for better context.
  - **Creation**: Select the card icon and drag a single measure into the Fields or Values well.
- **Maps:**
  - Display geographic data using points (bubbles) or filled regions.
  - **Creation**: Ensure your data has location fields (City, Country, Latitude, etc.). Select a Map icon and drag the location field to the Location well.

## Customization and Best Practices

- **Formatting**: Use the Format visual (paintbrush) icon to change colors, adjust font sizes, add borders, or enable "Zoom sliders" for charts.
- **Conditional Formatting**: Apply rules-based colors, data bars, or icons to tables and charts to highlight performance thresholds automatically.
- **Interaction**: Visuals are interactive by default; clicking a data point in one chart will filter or highlight related data in other visuals on the same page.
- **Visual Hierarchy**: Place the most important high-level information (like KPI cards) at the top-left of your report, moving to more detailed charts and tables at the bottom.

## Table Visualization

- A Table is a simple grid where each row represents a single record.
- **Best For**: Displaying detailed, raw data (e.g., a list of every transaction) or comparing many measures for a single category.
- **Configuration**: You drag fields into the Values bucket in the Visualizations pane.
- **Totals**: Can include a grand total row at the bottom for numeric values.

## Matrix Visualization

- A Matrix is similar to an Excel Pivot Table, displaying data across multiple dimensions simultaneously.
- **Best For**: Summarizing complex data and showing relationships (e.g., Sales by Region (rows) and Year (columns)).
- **Configuration**: Features three primary field wells: Rows, Columns, and Values.
- **Hierarchies**: Supports "stepped" layouts and drill-down capabilities, allowing users to expand categories to see sub-categories.

## Power BI Slicers

- Slicers are on-canvas visual filters that enable users to segment report data.
- **Types**: Common styles include vertical lists, dropdown menus, tiles (buttons), and numeric/date range sliders.
- **Customization**: You can enable "Select All," search bars for long lists, and hierarchy structures to nest fields like Region > Country.
- **Interaction**: Selecting a value in a slicer instantly filters all other related visuals on the page, including maps.

## Map Visualizations

- Power BI offers several built-in map types to suit different data needs:
- **Basic Map (Bing):** Best for plotting specific data points (using latitude/longitude or addresses) with bubbles representing value size.
- **Filled Map (Choropleth):** Uses shading or color intensity across regions (like states or countries) to show relative values.
- **Azure Maps:** Provides high-performance, enterprise-grade mapping with 3D columns, heat maps, and clustering.
- **ArcGIS for Power BI:** Offers advanced spatial analysis, such as drive-time calculations and demographics, powered by Esri.
- **Shape Map (Preview):** Compares regions using custom TopoJSON files, often used for non-standard maps like floor plans or specific territories.

## Customization

### Modifying Colors in Charts and Visuals

- Power BI allows for both global and individual color adjustments.
- **Report Themes (Global):** Navigate to the View tab to select a theme, which instantly changes colors, font sets, and visual formatting across the entire report.
- **Format Pane (Individual):** Select a visual, open the Format your visual pane (paintbrush icon), and go to Colors to customize specific elements.
- **Conditional Formatting (Dynamic):** Next to the color option, click the fx icon to set colors based on numeric values (e.g., green for high, red for low).
- **Single Data Point:** To highlight specific data, select a particular bar or point and change its color independently.
- **Reset:** Use "Reset to default" in the formatting pane to revert changes.

### Modifying Shapes, Text Boxes, and Images

- Shapes, text boxes, and images act as design elements to enhance the report's layout.
- **Shapes:** Select a shape (e.g., rectangle) and use the Format tab to change the fill color, border, and add effects like shadows or glow.
- **Text Boxes:** Add text to describe data or add instructions. Change font color, size, and alignment in the format pane.
- **Images:** Insert images for logos, then adjust their position and size.
- **Layering:** Use the Selection Pane (under View) to manage the order of objects, allowing you to bring shapes or text to the front or back.

### Custom Visuals

- Custom visuals (from AppSource) follow the same formatting rules as native visuals.
- **Coloring Custom Visuals:** Most custom visuals have a dedicated color section in the format pane.
- **Developer Options**: For custom visual developers, the colorPalette service in the IVisualHost API can be used to assign colors to data points.

### Page Layout and Formatting

- **Page Background:** In the Format pane (with nothing selected), adjust the canvas background color and transparency.
- **Gridlines and Snap to Grid:** Under the View tab, turn on Gridlines and Snap to grid to align visuals perfectly.
- **Align and Distribute:** Use Format > Align to align, distribute, or resize selected visuals for a consistent, clean layout.
- **Grouping:** Select multiple visuals, right-click, and choose Group to treat them as a single entity, making it easier to move or format them together.

### Grouping and Binning

- These techniques are used to organize numerical or categorical data in the Data pane.
- **Grouping (Categorical):** Select multiple data points in a chart or items in the data pane, right-click, and choose Group data to combine them into a single category (e.g., grouping "Apples" and "Oranges" into "Fruit").
- **Binning (Numerical):** Right-click a numeric field in the data pane, select New Group, and choose "Bin" to create groups of equal size (e.g., grouping ages into 10-year bins: 0-10, 11-20).

## Creating a Dashboard in Power BI Service

- Dashboards are a feature of the Power BI Service (web version), not Power BI Desktop. They are a single-page canvas used to display key metrics from one or multiple underlying reports.
- **Publish a Report**: First, create a report in Power BI Desktop and publish it to your chosen workspace in the Power BI Service.
- **Create a New Dashboard**: In your Power BI Service workspace, select New > Dashboard, and give it a name.
- **Pin Visuals**: Open your published report. Hover over a visualization you want to add to the dashboard and select the pin icon. In the Pin to dashboard dialog, select the name of the new or existing dashboard and select Pin.
- **Add Other Tiles**: You can also add non-data tiles like text boxes, images, or web content directly to the dashboard canvas using the Add a tile option. You can also use the Q&A natural language tool to ask questions about your data and pin the resulting visualizations.

## Configuring a Dashboard

- Once visuals are pinned, you can customize the dashboard's layout and appearance:
- **Resize and Rearrange:** Drag and resize tiles on the canvas to create a layout that highlights key metrics.
- **Edit Tile Details:** Select More options `(...)` on a tile and choose Edit details to change the title or other settings.
- **Apply a Theme:** In the dashboard menu, you can add a dashboard theme, which affects background and tile colors.
- **Set Up Mobile View:** Configure a mobile-optimized layout for users viewing the dashboard on phones or tablets.
- **Configure Alerts:** For tiles that display a single numeric value (like a card visual), you can set up data alerts to receive notifications when data reaches a set threshold.

## Importing Power View and Power Pivot

- Power View and Power Pivot are Excel add-ins used to create reports and data models within Excel. You cannot import these directly into a Power BI Service dashboard; the process requires using Power BI Desktop as an intermediary step.
- Open Power BI Desktop on your computer.
- Select File > Import > Power Query, Power Pivot, Power View.
- Select the Excel workbook containing your Power Pivot model and Power View reports, then select Start.
- Power BI Desktop analyzes the workbook and converts the data model, relationships, and queries into a Power BI `.pbix` file. A summary page will list items that were converted.
- Once imported, the data and models are ready to be used with Power BI's modern visualization tools. The original Power View sheets will be available as report pages in Power BI Desktop.
- Publish the `.pbix` file to the Power BI Service to begin creating your dashboard by pinning the visuals.

---
