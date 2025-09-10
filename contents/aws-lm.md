---
header: AWS LM
title: AWS-LM
slug: aws-lm
semester: 5
image: /aws.jpg
accent: "#ff9c08"
link:
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
