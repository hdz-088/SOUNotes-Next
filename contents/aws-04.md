---
header: AWS-04
title: AWS-04 Cloud Security, Monitoring & Cost Optimization
slug: aws-04
semester: 5
image: /aws.jpg
accent: "#ff9c08"
link: https://drive.google.com/file/d/1L19jAC0DpKH5WBfzGBTYv8p07ihQ_7Q6/view?usp=sharing
---

## Shared Responsibility Model

- Divides responsibility between AWS and the customer
- AWS → protects the infrastructure
- Customers → protect their applications, data, and workloads
- Teamwork builds a secure cloud environment

## Role of AWS – Security of the Cloud

- Securing global infrastructure (hardware, software, networking)
- Physical security of data centers
- Services: firewalls, DDoS protection, encryption, monitoring
- Compliance via regular audits

## Role of Customer – Security in the Cloud

- Configure services properly
- Use strong passwords and enable MFA
- Set IAM policies with least privilege
- Define firewall and VPN rules
- Train employees on safe practices

## Amazon CloudWatch

- A tool from AWS to monitor resources and applications
- Helps to:
  - Watch performance
  - Track errors and logs
  - Set alerts for important events
- Shows how healthy your AWS resources are

### Why Use CloudWatch

- Check if your apps are running well
- Monitor CPU, memory, storage usage
- Get alerts automatically if something goes wrong
- Helps fix problems early

### CloudWatch Feature – Metrics

- Metrics = numbers showing resource usage over time
- Example: CPU usage, disk space, network traffic
- Each number has a timestamp
- Can combine metrics to create new insights

### CloudWatch Feature – Alarms

- Alarms = automatic warnings
- Watch a metric and take action if it crosses a limit
- Example: CPU > 80% → Send alert
- Can also track AWS bills

### CloudWatch Feature – Logs

- Logs = records of activities in AWS resources
- Example: EC2 servers, Route 53 DNS queries
- Helps to find and fix errors
- Stored safely so you can check anytime

## IAM Users

- Created for individuals
- Permissions given using policies
- Example: Read-only EC2 access.

## IAM Groups

- A set of IAM users.
- Easier management of permissions.
- Example: Auto scaling Admins group for scaling tasks.

## IAM Roles

- Roles provide temporary access to AWS services.
- Used when one service needs to access another.
- Example: EKS cluster using a role to manage EC2 instances.

## IAM Policies

- Policies define what actions are allowed or denied.
- Written in JSON format with:
  - Effect → Allow / Deny
  - Action → AWS operation (e.g., s3:GetObject)
  - Resource → Where it applies (e.g., S3 bucket)
- Multiple policies can be attached to users, groups, or roles.

## AWS CloudTrail

- CloudTrail is a service that records all actions in your AWS account.
- It shows who did what, when, and from where.
- Helps in security, compliance, and troubleshooting.

### Working

- Every user or service request is logged.
- Records include: identity, action, time, and IP address.
- Logs can be stored in S3 or monitored with CloudWatch
- Example: Detecting who deleted an EC2 instance.

### Benefits

- Monitor user activity to detect suspicious behavior.
- Audit compliance for organizations.
- Investigate problems using activity history.
- Long-term log storage for future security analysis

---

## Questions

1. Explain AWS Security Model.
2. Describe AWS IAM – Users, Groups, Policies, Roles.
3. What is AWS CloudWatch? Explain Metrics, Logs, Alerts.
4. What is AWS CloudTrail? Explain Monitor User Activity.
5. Explain AWS Budgets & Cost Explorer – Manage and Track Billing.
