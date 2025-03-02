---
header: MDB-01
title: MDB-01 Introduction to Database
slug: mdb-01
semester: 4
image: /mdb.jpg
accent: "#55ad47"
link: https://drive.google.com/file/d/1H0rc7kR-SZxUN6mfEAkpoX_gF3B2DTwz/view?usp=sharing
---

> A database is an organized collection of data that is stored electronically and can be accessed, managed, and updated efficiently.

> It allows users to store information systematically, making it easier to retrieve, manipulate, and analyze data when needed

## Purpose of Database

- Data Storage
- Data Organization
- Data Retrieval
- Data Management
- Data Security
- Data Integrity
- Data Sharing
- Data Backup and Recovery
- Reporting and Analysis

## Application of Database

- E-Commerce and Retail
- Education
- Healthcare
- Government
- Banking and Finance
- Social Media
- Travel and Transportation
- Entertainment and Media
- Manufacturing and Logistics
- Telecommunications
- Energy and Utilities
- Sports and Gaming
- Real Estate
- Insurance
- Agriculture
- Aerospace and Defense
- Environmental Monitoring
- Cybersecurity

## Database Management System

- A DBMS is software that enables users to define, create, maintain, and control access to databases.
- MySQL, PostgreSQL, MongoDB, Oracle Database, Microsoft SQL Server, SQLite, and Redis.

### Functions of DBMS

- Data storage, retrieval, and update
- User access control
- Backup and recovery management
- Query processing

### Components of DBMS

- **Database**: The physical storage of data.
- **DBMS Software**: Interface between users and the database.
- **Query Language**: Languages like SQL to interact with the database.
- **Users**: Admins, developers, and end-users.

## Types of Databases

![](/mdb/04mdb1.png)

### Relational Database

- **Structure**: Data is stored in tables with rows and columns.
- **Schema**: Fixed schema (predefined structure).
- **Query Language**: Uses SQL (Structured Query Language).
- **Scalability**: Primarily vertical scaling (upgrading hardware).
- **Examples**: MySQL, PostgreSQL, Oracle, SQL Server.
- **Use Cases**: Financial systems, customer relationship management, and inventory management where data consistency is crucial.

### NoSQL Database

- **Structure**: Data is stored in various forms, such as key-value pairs, documents, graphs, or columns.
- **Schema**: Flexible or schema-less, no fixed structure.
- **Query Language**: Depends on the database type (e.g., MongoDB uses query methods; Cassandra uses CQL).
- **Scalability**: Primarily horizontal scaling (adding more servers).
- **Examples**: MongoDB, Cassandra, Redis, CouchDB, Neo4j.
- **Use Cases**: Big data, real-time applications, social networks, content management systems, and when handling unstructured or semi-structured data.

### NewSQL Database

- **Structure**: Combines relational database structures with the scalability of NoSQL.
- **Schema**: Uses relational models but supports high scalability.
- **Query Language**: SQL, similar to traditional RDBMS, but with additional features for scalability.
- **Scalability**: Horizontal scaling like NoSQL but with ACID compliance.
- **Examples**: Google Spanner, CockroachDB, NuoDB.
- **Use Cases**: Applications that require the scalability of NoSQL but still need the ACID compliance of relational databases, such as cloud-based applications and large-scale web services.

## Differences

| **Feature**         | **RDBMS (Relational Database Management System)**                      | **NoSQL (Not Only SQL)**                                                 |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Data Structure**  | Table-based (rows and columns)                                         | Document, key-value, graph, or column-based                              |
| **Schema**          | Fixed schema (tables with predefined columns)                          | Flexible schema (schema-less or dynamic)                                 |
| **Query Language**  | SQL (Structured Query Language)                                        | Varies (e.g., MongoDB uses BSON, Cassandra uses CQL)                     |
| **Scalability**     | Vertical scaling (adding more power to a single server)                | Horizontal scaling (adding more servers)                                 |
| **ACID Compliance** | Fully ACID compliant (Atomicity, Consistency, Isolation, Durability)   | May or may not be ACID compliant (Eventual consistency is common)        |
| **Data Integrity**  | Strong data integrity and consistency                                  | Eventual consistency, often favors performance over consistency          |
| **Transactions**    | Supports complex transactions with multiple operations                 | Limited support for transactions (varies by system)                      |
| **Performance**     | Slower with large data volumes, especially in distributed environments | High performance, especially with large datasets and distributed systems |
| **Use Cases**       | Suitable for structured data, banking systems, ERP, CRM                | Suitable for big data, real-time apps, social networks, IoT              |
| **Examples**        | MySQL, PostgreSQL, Oracle, SQL Server                                  | MongoDB, Cassandra, Couchbase, Redis, Neo4j                              |

| **Features**          | **SQL Language**                                        | **NoSQL Language**                                                          |
| --------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Definition**        | Structured Query Language used for relational databases | Query methods or APIs used for non-relational databases                     |
| **Syntax**            | Standardized and uniform                                | Varies by database type (key-value, document, graph. etc)                   |
| **Query Style**       | Declarative. uses SELECT, INSERT, UPDATE, DELETE        | Depends on database; may use JSON-like syntax, REST APIs, or custom queries |
| **Data Relationship** | Strongly supports JOINs and relationships               | Limited or handled differently (e.g., embedding or linking)                 |
| **Schema Dependency** | Requires predefined schema                              | Typically schema-less or dynamic                                            |
| **Complexity**        | Suitable for complex queries                            | Simplified queries for unstructured data                                    |
| **Examples**          | MySQL ( `SELECT * FROM table;` )                        | MongoDB ( `db.collection.find({})` )                                        |

## MongoDB

- MongoDB is a NoSQL, document-oriented database.
- MongoDB is a popular, open-source **NoSQL database** designed to handle **unstructured** and **semi-structured** data
- It is based on a **document-oriented data model** and stores data in a flexible, JSON-like format called **BSON (Binary JSON)**.
- MongoDB stores data in a **JSON-like document** that is more expressive, powerful, and **flexible** compared to traditional rows and columns format structure.
- MongoDB is known for its **high scalability, performance, and flexibility**, making it suitable for modern applications that need **to handle large volumes of data with varying structures**.
- The Powerful query language of MongoDB provides the capability to filter the fields without worrying about the depth of document nesting.
- It also supports the **aggregation** and the modern **geo-based search, text search, and graph search**

### Features of MongoDB

- **Schema-less Design**: MongoDB allows for flexible schema design, meaning each document (record) can have a different structure.
- **Horizontal Scaling**: It supports horizontal scaling via sharding, making it possible to distribute data across multiple machines.
- **Document-Oriented Storage**: Data is stored in documents (similar to JSON), which are grouped together in collections. This model is intuitive for many modern web applications, which often work with JSON-like data.
- **Rich Query Language**: MongoDB provides a query language that is expressive and allows for complex querying, filtering, and aggregation of data.
- **Indexing**: MongoDB supports indexing to improve query performance, allowing for faster searches and data retrieval.

### MongoDB Architecture & Components

- **Collections**: Analogous to tables in relational databases; store documents.
- **Documents**: JSON-like structures containing key-value pairs.
- **Replica Sets**: Ensure high availability and redundancy.
- **Sharding**: Distributes data across multiple machines for scalability.

### MongoDB Query Language

- MQL is designed for easy interaction with MongoDB’s document-oriented data model.
- It supports a variety of operations such as querying, updating, deleting, and aggregating data.
- With its powerful operators and flexible query syntax, MQL allows developers to handle complex data structures and large datasets efficiently.

## Questions

1. What is Data Base Management System?
2. Write the Differences between Relational, NoSQL, NewSQL.
3. Write the Advantages of MongoDB over RDBMS.
4. Write the Foundations of MongoDB.
5. What is the Architecture and Components of MongoDB?
6. Write the differences between MySQL vs MongoDB.
7. What is Data Types ? and Write about MongoDB Data type.

---

### Resources

- [MongoDB Official Documentation](https://www.mongodb.com/docs/manual/introduction/)
- [MongoDB Official Course](https://learn.mongodb.com/)
- [MongoDB 1 hour Crash Course](https://youtu.be/J6mDkcqU_ZE?si=9eADurz7RSCOyOTX)
- [MongoDB 1 hour Crash Course (English)](https://youtu.be/c2M-rlkkT5o?si=F2YnhaMtDzQwZzt9)
