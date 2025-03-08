---
header: IoT-LM
title: IoT Lab Manual
slug: iot-lm
semester: 4
image: /iot.jpg
accent: "#d572cf"
link:
---

## Practical 01

**Aim:** Getting started with Arduino and ESP32

**Post Practical Question:**

1. **C**
2. **B**
3. **A**
4. **C**
5. **C**

**Conclusion**: The images explain the differences between Arduino Uno and ESP 32, highlights ESP 32's dual core processing, Wi-Fi and Bluetooth. They cover Arduino IDE installation, ESP 32 setup, driver configuration and uploading C/C++ sketches

---

## Practical 02

**Aim:** Basics of Breadboard Circuitry Apparatus. Breadboard, 9V Battery & 9V Battery Connector

**Post Practical Question**

1. **What is the purpose of using a breadboard in circuit prototyping? Explain its advantages.**
   - breadboard is used to build and test circuits without soldering. It allows easy modifications, making it ideal for learning, prototyping, and troubleshooting. Engineers and students use it to experiment with circuits before permanent implementation.
2. **B**
3. **C**
4. **B**
5. **Why is a 470Ω resistor used in the circuit? What other resistor values can be used, and how do they affect the LED?**
   - The 470Ω resistor limits the current to protect the LED from burning out. Without it, excessive current could damage the LED. Other resistor values like 220Ω (brighter LED) or 1kΩ (dimmer LED) can be used depending on the required current flow.

**Conclusion:** This experiment provided insights into breadboard wiring, component polarity, and resistor usage for circuit safety and functionality.

---

## Practical 03

**Aim:** Simulation of lot Circuits Using Wokwi.

**[A] Simple Led blink program on Arduino board using Wokwi simulator**

```cpp
void setup() {
  pinMode(13, OUTPUT); // Set pin 13 as an output
}

void loop() {
  digitalWrite(13, HIGH); // Turn the LED on
  delay(1000); // Wait for 1 second
  digitalWrite(13, LOW); // Turn the LED off
  delay(1000); // Wait for 1 second
}
```

**[B] Simple Led blink program on ESP32 board using Wokwi simulator**

```cpp

void setup() {
  pinMode(LED, OUTPUT); // Set LED pin as an output
}

void loop() {
  digitalWrite(LED, HIGH); // Turn the LED on
  delay(1000); // Wait for 1 second
  digitalWrite(LED, LOW); // Turn the LED off
  delay(1000); // Wait for 1 second
}

```

**Exercise:**

- Draw a circuit diagram having two push-buttons and two leds. Use ESP32 board for the simulation. Here total 4 pins of ESP32 board will be used. Two for input (i.e push-buttons) and two for leds (i.e outputs). And write code when push-button 1 is pressed led 1 should be on and when push-button 2 is pressed led 2 should be on. (refer [https://www.arduino.cc/reference/en/](https://www.arduino.cc/reference/en/))

```cpp
#define BUTTON_1  5  // Push-button 1 connected to GPIO 5
#define BUTTON_2  18 // Push-button 2 connected to GPIO 18
#define LED_1     2  // LED 1 connected to GPIO 2
#define LED_2     4  // LED 2 connected to GPIO 4

void setup() {
  pinMode(BUTTON_1, INPUT_PULLUP); // Configure push-buttons as inputs with internal pull-ups
  pinMode(BUTTON_2, INPUT_PULLUP);
  pinMode(LED_1, OUTPUT); // Configure LEDs as outputs
  pinMode(LED_2, OUTPUT);
}

void loop() {
  if (digitalRead(BUTTON_1) == LOW) {
    digitalWrite(LED_1, HIGH); // Turn LED 1 ON
  } else {
    digitalWrite(LED_1, LOW); // Turn LED 1 OFF
  }

  if (digitalRead(BUTTON_2) == LOW) {
    digitalWrite(LED_2, HIGH); // Turn LED 2 ON
  } else {
    digitalWrite(LED_2, LOW); // Turn LED 2 OFF
  }
}

```

**Post Practical Question**

1. **B**
2. **B**
3. **C**
4. **B**
5. **C**

6. **What is Baud Rate?**
   - Baud rate is the rate at which data is transmitted over a communication channel, measured in bits per second (bps). In serial communication, it determines how fast information is sent between devices. For example, a baud rate of 9600 means 9600 bits are transmitted per second.
7. **List out few skills that are required to excel in IoT field.**
   - To excel in IoT, one must have knowledge of embedded systems, programming languages like C and Python, and networking protocols such as MQTT and HTTP. Understanding circuit design, sensor integration, and using platforms like Wokwi for simulation is also important. Additionally, cloud computing skills and debugging techniques are essential for developing and deploying IoT solutions effectively.

**Conclusion:** Using the Wokwi simulator, we successfully simulated LED blinking on Arduino and ESP32. We also implemented a circuit with push-buttons and LEDs, demonstrating digital input and output. This practical highlighted Wokwi’s usefulness for prototyping IoT applications without physical hardware.

---

## Practical 04

**Aim:** Blinking Led with ESP32

```cpp
// Define the LED pin (onboard LED is connected to GPIO 2)
const int ledPin = 2;

void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as an output
}

void loop() {
  digitalWrite(ledPin, HIGH); // Turn LED ON
  delay(1000); // Wait for 1000 milliseconds (1 second)
  digitalWrite(ledPin, LOW); // Turn LED OFF
  delay(1000); // Wait for 1000 milliseconds (1 second)
}
```

**Exercise:**

1. Write the program to produce different delays of 100 milliseconds, 500 milliseconds, and 60 seconds. Upload the program on the ESP32 board and check if the LED toggles (on/off) according to the set delay.

```cpp
// 1. Code for 100ms Delay

const int ledPin = 2;
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(100);
  digitalWrite(ledPin, LOW);
  delay(100);
}
```

```cpp
// 2. Code for 500ms Delay

const int ledPin = 2;
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}
```

```cpp
// 3. Code for 60s (60000ms) Delay

const int ledPin = 2;
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(60000);
  digitalWrite(ledPin, LOW);
  delay(60000);
}
```

**Post Practical Question**

1. **B**
2. **C**
3. **A**
4. **B**
5. **D**

**Conclusion:** We successfully blinked the ESP32's onboard LED using the Arduino IDE, demonstrating basic digital output control and GPIO configuration. This experiment serves as a foundation for IoT applications.

---

## Practical 05

**Aim:** Digital Input-Output Interface with ESP32

```cpp
const int button1 = 4;  // GPIO pin for push button 1
const int button2 = 5;  // GPIO pin for push button 2
const int led1 = 18;    // GPIO pin for LED 1
const int led2 = 19;    // GPIO pin for LED 2

int bstate1 = 0;
int bstate2 = 0;

void setup() {
    pinMode(led1, OUTPUT);
    pinMode(led2, OUTPUT);
    pinMode(button1, INPUT);
    pinMode(button2, INPUT);
}

void loop() {
    bstate1 = digitalRead(button1);
    bstate2 = digitalRead(button2);

    if (bstate1 == HIGH) {
        digitalWrite(led1, HIGH);
    } else {
        digitalWrite(led1, LOW);
    }

    if (bstate2 == HIGH) {
        digitalWrite(led2, HIGH);
    } else {
        digitalWrite(led2, LOW);
    }
}
```

**Post Practical Question**

1. **C**
2. **D**
3. **B**
4. **B**
5. **D**

**Conclusion:** This practical demonstrated digital input-output interfacing with ESP32, where LEDs were controlled using push buttons. It provided a basic understanding of GPIO operations, essential for automation and IoT applications.

---

## Practical 06

1. Infrared sensor

   - **Name of sensor:** Infrared sensor
   - **Type of sensor:** Analog
   - **Operating/Supply voltage:** 3.3 to 5v
   - **Range:** 2 to 10cm
   - **Resolution:** 35°
   - **Price/Cost:** 25 to 100₹

2. Humidity sensor

   - **Name of sensor:** Humidity sensor
   - **Type of sensor:** Analog
   - **Operating/Supply voltage:** 35 to 5.5v
   - **Range:** 10% to 90%
   - **Resolution:** 0°C to 50°C
   - **Price/Cost:** 200 to 350₹

3. Light sensor

   - **Name of sensor:** Light sensor
   - **Type of sensor:** Analog
   - **Operating/Supply voltage:** 3.3 to 5v
   - **Range:** 0.01 lux to 100000+ lux
   - **Resolution:** 0v to 5v
   - **Price/Cost:** 50 to 350₹

4. Hydraulic sensor

   - **Name of sensor:** Hydraulic sensor
   - **Type of Actuator:** Digital
   - **Power source:** Hydraulic
   - **Operating/Supply voltage:** 24v
   - **Price/Cost:** 500 to 2000₹

**Post Practical Question:**

1. **List the names of at least seven different sensors.**

   - Infrared (IR) Sensor
   - Humidity Sensor
   - Light Sensor (LDR)
   - Temperature Sensor (DHT11, LM35)
   - Ultrasonic Sensor (HC-SR04)
   - Pressure Sensor
   - Gas Sensor (MQ-2, MQ-135)

2. **List at least four different types of actuators based on their mode of operation.**

   - **Electric Actuator** (e.g., Servo Motor, Stepper Motor)
   - **Pneumatic Actuator** (e.g., Pneumatic Cylinder)
   - **Hydraulic Actuator** (e.g., Hydraulic Cylinder)
   - **Thermal Actuator** (e.g., Thermostat-based actuators)

3. **Define a transducer.**

   - A **transducer** is a device that converts one form of energy into another. For example, a microphone converts sound energy into electrical signals, and a thermocouple converts heat energy into electrical voltage.

4. **Differentiate between "Resolution" and "Range" of a sensor.**

   - **Resolution**: The smallest change a sensor can detect in the measured value (e.g., 0.1°C for a temperature sensor).
   - **Range**: The minimum to maximum values a sensor can measure (e.g., -40°C to 125°C for a temperature sensor).

5. **What is the primary purpose of calibration?**
   - The primary purpose of **calibration** is to ensure the accuracy and reliability of a sensor by comparing its output to a known reference and making necessary adjustments to minimize errors.

**Conclusion:** Sensors detect changes, and actuators respond to them, making automation possible. Understanding resolution, range, and calibration ensures accurate and reliable performance in various applications. Proper calibration improves precision, enhancing system efficiency.

---

## Practical 07

**Aim:** Digital Sensors Interface with ESP32 & Viewing Data on Serial Monitor.

```cpp
const int irSensorPin = 2;  // Define the digital pin for IR sensor

void setup() {
  pinMode(irSensorPin, INPUT);  // Set IR sensor pin as input
  Serial.begin(115200);         // Start serial communication

  Serial.println("IR Sensor Test");
  Serial.println("Object Detection Status:");
}

void loop() {
  int sensorValue = digitalRead(irSensorPin);

  if (sensorValue == LOW) {
    Serial.println("Object Detected");
  } else {
    Serial.println("No Object");
  }

  delay(500);
}
```

**Post Practical Question**

1. **B**
2. **C**
3. **C**
4. **D**
5. **D**

**Conclusion:** This practical showed how the ESP32 detects objects using an IR sensor and displays real-time data on the Serial Monitor, demonstrating its usefulness in IoT and automation.

---

## Practical 08

**Aim:** Digital Sensors Interface with ESP32 & Viewing Data on WebServer

```cpp
#include <WiFi.h>

const char* ssid = "Your_SSID";
const char* password = "Your_PASS";

WiFiServer server(80);
const int IR_SENSOR_PIN = 2;

void setup() {
  Serial.begin(115200);
  pinMode(IR_SENSOR_PIN, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.begin();
}

void loop() {
  WiFiClient client = server.available();

  if (client) {
    while (!client.available()) delay(10);

    client.readStringUntil('\r');
    client.flush();

    String status = digitalRead(IR_SENSOR_PIN) ? "No Object" : "Object Detected";

    client.println("HTTP/1.1 200 OK");
    client.println("Content-type:text/html");
    client.println();
    client.println(status);
    client.println();

    client.stop();
  }
}

```

**Post Practical Question**

1. **B**
2. **C**
3. **C**
4. **D**
5. **D**

**Conclusion:** The experiment demonstrates ESP32's ability to interface with a digital IR sensor and transmit data over WiFi, enabling real-time remote monitoring via a web browser.

---

## Practical 09

**Aim:** Analog Sensors Interface with ESP32 & Viewing Data on Serial Monitor

```cpp
#include <WiFi.h>
#include <WebServer.h>

const int irSensorPin = 4;

const char* ssid = "Your_SSID";
const char* password = "Your_PASS";

WebServer server(80);

void handleRoot() {
  String irStatus = digitalRead(irSensorPin) ? "No Object Detected" : "Object Detected";
  server.send(200, "text/html", "IR Sensor Status: " + irStatus);
}

void setup() {
  Serial.begin(115200);
  pinMode(irSensorPin, INPUT);

  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected to WiFi");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}

```

**Post Practical Question**

1. **C**
2. **D**
3. **C**
4. **C**
5. **D**

**Conclusion:** The ESP32 successfully interfaces with an IR sensor, detects object presence, and transmits the status over Wi-Fi using a web server. This practical demonstrates real-time sensor monitoring and IoT integration, making it useful for automation and smart systems.

---

## Practical 10

**Aim:** Analog Sensors Interface with ESP32 & Viewing Data on WebServer

```cpp
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <DHT.h>

const char* ssid = "your_SSID";
const char* password = "your_password";

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
AsyncWebServer server(80);

void setup() {
  Serial.begin(115200);

  dht.begin();

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to Wi-Fi...");
  }

  Serial.println("Wi-Fi Connected");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {
    float temp = dht.readTemperature();
    float hum = dht.readHumidity();

    String html = "<html><body><h1>ESP32 DHT11 Sensor</h1>";
    html += "<p>Temperature: " + String(temp) + " °C</p>";
    html += "<p>Humidity: " + String(hum) + " %</p>";
    html += "</body></html>";

    request->send(200, "text/html", html);
  });

  server.begin();
}

void loop() {
  // No need for code here as AsyncWebServer handles requests asynchronously
}

```

**Post Practical Question**

1. **B**
2. **B**
3. **A**
4. **D**
5. **C**

**Conclusion:** We successfully interfaced the DHT11 sensor with ESP32 and displayed real-time data on a web server, enabling remote monitoring over WiFi. This practical demonstrated IoT concepts like sensor data acquisition and network communication.

---

## Practical 11

**Aim:** Bluetooth-Enabled LED Control with ESP32

```cpp
#include <BluetoothSerial.h>

BluetoothSerial SerialBT;

const int ledPin = 2; // GPIO where LED is connected

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_LED"); // Bluetooth device name
  pinMode(ledPin, OUTPUT);
  Serial.println("Bluetooth is ready. Pair with 'ESP32_LED'");
}

void loop() {
  if (SerialBT.available()) {
    char received = SerialBT.read();
    if (received == '1') {
      digitalWrite(ledPin, HIGH);
      SerialBT.println("LED is ON");
    } else if (received == '0') {
      digitalWrite(ledPin, LOW);
      SerialBT.println("LED is OFF");
    } else {
      SerialBT.println("Invalid command. Use '1' for ON and '0' for OFF.");
    }
  }
}
```

**Post Practical Question**

1. **B**
2. **C**
3. **C**
4. **D**
5. **B**

**Conclusion:** This practical demonstrated Bluetooth-based LED control using ESP32, enabling wireless operation via a mobile app. It highlights Bluetooth communication in IoT for remote control applications.

---

## Practical 12

**Aim:** Web-based Device Control using Cloud-Platform with ESP32

```cpp
#define BLYNK_TEMPLATE_ID "TMPL3bICZ6rYk"
#define BLYNK_TEMPLATE_NAME "Prac12"
#define BLYNK_AUTH_TOKEN "n_EKBLbMQ6l67FMF0jdGEdYCPb33p0qE"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11
#define LED1_PIN 18
#define LED2_PIN 19

DHT dht(DHTPIN, DHTTYPE);
char ssid[] = "Your id";
char pass[] = "Your password";

BLYNK_WRITE(V3) {
 int pinValue = param.asInt();
 digitalWrite(LED1_PIN, pinValue ? HIGH : LOW);
}

BLYNK_WRITE(V4) {
 int pinValue = param.asInt();
 digitalWrite(LED2_PIN, pinValue ? HIGH : LOW);
}

void setup() {
 Serial.begin(9600);
 Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
 dht.begin();
 pinMode(LED1_PIN, OUTPUT);
 pinMode(LED2_PIN, OUTPUT);
}

void loop() {
 Blynk.run();
 float temperature = dht.readTemperature();
 float humidity = dht.readHumidity();

 if (isnan(temperature) || isnan(humidity)) {
   Serial.println("Failed to read from DHT sensor!");
   return;
 }

 Blynk.virtualWrite(V1, temperature);
 Blynk.virtualWrite(V2, humidity);

 if (temperature < 25) {
   digitalWrite(LED2_PIN, LOW);
 } else {
   digitalWrite(LED2_PIN, HIGH);
 }

 if (humidity < 50) {
   digitalWrite(LED1_PIN, LOW);
 } else {
   digitalWrite(LED1_PIN, HIGH);
 }
}
```

**Post Practical Question**

1. **B**
2. **D**
3. **A**
4. **B**
5. Activity:
   - Create your own account for Arduino Cloud by visiting website https://cloud.arduino.cc/and explore its basic features. Also download mobile app "Arduino IoT Cloud Remote" from play store.

**Conclusion:** This practical demonstrated how to use ESP32 with Blynk for real-time temperature and humidity monitoring and remote LED control, enhancing our understanding of IoT-based automation.

---
