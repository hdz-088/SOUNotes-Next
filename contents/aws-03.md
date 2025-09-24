---
header: AWS-03
title: AWS-03 AWS Database Services
slug: aws-03
semester: 5
image: /aws.jpg
accent: "#ff9c08"
link: https://drive.google.com/file/d/1AJGBs9bM5bbjBo6taRtBkgUuJGCwppYW/view?usp=sharing
---

## Introduction to Cloud Databases

- AWS Database Services is a group of cloud-based services offered by Amazon Web Services (AWS).
- These services help businesses and developers manage, process, and analyze their data efficiently and securely.
- Amazon Web Services (AWS) offers a variety of database services to cater to different application needs.
- These services are designed to be scalable, reliable, and cost-effective.
- Traditional Databases vs. Cloud Databases
  - On-premise setup: hardware, maintenance, scaling issues
  - Cloud benefits: pay-as-you-go, automatic scaling, global accessibility, managed services
- Types of Cloud Databases
  - Relational (SQL-based)
  - Non-relational (NoSQL)
  - Hybrid & specialized (analytics, graph, etc.)
- AWS Database Services Overview
  - RDS (Relational DB Service)
  - DynamoDB (NoSQL Key-Value Store)
  - Other services (Aurora, Redshift, DocumentDB, Neptune – quick mention)

## What Are The AWS Databases?

- A database is an electronically stored, systematic collection of data. It can contain any type of data, including words, numbers, images, videos, and files.
- You can use software called a database management system (DBMS) to store, retrieve, and edit data. In computer systems, the word database can also refer to any DBMS, to the database system, or to an application associated with the database.
- AWS databases are a set of managed database services supplied by Amazon Web Services that are intended to provide dependable, scalable, and secure database solutions for a variety of use cases.
- These services include Amazon RDS for relational databases, Amazon DynamoDB for NoSQL databases, Amazon Redshift for data warehousing, and Amazon ElastiCache for in-memory caching, among others.
- AWS databases include capabilities such as automatic backups, patching, and fast setup, allowing enterprises to focus on application development while AWS manages the database.

## Amazon Relational Database Service (RDS)

### Features

- Fully managed relational database
- Multi-AZ deployment for high availability
- Automated backups, patching, and maintenance
- Read replicas for scalability
- Security (VPC integration, IAM authentication, encryption at rest and in transit)
- Monitoring (CloudWatch, Enhanced Monitoring, Performance Insights)

### Instance Setup

- Steps to launch RDS instance
- Choosing database engine
- Selecting DB instance size and storage
- Network & security configuration (VPC, Subnets, Security Groups)
- Backup & maintenance settings
- Costing model: On-demand vs. Reserved Instances

### Supported RDS Engines (focus on MySQL)

- MySQL: widely used, open-source, supported by community
- PostgreSQL: advanced, ACID-compliant, extensible
- MariaDB: MySQL fork with additional features
- Use case focus: MySQL (due to popularity and simplicity)

### Creating, Connecting & Managing RDS Instances

- Creation: Console, CLI, Terraform/CloudFormation
- Connecting: From EC2, local machine, or AWS Lambda. Configuring endpoints, security groups, DB users
- Management: Scaling storage and compute, Backup & restore operations, Monitoring & performance tuning

### Concepts

- Key-value and document database
- Fully serverless & auto-scalable
- Event-driven (integrates with Lambda, Streams, etc.)
- Use cases: IoT, gaming, e-commerce carts, real-time analytics

### DynamoDB Core Components

- Tables – top-level container
- Items – equivalent to rows
- Attributes – equivalent to columns
- Primary Keys – Partition key, or Partition + Sort key
- Indexes – Global Secondary Index (GSI), Local Secondary Index (LSI)
- Provisioned vs. On-Demand capacity modes

### Working with DynamoDB

- Creating tables (AWS Console, CLI, SDK)
- Inserting, updating, deleting items
- Query vs. Scan operations
- Consistency models (eventual vs. strong consistency)
- TTL, Streams, Global Tables (multi-region replication)

## RDS Instance Setup Steps

1. Choose Engine (MySQL, PostgreSQL, MariaDB)
2. Select DB Instance Class & Storage
   1. Example: db.t3.micro with 20GB storage
3. Configure Network (VPC, Subnets, Security Groups)
4. Set Credentials (master username, password)
5. Enable Backups & Monitoring
6. Launch DB instance

## Comparison: DynamoDB & RDS

| Features     | RDS                                   | DynamoDB              |
| ------------ | ------------------------------------- | --------------------- |
| Data model   | Relational                            | NoSQL                 |
| Schema       | Fixed, pre-defined                    | flexible, scema-less  |
| Scaling      | vertical + read replicas              | horizontal, automatic |
| Transactions | ACID-complaint<br>                    | limited ACID          |
| Management   | Managed but needs instance tuning<br> | fully serverless      |
| Pricing      | instance hours + storage<br>          | pay-per-request       |

## Steps to Create RDS instance

1. Login to AWS Console
2. Go to RDS dashboard -> Create database
3. Select engine type: MySQL
4. Select template -> Free tier
5. Give the name to your db instance, type username and password
6. Expand storage autoscaling and uncheck enable storage autoscaling
7. Make your IP public (this will allow you to connect DB instance with MySQL workbench)
8. Expand the additional configuration section and enter your initial database name
9. Click on Create Database button
10. Go to the database
11. Click on your db identifier, note down the endpoint and click on the hyperlink under VPC security groups
12. Select security group and go to Inbound Rules -> Edit inbound rules. Add your IP to security group to connect DB instance from the workbench
13. Type -> MySQL Aurora and Source -> MyIP
14. Save the rules and go to the RDS dashboard, reboot the db instance
15. Open MYSQL Workbench and go to Connect to Database
16. Fill data:
    1. Hostname: DB Endpoint
    2. Enter username and password
    3. Press OK

## DynamoDB

- **Definition**: Amazon DynamoDB is a serverless, NoSQL, fully managed database that delivers single-digit millisecond latency at any scale
- **Purpose**: Designed to eliminate the scaling and operational constraints of traditional relational databases—ideal for variable workloads like a shopping cart that must support anywhere from 10 to 100 million users consistently.
- **Proven in Scale**: Powers massive infrastructures such as Amazon Prime Day, Alexa, and global e-commerce and fulfillment systems—handling trillions of API calls and tables exceeding 200 TB with peaks over half a million requests per second

### Core Characteristics

- **Serverless**: No servers to provision or manage—no patches or upkeep. Zero-downtime maintenance with no versioning or maintenance windows.
- **On-Demand Scaling**: On-demand capacity mode scales up/down automatically—even to zero—letting you pay only for the throughput you use.
- **NoSQL Design**: Optimized for performance and flexibility; supports both key-value and document data models. Since it lacks joins, data should be denormalized and structured to fit access patterns.
- **Fully Managed**: Automates provisioning, configuration, high availability, backups, security, and more—so once a table is created, it’s production-ready instantly.
- **Consistent Performance**: Purpose-built to deliver consistent single-digit millisecond performance regardless of scale.

### Use Cases

- **Financial systems**: Global tables + ACID transactions support applications like trading, ledgers, loan services across regions.
- **Gaming**: Ideal for maintaining game states, session histories, and leaderboards with fast, scalable, real-time data access.
- **Streaming & Media**: Powers metadata indexing, user watchlists, event tracking, recommendation engines—all benefiting from DynamoDB's scalability and responsiveness

### Resilience & Data Protection

- **High Availability**: Built-in replication across three Availability Zones ensures 99.99% uptime by default.
- **Global Tables**: Enable multi-region, active-active table replication with 99.999% availability—no primary-secondary configurations needed.
- **Continuous Backups + Point-in-Time Recovery (PITR)**: Allows restoration to any point within the last 35 days; these backups don’t impact performance or consume provisioned throughput .
- **On-Demand Backup & Integration with AWS Backup**: You can use snapshots for archiving, compliance, or cross-account recovery with zero performance impact.

## Questions

1. Explain Cloud Databases: Benefits over traditional DBs and Amazon RDS (Relational Database Service).
2. Discuss difference between Amazon RDS vs Amazon DynamoDB.
3. Explain Amazon RDS (Relational Database Service) – Features, Instance Setup.
4. How to Creating, Connecting, and Managing RDS Instances? Write a steps of it.
5. Explain Amazon DynamoDB – NoSQL Database: Concepts, Tables, Items.
6. How to create Amazon DynamoDB – NoSQL? Write a steps of it.
7. Explain RDS and DynamoDB Use Cases.

---
