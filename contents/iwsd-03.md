---
header: IWSD-03
title: IWSD-03 ODOO
slug: iwsd-03
semester: 4
image: /odoo.png
accent: "#674d66"
link: https://drive.google.com/file/d/1yIzspseiplimkfPf2lHOyjs1WAr9upWb/view?usp=sharing
---

## Introduction

- Odoo is an open-source ERP (Enterprise Resource Planning) system that provides a suite of business applications, including CRM, eCommerce, accounting, inventory, HR, and more.
- It is highly modular, allowing businesses to install only the apps they need and extend functionality as required.
- Key Features
  - **Modular System**: Install only the required apps.
  - **Integrated Suite**: All applications work together seamlessly.
  - **Customizable**: Supports drag-and-drop customization and developer-based modifications.
  - **Open-source & Enterprise Versions**: Open-source (free) with community support, Enterprise (paid) with advanced features.

## ODOO Studio

- Odoo Studio is a low-code/no-code environment that allows users to customize applications without writing code.
- Key Features:
  - **Form and Report Editor**: Modify form views, reports, and layouts using drag-and-drop.
  - **Workflow Automation**: Automate processes like sending emails when an order is confirmed.
  - **Custom Fields**: Add new fields to forms and models without coding.
  - **Menu Customization**: Adjust navigation and interface elements easily.
  - **User Role Management**: Control who sees what data using role-based access control.
- **Limitations of Odoo Studio:**
  - Cannot handle complex logic or advanced automation.
  - Limited in modifying backend database structures.
  - Cannot create deep integrations with external systems.
  - Limited ability to modify existing module code.
  - For advanced customizations, developers need to work with code.

## History of ODOO

- Odoo was founded by Fabien Pinckaers in 2005 under the name TinyERP. Over the years, it evolved into OpenERP and eventually Odoo.
- **2005**: Released as TinyERP 1.0, focusing on small businesses.
- **2009**: Renamed OpenERP, expanding to larger enterprises.
- **2014**: Became Odoo, introducing modular app-based architecture.
- **2015**: Present Continuous growth, with Odoo Enterprise for premium features.

## Code-Based Customization in Odoo

- Odoo uses Python (backend logic) and XML (UI views and data structure). To create advanced functionalities, developers need to work with these core components.

## Add-on Module Structure

- Odoo uses modules to extend its functionality. A module is a self contained package that adds new features, models, or views.

### Module Directory Structure

- 📂`custom—addons/`
- 📂`my—module/`: Your module folder
  - 📄`__init__.py:`: Python file to import models
  - 📄`__manifest__.py`: Manifest file (metadata)
  - 📂`models/`: Python models (database tables & business logic)
  - 📂`views/`: XML files (Ul structure)
  - 📂`security/`: Access rights & record rules

#### Manifest File

- The `__manifest__.py` file is a Python dictionary that acts as the module's configuration file and contains metadata about the module.
- **Key Attributes:**
  - `depends`: Other Odoo modules required (e.g., `['base', 'sale']`).
  - `data`: Files to be loaded (e.g., views, security, demo data).
  - `installable`: Whether the module can be installed (`True`/`False`).
  - `application`: Defines whether the module should appear as a main app in Odoo.

```json
{
'name': 'My Custom Module',
'version': '1.0',
'depends': ['base'],
'data': [
	'views/my_model_view.xml',
	'security/ir.model.access.csv',
	],
'installable': True,
'application': True,
}
```

#### Steps to Write Module in Odoo

1. Download and install Odoo
2. Create a new module:
   1. Navigate to `odoo/addons/` or `custom_addons/`.
   2. Create a folder `my_module`.
   3. dd `__init__.py` and `__manifest__.py` files
3. Define a Model (Database Table)
   - Create `models/my_model.py`:

```python
from odoo import models, fields

class MyModeI(modeIs.ModeI):
	_name = 'my.model'
	_description = 'My First Custom Model'

	name = fields.Char(string="Name', required=True)
	description = fields.Text(string = "Description")
	is_active = flase.Boolean(string = "Active", default = "True")
```

4. Define Views (User Interface)
   - Create `views/my_model_view.xml`

```xml
<odoo>
	<record id="view_my_model_form" model="ir.ui.view">
		<field name="name">my.model.form</field>
		<field name="model">my.model</field>
		<field name="arch" type="xml">
			<form string="My Model">
				<group>
					<field name="name"/>
					<field name="description"/>
					<field name="is_active"/>
				</group>
			</form>
		</field>
	</record>
</odoo>
```

## Relation Field

- Relation fields are used to create relationships between different models (database tables).
- These fields help link records across models, enabling data consistency and easy access.

### Many2One (Foreign Key)

- A record belongs to another model

```python
class Order(models.Model):
	_name = 'sales.order'

	customer_id = fields.Many2One('res.partner', string="Customer")
```

### One2Many (Reverse Relation)

- A record has multiple related records.

```python
class Customer(models.Model):
	_name = 'res.partner'

	order_ids = fields.One2Many('sales.order', 'customer_id', string="Orders")
```

### Many2Many (Multiple Relationships)

```python
class Course(models.Model):
	_name = 'academy.course'

	student_ids = fields.Many2Many('academy.student', string="Students")
```

## Widgets & Controls in UI

- Odoo provides various Ul widgets to improve the user experience.
- Common Widgets:
  - **char**: Simple text field
  - **text**: Multi-line text
  - **boolean**: Checkbox
  - **selection**: Dropdown
  - **binary**: File upload
  - **many20ne**: Dropdown with search
  - **html**: Rich text editor

## Domain Filter in Odoo

- A domain filter dynamically filters records in a view.
- Example: Show only active customer

```xml
<field name="customer_id" domain="[('is_active', '=', True)]"/>
```

- Example: Only show products from a specific category

```xml
<field name="product_id" domain="[('category_id', '=', 'Electronics')]"/>
```

## Significance of Odoo’s Modular Structure

- Allows businesses to install only the necessary applications.
- Enables easy customization and scalability.
- Provides seamless integration between different modules.
- Supports both no-code (Odoo Studio) and code-based customization (Python & XML).

## Modules in Odoo

- A module in Odoo is a self-contained package that adds functionality to the system. It includes models, views, security rules, and business logic.
- Key Features:
  - A modular structure allows easy customisation.
  - Defined using a manifest file (`__manifest__.py`).
  - Can introduce new features or extend existing ones.

## ATTRS in Odoo

- In Odoo, ATTRS stands for Attributes. It is used in XML views to control the behavior of fields dynamically based on conditions. Such as hiding/showing fields or making them read-only based on conditions.
- Key Features:
  - Applied in XML views
  - Supports conditions like invisible, required, read-only
- ATTRS is used to dynamically control field visibility, required fields, and read-only conditions in views.
- Common Attributes:
  - `{ 'readonly': [('state', '=' 'done')] }`: Makes the field read-only based on a condition.
  - `{ 'required': [('type', '=' 'mandatory')] }`: Marks the field as required dynamically.
  - `{ 'invisible': [('field_name', '=' 'value')] }`: Hides the field when a condition is met.

## On-Change Events

- An on-change event triggers an action when a field value changes. It is used to update dependent fields automatically.
- Key Features:
  - Implemented in Python using `@api.onchange`.
  - Helps to update field values dynamically

```python
@api.onchange('price'):

def _onchange_price(self):
	if self.price:
		self.price_with_tax = self.price * 1.18
```

## Views in Odoo

- Odoo provides multiple views to display data in various formats.
- Common Views:
  - **Form View** – For editing individual records.
  - **Tree View** – Displays multiple records in a tabular format.
  - **Kanban View** – Graphical card-based representation.
  - **Graph View** – Used for analytical data visualization.
  - **Calendar View** – Represents records with date and time attributes.

### View Attributes

| **Attribute** | Description                             |
| ------------- | --------------------------------------- |
| **editable**  | Enables/disables editing in list views. |
| **colspan**   | Defines how many columns a field spans. |
| **nolabel**   | Hides the field label.                  |
| **widget**    | Customizes how a field is displayed.    |
| **string**    | Sets a custom label for a field.        |
| **domain**    | Filters records based on conditions.    |
| **context**   | Passes additional parameters to views.  |

### Diagram View

- The Diagram View is used to visually represent workflows, processes, or relationships.
- Key Features:
  - Commonly used in CRM, project management, and automation modules.
  - Allows visual linking of different process stages.

```xml
<diagram>
	<node model="project.task" name="start"/>
	<node model="project.task" name="end"/>
	<transition from="start" to="end"/>
</diagram>
```

### Graph View

![](https://odootricks.tips/wp-content/uploads/2019/12/recruitment-graph-view.jpg?w=1024)

- Graph View is used for charts and reports
- Key Features:
  - Supports bar, line, and pie charts.
  - Used in Sales, Inventory, HR analytics.

```xml
<graph>
	<field name="date" type="row" />
	<field name="sales_amount" type="measure" />
</graph>
```

### Calendar View

![](https://odootricks.tips/wp-content/uploads/2019/12/calendar-view.jpg?w=1024)

- Displays date-based records (like tasks, meetings).
- Key Features:
  - Shows events in a calendar format.
  - Commonly used in HR, Project, and Appointment modules.

```xml
<calendar date_start="start_date" date_stop="end_date" />
```

### Kanban View

![](https://odootricks.tips/wp-content/uploads/2019/12/crm-kanban-view.jpg?w=1024)

- Kanban views show cards instead of lists.
- Key Features:
  - Visual representation.
  - Used in task management, CRM, inventory.

```xml
<kanban>
	<templates>
		<t t-name="kanban-box">
			<div class="oe_kanban_card">
				<strong><field name="name" /></strong>
			</div>
		</t>
	</templates>
</kanban>
```

## Field Parameters

- Define how fields behave in models.

| Parameters                             | Description          |
| -------------------------------------- | -------------------- |
| `required=True`                        | Field is mandatory   |
| `readonly=True`                        | Field is read-only   |
| `default=lambda self:self.env.user.id` | Sets a default value |

## Complex Field

- Complex fields store multiple values in one field. It includes relation fields but also cover other advanced data types that store structured data.

- **Selection Fields** — Dropdown field with redefined choices.

```python
state=fields.Selection([('draft', 'Draft'), ('done', 'Done')], string="State")
```

- **Computed Fields** — Fields calculated dynamically based on other fields.

```python
total_price = fields.Float(compute="_compute_total_price")
```

- **HTML Fields** — Stores rich text content.

```python
description = fields.Html(string="Description")
```

## Model & Class Level Attributes

- Defines metadata for a model.

| Attribute      | Description                  |
| -------------- | ---------------------------- |
| `_name`        | Internal model name          |
| `_description` | Short description of a model |
| `_order`       | Default string order         |
| `_rec_name`    | Field used as record         |

## Constraints

- Constraints enforce data validation at the database level.

### Python Constraints

| **Constraint Type**      | Description                           |
| ------------------------ | ------------------------------------- |
| **`@api.constrains`**    | Validates fields based on conditions. |
| **Required Field Check** | Ensures a field is not empty.         |
| **Unique Field Check**   | Prevents duplicate values in a field. |
| **Relational Check**     | Enforces logic between related fields |

### SQL Constraints

| **Constraint Type** | Description                                        |
| ------------------- | -------------------------------------------------- |
| **CHECK**           | Ensures values meet a condition (e.g., price > 0). |
| **NOT NULL**        | Prevents NULL values in a column.                  |
| **UNIQUE**          | Ensures all values are distinct.                   |
| **FOREIGN KEY**     | Links a column to another table's primary key.     |

## Automatic Reserve Fields

- Odoo automatically creates technical fields like:
  - `create_date` (Record creation time).
  - `write_date` (Last modification time).
  - `create_uid` (User who created the record).

```python
create_date = fields.Datetime(string="Created On", readonly=True)

write_date = fields.Datetime(string="Last Update On", readonly=True)

create_uid = fields.Many2One('res.users', string="Created By", readonly=True)
```

## Resources

1. [Odoo Official Tutorial](https://www.odoo.com/slides/all/tag/odoo-tutorials-9)

---
