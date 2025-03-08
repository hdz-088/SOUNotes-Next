---
header: MDB-LM
title: MDB Lab Manual
slug: mdb-lm
semester: 4
image: /mdb.jpg
accent: "#55ad47"
link: https://drive.google.com/file/d/1xmlAo6QaUtAGKgD8qA8gsQUw_6FF8z5p/view?usp=sharing
---

## Experiment 01

**Aim:** To install MongoDB on Windows, Linux, and macOS.

**Procedure:**

**1. Windows Installation**

1. Download the MongoDB MSI installer from the official [MongoDB website](https://www.mongodb.com/try/download/community).
2. Run the installer and follow the installation steps.
3. Select "Complete" installation and install MongoDB as a Windows service.
4. Add the MongoDB binary folder path to the system's environment variables for easy access.
5. Open Command Prompt and verify installation using:

```sh
mongod --version
```

**2. Linux Installation (Ubuntu/Debian)**

1. Open the terminal and import the MongoDB public key:

```sh
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

2. Add the MongoDB repository to the sources list.
3. Update the package list and install MongoDB:

```sh
sudo apt update
sudo apt install -y mongodb-org
```

4. Start the MongoDB service:

```sh
sudo systemctl start mongod
```

5. Verify installation using:

```sh
mongod --version
```

**3. macOS Installation**

1. Install Homebrew if it is not already installed.
2. Run the following command to install MongoDB:

```sh
brew tap mongodb/brew
brew install mongodb-community@5.0
```

3. Start MongoDB using:

```sh
brew services start mongodb-community@5.0
```

4. Verify the installation:

```sh
mongod --version
```

**MCQs:**

1. **B)** NoSQL Database
2. **B)** BSON
3. **A)** show dbs
4. **A)** 27017
5. **C)** A group of documents within a database

**Conclusion:** In this practical, we successfully installed MongoDB on different operating systems, including Windows, Linux, and macOS. We also verified the installation and ensured MongoDB services were running correctly.

---

## Experiment 02

**Aim:** To perform Create, Read, Update, and Delete (CRUD) operations in MongoDB.

**Procedure:**

1. **Create a Database:**

```sh
use myDatabase
```

This command creates and switches to the database `myDatabase`.

2. **Insert a Document into a Collection:**

```sh
db.users.insertOne({"name": "Alice", "age": 25, "city": "New York"})
```

3. **Retrieve Data from a Collection:**

```sh
db.users.find()
```

4. **Update a Document:**

```sh
db.users.updateOne({"name": "Alice"}, {$set: {"age": 26}})
```

5. **Delete a Document:**

```sh
db.users.deleteOne({"name": "Alice"})
```

**MCQs:**

1. **B)** `use myDatabase`
2. **B)** `db.collectionName.insertOne({})`
3. **C)** Updates the first document where name is "John" to set age to 31.
4. **B)** `db.collectionName.find()`
5. **B)** Deletes all documents where age is less than 25.

**Conclusion:** In this practical, we successfully performed basic CRUD operations in MongoDB, including creating databases, inserting, retrieving, updating, and deleting documents.

---

## Experiment 03

**Aim:** To implement schema design using embedded documents and references in MongoDB.

**Procedure:**

1. Creating an Embedded Document:

```sh
db.users.insertOne({
	"name": "Alice",
	"address": { "street": "123 Main St", "city": "New York" }
})
```

2. Creating References Between Documents:

```sh
db.users.insertOne({
	"_id": ObjectId("60c72b2f9af1f5c4b1c2d123"),
	"name": "Alice"
})

db.orders.insertOne({
	"user_id": ObjectId("60c72b2f9af1f5c4b1c2d123"),
	"product": "Laptop",
	"price": 1000
})
```

3. Retrieving Data Using `$lookup` \*\*(Reference Query):

```sh
db.orders.aggregate([
	{ $lookup: {
		from: "users",
		localField: "user_id",
		foreignField: "_id",
		as: "user_details"
	}}
])
```

**MCQs:**

1. **C)** Documents nested within another document
2. **B)** For tightly coupled data that is frequently accessed together
3. **B)** Allows for scalable and independent management of related data
4. **B)** 16MB
5. **C)** When managing large one-to-many or many-to-many relationships

**Conclusion:** In this practical, we implemented schema design using embedded documents and references for efficient data modelling in MongoDB. We explored when to use each approach based on data access patterns and scalability needs.

---

## Experiment 04

**Aim:** To create indexes in MongoDB to enhance query performance.

**Types of Indexes in MongoDB:**

1. **Single Field Index:** Indexes created on a single field to speed up queries filtering by that field.
2. **Compound Index:** Indexes created on multiple fields, allowing efficient queries that involve multiple conditions.
3. **Text Index:** Used to perform text search operations.
4. **Hashed Index:** Used for sharding to distribute data evenly across shards.
5. **Wildcard Index:** Allows indexing of fields with dynamic or unknown names.

**Procedure:**

1. **Create an Index on a Single Field:**

```sh
db.users.createIndex({ "name": 1 })
```

This command creates an ascending index on the `name` field.

2. **Create a Compound Index:**

```sh
db.users.createIndex({ "name": 1, "age": -1 })
```

This command creates an index on both `name` (ascending) and `age` (descending), improving queries that filter using both fields.

3. **Check Existing Indexes:**

```sh
db.users.getIndexes()
```

This command retrieves all indexes created on the `users` collection.

4. **Use Explain Plan to Analyze Query Performance:**

```sh
db.users.find({ "name": "Alice" }).explain("executionStats")
```

This command helps analyze how MongoDB executes queries and whether an index is being used.

5. **Remove an Index:**

```sh
db.users.dropIndex("name_1")
```

This command removes the index on the `name` field if no longer needed.

**MCQs:**

1. **B)** To speed up query performance
2. **C)** Unique Index
3. **C)** `CREATE INDEX index_name ON table_name (column_name);`
4. **C)** Composite Index
5. **A)** `db.collectionName.createIndex({ age: 1 })`

**Conclusion:** In this practical, we successfully created and managed indexes in MongoDB to optimize query performance. We also analysed query execution plans to understand the impact of indexes on database efficiency.

---

## Experiment 05

**Aim:** To perform aggregation operations such as grouping, filtering, projection, and sorting in MongoDB.

**Description:**
Aggregation in MongoDB allows users to process and analyze data efficiently. The aggregation pipeline consists of multiple stages where data undergoes transformation before producing the desired result. Common stages include:

1. `$match` - Filters documents based on a condition.
2. `$group` - Groups documents by a specified field and applies aggregate functions.
3. `$project` - Modifies the structure of documents by including/excluding fields.
4. `$sort` - Sorts documents in ascending or descending order.

**Procedure:**

1. **Filtering Data Using** `$match`:

```sh
db.sales.aggregate([
	{ $match: { "category": "Electronics" } }
])
```

2. **Grouping Data Using** `$group`:

```sh
db.sales.aggregate([
	{ $group: { _id: "$category", totalSales: { $sum: "$price" } } }
])
```

3. **Selecting Specific Fields Using** `$project`:

```sh
db.sales.aggregate([
	{ $project: { _id: 0, product: 1, price: 1 } }
])
```

4. **Sorting Data Using** `$sort`:

```sh
db.sales.aggregate([
	{ $sort: { price: -1 } }
])
```

**MCQs:**

1. **B)** `GROUP BY`
2. **B)** `$match`
3. **A)** To rename fields and include/exclude specific fields in the output
4. **C)** `HAVING`
5. **A)** `$sort`

**Conclusion:** In this practical, we successfully performed aggregation operations in MongoDB using stages like `$match`, `$group`, `$project`, and `$sort` to analyse and process data efficiently.

---

## Experiment 06

**Aim:** To aggregate data from multiple collections using the `$lookup` stage in MongoDB.

**Description:** Aggregation in MongoDB allows us to process data records and return computed results. The `$lookup` stage is used to perform joins across multiple collections, enabling us to retrieve related data efficiently.

**Procedure:**

1. **Insert Data into Users Collection:**

```sh
db.users.insertMany([
	{ "_id": ObjectId("60c72b2f9af1f5c4b1c2d123"), "name": "Alice", "email": "alice@example.com" },
	{ "_id": ObjectId("60c72b2f9af1f5c4b1c2d124"), "name": "Bob", "email": "bob@example.com" }
])
```

2. **Insert Data into Orders Collection:**

```sh
db.orders.insertMany([
	{ "user_id": ObjectId("60c72b2f9af1f5c4b1c2d123"), "product": "Laptop", "price": 1000 },
	{ "user_id": ObjectId("60c72b2f9af1f5c4b1c2d124"), "product": "Phone", "price": 500 }
])
```

3. **Perform Aggregation Using** `$lookup`:

```sh
db.orders.aggregate([
	{
		$lookup: {
			from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user_info"
		}
	}
])
```

This query joins the `orders` collection with the `users` collection using the `user_id` field and returns the user information along with order details.

**MCQs:**

1. **C)** `$lookup`
2. **B)** `from`
3. **B)** The output field for storing the joined results
4. **B)** `$match`
5. **B)** The field is set to `null` or an empty array`

**Conclusion:** In this practical, we successfully performed data aggregation from multiple collections using the `$lookup` stage in MongoDB. This method allows us to efficiently join related data across collections, similar to SQL joins.

---

## Experiment 07

**Aim:** To configure a sharded cluster in MongoDB for efficient data distribution and scalability.

**Description:** Sharding is a method used in MongoDB to distribute data across multiple servers, ensuring better performance and high availability. This technique helps manage large datasets by splitting data into smaller chunks and distributing them across different shards.

**Procedure:**

1. **Enable Sharding on a Database:**

```sh
sh.enableSharding("ecommerce")
```

This enables sharding on the ecommerce database.

2. **Add a Shard to the Cluster:**

```sh
sh.addShard("shard1.example.com:27017")
```

This command adds a new shard to the MongoDB cluster.

3. **Shard a Collection:**

```sh
sh.shardCollection("ecommerce.orders", { "order_id": "hashed" })
```

This command enables sharding on the `orders` collection using `order_id` as the shard key.

4. **Verify Sharding Status:**

```sh
sh.status()
```

This command displays the current sharding configuration and status of the cluster.

**MCQs:**

1. **B)** To improve read and write performance by distributing data across multiple servers
2. **B)** Query Router (`mongos`)
3. **A)** Store metadata and sharding configuration
4. **A)** `sh.enableSharding("database_name")`
5. **A)** To determine how data is distributed across shards

**Conclusion:** In this practical, we successfully configured a sharded cluster in MongoDB to distribute data efficiently. Sharding enhances performance by balancing data across multiple servers, reducing load, and ensuring better scalability.

---

## Experiment 08

**Aim:** To perform database backups in MongoDB using the `mongodump` command.

**Description:** Backing up a database is essential to prevent data loss and ensure recovery in case of failure. MongoDB provides the `mongodump` utility, which creates a binary export of the database that can be restored later.

**Procedure:**

1. **Create a Backup of the Entire Database:**

```sh
mongodump --out /backup
```

This command creates a backup of all databases and stores them in the `/backup` directory.

2. **Create a Backup of a Specific Database:**

```sh
mongodump --db myDatabase --out /backup
```

This command backs up only the `myDatabase` database.

3. **Create a Backup of a Specific Collection:**

```sh
mongodump --db myDatabase --collection users --out /backup
```

This command backs up the `users` collection from `myDatabase`.

4. **Verify the Backup Files:**

After running `mongodump`, check the `/backup` directory for BSON and metadata files. These files can be used for restoration.

**MCQs:**

1. **C)** To create a binary backup of a MongoDB database
2. **B)** The current working directory in a folder named `dump/`
3. **B)** `--db`
4. **A)** `mongodump --collection users --db myDatabase`
5. **D)** `--out`

**Conclusion:** In this practical, we successfully performed database backups using the `mongodump` command in MongoDB. This ensures data safety by allowing us to restore databases and collections when needed.

---

## Experiment 09

**Aim:** To restore databases and collections in MongoDB using the `mongorestore` command.

**Description:** The `mongorestore` utility is used to restore database backups created by `mongodump`. It allows users to recover entire databases or specific collections from a backup directory. This is essential for disaster recovery and data migration.

**Procedure:**

1. **Restore an Entire Database:**

```sh
mongorestore --db myDatabase /backup/myDatabase
```

This command restores the `myDatabase` database from the backup directory.

2. **Restore a Specific Collection:**

```sh
mongorestore --db myDatabase --collection users /backup/myDatabase/users.bson
```

This command restores only the `users` collection in `myDatabase`.

3. **Restore All Databases from a Backup Directory:**

```sh
mongorestore /backup
```

This command restores all databases stored in the `/backup` directory.

4. **Drop Existing Data Before Restoring (Optional):**

```sh
mongorestore --drop --db myDatabase /backup/myDatabase
```

The `--drop` option ensures existing data is removed before restoring the backup.

**MCQs:**

1. **B)** To restore a MongoDB database from a `mongodump` backup
2. **C)** `--db`
3. **A)** `mongorestore --collection users --db myDatabase dump/`
4. **B)** Drops the existing database or collection before restoring
5. **C)** `dump/` directory in the working directory

**Conclusion:** In this practical, we successfully restored databases and collections using the `mongorestore` command in MongoDB. This ensures that data can be recovered efficiently in case of accidental deletion or system failures.

---

## Experiment 10

**Aim:** To enable authentication and create user roles in MongoDB for secure access control.

**Description:** MongoDB provides role-based access control (RBAC) to manage user permissions securely. Authentication ensures that only authorized users can access and modify data. Users can be assigned different roles based on their privileges.

**Procedure:**

1. **Enable Authentication in MongoDB Configuration File:**

Edit the MongoDB configuration file (`mongod.conf`) and add the following lines:

```conf
security:
	authorization: enabled
```

Restart the MongoDB service to apply changes.

2. **Connect to MongoDB Without Authentication:**

```sh
mongo
```

3. **Switch to the Admin Database:**

```sh
use admin
```

4. **Create an Admin User:**

```sh
db.createUser({
	user: "admin",
	pwd: "securepassword",
	roles: [ { role: "root", db: "admin" } ]
})
```

This command creates an admin user with full database access.

5. **Restart MongoDB with Authentication Enabled:**

```sh
sudo systemctl restart mongod
```

6. **Connect to MongoDB with Authentication:**

```sh
mongo -u admin -p securepassword --authenticationDatabase admin
```

7. **Create a New User with Limited Permissions:**

```sh
db.createUser({
	user: "readonlyUser",
	pwd: "readonlypass",
	roles: [ { role: "read", db: "myDatabase" } ]
})
```

This user has read-only access to `myDatabase`.

**MCQs:**

1. **B)** Start the MongoDB server with the `--auth` option
2. **C)** `root`
3. **A)** `db.createUser({ user: "username", pwd: "password", roles: ["role_name"] })`
4. **B)** `read`
5. **D)** `db.createUser()`

**Conclusion:** In this practical, we successfully enabled authentication in MongoDB and created user roles to control access. Role-based access control (RBAC) ensures database security by assigning appropriate permissions to users.

---
