---
header: MDB-04
title: MDB-04 Advanced MongoDB Features
slug: mdb-04
semester: 4
image: /mdb.jpg
accent: "#55ad47"
link: https://drive.google.com/file/d/1vrDezZ5BkpsDbVMF3Vi3vuSvpdVcrElS/view?usp=sharing
---

## Geospatial Indexing

- Geospatial data refers to information about the location and shape of geographic features.
- Examples include locations of stores, delivery routes, or areas covered by a service.
- MongoDB supports 2D and 2D Sphere indexes for geospatial data.
- These indexes allow efficient querying of spatial data, like finding nearby locations or determining if a point is within a certain area.
- To create a geospatial index on a collection, use the following command:

```json
db.places.createIndex({ location: "2dsphere" })
```

- The location field should store the geographic coordinates (latitude and longitude)

### Storing Geospatial Data

- Geospatial data is usually stored in **GeoJSON** format.

```json
db.places.createIndex({ location: "2dsphere" })
```

```json
db.places.insertOne({
	name: "Central Park",
	location: {
		type: "Point",
		coordinates: [-73.968285, 40.785091]
	}
})
```

### Finding Nearby Locations

- A user wants to find coffee shops within a 1 km radius.

```json
db.places.find({
	location: {
		$near: {
			$geometry: {
				type: "Point",
				coordinates: [-73.968285, 40.785091]
			},
		}
	}
	$maxDistance: 1000
})
```

### Real-Life Applications

- **Food Delivery Services**: Find restaurants within a delivery range.
- **Ride-Sharing Apps**: Match passengers with the nearest drivers.
- **Retail Stores**: Locate stores within a certain distance from a customer's location.

## Text Search

- Text search in MongoDB allows you to search for text within your documents. It helps find documents containing specific words or phrases efficiently
- Imagine you have an online bookstore, and you want users to search for books by title or description.
- MongoDB's text search can help you find all books related to the search query.

### Creating a Text Index

- Let's say you have a collection books with documents like this:

```json
{
  "_id": 1,
  "title": "Introduction to Programming",
  "description": "Learn the basics of programming in this introductory book."
}
```

- To create a text index on the title and description fields:

```json
db.books.createIndex({ title: "text", description: "text" })
```

### Performing a Text Search

- Now, suppose a user searches for "programming". You can use a text search query to find relevant books

```json
db.books.find({ $text: { $search: "programming" } })
```

- This will return all books with "programming" in the title or description.

## Transactions in MongoDB

- A transaction is a sequence of operations performed as a single unit. It ensures that either all the operations succeed, or none of them take effect.
- **ACID** Properties:
  - **Atomicity**: All or nothing.
  - **Consistency**: The database remains in a valid state before and after the transaction.
  - **Isolation**: Transactions don’t interfere with each other.
  - **Durability**: Once a transaction is committed, it is permanent.

### Key Points

- `startSession()`: Begins a new session.
- `startTransaction()`: Initiates the transaction.
- `commitTransaction()`: Commits changes if all operations are successful.
- `abortTransaction()`: Rolls back changes if any operation fails.

### How to Use Transactions

- Start a Session:

```json
const session = client.startSession();
```

- Start a Transaction:

```json
session.startTransaction();
```

- Perform Operations:

```json
try {
  const usersCollection = client.db("bank").collection("users");
 // Deduct from User A
  await usersCollection.updateOne(
    { _id: "UserA" },
    { $inc: { balance: -100 } },
    { session }
  );

  // Add to User B
  await usersCollection.updateOne(
    { _id: "UserB" },
    { $inc: { balance: 100 } },
    { session }
  );

  // Commit the transaction
  await session.commitTransaction();
  console.log("Transaction committed.");


} catch (error) {

    // Abort the transaction on error
    await session.abortTransaction();
    console.log("Transaction aborted.");

} finally {
  // End the session
  session.endSession();
}
```

## Integration and Application Development

- Integration involves connecting different systems and applications to work together. It allows data and functionality from multiple sources to be combined, providing a seamless experience.
- E-commerce Website: An e-commerce website integrates payment gateways, inventory systems, and shipping services to provide a complete shopping experience.
- Application development is the process of creating software applications. It involves designing, coding, testing, and deploying applications that meet specific user needs.

## Connecting MongoDB with Programming Languages

### Python

- Install MongoDB drivers

```shell
pip install pymong
```

- Connect MongoDB

```python
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['myDatabase']
```

- Perform CRUD Operations

```python
# Insert
db.collection.insert_one({ "name": "Alice" })

# Find
result = db.collection.find_one({ "name": "Alice" })

# Update
db.collection.update_one({ "name": "Alice" }, { "$set": { "age": 30 } })

# Delete
db.collection.delete_one({ "name": "Alice" })
```

### NodeJs

- Install MongoDB Driver

```shell
npm install mongodb
```

- Connect to MongoDB

```js
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");

async function main() {
  await client.connect();
  const db = client.db("myDatabase");
}

main().catch(console.error);
```

- Perform CRUD Operations

```js
// Insert
db.collection("users").insertOne({ name: "Bob" });

// Find
const user = await db.collection("users").findOne({ name: "Bob" });

// Update
await db.collection("users").updateOne({ name: "Bob" }, { $set: { age: 25 } });

// Delete
await db.collection("users").deleteOne({ name: "Bob" });
```

## Using MongoDB with Web Frameworks

### Express (Node.js)

- Install Express and MongoDB

```shell
npm install express mongodb
```

- Set Up a Simple Express App

```js
const express = require("express");

const { MongoClient } = require("mongodb");

const app = express();

const client = new MongoClient("mongodb://localhost:27017");

app.get("/", async (req, res) => {
  await client.connect();
  const db = client.db("myDatabase");
  const data = await db.collection("myCollection").find().toArray();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Best Practices for Application Development with MongoDB

### Schema Design

- Design your schema to match the data access patterns of your application. Avoid deep nesting and keep related data together to minimize queries.
- E-commerce App: Instead of storing orders in a separate collection and referencing them, embed order details directly in the user's document for faster access to user orders.

### Data Validation

- Use schema validation to ensure that the data inserted into the database conforms to expected formats and types.
- Healthcare System: Validate patient data to ensure required fields like name, DOB, and contact are present and correctly formatted.

### Security

- Use authentication, role-based access control, encryption, and secure connections (SSL/TLS) to protect data.
- Online Payment Platform: Use MongoDB’s role-based access control to limit access to sensitive data like credit card information to authorized personnel only.

### Backup and Restore

- Regularly back up your data and test the restore process to ensure data recovery in case of failure
- Educational Platform: Schedule daily backups of student data and periodically test restoring the backups to ensure data can be recovered in case of accidental deletion.

### Sharding for Scalability

- Use sharding to distribute large datasets across multiple servers to ensure horizontal scalability.
- Streaming Service: Implement sharding by dividing user data across different shards based on geographic regions to ensure fast data access globally.

### Error Handling

- Implement robust error handling and logging to manage database operation failures and maintain application stability.
- Banking App: Implement try-catch blocks around database transactions to handle issues like network failures or duplicate entries gracefully.

### Use Indexes

- Use indexes to improve the performance of queries. Analyze query patterns and create indexes on frequently queried fields.
- Social Media App: Create indexes on the username field to speed up user profile searches.

## Questions

1. Describe geospatial indexing and queries in MongoDB.
2. Explain how text search works in MongoDB.
3. Discuss transactions in MongoDB and their importance.
4. How can MongoDB be integrated with Python applications?
5. Explain how MongoDB can be used with web frameworks like Node.js.
6. What are the best practices for developing applications with MongoDB?
7. Explain Integration and Application Development.
8. Explain how text search works in MongoDB.
9. Discuss transactions in MongoDB and their importance.
