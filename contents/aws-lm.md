---
header: AWS-LM
title: AWS-LM
slug: aws-lm
semester: 5
image: /aws.jpg
accent: "#ff9c08"
link: https://drive.google.com/file/d/1kbLMe_g-OzZ5JXTHEukrJoZRWvPiQmMq/view?usp=sharing
---

## Practical-01

**Aim**: Create and setup a new AWS Free Tier Account

**Description**: AWS offers a free tier account for new users that allows them to explore and test AWS services at no cost for 12 months

**Steps**:

1. Open AWS free tier page
   1. Go to: https://aws.amazon.com/free
   2. Click on "create a free account"
2. Enter account information:
   1. Provide your email address
   2. Create a password
   3. Enter AWS account name
3. Select account type and contact information:
   1. Choose personal account
   2. Fill in full name, address, city, state, pincode and phone number
4. Add payment information
   1. Enter a credit/debit card details
   2. Make payment to confirm card authenticity (refundable)
5. Identity verification:
   1. Enter your number
   2. Enter OTP received on that number
6. Choose support plan
   1. Select basic support
7. Confirmation and login
   1. AWS will confirm that your account has been created
   2. Go to the AWS console and login with your credentials
8. Access free tier services:
   1. You can use services like EC2, S3, RDS, Lambda etc

**Output**:

- AWS free tier account created successfully
- Able to login to AWS console

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | B      |
| 3        | D      |
| 4        | C      |
| 5        | B      |

**Conclusion**: An AWS free tier account was created and set up to access cloud services

---

## Practical-02

**Aim**: Explore AWS billing dashboard and service limits

**Description**: The AWS billing dashboard is a centralized place where users can view their cloud usage, cost and free tier benefits

**Steps**:

1. Log in to AWS console
   1. Open https://aws.amazon.com/console
2. Access the billing dashboard
   1. In the search bar type "billing" and open the dashboard
3. View billing information
   1. Check the current month-to-date charges
   2. View free tier usage alerts
   3. Explore service wise cost breakdown
   4. Go to Bills -> Expand each services to see detailed usage
4. Set up Budget/ Alarms
   1. Navigate to Budget section
   2. Open a budget alert to notify usage exceeds free tier limits
5. Access service limits (quotas)
   1. In the console search bar type "service quotas"
   2. Select a service
   3. Check the default limits:
      1. EC2: 20 running instances per region
      2. Elastic IPs: 5 per region
      3. S3: 100 buckets
6. Request a limit increase:
   1. From service quotas click **request increase** for any resource
   2. Fill the form and submit to AWS Support

**Output**:

- Successfully explored AWS Billing dashboard
- Observed monthly cost details and free tier usage
- Verified service quotas for services

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | C      |
| 4        | D      |
| 5        | B      |

**Conclusion**: The AWS Billing dashboard allows users to track costs and free tier usage while service limits help manage resources effectively and ensure controlled cloud consumption

---

## Practical-03

**Aim**: Navigate the AWS Management Console

**Description**: The AWS Management Console is a web based user interface that allows user to manage AWS Cloud resources

**Steps**:

1. Login to AWS Console
   1. Go to https://aws.amazon.com/console and login
2. Explore the Home Dashboard
   1. View recently visited services
   2. Check AWS resources by region
   3. Access documentation, tutorials and cost management links
3. Use the search bar
   1. Type service name to quickly open their page
4. Explore key services:
   1. EC2: manage and launch virtual serves
   2. S3: Create and manage storage brackets
5. Account and Region settings:
   1. Change AWS region
   2. Access account details, billing and security settings

**Output**:

- Successfully logged in and navigated the AWS management console
- Explored major services like EC2 and S3
- Verified access to region selection, billing and search bar features

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | A      |

**Conclusion**: The AWS management console provides simple web-based interface to easily manage monitor and configure various AWS cloud services

---

## Practical-04

**Aim**: Explore AWS services and regions

**Description**: AWS provides a wide range of cloud services which hare hosted across multiple geographic regions worldwide for reliability and availability

**Steps**:

1. Log in to AWS Management Console:
   1. Go to https://aws.amazon.com/console and login
2. Access the "Services" menu
   1. On the console home page, click "Services" from the navigation bar
   2. AWS services are grouped into categories
      1. Compute: EC2, Lambda, Elastic
      2. Storage: S3, EFS, Glacier
3. Search and open serivce
   1. Use the search bar to quickly access any service
4. Explore regions
   1. On the top-right corner of the console there is a region selector menu
5. Check service availability by region
   1. Some services are global while others are regions specific
   2. Switch regions and observe whether service/ resources are different for each region
6. Verify resource in region
   1. Create or view resources like EC2 instance or S3 buckets in the region
   2. Switch to another region and notice resources are not shared across the regions

**Output**:

- Explored AWS service such as EC2, S3
- Verified region selection
- Confirmed that AWS resources are created and managed region-wise

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | C      |
| 3        | C      |
| 4        | B      |
| 5        | DD     |

**Conclusion**: AWS provides multiple services organized into categories and resources are deployed region-wise for better performance and availability.

---

## Practical-05

**Aim**: Launch and configure a Linux EC2 instance

**Description**: Launch a virtual server on AWS EC2 to run applications and perform cloud based operations

**Steps**:

1. Login to AWS Console
   1. Go to https://aws.amazon.com/console and login
2. Navigate to EC2 instance under the compute section
3. Launch instance
   1. Click "Launch Instance"
   2. Give a name for instance
   3. Select and Amazon Machine Image (AMI): Choose Amazon Linux
4. Choose instance type
   1. Select `t2.micro` for free tier
5. Configure instance details
   1. keep default settings or modify number of instance, network (VPC), subnet, auto-assign public IP
6. Add storage:
   1. Use default: 8gb General purpose SSD (gp3)
7. Add tags (optional)
8. Configure security group
   1. Create a new security group or use an existing one
9. Review and launch
   1. Review all settings
   2. Click on Launch, then select existing key-pair or create a new one
   3. Download the key-pair (.pem file)
10. Connect the instance
    1. Go to EC2 dashboard and click on instance name
    2. Click on "Launch Instance" and then "Connect" to launch the instance

**Output**: A running Linux EC2 instance ready for deployment or configuration tasks

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | C      |
| 4        | B      |
| 5        | C      |

**Conclusion**: Successfully launched a secure Linux EC2 instance on AWS, enabling remote server management and application deployment.

---

## Practical-06

**Aim**: Connect to EC2 instance using SSH

**Description**: Launch a virtual server using Windows Terminal

**Steps**:

1. Launch a Linux EC2 instance with a key-pair file
2. Download the key file and keep it safe
3. Open Terminal or PowerShell in the folder where your key file is stored
4. Change file permission for key file: `chmod 400 key.pem`
5. Connect to EC2 using SSH: `ssh -i key.pem ec2-username@public-ip`

**Output**:

- Successfully connected to EC2 instance
- Terminal prompt change to: `[ec2-username@ip-address]$`

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | B      |

**Conclusion**: Successfully connected to the EC2 instance via SSH, allowing secure remote management and administration

---

## Practical-07

**Aim**: Create and manage key pairs

**Description**: Key pairs are cryptographic credentials used to securely connect to EC2 instance

**Steps**:

1. Log in to AWS console
   1. Navigate to EC2 dashboard
   2. Go Network & Security > Key-pairs
2. Create a key-pair
   1. Enter name
   2. Choose key type and create
3. Download the key and store it securely
4. Manage existing key-pair
   1. View, delete or import public keys

**Output**: A .pem key file is downloaded and the key-pair is listed in EC2 key pairs section

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | D      |

**Conclusion**: Key-pair provide secure SSH access to EC2 instances and managing them ensures controlled and safe server connections

---

## Practical-08

**Aim**: Create and configure security group

**Description**: Security group acts as a virtual firewall for your EC2 instances, controlling inbound and outbound traffic

**Steps**:

1. Log in to AWS console
2. Open EC2 dashboard
3. Navigate to Network & Security > Security Group
4. Create a security group
   1. Click create security group
   2. Enter name and description
   3. Select VPC
5. Add inbound rules
   1. For SSH:
      1. Type: SSH
      2. Port: 22
      3. Source: My IP
   2. For HTTP
      1. Type: HTTP
      2. Port: 80
      3. Source: 0.0.0.0/0
6. Add outbound rules
   1. Type: All traffic
7. Review and create
8. Attach to EC2 instance
   1. Select EC2 > Actions> Security > Change > Security Groups > Add group

**Output**: Security group is created and attached; EC2 instance now allows traffic based on specific rules

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | C      |

**Conclusion**: Security groups efficiently controls EC2 traffic, enhancing instance security and network management

---

## Practical-09

**Aim**: Create and configure S3 buckets

**Description**: Amazon S3 is used to store and retrieve data in the cloud. Buckets are containers that hold your objects

**Steps**:

1. Log in to AWS console
2. Open S3 Service
3. Create a bucket
   1. Click create bucket
   2. Bucket type: General purpose
   3. Enter bucket name
   4. Select region and closest to yours
   5. Enable bucket versioning
4. Review all settings and click on "Create"
5. Upload objects
   1. Open the bucket > Upload > Add files > Click on "Upload"

**Output**:

- A new S3 bucket appears in your console
- Uploaded files are stored securely in the configured setting

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | C      |
| 4        | B      |
| 5        | C      |

**Conclusion**: S3 buckets provides scalable cloud storage with configurable security, versioning and access controls

---

## Practical-10

**Aim**: Upload, download and manage permissions

**Description**: AWS S3 allows secure storage of files in the cloud you can upload, download and control access permission for your data

**Steps**:

1. Log in to AWS Console
2. Open S3 Dashboard
3. Create or select a Bucket
4. Upload files
   1. Click on Upload > Add files
   2. Click on Properties > Storage Class
   3. Upload
5. Download files
   1. Select the file > Click on Download to save it locally
6. Manage Permission
   1. Go to Permission tab
   2. Bucket Policy or Access Control List
   3. Add users or set public/private access
7. Test access
   1. Ensure intended users can access files

**Output**: Files are successfully uploaded and downloaded; access is controlled based on the permission set

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | D      |
| 3        | C      |
| 4        | C      |
| 5        | C      |

**Conclusion**: AWS S3 enables secure storage with easy upload, download and fine grained permission management

---

## Practical-11

**Aim**: Enable and use S3 versioning

**Description**: S3 versioning allows multiple versions of an object in a bucket, protecting against accidental deletion or overwrite

**Steps**:

1. Log in to AWS console
2. Go to S3 Dashboard
3. Select your bucket
   1. Properties > Bucket versioning > Edit > Enable > Save
4. Upload files to the bucket
5. View versions
   1. Enable show versions in the S3 console to see all file versions
6. Restore/ Delete Versions
   1. Select a specific version
   2. Action
   3. Restore/ Delete as needed

**Output**: Multiple versions of objects are stored; previous versions can be retrieved or permanently delete

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | C      |

**Conclusion**: S3 versioning provides data protection by keeping all object versions enhancing recovery from accidental changes or deletion

---

## Practical-12

**Aim**: Implement life-cycle rules

**Description**: AWS S3 lifecycle rules automate the transition and expiration of objects to optimize storage costs and manage data retention efficiently

**Steps**:

1. Log in to AWS console
2. Go to S3 Dashboard
3. Select the bucket
   1. Management -> Lifecycle rule
   2. Click on the bucket > Management > Lifecycle Rule
4. Create lifecycle rule
   1. Click create lifecycle rule, provide a name
5. Define scope
   1. Choose apply to all objects or prefix/tag-based filter
6. Set transitions
   1. Configure objects to transition to standard-IA Glacier, or Deep Archive after X days
7. Set expiration (optional)
   1. Set objects to expire/delete after X days
8. Review and save
   1. Check configuration and click on Create Rule

**Output**: Objects in the bucket automatically move to cheaper storage or get deleted according to the lifecycle rule

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | C      |
| 4        | C      |
| 5        | B      |

**Conclusion**: Lifecycle rules reduce storage costs and simplify data management by automating transition and deletions

---

## Practical-13

**Aim**: Host a static website using S3

**Description**: Host a static website on AWS using S3 by uploading your website files and configuration configuring the bucket

**Steps**:

1. Create S3 bucket
   1. S3> Create bucket > Enter name > Choose region > Uncheck "Block All Public Access"
   2. Create bucket
2. Upload website files
   1. Upload HTML, CSS, JS and image files to the bucket
3. Enable static website hosting
   1. Select the bucket > Properties > Static website hosting > Enable > Enter `index.html` as index document > Save
4. Set bucket policy for public access
   1. Permission > Bucket policy > Edit Statement:
      1. Add action: S3
      2. Service: `getObject`
      3. Add resource: service: S3 | Resource type: object | ARN `arn:aws:s3:::ywp7y98feuoshjvaojp/*`
      4. In JSON edit principal: `*`
      5. Save Changes
5. Access website
   1. Copy the endpoint URL from static website hosting and open in browser

**Output**: Website is publicly accessible at the S3 bucket endpoint url

**Post Practical Questions**:

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | C      |

**Conclusion**: S3 provides an easy, scalable way to host static website without servers

---

## Practical-14

**Aim:** Create and Attach an EBS Volume

**Description:**  
Amazon Elastic Block Store (EBS) provides persistent block storage volumes for EC2 instances. These volumes can be created, attached, and used just like hard drives.

**Steps:**

1. **Login to AWS Console**
   - Open AWS Management Console.
   - Navigate to the **EC2 Dashboard**.
2. **Create an EBS Volume**
   - On the left panel, click **Volumes** → **Create Volume**.
   - Select **Volume Type** (General Purpose SSD recommended).
   - Enter **Size** (e.g., 8 GB).
   - Choose the **Availability Zone** (must match the EC2 instance zone).
   - Click **Create Volume**.
3. **Attach the Volume to EC2 Instance**
   - Select the created volume.
   - Click **Actions → Attach Volume**.
   - Select the **running EC2 instance** from the list.
   - Click **Attach**.

**Output:**

- An EBS volume is created successfully.
- The volume is now attached to the selected EC2 instance.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | C      |

**Conclusion:**  
We created an EBS volume and attached it to an EC2 instance. This helps provide persistent block storage for applications.

---

## Practical-15

**Aim:** Format and Mount EBS Volume on EC2

**Description:**  
A new EBS volume must be formatted with a file system before use. Once formatted, it is mounted to a directory in EC2 for storing files.

**Steps:**

1. **Connect to EC2 Instance**
   - Open terminal/command prompt.
   - Run `ssh -i key.pem ec2-user@<public-ip>` to connect.
2. **Check Attached Volumes**
   - Run `lsblk` to list block devices.
   - Confirm the new volume (e.g., `/dev/xvdf`).
3. **Format the Volume**
   - Run `sudo mkfs -t ext4 /dev/xvdf`.
   - This will create an **ext4 file system**.
4. **Create a Mount Directory**
   - Run `sudo mkdir /mnt/data`.
   - This creates a folder to mount the volume.
5. **Mount the Volume**
   - Run `sudo mount /dev/xvdf /mnt/data`.
   - The volume is now accessible via `/mnt/data`.
6. **Verify Mounting**
   - Run `df -h` to confirm mount point and available storage.

**Output:**

- The new EBS volume is formatted successfully. It is mounted to `/mnt/data` and ready to store files.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | A      |
| 4        | C      |
| 5        | D      |

**Conclusion:**  
We formatted and mounted the EBS volume on EC2. This allows the instance to store and access data on the new volume.

---

## Practical-16

**Aim:** Take Snapshots and Resize EBS Volumes

**Description:**  
EBS snapshots allow point-in-time backups of volumes. Volumes can also be resized to increase storage capacity when needed.

**Steps:**

1. **Create Snapshot of EBS Volume**
   - Go to **EC2 Dashboard → Volumes**.
   - Select the volume and click **Actions → Create Snapshot**.
   - Enter a **description** and click **Create Snapshot**.
2. **Check Snapshot**
   - Go to **Snapshots** section in EC2.
   - Confirm the snapshot is created.
3. **Resize EBS Volume**
   - Go back to **Volumes**, select the volume.
   - Click **Actions → Modify Volume**.
   - Increase the **size** (e.g., from 8 GB to 20 GB).
   - Click **Modify** → **Yes**.
4. **Extend File System inside EC2**
   - Connect to the instance via SSH.
   - Run `lsblk` to confirm new size.
   - Run `sudo resize2fs /dev/xvdf` to extend the file system.

**Output:**

- Snapshot of the EBS volume created successfully. Volume resized, and EC2 instance reflects the new storage capacity.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | C      |
| 4        | C      |
| 5        | C      |

**Conclusion:**  
We created snapshots for backup and resized an EBS volume. This ensures data safety and scalability for applications.

---

## Practical-17

**Aim:** Launch and Configure Amazon RDS (MySQL) Instance

**Description:**  
Amazon RDS provides a managed relational database service. In this practical, we launch and configure a MySQL RDS instance.

**Steps:**

1. **Open RDS Dashboard**
   - Go to AWS Console → RDS → **Create Database**.
2. **Select Database Engine**
   - Choose **MySQL**.
   - Select **Free Tier template** for cost-free use.
3. **Configure Database Settings**
   - Enter DB instance identifier (e.g., `mydb`).
   - Set **master username** and **password**.
4. **Choose Instance Size & Storage**
   - Select **db.t3.micro** for free tier.
   - Use default allocated storage (20 GB).
5. **Configure Connectivity**
   - Choose existing **VPC**.
   - Ensure **Public access = Yes**.
   - Select/create a **security group** that allows port **3306**.
6. **Launch Database**
   - Review settings and click **Create Database**.

**Output:**

- Amazon RDS MySQL instance launched successfully. Endpoint and connection details are available in RDS dashboard.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | B      |

**Conclusion:**  
We successfully launched and configured an RDS MySQL instance. This provides a managed environment for relational databases.

---

## Practical-18

**Aim:** Connect RDS to MySQL Workbench

**Description:**  
MySQL Workbench is a GUI tool used to connect and manage MySQL RDS instances.

**Steps:**

1. **Open MySQL Workbench**
   - Launch the MySQL Workbench application on your system.
2. **Create a New Connection**
   - Click **+ (New Connection)**.
   - Enter a name (e.g., `AWS-RDS-MySQL`).
3. **Enter RDS Connection Details**
   - Hostname = **RDS Endpoint** (from AWS RDS console).
   - Port = **3306**.
   - Username = **master username**.
   - Password = enter saved password.
4. **Test the Connection**
   - Click **Test Connection** to verify.
5. **Connect to Database**
   - Click **OK** → Open connection.

**Output:**

- Successfully connected MySQL Workbench with Amazon RDS. Able to run SQL queries on RDS from Workbench.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | D      |

**Conclusion:**  
We connected RDS with MySQL Workbench using its endpoint. This allows easy remote database management and queries.

---

## Practical-19

**Aim:** Perform SQL Operations on RDS

**Description:**  
SQL is used to create databases, tables, and manipulate data in RDS.

**Steps:**

1. **Connect MySQL Workbench to RDS**
   - Use RDS endpoint, port, username, and password.
2. **Create a New Database**
   - Run: `CREATE DATABASE testdb;`
3. **Switch to Database**
   - Run: `USE testdb;`
4. **Create a Table**
   - Run:

```sql
CREATE TABLE students (
	id INT PRIMARY KEY,
	name VARCHAR(50)
);
```

5. **Insert Records**
   - Run:

```sql
INSERT INTO students VALUES (1,'Alex'),(2,'John'),(3,'Maria');
```

6. **Retrieve Records**
   - Run: `SELECT * FROM students;`

**Output:**

- Database `testdb` created successfully. `students` table created with 3 records. Records retrieved and displayed in query results.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | A      |

**Conclusion:**  
We performed SQL operations like creating tables and inserting records on RDS. This demonstrated how to manage data on a cloud-hosted MySQL database.

---

## Practical-20

**Aim:** Create a NoSQL database using DynamoDB

**Description:** Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It stores data as key-value pairs or documents, making it ideal for applications that require high throughput and low-latency responses.

**Steps:**

1. Log in to AWS Console
2. Open DynamoDB: In the AWS Management Console, search for "DynamoDB" and click to open it.
3. Create a Table:
   - Click on Create Table.
   - Enter a Table Name (e.g., `Students`).
   - Specify the Primary Key (e.g., `StudentID` as Partition Key).
   - Optionally, configure settings like sort key, encryption, or throughput capacity.
4. Review and Create: Review the settings and click Create Table.
5. Insert Data:
   - Go to your table, click Explore items.
   - Click Create Item, fill in the attributes, and save.
6. Query or Scan Data:
   - Use Query to retrieve items by primary key.
   - Use Scan to retrieve all items in the table.

**Output:** The table is created with specified keys, data is added as items, and queries or scans retrieve the stored data efficiently.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | D      |

**Conclusion:** In this lab, a NoSQL database was created using Amazon DynamoDB. The table was configured with a primary key, data was added manually, and basic queries were performed. DynamoDB provides a flexible and scalable solution for managing unstructured or semi-structured data efficiently in cloud environments.

---

## Practical-21

**Aim:** Add and retrieve items from DynamoDB

**Description:** This practical demonstrates how to insert (add) items into a DynamoDB table and retrieve them using query and scan operations. It helps in understanding how data is stored and accessed in a NoSQL database.

**Steps:**

1. Log in to AWS Console
2. Open DynamoDB in AWS Console and select the table you created earlier
3. Add an Item:
   - Click on Explore items.
   - Click Create item.
   - Enter values for attributes like `StudentID`, `Name`, `Age`, etc.
   - Click Save.
4. Retrieve Items using Query:
   - Click on Query.
   - Enter the partition key value (`StudentID`).
   - Click Run to view the specific item.
5. Retrieve Items using Scan:
   - Click on Scan.
   - Click Run to view all items in the table.

**Output:** The added item is shown in the table with all attributes. The query retrieves a specific item by key, while the scan displays all items stored in the table.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | C      |

**Conclusion:** This practical helped in learning how to insert and retrieve data in DynamoDB. The table stores data as items with attributes, and both query and scan operations are used to access the data efficiently, which is essential for NoSQL-based applications.

---

## Practical-22

**Aim:** Build a use case with RDS

**Description:** This practical explains how to create and use a relational database with Amazon RDS (Relational Database Service). It demonstrates how structured data can be stored, managed, and accessed for real-world applications.

**Steps:**

1. Log in to AWS Console
2. Open AWS Console and search for RDS, then click to open it.
3. Create a Database Instance:
   - Click Create database.
   - Select Standard Create and choose a database engine
   - Enter the database name, master username, and password.
   - Configure instance size, storage, and connectivity options.
   - Click Create database.
4. Connect to the Database:
   - Get the database endpoint from the RDS dashboard.
   - Use a client tool (like MySQL Workbench) or application code to connect using the endpoint, username, and password.
5. Create Tables and Insert Data:
   - Insert sample records into the table.
6. Retrieve Data:
   - Run SQL queries to fetch data from the table based on conditions or retrieve all records.

**Output:** The database instance is created and becomes available for use. Tables are structured with columns and data types, and inserted data can be queried and retrieved using SQL commands. The output shows organized and accessible data for application use.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | D      |

**Conclusion:** This practical demonstrated the process of creating, connecting, and using a relational database in AWS with RDS. It provided hands-on experience in managing structured data, performing queries, and using RDS for scalable and secure data storage in cloud applications.

---

## Practical-23

**Aim:** Build a use case with DynamoDB

**Description:** This practical shows how to create and use a NoSQL database with Amazon DynamoDB for a real-world scenario. It demonstrates how data can be structured as items and accessed efficiently using DynamoDB's flexible schema.

**Steps:**

1. Open AWS Console and go to DynamoDB.
2. Create a Table:
   - Click Create table.
   - Enter a table name
   - Set the partition key
   - Configure optional settings if needed and click Create.
3. Add Items:
   - Go to the table and click Explore items.
   - Click Create item -> Enter attributes -> Save the item.
4. Retrieve Items:
   - Use Query by entering the partition key value to find specific orders.
   - Use Scan to view all orders in the table.
5. Test the Use Case:
   - Add multiple orders.
   - Retrieve orders by customer name or date using filters.

**Output:** The table stores orders as items with attributes. The data can be quickly accessed by querying with the key or scanning all records. The output shows structured order data that can be easily managed and retrieved.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | C      |
| 3        | B      |
| 4        | C      |
| 5        | B      |

**Conclusion:** This practical helped in building a use case for a real application using DynamoDB. It illustrated how unstructured or semi-structured data can be stored, retrieved, and managed efficiently, making DynamoDB suitable for applications requiring high performance and scalability.

---

## Practical-24

**Aim:** Create IAM users, groups and policies

**Description:** This practical demonstrates how to manage access and permissions in AWS using IAM (Identity and Access Management). It covers creating users, organizing them into groups, and applying policies to control access to AWS resources securely.

**Steps:**

1. Open AWS Console and search for IAM, then open it.
2. Create a Group:
   - Click User groups and then Create group.
   - Enter a group name
   - Attach existing policies or create a custom policy.
   - Click Create group.
3. Create a User:
   - Click Users and then Add users.
   - Enter a user name
   - Select Access type
   - Click Next.
4. Assign User to Group:
   - On the permissions page, add the user to the `Developers` group.
   - Review and click Create user.
5. Create a Custom Policy (Optional):
   - Click Policies and then Create policy.
   - Use the visual editor or JSON to define permissions (e.g., allow EC2 access).
   - Save and attach the policy to a group or user.

**Output:** IAM users are created and organized into groups with defined permissions. Users are granted access to AWS services according to the attached policies. The output confirms successful user creation, group association, and policy enforcement.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | C      |
| 2        | B      |
| 3        | C      |
| 4        | C      |
| 5        | C      |

**Conclusion:** This practical demonstrated how to securely manage access in AWS using IAM. By creating users, grouping them, and assigning appropriate policies, permissions are controlled efficiently, ensuring secure access to AWS resources based on user roles.

---

## Practical-25

**Aim:** Assign IAM roles to services

**Description:** This practical explains how to assign IAM roles to AWS services, allowing them to securely access other AWS resources without using long-term credentials. It demonstrates how permissions are granted through roles to services like EC2 or Lambda.

**Steps:**

1. Open AWS Console and search for IAM, then open it.
2. Create a Role:
   - Click Roles and then Create role.
   - Select the trusted entity type.
   - Choose the service that will use this role.
3. Attach Permissions:
   - Select existing policies or create a custom policy defining permissions.
   - Attach the policy to the role.
4. Name and Create Role:
   - Enter a role name.
   - Review and click Create role.
5. Assign Role to Service:
   - For EC2: Go to the EC2 dashboard, select an instance, click Actions → Security → Modify IAM role, and assign the created role.
   - For Lambda: Go to the Lambda dashboard, select a function, and under Configuration → Permissions, attach the role.

**Output:** The service (EC2 or Lambda) is assigned the IAM role with the specified permissions. The output confirms that the service can now securely access other AWS resources without needing direct credentials.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | B      |
| 5        | C      |

**Conclusion:** This practical demonstrated how IAM roles are used to grant temporary, secure access to AWS resources for services like EC2 or Lambda. Assigning roles ensures best practices for security by minimizing the use of long-term credentials and defining permissions based on the principle of least privilege.

---

## Practical-26

**Aim:** Use CloudWatch to monitor EC2/S3

**Description:** This practical demonstrates how to use Amazon CloudWatch to monitor the performance and health of AWS services like EC2 and S3. CloudWatch collects metrics and logs, helping to track resource usage, set alarms, and ensure operational health.

**Steps:**

1. Open AWS Console and search for CloudWatch, then open it.
2. Monitor EC2 Instances:
   - Go to Metrics → EC2.
   - Select the instance to view metrics like CPU utilization, network traffic, and disk activity.
   - Create an alarm by selecting a metric and clicking Create alarm.
   - Set the threshold and notification settings.
3. Monitor S3 Buckets:
   - Go to Metrics → S3.
   - Select the bucket to view metrics like number of objects, bytes downloaded/uploaded, and request counts.

**Output:** CloudWatch displays real-time and historical metrics for EC2 instances and S3 buckets. Alarms notify users when thresholds are crossed, and logs provide insights into system performance and errors.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | A      |
| 3        | B      |
| 4        | C      |
| 5        | C      |

**Conclusion:** This practical showed how CloudWatch is used to monitor AWS services like EC2 and S3. It helps ensure system health by tracking metrics and setting alarms, providing visibility into resource usage and enabling quick responses to issues.

---

## Practical-27

**Aim:** Visualize logs using CloudWatch logs

**Description:** This practical explains how to use Amazon CloudWatch Logs to view and analyze logs generated by AWS services like EC2, Lambda, or others. It helps in troubleshooting, identifying issues, and gaining insights from application and system logs.

**Steps:**

1. Open AWS Console and search for CloudWatch, then open it.
2. Access CloudWatch Logs:
   - Click on Logs → Log groups.
   - Select the log group
3. View Logs:
   - Click on a Log stream to see recorded events.
   - Review log entries like error messages, access logs, or performance data.
4. Visualize Logs with Insights:
   - Go to Logs Insights.
   - Select the log group.
   - Write queries to analyze logs (e.g., count of errors, requests over time).
   - Run the query and visualize the results in charts or tables.

**Output:** Logs are displayed in chronological order with detailed entries. Using metric filters and Insights queries, logs can be searched, aggregated, and visualized through graphs and tables, helping in monitoring and debugging applications.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | C      |
| 3        | B      |
| 4        | B      |
| 5        | C      |

**Conclusion:** This practical demonstrated how CloudWatch Logs can be used to access, search, and visualize logs from AWS services. It enables better monitoring and troubleshooting by providing structured insights from raw log data.

---

## Practical-28

**Aim:** Use AWS Budgets and Cost explorer

**Description:** This practical explains how to monitor and manage AWS costs using AWS Budgets and Cost Explorer. It helps in tracking spending, analyzing usage patterns, and setting alerts to control expenses effectively.

**Steps:**

1. Open AWS Console and search for Billing, then open it.
2. Use Cost Explorer:
   - Click on Cost Explorer.
   - Enable it if not already activated.
   - View cost and usage reports over time.
   - Filter by services like EC2, S3, etc., to analyze spending patterns.
   - Create custom reports based on time period, region, or usage type.
3. Create a Budget:
   - Click on Budgets → Create budget.
   - Select a budget type
   - Enter budget details like amount, period, and services.
   - Set up notifications to receive alerts when spending exceeds thresholds.
   - Review and create the budget.
4. Monitor and Analyze:
   - Check daily or monthly spending.
   - Review alerts and adjust budgets as needed.

**Output:** Cost Explorer shows detailed reports with charts and filters to analyze AWS usage. Budgets track expenses, and alerts notify users when costs approach or exceed the defined limits, helping in financial planning.

**Post Practical Questions:**

| Question | Answer |
| -------- | ------ |
| 1        | B      |
| 2        | B      |
| 3        | B      |
| 4        | B      |
| 5        | C      |

**Conclusion:** This practical demonstrated how to use AWS Budgets and Cost Explorer to manage cloud expenses. It enables users to track spending, understand usage trends, and receive alerts to prevent unexpected costs, promoting efficient resource management.

---
