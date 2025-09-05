---
header: AI-LM
title: AI Lab Manual
slug: ai-lm
semester: 5
image: /ai.jpg
accent: "#185bcc"
link:
---

> We’d like to inform you that the study material on our website will be updated as soon as we receive the latest content. Our team is continuously working to bring the best and most reliable resources for students.
>
> Thank you for your patience and support — stay tuned for regular updates!

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

```txt
Narrow AI
General AI
Super AI
```

### Post Practical Questions

| Question                                                        | Answer                         |
| --------------------------------------------------------------- | ------------------------------ |
| 1. What is Narrow AI?                                           | c) AI focused on a single task |
| 2. Which AI is only theoretical so far?                         | b) Super AI                    |
| 3. General AI can:                                              | c) Learn like humans           |
| 4. Which AI is currently most used in industry?                 | b) Narrow AI                   |
| 5. Which test is used to check if AI mimics human intelligence? | c) Turing Test                 |

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

| Question                                                   | Answer                             |
| ---------------------------------------------------------- | ---------------------------------- |
| 1. Rule-based chat bots work on:                           | b) if-else conditions              |
| 2. What is a key limitation of rule-based bots?            | b) Cannot learn from conversations |
| 3. A rule-based chat bot requires:                         | c) Predefined rules                |
| 4. What happens if input doesn't match any rule?           | c) Default or fall back response   |
| 5. Which keyword would likely trigger a farewell response? | b) bye                             |

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

| Question                                              | Answer                    |
| ----------------------------------------------------- | ------------------------- |
| 1. State-space consists of:                           | b) States and transitions |
| 2. A state-space is often modeled using:              | b) Graphs                 |
| 3. What is the start point of a state-space?          | c) Initial state          |
| 4. What kind of Al problems use state-space modeling? | c) Problem-solving        |
| 5. In the code, what does recursion help with?        | c) Visiting all nodes     |

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

```txt
BFS Traversal:  ['A', 'B', 'C', 'D', 'E', 'F']
```

### Post Practical Questions

| Question                                    | Answer                   |
| ------------------------------------------- | ------------------------ |
| 1. BFS uses which data structure?           | c) Queue                 |
| 2. BFS is best suited for:                  | b) Shortest path         |
| 3. In BFS, nodes are explored:              | c) Level by level        |
| 4. Which traversal method is non-recursive? | b) BFS                   |
| 5. BFS stops when:                          | a) All nodes are visited |

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

```txt
DFS Path from A to F:  ['A', 'C', 'F']
```

### Post Practical Questions

| Question                                                  | Answer                  |
| --------------------------------------------------------- | ----------------------- |
| 1. DFS explores nodes:                                    | c) As deep as possible  |
| 2. Which data structure does DFS use (in iterative form)? | b) Stack                |
| 3. A risk of DFS without tracking is:                     | b) Infinite loop        |
| 4. DFS is recursive by:                                   | b) Nature               |
| 5. DFS is not guaranteed to:                              | c) Return shortest path |

**Conclusion:** The DFS path-search version returns a valid route by exploring depth-first and stopping once the goal is reached; with the given neighbor order, it finds A → C → F.

---
