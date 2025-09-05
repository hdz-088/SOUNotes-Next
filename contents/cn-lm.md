---
header: CN-LM
title: CN Lab Manual
slug: cn-lm
semester: 5
image: /cn.jpg
accent: "#355765"
link:
---

> We’d like to inform you that the study material on our website will be updated as soon as we receive the latest content. Our team is continuously working to bring the best and most reliable resources for students.
>
> Thank you for your patience and support — stay tuned for regular updates!

## Practical 01

**Aim:** Introduction to data Transmission in network.

**Exercise:**

1. **Write a program to convert character into binary and binary digits into character.**

```python
# Convert string to binary
string_input = input("Enter a string: ")
binary_output = ' '.join(format(ord(char), '08b') for char in string_input)
print("Binary value:", binary_output)

# Convert binary to string
binary_input = input("Enter binary (separate each 8-bit by space): ")
string_output = ''.join(chr(int(b, 2)) for b in binary_input.split())
print("String:", string_output)

```

**Conclusion:** This experiment shows how characters are converted to binary and back, which is the basic principle of data transmission in networks.

---

## Practical 02

**Aim:**
Study of networking devices

**Exercise:**

1. **Define topology & list names of different topologies.**

   - A network topology is the arrangement of devices and connections in a network. It defines how devices communicate and impacts performance and reliability. Common topologies include: Bus, Star, Ring, Mesh, Tree, and Hybrid.

2. **List out different kinds of addresses at layers with example.**

| **Form of data** | **Layer at address** | **Name of address** | **Example**         |
| ---------------- | -------------------- | ------------------- | ------------------- |
| Bits             | Physical             | Not Available       | Not Available       |
| Frames           | Data Link            | MAC Address         | `00:1A:2B:3C:4D:5E` |
| Packets          | Network              | IP Address          | `127.0.0.1`         |
| Segments         | Transport            | Port Number         | 80, 5500, 443       |
| Messages         | Application          | URL                 | `www.google.com`    |

3. **What does RJ45 stand for?**

   - RJ45 stands for **Registered Jack 45**. It is a standard connector used for Ethernet cables to connect computers and networking devices.

4. **Define mapping of:**

   - **ARP:** Address Resolution Protocol; maps **IP address → MAC address**
   - **RARP:** Reverse Address Resolution Protocol; maps **MAC address → IP address**

5. **Difference between HUB and SWITCH?**

| **Feature**        | **Hub**                                        | **Switch**                                       |
| ------------------ | ---------------------------------------------- | ------------------------------------------------ |
| Device Type        | Networking device                              | Networking device                                |
| Layer              | Operates at **Layer 1 (Physical Layer)**       | Operates at **Layer 2 (Data Link Layer)**        |
| Function           | Broadcasts data to **all ports**               | Sends data only to **specific destination port** |
| Data Transfer      | **Half-duplex** (data flows one way at a time) | **Full-duplex** (simultaneous send & receive)    |
| Intelligence       | **No** filtering or learning capability        | **Yes**—Learns MAC addresses and makes decisions |
| Speed & Efficiency | Slower, more collisions                        | Faster, fewer or no collisions                   |
| Security           | Low (data sent to all devices)                 | Higher (data sent only to the right device)      |
| Example Use Case   | Small, outdated networks                       | Modern LANs, offices, enterprises                |
| Cost               | Cheaper                                        | More expensive                                   |

**Conclusion:** This experiment helps understand basic networking devices, their functions, and addressing, which are essential for network communication.

---

## Practical 03

**Aim:** To study various networking commands

**Exercise:**

1. **Why we are using `ping` command?**

   - The `ping` command is used to test the connectivity between two network devices. It checks whether a device (like a computer or server) is reachable over the network and measures the round-trip time for messages sent.

2. **Explain `arp` command.**
   - The `arp` (Address Resolution Protocol) command is used to view and manage the ARP table on a device. It shows the mapping between **IP addresses and MAC addresses**, helping in resolving network layer addresses to link layer addresses.

**Conclusion:** This experiment helps understand basic networking commands, their purpose, and how they assist in network troubleshooting and device communication.

---

## Practical 04

---

## Practical 05

**Aim:**
Introduction to different types of wired transmission media

**Exercise:**

1. **Compare different types of light sources used in optical fiber.**

| **Feature**               | **LED (Light Emitting Diode)**                                             | **Laser Diode**                                                                |
| ------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Wavelength                | Broad range (850–1300 nm), may cause signal dispersion over long distances | Narrow range (1300–1550 nm), less signal loss, ideal for long distances        |
| Power Output              | Low, suitable for short-distance communication like LANs                   | High, suitable for long-distance communication like WANs or internet backbones |
| Bandwidth                 | Limited bandwidth, restricts data transmission speed                       | High bandwidth, supports high-speed data transmission                          |
| Cost & Size               | Cheaper, easy to manufacture, larger in size                               | Expensive, compact, requires precise alignment                                 |
| Applications & Efficiency | Used in short-distance, low-speed communication; moderate efficiency       | Used in long-distance, high-speed networks; high efficiency and minimal loss   |

2. **List out different types of wired media used in computer lab with their specifications.**

   - **Twisted Pair Cable (UTP/STP):** Consists of pairs of insulated copper wires twisted together to reduce interference. Used in LANs. Categories include Cat5e and Cat6. Maximum distance ~100m, speed up to 1 Gbps (Cat5e) and 10 Gbps (Cat6).

   - **Coaxial Cable:** Single copper conductor with insulating layer, metal shield, and outer insulation. Used in older networks and cable TV. Moderate bandwidth, distance up to 500m, resistant to interference.

   - **Fiber Optic Cable:** Uses glass or plastic fibers to transmit data as light pulses. Supports very high speeds (up to 100 Gbps), long distances (several kilometers), and is immune to electromagnetic interference. Used in backbone networks.

   - **Shielded Twisted Pair (STP):** Twisted pair cable with extra shielding to protect against electromagnetic interference. Slightly more expensive than UTP, used in industrial environments.

   - **Ethernet Cable (Cat5e / Cat6 / Cat6a):** Standard cable for LAN connections, supports high-speed data transmission. Cat5e: up to 1 Gbps, Cat6: up to 10 Gbps for short distances. Easy to install and widely used in labs.

3. **Give difference between following:**

(A) Twisted Pair Cable and Coaxial Cable

| **Feature**      | **Twisted Pair Cable**                           | **Coaxial Cable**                                           |
| ---------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| **Structure**    | Pairs of insulated copper wires twisted together | Central conductor with insulating layer and metallic shield |
| **Interference** | Reduces interference through twisting            | Reduces interference using shielding                        |
| **Cost**         | Generally cheaper                                | More expensive                                              |
| **Flexibility**  | More flexible and easier to install              | Less flexible, especially thicker types                     |
| **Application**  | Ethernet LANs, telephone lines                   | Cable TV, broadband, older LANs                             |

(B) Twisted Pair Cable and Fiber Optic Cable

| **Feature**      | **Twisted Pair Cable**                      | **Fiber Optic Cable**                            |
| ---------------- | ------------------------------------------- | ------------------------------------------------ |
| **Medium**       | Copper wires                                | Glass or plastic strands                         |
| **Signal**       | Electrical impulses                         | Light pulses                                     |
| **Interference** | Susceptible to electromagnetic interference | Immune to EMI/RFI                                |
| **Bandwidth**    | Limited bandwidth                           | Extremely high bandwidth                         |
| **Application**  | Short-distance communication (LANs)         | Long-distance communication, high-speed networks |

(C) Fiber Optic Cable and Coaxial Cable

| **Feature**   | **Fiber Optic Cable**            | **Coaxial Cable**                      |
| ------------- | -------------------------------- | -------------------------------------- |
| **Medium**    | Glass or plastic strands         | Copper conductor                       |
| **Signal**    | Light pulses                     | Electrical signals                     |
| **Bandwidth** | Extremely high                   | Lower                                  |
| **Distance**  | Very long (km to hundreds of km) | Shorter (hundreds of meters to few km) |
| **Security**  | More secure, difficult to tap    | Less secure, easier to tap             |

(D) Wired Communication and Wireless Communication

| **Feature**      | **Wired Communication**                        | **Wireless Communication**                     |
| ---------------- | ---------------------------------------------- | ---------------------------------------------- |
| **Medium**       | Physical cables (copper, fiber optic)          | Air/space (electromagnetic waves)              |
| **Mobility**     | Limited mobility, requires physical connection | High mobility, no physical connection needed   |
| **Installation** | Complex, requires cable routing                | Simpler, no physical wiring needed             |
| **Reliability**  | More reliable, less prone to interference      | Can be less reliable, affected by interference |
| **Applications** | LANs, telephone, cable TV, fiber internet      | Wi-Fi, Bluetooth, cellular, satellite          |

**Conclusion:** This experiment helps understand different types of wired transmission media, their characteristics, applications, and the key differences between various cables and communication methods, which are essential for designing and maintaining efficient networks.

---
