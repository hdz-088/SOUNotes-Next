---
header: IWSD-004
title: IWSD-04 Traditional ORM Methods of Odoo
slug: iwsd04
semester: 4
image: /odoo.png
accent: "#674d66"
link: https://drive.google.com/file/d/1wLu-GvitoIPGrcaUJpetiesiPGAQVgBI/view?usp=sharing
---

## ORM-Object Relational Mapping

- Object—Relational Mapping (ORM) provides a way to interact with the database using Python objects instead of raw SQL queries.
- It is a powerful tool that simplifies database management using Python & provides high-level abstraction, security, and performance optimization.
- Key Features:
  - **Abstraction**: No need for direct SQL queries
  - **Relational Fields**: Many20ne, One2many, Many2many
  - **Security**: Integrated access control & record rules
  - **Automatic Schema**: Tables auto-created from models
  - **Performance**: Caching & indexing for efficiency

### ORM Methods

| Method     | Description                        |
| ---------- | ---------------------------------- |
| `create()` | Creates a new record               |
| `write()`  | Updates existing records           |
| `search()` | Finds records matching a condition |
| `browse()` | Fetches a record by ID             |
| `unlink()` | Deletes records                    |

- **Advanced Methods**

| Methods          | Description                          |
| ---------------- | ------------------------------------ |
| `search_read()`  | Searches and fetches selected fields |
| `search_count()` | Returns the number of records found  |
| `copy()`         | Duplicates a record                  |
| `filtered()`     | Filters a recordset                  |
| `sorted()`       | Sorts a recordset                    |

## GUI Interaction

- Odoo's GUI (Graphical User Interface) allows users to interact with the system without coding, making database operations seamless.
- GUI actions trigger ORM methods via buttons, fields, or automated processes.
- **GUI based operations:**
  - **Create & Edit Records**: Add or modify data easily.
  - **Filter & Group Data**: Categorize and find records efficiently.
  - **Reports & Dashboards**: View insights visually.
  - **User Access & Security**: Define permissions and roles.

## Methods of Follow-Up

- Follow up mechanisms help track, monitor, and complete tasks efficiently by ensuring proper workflows using sequences or validation checks.
- They enable tracking of changes through automated logs and status fields, ensuring accountability and process optimization.
- **Methods of Follow up in Odoo:**
  - **Scheduled Activities**: Assign tasks with due dates.
  - **Automated Workflows**: Trigger actions based on conditions.
  - **Email & System Notifications** Reminders for pending tasks.
  - **Reports & Dashboards**: Visual insights for tracking progress.

## API Decorations

- API decorations are Python decorators that control how methods interact with Odoo's ORM, web controllers, or APIs. They help manage security, access control, and method behavior for models and computed fields.

| Decorator         | Purpose                            |
| ----------------- | ---------------------------------- |
| `@api.model`      | Works without specific record data |
| `@api.depends`    | Computes fields dynamically        |
| `@api.onchange`   | Triggers when a field is modified  |
| `@api.constrains` | Validates constraints              |

## Odoo Calls

- Odoo calls refer to how Odoo interacts with its database, models, and external systems using ORM methods, API requests, or frontend controllers. These calls handle data processing, business logic execution, and system integration.
- **Types of Odoo Calls:**
  - **Internal Calls**: ORM method calls for database operations. Example: `create()`, `write()`, `unlink()`, `search()`.
  - **External Calls**: API requests for integrating Odoo with other applications. Example: JSON-RPC, XML-RPC, REST API interactions.
  - **Frontend Calls**: JavaScript-based calls to interact with the I-Jl. Example: Odoo Web Controllers handling form submissions.

## Relational Field Operations with the API

- Relational field operations in Odoo use Many20ne, One2many, and Many2many fields to establish links between models, enabling efficient data management through ORM methods and API calls.
- Adding Relationships (Creating and linking a related record)

```python
self.related.field = self.env['related.model'].create({'name': 'New Record'})
```

- Accessing Related Records (Retrieving linked records)

```python
related_records = self.many2one_field.related_field
```

- Filtering Related Records (Applying conditions on related data)

```python
filtered = self.one2many_field.filtered(lambda rec.field_name == 'value')
```

## Project Management System

- A Project Management System (PMS) in Odoo helps organize, track, and manage projects using tasks, stages, deadlines, and team collaboration. It supports custom fields, workflows, and automation to enhance efficiency.
- Key Features:
  - Modify project tasks, stages, and records dynamically using the Ul or API.
  - Use inline editing, form views, or batch updates to make changes.
  - Implement access rights to control who can edit specific project details.
  - Use automated actions and scheduled jobs to update project status dynamically.
- PMS expressions in Odoo are computed fields, filters, and rules that automate task management and workflows dynamically.

## Questions

1. What are ORM methods in Odoo? Provide a brief overview.
2. List any three commonly used traditional ORM methods in Odoo.
3. Explain the purpose of API decorations in Odoo.
4. What are relational fields in Odoo? Mention their types.
5. Briefly describe the significance of PMS editing in Odoo.
6. What are the key differences between traditional and advanced ORM methods in Odoo?
7. Describe the procedure to follow up on ORM methods from the GUI.
8. Explain the role and usage of API decorations in Odoo, with an example.
9. How do relational field operations work with the API in Odoo?
10. Discuss the differences between Odoo versions in terms of ORM calls and functionalities.
11. Provide an overview of advanced ORM methods in Odoo and their advantages over traditional methods.
12. Explain the method of follow-up for ORM procedures from both the GUI and API perspectives.
13. List and describe the most commonly used API decorations in Odoo development.
14. How are relational field operations managed with the API in Odoo? Provide an example.
15. Review the most frequently used ORM methods in Odoo and discuss their applications with examples.

---
