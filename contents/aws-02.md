---
header: AWS-02
title: AWS-02 AWS Compute and Storage Services
slug: aws-02
semester: 5
image: /aws.jpg
accent: "#ff9c08"
link: https://drive.google.com/file/d/1FqnEvNhFEWpdDDu3RZ8dvkgkzPv1afu9/view?usp=sharing
---

## Elastic Compute Cloud (EC2)

- EC2 stands for Elastic Compute Cloud is a service from Amazon Web Services (AWS).
- EC2 is an on-demand computing service on the AWS cloud platform called instances.
- It lets you rent virtual computers to run your applications. You pay only for what you use.

### Steps to Create an EC2 Instance

1. Login and Navigate to EC2 Dashboard
2. Launch a New Instance
3. Enter name of your instance
4. Choose Amazon Machine Image: Amazon Linux 2
5. Select Instance Type: t2.micro
6. Configure Key Pair
7. Network and Storage Configuration
8. Review and Launch

### Connect to EC2

1. Open terminal
2. Go to the folder where your `.pem` file is stored
3. Run following commands

```shell
chmod 400 mykey.pem
ssh -i mykey.pem ec2-username@public-ip
```

### Connecting Windows EC2 Instance

1. Convert `.ppk` key file
2. Open PuTTY and type following command

```shell
ec2-user@<Public-IP>
```

3. Go to connection -> SSH -> Auth -> Load `.ppk` file
4. Click open and accept

### Termination Reminder

- Whenever we create an instance, we should think of termination too.
- AWS follows a 'pay-per-use' strategy where if we forgot to terminate an instance it may lead to unusual billing.

### Terminating Instance

- Click and select the instance that has to be terminated.
- Under instance state, click on terminate instance.
- Now, in the popup give the confirmation by clicking on terminate.
- You will see a message 'Successfully terminated `<Instance ID>`'.

## AWS EC2 Instance Types

### General Purpose Instance

- These instances offer a balanced mix of compute, memory, and networking, suitable for a broad range of applications like web servers, code repositories, and development environments.
- Examples: M family (M6g, M5, M4) and T family (T4g, T3, T2).

### Compute Optimized Instance

- Designed for compute-intensive tasks, these instances provide high processing power, ideal for workloads like batch processing, scientific modeling, and game servers.
- Example: C family (C6g, C5, C4).

### Memory Optimized Instance

- These instances offer high memory capacity, suitable for memory-intensive applications such as in-memory databases, real-time processing, and data analytics.
- Example: R family (R6g, R5, R4).

### Storage Optimized Instance

- These instances are optimized for high, sequential read and write access to large amounts of data on local storage.
- Suitable for NoSQL databases, data warehousing, and storage-intensive apps.
- Examples: I family (I3, I4) and D family (D3, D2).

### Accelerated Computing Instance

- These instances utilize hardware accelerators for floating-point calculations, graphics processing, or data pattern matching.
- Examples: P family (P3, P2) for GPU acceleration and G family (G4, G3) for graphics.

## Security Group

- **Security Group**: Virtual firewall managing inbound and outbound traffic for one or more Amazon EC2 instances or other AWS services within a VPC.
- **Inbound Rules**: Types of traffic permitted to use the resources.
- **Outbound Rules**: Regulate traffic permitted to depart from the resources.

### Key Security Group Terms

- **Amazon EC2**: Scalable computation capability in the cloud.
- **VPC**: Virtual Private Cloud for launching AWS resources.
- **CIDR**: Classless inter-domain routing for IP allocation.
- **Protocol**: Rules controlling communication between devices.
- **Port**: Communication endpoint for a process or service.

### Steps to Create Security Groups

1. Access the EC2 Dashboard
2. Navigate to Security Groups
3. Initiate Security Group Creation
4. Define Security Group Details
5. Configure Inbound Rules
6. Configure Outbound Rules
7. Review and Create

## AWS Key Pair

- A Key Pair is just two keys that work together.
- Public key:
  - Stored on the EC2 instance when launched.
  - Used by the instance to encrypt data, decrypted only by private key.
- Private key:
  - Downloaded and kept by the user.
  - Used to decrypt data encrypted with the public key.
  - Enables secure access to the EC2 instance.
- No private key → no entry.

### How Key Pair Works

- When you launch an EC2 instance, you specify a key pair.
- Public key is placed on the instance.
- To connect, you use the private key to authenticate yourself.

## Simple Storage Service (S3)

- Simple Storage Service (S3) in AWS
- Stores data as objects (photos, audio, videos, documents, etc.)
- Highly scalable and secure
- Retrieve/store data anytime, from anywhere
- Integrates with other AWS services

### Usage

- Data Storage – For small to large applications
- Backup & Recovery – Keep critical data safe
- Hosting Static Websites – HTML, CSS, JS hosting
- Data Archiving – Use S3 Glacier for cheaper storage
- Big Data Analytics – Store data lakes for analytics & ML

### What is an S3 Bucket

- Storage container for objects in S3
- Must have a globally unique name
- Stores objects like text, images, audio, videos
- Configurable with Access Control Lists (ACLs)

### How S3 Works

- Organize data in Buckets
- Store objects inside buckets
- Control access with ACLs & Bucket Policies
- Features: Versioning, Lifecycle Management, Scalability

### Buckets and Objects

- Bucket = Parent folder for objects (limit: 100 per account)
- Object contains: Key, Version ID, Value, Metadata, Tags
- Max object size: 5 TB

### Versioning and Access Control

- Versioning: Keeps all versions, prevents overwrites, adds cost
- ACLs: Legacy method for granting access, can be disabled for better control

### Bucket Policies and Lifecycle

- Bucket Policies: JSON rules for access control
- Lifecycle Rules: Move data to cheaper storage or delete old data automatically

### Key and Null Objects

- Key: Path to an object inside a bucket (e.g., javaPrograms/GFG.java)
- Null Object: Object with null version ID (versioning suspended)

### How to use S3

- Login → Go to S3 Service → Create Bucket
- Upload files (Console or AWS CLI)
- Set permissions (Public/Private)
- Define Lifecycle Rules
- Enable Access Logging

### Manage Permissions

- **Bucket Policies** – Bucket policies can be attached directly to the S3 bucket and they are in JSON format which can perform the bucket level operations. With the help of bucket policies, you can grant permissions to the users who can access the objects present in the bucket. If you grant permissions to any user he can download, and upload the objects to the bucket.
- **ACLs** – ACLs are legacy access control mechanisms for S3 buckets instead of ACLs we are using the bucket policies to control the permissions of the S3 bucket. By using ACL you can grant the read, and access to the S3 bucket or you can make the objects public based on the requirements.
- **IAM Policies** – IAM policies are mostly used to manage the permissions to the users and groups and resources available in the AWS by using the IAM roles options. You can attach an IAM policy to an IAM entity (user, group, or role) granting them access to specific S3 buckets and operations.

### Features of S3

- Durability: 99.999999999% (11 nines)
- Availability: 99.99% uptime
- Server-Side Encryption (SSE): SSE-S3, SSE-C, SSE-KMS
- Infinite storage & 5 TB per object
- Pay-as-you-use pricing

### Advantages

- Scalable storage
- High availability & durability
- Data lifecycle automation
- Integrates with AWS services (Lambda, Analytics, ML, etc.)

## Creating Bucket in S3

1. Log in to AWS Console
2. Search for S3
3. Go to S3 Dashboard
4. Click on "Create Bucket"
5. Enter a unique bucket name
6. Select AWS region
7. Object ownership: default
8. Block public access
9. Disable bucket versioning
10. Leave other advanced settings as default
11. Click on "Create Bucket"

## Hosting a Static Website using S3

1. Create a Bucket
2. Open your newly created bucket
3. Go to Permission -> Block public access
4. Uncheck block all public access
5. Confirm the warning and save changes
6. Upload your website files: Select bucket -> Upload -> Add folder/files -> Upload
7. Go to permission tab
8. Block public access: Edit -> uncheck -> Confirm
9. Object ownership: Edit -> Enable ACLs -> Save
10. Make objects public: Object -> Select All files -> Actions -> Make public using ACLs -> Confirm -> Close
11. Click on your HTML file name -> Copy the object URL
12. Test your website: Paste URL in browser

## Elastic Block Store

- Amazon Elastic Block Store (EBS) is persistent block storage for EC2.
- Durable: Data persists independently of the EC2 instance.
- Flexible: Size, performance, and type can be changed.
- Available: Can be attached/detached from EC2 instances.

### Attaching EBS Volumes

- Add extra storage to an EC2 instance without stopping it.
- Separate application data from the root volume.
- Increase storage capacity without replacing the instance.

#### Steps to Attach

- Create or Select a Volume in the same Availability Zone as EC2.
- Select the volume → Actions → Attach Volume.
- Choose the Instance ID and device name (e.g., /dev/sdf).
- SSH into instance, format, and mount the volume.
- Update `/etc/fstab` for auto-mount on reboot.

### EBS Snapshots

- Point-in-time backups of your EBS volumes.
- Stored in Amazon S3 (managed by AWS).
- Incremental: Only changed blocks are stored after the first snapshot.
- Benefits of Snapshot:
  - Backup critical workloads.
  - Enable disaster recovery.
  - Migrate data across regions or accounts.
  - Create new volumes from snapshots.

### Steps to Create a Snapshot

1. Go to AWS EC2 console -> Volumes
2. Select the volume → Actions → Create Snapshot.
3. Enter a description → Click Create.
4. Check status under Snapshots (Pending → Completed).

### Steps to Resize an EBS Volume

1. Go to AWS EC2 Console → Volumes.
2. Select your volume → Actions → Modify Volume.
3. Increase size (and optionally change type).
4. Click Modify → Yes.

### Extended File System After Resizing - Linux

```bash
// Identify the volume.
lsblk

// Extend partition.
sudo growpart /dev/xvdf 1

// For ext4 filesystem.
sudo resize2fs /dev/xvdf1

//For XFS filesystem.
sudo xfs_growfs /
```

### Extended File System After Resizing - Windows

1. Use Disk Management tool.
2. Right-click the partition → Extend Volume.

## Questions

1. Explain the steps to launch, configure, and connect to an Amazon EC2 instance.
2. What are EC2 Instance Types? Describe all five categories with suitable examples.
3. Explain the role of Key Pairs in EC2. Describe the Public Key, Private Key, and how they work together to provide secure access.
4. Describe the process of creating an S3 bucket, uploading objects, and enabling static website hosting.
5. How many type of the S3 classes? Explain in details.
6. What is Amazon EBS? Explain the steps to attach, format, and mount a new EBS volume.
7. How are EBS snapshots created? Mention their benefits and explain how resizing an EBS volume can help when storage runs low.

---
