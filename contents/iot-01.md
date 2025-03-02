---
header: IoT-01
title: IoT-01 Overview of IoT
slug: iot-01
semester: 4
image: /iot.jpg
accent: "#d572cf"
link: https://drive.google.com/file/d/1SxDJEjcMrrtftOCDcbkwxmiFTELKHe1e/view?usp=sharing
---

## Evolution of IoT

![](/iot/04iot1.png)

## Introduction of IoT

- Nowadays The term Internet of Things (IoT) is an emerged the popular terms.
- The IoT is not just limited to the connected or networked devices, but in a broad way IoT devices exchange meaningful information from one device to another to get desire result.
- The Internet of Things (IoT) refers to the interconnected network of physical devices, vehicles, appliances, and other objects embedded with sensors, actuators, software, and connectivity technology, enabling them to collect, exchange, and act upon data with minimal human intervention.
- In simpler terms, IoT involves connecting everyday objects to the internet and enabling them to communicate and interact with each other and with humans.
- IoT is not a single technology, it’s a combination of technologies and domain knowledge.
- As a result, engineers from different domains have to work together for building a complete IoT product.
- Life would be governed entirely by Internet and IoT in the near future.

## Definition of IoT

- IoT is network of interconnected computing devices which are embedded in everyday objects, enabling them to send and receive data.
- A dynamic global network infrastructure with self configuring capabilities based on standard and interoperable communication protocols where physical and virtual ―things have identities, physical attributes and virtual personalities and use intelligent interfaces, and are seamlessly integrated into information network, often communicate data associated with users and their environments.

## Overview of IoT

- First of all we should discuss about the name “IoT – Internet of Things” in detail
- **What is Internet?**
  - In simple word, it’s a Network of Networks or Interconnected LANs.

## Characteristics of IoT

### Connectivity & Networking

- Connectivity is an important requirement of the IoT infrastructure.
- Things of IoT should be connected to the IoT infrastructure.
- Anyone, anywhere, anytime can connect, this should be guaranteed at all times.

### Scalability

- The number of elements connected to the IoT zone is increasing day by day.
- The IoT setup should be capable of handling the massive expansion.
- It can be either expand capability in terms of processing power, Storage, etc as vertical scaling or horizontal scaling by multiplying with easy cloning.

### Dynamic and Self-Adapting (Complexity)

- This is achieved through dynamic changes that occur in the environment around these devices.
- An AC should have a sensor that can send a signal to the cloud and adjust it to the premises of the place.
- Similarly, the camera can easily click photographs by adjusting to light situations, like day and night.

### Architecture

- The architecture of IoT is designed in a way that it is capable of supporting various devices, technologies, and protocols.
- It is essential for the devices to support diverse technologies and protocols and communicate with each other.

### Safety

- When things are connected to the internet in such a way there is always a danger of the sensitive personal details of the users getting compromised.
- So safety is undoubtedly a crucial characteristic of IoT.

### Self Configuring

- IoT devices are able to upgrade their software in accordance with requirements with a minimum of user participation.
- Additionally, they can set up the network, allowing for the addition of new devices to an already-existing network.

### Interoperability

- Interoperability is critical for the success of IoT, as it enables different devices and systems to work together seamlessly and provides a seamless user experience.
- Without interoperability, IoT systems would be limited to individual silos of data and devices, making it difficult to share information and create new services and applications.

### Real-time Feedback

- Real-time feedback is a fundamental characteristic of IoT systems, enabling them to sense, analyze, and act upon data in realtime to achieve desired outcomes efficiently and effectively.

### Identity of Things

- Each IoT device has a unique identity (e.g., an IP address).
- This identity is helpful in communication, tracking and to know status of the things.
- We can set up passwords or other security means.

### Automation & Control

- Automation and control are key characteristics of IoT systems.
- Enabling them to streamline processes, optimize resource utilization, and improve decision-making through remote operation, feedback loops, rule-based logic, and advanced analytics.

## Importance of IoT

- The Internet of Things (IoT) makes life easier by doing tasks for us and giving us lots of information.
- The IoT lies in its ability to transform industries, improve quality of life, and address societal challenges by harnessing the power of connected devices, data analytics, and intelligent automation.

## Components of IoT System

- The hardware involved in an IoT system includes remote dashboard devices, control devices, servers, routing or bridge devices, and sensors. These devices manage key tasks and functions, such as systematization, action specification, security, messaging, and pass-specific target and action detection.

### Sensors or devices

- Basically sensors or devices are used to collect and transmit data and perform actions based on that data. For example, temperature and humidity can be measured.
- Here are the different types of sensors: temperature sensors, humidity sensors, proximity sensors, motion sensors, light sensors, pressure sensors, gas sensors and GPS sensors.

### Gateway

- A gateway is a device that basically acts as an intermediary between the sensor and the central cloud.
- Gateways are one of the essential components of IoT to provide communication, management and data processing.
- Gateways in IoT have several functions such as data aggregation, communication, security, protocol translation, load balancing and latency reduction.

### Cloud

- Cloud in IoT refers to a service that provides management, storage and processing of data generated by IoT (Internet of Things) devices.
- IoT has some key aspects of cloud like: data storage, data collection, security, connectivity, integration and cost efficiency.

### Analytics

- This is a important and critical part of IoT makes the most of its potential by analyzing useful information from IoT devices and sensors.
- Analytics involves tasks like data processing, machine learning, and statistical analysis. IoT uses analytics in many ways, such as finding unusual patterns, monitoring the environment, managing energy, and supporting smart cities and farming.

### User Interface

- User end application where user can monitor or control the data.
- A user interface, also known as a UI in the Internet of Things (IoT), provides an interface.
- Users can interact with applications and systems through interfaces.
- Key features of IoT user interfaces include data visualization, easytouse design, personalization, remote control, integration, authentication, and security.

## Functioning of IoT System

- The main parts of the Internet of Things (IoT) are devices that collect data. These devices can be tiny sensors, fitness trackers, or large machines doing complex tasks.
- Each device has a unique IP address because they are connected to the internet. The data they collect is sent to central places like cloud servers, where it is processed and analyzed so businesses can make decisions based on the results.
- Sometimes, real-time action is needed, making it inconvenient to send data to a central server. In these cases, edge computing is used.
- This means processing the data close to where it is collected, with the option to send it to a central location later if necessary.

## M2M Architecture

![](/iot/04iot2.png)

- M2M architecture focuses on the direct communication between devices or machines without human intervention.
- M2M systems typically focus on direct device communication for specific tasks like monitoring and control, often within constrained environments.

### Characteristics

- **Decentralized**: Devices communicate directly with each other or through an intermediary such as a gateway.
- **Device-centric**: Communication is primarily between devices, often following a peer-to-peer model.
- **Scalability**: Well-suited for large-scale deployments where numerous devices need to interact autonomously.

### Examples

- **Smart Agriculture**: Monitoring systems in agriculture use M2M communication between soil moisture sensors, weather stations, and irrigation systems. Sensors collect data autonomously and trigger actions like watering based on pre-set conditions, without human intervention.
- **Fleet Management**: GPS tracking devices in vehicles communicate directly with centralized servers or fleet management systems. This allows real-time monitoring of vehicle location, speed, and maintenance needs, enabling efficient fleet operations without constant human oversight.
- **Industrial Automation**: Manufacturing plants use M2M communication between machines such as robots, conveyor systems, and quality control sensors. Machines exchange data to optimize production processes, detect faults, and adjust operations automatically, enhancing productivity and reducing downtime.

## End-To-End Architecture

![](/iot/04iot3.png)

- End-to-End architecture emphasizes seamless communication across all layers of the IoT ecosystem, from devices at the edge to cloud services and applications.
- End-to-End IoT systems encompass a broader ecosystem involving interconnected devices, networks, and applications, enabling comprehensive data collection, analysis, and decision-making across various domains such as smart cities, healthcare, and logistics.

### Characteristics

- **Centralized or Distributed**: Can be centralized (where data flows through a central hub or server) or distributed (where data flows between multiple nodes or tiers).
- **Holistic View**: Ensures data integrity, security, and management across the entire IoT network.
- **Complexity**: Often more complex to implement due to the need for comprehensive integration and management of various components.

### Examples

- **Smart Cities**: Integrated smart city solutions involve End-to-End IoT architecture where data from various sensors (traffic, weather, pollution) across the city is collected, processed, and analyzed centrally. City administrators use this data to make informed decisions on traffic management, waste management, and resource allocation.
- **Healthcare Monitoring**: Wearable health devices (like fitness trackers or medical monitors) collect vital signs and patient data. This data is transmitted securely through various networks to cloud-based healthcare platforms. Healthcare providers access and analyze this data to monitor patient health remotely, enabling proactive care management.
- **Supply Chain Management**: End-to-End IoT solutions in supply chain management involve tracking goods throughout their journey from manufacturer to retailer or consumer. IoT-enabled tags and sensors on packages communicate location, temperature, and condition data through multiple nodes (e.g., warehouses, transport vehicles) to ensure timely delivery and quality control.

## Advantages of IoT

1. **Improved Customer Engagement and Communication**
   - IoT enables businesses to offer **real-time** customer support through smart devices.
   - **Personalized experiences** are possible, such as smart recommendations in e-commerce or proactive maintenance alerts in smart homes.
   - **Enhanced communication** through AI-driven chatbots, smart assistants (Alexa, Google Assistant), and real-time notifications.
2. **Support for Technology Optimization**
   - IoT helps in **automating processes**, improving efficiency in industries like manufacturing, healthcare, and logistics.
   - **Predictive maintenance** reduces equipment downtime by analyzing sensor data to detect issues before failures occur.
   - **Remote monitoring** allows businesses to track assets, improve security, and optimize operations in real time.
3. **Support for a Wide Range of Data Collection**
   - IoT collects **vast amounts of data** from sensors, smart devices, and connected systems, providing valuable insights.
   - This data helps in **decision-making, trend analysis, and predictive analytics**, improving business strategies.
   - **Diverse applications** include smart cities (traffic control, pollution monitoring), healthcare (wearable devices), and agriculture (precision farming).
4. **Reduced Waste**
   - IoT optimizes **resource usage**, reducing energy and material waste in industries.
   - Smart grids, smart lighting, and automated climate control help in **energy conservation**.
   - In **supply chain management**, IoT minimizes overproduction, food spoilage, and excess inventory through **real-time tracking and predictive demand analysis**.

## Disadvantages of IoT

1. **Loss of privacy and security**:
   - As all the household appliances, industrial machinery, public sector services like water supply & transport, many other devices all are connected to the internet, a lot information is available on it. This information is prone to attack by hackers.
2. . **Flexibility**:
   - Many are concerned about the flexibility of an IoT system to integrate easily with another.
3. **Complexity**:
   - The IoT is a diverse & complex network. Any failure or bugs in the software or hardware will have serious consequences. Even power failure can cause lot of inconvenience.
4. **Compatibility**:
   - Currently, there is no international standard of compatibility for the tagging

## Integration Between IoT & Cloud Computing

- Cloud computing is a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned & released with minimal management effort or service provider interaction.
- The cloud paradigm can delivered using essentially three different service models
  - Infrastructure as a Service (IaaS)
  - Platform as a Service (PaaS)
  - Software as a Service (SaaS)

## Interdependencies of IoT & Cloud Computing

- A Cloud based IoT platform is then a dynamic & flexible resource sharing platform delivering IoT services. It offers scalable resources & services management.
- The exploitation of IoT data depends on massive resources, which should be available when needed and scaled back when not needed.
- Cloud technologies offer decentralized and scalable information processing & analytics and data management capabilities.

## Application of IoT

1. **Home**: Buildings where people live. It controls home and security systems.
2. **Offices**: Energy management and security in office buildings, improved productivity, including for mobile employees.
3. **Factories**: Places with repetitive work routines, including hospitals and farms, operating efficiencies, optimizing equipment use and inventory.
4. **Vehicles**: Vehicles including cars, trucks, ships, aircraft, and trains, condition-based maintenance, usage-based design, pre-sales analytics.
5. **Cities**: Public spaces and infrastructure in urban settings, adaptive traffic control, smart meters, environmental monitoring, resource management.
6. **Worksites**: It is custom production environments like mining, oil and gas, construction, operating efficiencies, predictive maintenance, health and safety.

## Scope & Areas of Applications

- The scope and application areas of IoT is very huge, Agriculture, Assets Tracking, Energy Sector, Defense, Embedded Applications, Education, Waste Management, Healthcare Products, Telemedicine, Safety And Security Sector, Smart City Applications etc.

## IoT Stack Layers

### Layer-01 Physical or Sensor Layer

- This layer is concerned about the physical components, which mainly includes sensors.
- In this layer, the sensors are the core component.
- Temperature sensor, pressure sensor, humidity sensor, etc. can all be referred as physical layer components.
- In industrial automation, PLC, actuator, etc. are considered as physical layer components.
- This layer is responsible for data collection and action execution.
- Selection of sensors is important and choosing an appropriate sensor is the challenge in this layer.
- Action execution, sensing and data collection happens here.

### Layer-02: Processing & Control Layer

- This important layer contains core components of IoT system.
- The microcontrollers or processors are found in this layer.
- The data is received by the microcontrollers from the sensors.
- A variety of development kits are available in the market; like Arduino, Raspberry Pi, Node MCU, PIC, ARM development boards, etc.
- Microcontroller/Processor and operating system play vital role at this layer
- Data collected from the sensors is processed in this layer.

### Layer-03: Hardware Interface Layer

- The 3rd layer in the stack is the Hardware Interface Layer.
- Hardware components and communication standards such as RS232, CAN, SPI, SCI, I 2C, etc. occupy this layer.
- All these components ensure flawless communication 4.Handshake happens here.

### Layer-04: RF Layer

- Whenever one talks about IoT, RF is discussed and comes in picture.
- It plays a major role in the communication channel – whether it is short range or long range.
- Protocols used for communication and transport of data based on RF are listed in this layer.
- Some famous and common protocols are Wi-Fi, NFC, RFID, Bluetooth, Zigbee, etc.
- RF layer does communication of data using radio frequency based Electromagnetic (EM) waves
- This layer can also include Li-Fi; which are effective alternates for RF protocols.

### Layer-05: Session/Message Layer

- Like computer network session management is also important in IoT.
- There are many protocols which manage how messages or data are broadcasted to the cloud.
- Layer 5 (session layer) deals with the various messaging protocols as MQTT, CoAP, etc. and also other protocols such as SSH and FTP.

### Layer-06: User Experience Layer

- This layer deals with providing best experience to the end users of IoT products.
- The 6th layer takes care of rich UI designs with lots of features, which provide a pleasing experience while using the service/system or product.
- Object-oriented programming languages, scripting languages, analytics tools, etc. all should be included in this layer.
- This is also known as User Experience and Visualization Layer.

### Layer-07: Application Layer

- Everything comes to perfection at this layer.
- This layer utilizes the rest six layers in order to develop desired application.
- It can range from a simple automation application to smart city application.
- After learning about the layers, it is now easier to relate them with an application, for example, vegetable quality monitoring during transport from source to the destination using IoT.

## References

1. [Geeks4Geeks IoT Material](https://www.geeksforgeeks.org/introduction-to-internet-of-things-iot-set-1/)
2. [Microsoft IoT Tutorials](https://microsoft.github.io/IoT-For-Beginners/#/)
3. [IoT Course (English)](https://www.youtube.com/watch?v=h0gWfVCSGQQ)

---
