---
header: AI-LM
title: AI Lab Manual
slug: ai-lm
semester: 5
image: /ai.jpg
accent: "#185bcc"
link:
---

## Practical 01

**Aim:** Write a program to identify the type of AI (Narrow, General, Super) based on input description.

**Description:** This program allows users to enter a description and categorizes it as Narrow AI, General AI, or Super AI based on keywords or logic.

**Code:**

```python
def identify_ai(description):
    desc = description.lower()

    if "specific" in desc or "limited" in desc or "task" in desc:
        return "Narrow AI"
    elif "human" in desc or "reasoning" in desc or "thinking" in desc:
        return "General AI"
    elif "beyond" in desc or "superhuman" in desc or "future" in desc:
        return "Super AI"
    else:
        return "Unknown AI Type"


# Example usage
print(identify_ai("AI designed for a specific task like playing chess"))
print(identify_ai("AI that can think and reason like a human"))
print(identify_ai("AI with superhuman intelligence beyond humans"))
```

**Output:**

```
Narrow AI
General AI
Super AI
```

### Post Practical Questions

**1. What is Narrow AI?**

- c) AI focused on a single task

**2. Which AI is only theoretical so far?**

- b) Super AI

**3. General AI can:**

- c) Learn like humans

**4. Which AI is currently most used in industry?**

- b) Narrow AI

**5. Which test is used to check if AI mimics human intelligence?**

- c) Turing Test

**Conclusion:** The program successfully classifies AI descriptions into Narrow AI, General AI, and Super AI using keyword-based logic in Python.

---

## Practical 02

**Aim:** Design a simple rule-based chat bot using if-else conditions (min 5 responses).

**Description:** This program simulates a simple chat bot that responds to user inputs in a conversational way using rule-based logic.

**Code:**

```python
def chatbot():
    print("ChatBot: Hi! Type 'bye' to exit.")
    while True:
        user_input = input("You: ").lower()

        if "hello" in user_input or "hi" in user_input:
            print("ChatBot: Hi there!")
        elif "your name" in user_input:
            print("ChatBot: I'm ChatBot.")
        elif "how are you" in user_input:
            print("ChatBot: I'm good!")
        elif "help" in user_input:
            print("ChatBot: How can I help?")
        elif "bye" in user_input:
            print("ChatBot: Bye! Have a nice day.")
            break
        else:
            print("ChatBot: I don't understand.")

# Run chatbot
chatbot()
```

**Output (Sample Run):**

```txt
ChatBot: Hi! Type 'bye' to exit.
You: hello
ChatBot: Hi there!
You: what is your name?
ChatBot: I'm ChatBot.
You: how are you
ChatBot: I'm good!
You: help
ChatBot: How can I help?
You: bye
ChatBot: Bye! Have a nice day.
```

### Post Practical Questions

**1. Rule-based chat bots work on:**

- b) if-else conditions

**2. What is a key limitation of rule-based bots?**

- b) Cannot learn from conversations

**3. A rule-based chat bot requires:**

- c) Predefined rules

**4. What happens if input doesn't match any rule?**

- c) Default or fall back response

**5. Which keyword would likely trigger a farewell response?**

- b) bye

**Conclusion:** The program creates a simple interactive chatbot that runs in the console. It responds to greetings, questions, and farewells using if-else rules, showing how AI can simulate basic conversation.

---

## Practical 03

**Aim:** Write a program to take a user problem (e.g., travel route) and display state-space representation.

**Description:** This program models a real-world problem (finding a travel path) using a state-space graph, where nodes are cities and edges represent paths.

**Code:**

```python
states = {
    "Home": ["Bus Stop"],
    "Bus Stop": ["Home", "Station", "College"],
    "Station": ["Bus Stop"],
    "College": []
}

print("\nState-Space Representation of the Problem:\n")
for state in states:
    print(f"{state} → {states[state]}")
```

**Output:**

```txt
State-Space Representation of the Problem:

Home → ['Bus Stop']
Bus Stop → ['Home', 'Station', 'College']
Station → ['Bus Stop']
College → []
```

### Post Practical Questions

**1. State-space consists of:**

- b) States and transitions

**2. A state-space is often modeled using:**

- b) Graphs

**3. What is the start point of a state-space?**

- c) Initial state

**4. What kind of Al problems use state-space modeling?**

- c) Problem-solving

**5. In the code, what does recursion help with?**

- c) Visiting all nodes

**Conclusion:** The program represents a travel route as a state-space model. Each location is a state, and the connections between them represent possible transitions. This shows how real-world problems like travel planning can be expressed as a state-space representation in AI.

---

## Practical 04

**Aim:** Implement Breadth-First Search (BFS) to traverse a graph.

**Description:** BFS explores all nodes at the present depth before moving to the next level. Ideal for finding the shortest path in unweighted graph.

**Code:**

```python
from collections import deque

def bfs(start):
    visited = []
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.append(node)
            queue.extend(graph[node])
    return visited

graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

print("BFS Traversal: ", bfs('A'))
```

**Output:**

```
BFS Traversal:  ['A', 'B', 'C', 'D', 'E', 'F']
```

### Post Practical Questions

**1. BFS uses which data structure?**

- c) Queue

**2. BFS is best suited for:**

- b) Shortest path

**3. In BFS, nodes are explored:**

- c) Level by level

**4. Which traversal method is non-recursive?**

- b) BFS

**5. BFS stops when:**

- a) All nodes are visited

**Conclusion:** The BFS algorithm successfully traverses the graph level by level using a queue, ensuring all nodes are visited in breadth-first order.

---

## Practical 05

**Aim:** Implement Depth-First Search (DFS) to traverse a graph.

**Description:** DFS explores as far as possible along a branch before backtracking. It's useful in problem-solving where all paths must be explored.

**Code:**

```python
from collections import deque

graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': [],
  'F': []
}

def dfs(start, goal, path = None):
  if path is None:
    path = []
  path = path + [start]
  if start == goal:
    return path
  for node in graph[start]:
    if node not in path:
      new_path = dfs(node, goal, path)
      if new_path:
        return new_path
  return None

print("\nDFS Path from A to F: ", dfs('A', 'F'))
```

**Output:**

```
DFS Path from A to F:  ['A', 'C', 'F']
```

### Post Practical Questions

**1. DFS explores nodes:**

- c) As deep as possible

**2. Which data structure does DFS use (in iterative form)?**

- b) Stack

**3. A risk of DFS without tracking is:**

- b) Infinite loop

**4. DFS is recursive by:**

- b) Nature

**5. DFS is not guaranteed to:**

- c) Return shortest path

**Conclusion:** The DFS path-search version returns a valid route by exploring depth-first and stopping once the goal is reached; with the given neighbor order, it finds A → C → F.

---

## Practical 06

**Aim:** Write a simple Hill Climbing algorithm to find the maximum of a function (e.g., -x² + 4x).

**Description:** Hill Climbing is a heuristic algorithm that keeps moving in the direction of increasing value until the peak is reached.

**Code:**

```python
def f(x):
    return -x**2 + 4*x   # Function: -x² + 4x

def hill_climb(start, step_size=0.1, max_iterations=100):
    current = start
    for _ in range(max_iterations):
        # Check neighbors
        left = current - step_size
        right = current + step_size

        # Evaluate neighbors
        if f(left) > f(current):
            current = left
        elif f(right) > f(current):
            current = right
        else:
            break   # No improvement → peak reached
    return current, f(current)

# Run algorithm
peak_x, peak_y = hill_climb(start=0)
print("Peak found at x =", peak_x, "with value f(x) =", peak_y)
```

**Output:**

```
Peak found at x = 2.0000000000000004 with value f(x) = 4.0
```

### Post Practical Questions

**1. Hill Climbing is a:**

- b) Heuristic search

**2. Hill Climbing stops when:**

- c) No better neighbor exists

**3. It can get stuck in:**

- c) Local maxima

**4. Which step moves search forward?**

- f) Heuristic evaluation

**5. Hill Climbing is not good for:**

- c) Complex landscapes

**Conclusion:** The Hill Climbing algorithm successfully finds the maximum of the function by iteratively checking neighbors and moving toward higher values until the peak is reached.

---

## Practical 07

**Aim:** Write a mini knowledge base using if-else rules (e.g.. Disease Diagnosis).

**Description:** This program demonstrates rule-based reasoning using symptoms to suggest possible diseases.

**Code:**

```python
# Mini Knowledge Base: Disease Diagnosis

def diagnose(symptoms):
    if "fever" in symptoms and "cough" in symptoms:
        return "Flu"
    elif "headache" in symptoms and "nausea" in symptoms:
        return "Migraine"
    elif "thirst" in symptoms and "urination" in symptoms:
        return "Diabetes"
    elif "chest pain" in symptoms and "breathlessness" in symptoms:
        return "Heart Disease"
    else:
        return "No diagnosis"

print("Enter symptoms (comma separated):")
symptoms = input().lower().split(",")
print("Possible Diagnosis:", diagnose([s.strip() for s in symptoms]))
```

**Output:**

```
Enter symptoms (comma separated):
fever, cough
Possible Diagnosis: Flu
```

### Post Practical Questions

**1. What knowledge type is used here?**

- b) Declarative

**2. The rules are:**

- b) Hardcoded if-else

**3. This approach simulates:**

- b) Expert systems

**4. Main advantage of rule-based systems?**

- c) Transparency

**5. Limitation of rule-based AI?**

- a) Cannot scale well

**Conclusion:** The program takes multiple symptoms as input, checks them using if-else rules, and returns a possible disease, demonstrating basic rule-based reasoning in AI.

---

## Practical 08

**Aim:** Simulate Forward and Backward Reasoning.

**Description:** Forward reasoning starts with known facts backward reasoning starts with the goal and works backward.

**Code:**

```python
# Known facts
facts = ["It is raining", "I have an umbrella"]

# Rules
rules = {
    "I will get wet": ["It is raining", "I don't have an umbrella"],
    "I will stay dry": ["It is raining", "I have an umbrella"]
}

# Forward Reasoning
print("Forward Reasoning:")
for conclusion, conditions in rules.items():
    if all(condition in facts for condition in conditions):
        print(conclusion)

# Backward Reasoning
goal = "I will stay dry"
print("\nBackward Reasoning:")
if goal in rules:
    print("To achieve '{}', check if these facts are true: {}".format(goal, ", ".join(rules[goal])))
```

**Output:**

```
Forward Reasoning:
I will stay dry

Backward Reasoning:
To achieve 'I will stay dry', check if these facts are true: It is raining, I have an umbrella
```

### Post Practical Questions

**1. Forward reasoning starts with:**

- c) Facts

**2. Backward reasoning starts with:**

- c) Goal

**3. Forward reasoning is also called:**

- b) Data-driven

**4. Backward reasoning is useful in:**

- b) Verifying goals

**5. Reasoning type in Expert Systems?**

- c) Both

**Conclusion:** The program demonstrates forward reasoning by deriving conclusions from known facts and rules, and backward reasoning by identifying the facts required to achieve a specific goal.

---

## Practical 09

**Aim:** Develop a Tic-Tac-Toe game with a simple AI move.

**Description:** The program builds a basic two-player Tic-Tac-Toe with a random AI or rule-based move.

**Code:**

```python
import random

# Initialize board
board = [" " for _ in range(9)]

def print_board():
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--+---+--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--+---+--")
    print(f"{board[6]} | {board[7]} | {board[8]}")

def check_winner(player):
    win_combinations = [
        [0,1,2], [3,4,5], [6,7,8], # rows
        [0,3,6], [1,4,7], [2,5,8], # columns
        [0,4,8], [2,4,6]           # diagonals
    ]
    for combo in win_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False

def ai_move():
    empty_cells = [i for i, x in enumerate(board) if x == " "]
    return random.choice(empty_cells)

# Game loop
for turn in range(9):
    print_board()
    if turn % 2 == 0:
        move = int(input("Player X, enter position (0-8): "))
    else:
        move = ai_move()
        print(f"AI O chooses position {move}")
    if board[move] == " ":
        board[move] = "X" if turn % 2 == 0 else "O"
    if check_winner("X"):
        print_board()
        print("Player X wins!")
        break
    elif check_winner("O"):
        print_board()
        print("AI O wins!")
        break
else:
    print_board()
    print("It's a tie!")
```

**Output:**

```
Player X, enter position (0-8): 0
AI O chooses position 4
...
Player X wins!
```

### Post Practical Questions

**1. What does AI do in Tic Tac Toe?**

- b) Make automatic moves

**2. A smart AI uses:**

- c) Minimax algorithm

**3. Random AI is:**

- c) Unpredictable

**4. Which library is useful for randomness?**

- c) random

**5. AI makes a move based on:**

- b) Available spots

**Conclusion:** The program allows a player to play Tic-Tac-Toe against a simple AI. It demonstrates basic AI move selection, game rules, and win detection logic.

---

## Practical 10

**Aim:** Write a program to detect biased or fair Al output using sample text.

**Description:** This program checks sample outputs for keywords indicating potential bias. such as gendered terms.

**Code:**

```python
# Program to detect biased or fair AI output
text = input("Enter sample AI output: ").lower()

biased_words = ["he", "she", "man", "woman", "male", "female", "girls", "boys"]

if any(word in text for word in biased_words):
    print("The output may contain bias.")
else:
    print("The output seems fair.")
```

**Output:**

```
Enter sample AI output: The engineer is a man
The output may contain bias.
```

### Post Practical Questions

**1. What does the program check?**

- c) Gender bias

**2. What can cause AI bias?**

- b) Biased training data

**3. Ethical concern in biased AI:**

- b) Fairness

**4. Detecting bias improves:**

- c) Trust

**5. "He" or "She" in output indicates:**

- b) Bias

**Conclusion:** The program checks the sample text and successfully identifies whether the AI output is biased or fair.

---

## Practical 11

**Aim:** Simulate a coin toss using random number generation to mimic Al-style random decision making.

**Description:** This demonstrates how Al or programs can use pseudo-randomness for decision-making. similar to probabilistic behavior.

**Code:**

```python
import random

# Function to simulate coin toss
def coin_toss():
    return random.choice(["Heads", "Tails"])

print("Press Enter to toss the coin (type 'q' to quit):")
while True:
    user_input = input()
    if user_input.lower() == 'q':
        break
    print("Coin Toss:", coin_toss())
```

**Output :**

```
Press Enter to toss the coin (type 'q' to quit):

Coin Toss: Heads

Coin Toss: Tails

Coin Toss: Heads
```

### Post Practical Questions

**1. Which library is used for randomness in Python?**

- b) random

**2. What is the probability of getting heads in a fair coin toss?**

- b) 0.5

**3. AI randomness is actually:**

- b) Pseudo-random

**4. Which function randomly selects an element?**

- a) choice()

**5. What is the output of the program?**

- a) Heads or Tails

**Conclusion:** The program allows the user to simulate multiple coin tosses interactively. Each press of Enter generates a new random outcome, demonstrating AI-style probabilistic decision-making.

---

## Practical 12

**Aim:** Write a program where the computer (AI) tries to guess a user's secret number using a guided approach.

**Description:** This practical implements a number guessing game where Al guesses the number using feedback such as "higher" or "lower", demonstrating a search-based decision strategy.

**Code:**

```python
# Number guessing game where AI guesses the user's number

print("Think of a number between 1 and 100 and I will try to guess it.")

low = 1
high = 100
feedback = ""

while feedback != "correct":
    guess = (low + high) // 2
    print(f"My guess is: {guess}")
    feedback = input("Is it 'higher', 'lower', or 'correct'? ").lower()

    if feedback == "higher":
        low = guess + 1
    elif feedback == "lower":
        high = guess - 1

print(f"Yay! I guessed your number: {guess}")
```

**Output :**

```
// if guess is 75
Think of a number between 1 and 100 and I will try to guess it.
My guess is: 50
Is it 'higher', 'lower', or 'correct'? higher
My guess is: 75
Is it 'higher', 'lower', or 'correct'? correct
Yay! I guessed your number: 75
```

### Post Practical Questions

**1. What search strategy is AI using here?**

- b) Binary search

**2. What is the time complexity of binary search?**

- b) O(log n)

**3. Which feedback tells the AI that its guess is correct?**

- c) c

**4. The midpoint formula (Low + High) // 2 is used to:**

- b) Calculate average guess

**5. This type of AI guessing is:**

- b) Guided search

**Conclusion:** The program demonstrates a guided search approach where AI guesses the user's number using feedback. It shows how AI can make decisions and narrow down possibilities efficiently.

---

## Practical 13

**Aim:** Build a simple rule-based system that advises whether to carry an umbrella or not.

**Description:** This experiment applies if-else rules to weather input (rainy, sunny, cloudy) to produce advisory messages.

**Code:**

```python
# Rule-based system to advise about umbrella

weather = input("Enter the weather (rainy, sunny, cloudy): ").lower()

if weather == "rainy":
    print("Carry an umbrella.")
elif weather == "sunny":
    print("No umbrella needed. Wear sunglasses!")
elif weather == "cloudy":
    print("It might rain. Keep an umbrella handy.")
else:
    print("Weather not recognized. Be prepared for anything!")
```

**Output:**

```
Enter the weather (rainy, sunny, cloudy): rainy
Carry an umbrella.
```

### Post Practical Questions

**1. This program uses:**

- b) Rule-based reasoning

**2. What advice is given for "rainy"?**

- b) Carry an umbrella

**3. Which keyword is central to decision making here?**

- a) if-else

**4. Rule-based weather systems are an example of:**

- b) Knowledge-based AI

**5. Which is NOT a weather condition in the code?**

- d) windy

**Conclusion:** The program uses simple if-else rules to give advice based on the weather, demonstrating a basic rule-based AI system.

---

## Practical 14

**Aim:** Detect human faces from an image or camera feed using OpenCV's pre-trained Haar cascades.

**Description:** This practical introduces students to computer vision by using Haar Cascade classifiers to detect faces.

**Code:**

- Run this command before executing the program: `pip install opencv-python`
- Make sure you have the image (`face_sample.jpg`) in the same folder as your script.

```python
import cv2

# Load the pre-trained Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# Read an image
img = cv2.imread("face_sample.jpg")  # image path
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Detect faces
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

# Draw rectangles around detected faces
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)

# Display the image with detected faces
cv2.imshow("Detected Faces", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

**Output:** The program opens a window showing the image `"face_sample.jpg"` with **rectangles drawn around detected faces**.

### Post Practical Questions

**1. Which library is used for face detection here?**

- c) `opencv (cv2)`

**2. Haar cascade is an example of:**

- b) Pre-trained classifier

**3. Why is the image converted to grayscale?**

- b) For faster processing

**4. What does `detectMultiScale()` do?**

- b) Detects faces at different scales

**5. Which function shows the image in OpenCV?**

- c) cv2.imshow()

**Conclusion:** The program successfully detects human faces in an image using OpenCV’s Haar Cascade classifier, introducing the concept of computer vision and pre-trained models.

---
