---
header: MLDNN-04
title: MLDNN-04 Deep Neural Networks
slug: mldnn-04
semester: 6
image: /mldnn.jpg
accent: "#2d3a64"
link:
---

## Deep Neural Network (DNN) Architecture

- A Deep Neural Network (DNN) is a type of Artificial Neural Network that has many hidden layers placed between the input layer and the output layer.
- Each hidden layer helps the network learn more detailed and complex patterns from the data. Instead of learning everything at once, the network learns step by step, where each layer understands something new from the previous layer’s output.
- In a DNN, the input layer receives raw data such as images, numbers, or text.
- The data then passes through several hidden layers, where neurons perform calculations using weights, bias, and activation functions.
- Early hidden layers learn simple features (like edges in an image), while deeper layers learn advanced features (like shapes, faces, or objects).
- Finally, the output layer gives the prediction or result, such as a class label or numerical value.
- Deep Neural Networks are powerful because multiple hidden layers allow them to model complex relationships that simple neural networks cannot handle.
- This makes DNNs very useful in real-world applications such as image recognition, speech recognition, natural language processing, medical diagnosis, and self-driving cars.
- However, because they are deep and complex, they require large amounts of data, strong computing power, and proper training techniques to perform well.

### Architecture Components

- Input Layer: Receives raw data (features).
- Hidden Layers: Perform complex computations and learn patterns.
- Output Layer: Produces final prediction or result.
- Weights & Biases: Control the learning process.
- Activation Functions: Introduce non-linearity.

## Forward Propagation

- Forward propagation is the process where input data moves forward through the network to produce output.
- Forward propagation is the process by which a neural network takes input data and moves it forward layer by layer to produce an output or prediction.
- It is the first and most important step in how a neural network works, because this is how the model actually makes a decision.

**How Forward Propagation Works:**

1. **Input Layer:**
   - The process starts at the input layer, where raw data is given to the network.
   - Example: pixel values of an image, marks of a student, or numbers in a dataset.
2. **Weighted Sum Calculation:**
   - Each neuron in the next layer receives the input and:
   - Multiplies each input by its weight
   - Adds all the results together Adds a bias This calculation is: `z = (x_1 w_1 + x_2 w_2 + ... + x_n w_n) + b`
3. **Activation Function:**
   - The result (z) is passed through an activation function (ReLU, Sigmoid, etc.).
   - This decides how strongly the neuron should respond.
   - It introduces non-linearity, allowing the network to learn complex patterns.
4. **Hidden Layers Processing:**
   - The output of one layer becomes the input of the next hidden layer.
   - This process repeats through all hidden layers, with each layer learning more detailed information from the data.
5. **Output Layer:**
   - The final layer produces the output:
     - A number (regression)
     - A class label or probability (classification)

**Importance:**

- It allows the network to make predictions
- It shows how data flows inside the network
- It is required to calculate loss
- It is the base for backpropagation
- Without forward propagation, the network cannot learn or predict anything.

## Backpropagation

- Backpropagation is the process of correcting errors by updating weights.
- Backpropagation is the fundamental learning algorithm used to train neural networks.
- In a neural network, data first moves forward through the network during forward propagation, where inputs are multiplied by weights, passed through activation functions, and produce an output.
- This output is then compared with the true target value using a loss function to calculate the error.
- Backpropagation works by propagating this error backward from the output layer to the input layer.
- Using the chain rule of calculus, it computes how much each weight in the network contributed to the error.
- These gradients indicate the direction and magnitude of change required for each weight.
- Finally, an optimization method such as gradient descent updates the weights by making small adjustments to minimize the loss.
- By repeating this forward and backward process over many training examples, the network gradually reduces error and learns the correct mapping between inputs and outputs.

**How Backpropagation Works:**

- Imagine a student trying to guess a number. The correct number is 50.

1. **Calculate the loss (error):**
   - The student guesses 40
   - Error = 50 − 40 = 10 This difference is the loss.
2. **Find how much each weight caused the error:**
   - The teacher checks: Was the mistake because of poor practice?
   - Or because of wrong method? Similarly, the neural network checks which weights were responsible for the wrong answer.
3. **Send the error backward through the network:**
   - The teacher explains the mistake from the final answer back to the basics.
   - The network also sends the error backward from output layer to input layer to understand where it went wrong.
4. **Update weights using gradient descent:**
   - Now the student studies a little more and corrects the mistake.
   - The network slightly changes the weights so that next time the answer is closer to 50.

## Difference: Forward & Backpropagation

| **Aspect**              | Forward Propagation                         | Backpropagation                           |
| ----------------------- | ------------------------------------------- | ----------------------------------------- |
| **Direction of Flow**   | Input → Hidden layers → Output layer        | Output → Hidden layers → Input layer      |
| **Main Purpose**        | Generate predictions from inputs            | Learn by correcting errors                |
| **When it Happens**     | First step in training and testing          | After forward propagation during training |
| **Uses Target Output?** | No                                          | Yes                                       |
| **Error Calculation**   | Does not calculate error                    | Uses loss function to compute error       |
| **Weight Update**       | Weights remain unchanged                    | Weights are updated                       |
| **Mathematical Role**   | Computes activations using weights and bias | Computes gradients using chain rule       |
| **Learning Involved**   | No learning happens                         | Learning happens here                     |
| **Optimization Needed** | No                                          | Yes (Gradient Descent, Adam, etc.)        |
| **Example Meaning**     | “What is the output?”                       | “How can we improve the output?”          |

## Loss Function

- A loss function tells a machine learning or deep learning model how wrong its prediction is.
- Think of it like marks in an exam —the more mistakes you make, the higher the loss.
- During training, the model tries to minimize this loss, so that its predictions become more accurate over time.
- Loss functions guide the learning process by showing the model how much improvement is needed.
  **There are two functions:**
- **Mean Squared Error (MSE)**
  - Mean Squared Error (MSE) is mainly used in regression problems, where the output is a continuous numerical value (like price, temperature, marks, or salary).
  - MSE calculates the difference between the actual value and the predicted value, squares this difference, and then takes the average of all such squared differences.
  - **Squaring ensures that:**
    - Negative and positive errors don’t cancel each other
    - Bigger mistakes are punished more heavily
  - **Example**: House Price Prediction
    - Actual house price = ₹50 lakhs
    - Predicted house price = ₹45 lakhs
    - Error = 5 lakhs
    - Squared error = `(5^2 = 25)`
  - If the model makes many such predictions, MSE averages all these squared errors to show overall performance.
  - **Key Points:**
    - Used for regression
    - Penalizes large errors strongly
    - Smooth and easy to optimize
    - Lower MSE = better model
- **Cross-Entropy Loss**:
  - Cross-Entropy Loss is used in classification problems, where the output belongs to a category or class
  - Instead of measuring numeric distance, cross-entropy checks:
    - How confident the model is
    - Whether the confidence is given to the correct clas
  - If the model is **very confident** about the wrong answer, the loss becomes very high
  - If the model is **confident** about the correct answer, the loss is very low.
  - **Example**: Image Classification
    - For classifying images as Cat / Dog:
    - Correct class = Cat
    - Model outputs probabilities using Softmax
    - Cross-entropy checks how close the predicted probability is to 1 for the correct class
  - **Key Points**:
    - Used for binary and multi-class classification
    - Works well with Softmax and Sigmoid
    - Encourages correct and confident predictions
    - Lower cross-entropy = better classification

## Optimization Techniques

- Optimization techniques are methods used in machine learning and deep learning to improve a model’s performance.
- Their main goal is to reduce the loss (error) and make the model’s predictions more accurate.
- During training, the model repeatedly updates its weights using an optimizer until it reaches the best possible solution, called the minimum loss.

- **Stochastic Gradient Descent (SGD)**:
  - Stochastic Gradient Descent (SGD) is one of the simplest and most basic optimization techniques.
  - **SGD helps the computer learn by**:
    - Looking at one example at a time
    - Fixing its mistake a little bit
    - Moving step by step toward the right answer
  - Because it learns in small, quick steps, SGD is simple and fast. But sometimes, it may wiggle or shake near the correct answer before settling down
  - **How SGD Works**:
    - Instead of using the entire dataset at once, SGD:
    - Takes one data point at a time
    - Calculates the error for that data point
    - Updates the weights immediately
  - This means the model learns step by step, making frequent small updates.
  - **Advantages**:
    - Easy to understand and implement
    - Faster updates because it uses only one data sample
    - Useful for very large datasets
  - **Limitation**:
    - Because updates are noisy, the path toward minimum loss can be zig-zag
    - It may oscillate near the minimum instead of settling smoothly
    - Choosing the right learning rate is difficult
- **Adam Optimizer**:
  - Adam (Adaptive Moment Estimation) is an advanced and widely used optimization technique in deep learning.
  - If the mistake is big, Adam learns faster and if the mistake is small, Adam slows down.
  - **Adam helps the computer by:**
    - Remembering what went wrong before
    - Choosing the right speed to learn
    - Reaching the correct answer faster and smoothly
  - That’s why Adam is very popular and is used a lot in deep learning
  - **How Adam Works**:
    - Adam improves learning by:
    - Remembering past gradients (momentum)
    - Automatically adjusting the learning rate for each weight
  - This allows Adam to move faster in important directions and slower where needed.
  - **Advantages**:
    - Faster and smoother convergence
    - Works well with noisy data and large networks
    - Requires less tuning of learning rate
    - Handles sparse data efficiently
  - Because of its speed, stability, and accuracy, Adam is the preferred optimizer in deep learning.

## Overfitting

- Overfitting is a common problem in machine learning where a model performs very well on training data but poorly on unseen or new data.
- This happens because the model learns not only the underlying patterns in the data but also the noise and random fluctuations present in the training set.
- As a result, the model effectively memorizes the training data instead of learning a general rule that can be applied to new inputs.
- Overfitting typically occurs when a model is too complex relative to the amount of available data—for example, when using a deep neural network with many layers or parameters on a small dataset.
- In such cases, the model has enough capacity to fit even irrelevant details, leading to low training error but high validation or test error.
- This lack of generalization makes the model unreliable in real-world scenarios, where data patterns may vary slightly from what was seen during training.
- In practice, overfitting is identified by observing a large gap between training performance and validation performance.
- Techniques such as regularization, dropout, early stopping, and using more training data are commonly applied to reduce overfitting and improve the model’s ability to generalize.

## Regularization Techniques

- Regularization techniques are used to prevent overfitting by controlling the complexity of a machine learning or deep learning model.
- They work by adding constraints during training so that the model focuses on learning general patterns rather than memorizing training data.
- The main goal of regularization is to improve the model’s generalization ability on unseen data.
- **L1 Regularization (Lasso Regularization):**
  - L1 regularization adds a penalty term equal to the sum of the absolute values of the weights to the loss function.
  - This penalty encourages the model to reduce less important weights to exactly zero.
  - Because some weights become zero, L1 regularization effectively performs feature selection, removing unnecessary or irrelevant features from the model.
  - This makes the model simpler and more interpretable, especially useful when dealing with high dimensional datasets.
  - **Key points**:
    - Penalty term: sum of `∣ 𝑤 ∣`
    - Produces sparse models
    - Useful for feature selection
    - Common in linear models and regression
- **L2 Regularization (Ridge Regularization)**:
  - L2 regularization adds a penalty equal to the sum of the squared values of the weights to the loss function.
  - Instead of eliminating weights, it shrinks them toward small values. This helps keep the model stable and prevents any single weight from becoming too large.
  - L2 regularization is particularly effective in handling multicollinearity and ensures smoother decision boundaries.
  - **Key points**:
    - Penalty term: sum of `𝑤²`
    - Keeps all features but reduces their influence
    - Produces smooth and stable models
    - Commonly used in neural networks
- **Dropout**:
  - Dropout is a regularization technique used mainly in deep neural networks.
  - During training, dropout randomly removes (deactivates) a fraction of neurons in each layer for every training iteration.
  - By doing this, the network is forced to not depend on specific neurons and instead learn redundant and distributed representations.
  - This improves robustness and significantly reduces overfitting.
  - During testing, all neurons are used, but their outputs are scaled appropriately.
  - **Key points**:
    - Randomly disables neurons during training
    - Prevents co-dependency among neurons
    - Improves generalization
    - Common dropout rates: `0.2–0.5`

## TensorFlow, Keras & PyTorch

- TensorFlow and PyTorch are popular tools (libraries) used to build and train machine learning and deep learning models. They help programmers create neural networks without writing everything from scratch.
- **TensorFlow** is developed by Google and is widely used in industry.
  - It is powerful, fast, and suitable for large-scale applications.
  - TensorFlow supports training models and also deploying them on mobile apps, web apps, and cloud systems.
- **Keras** is a high-level library that works on top of TensorFlow.
  - It is easy to learn and use, especially for beginners.
  - With Keras, you can build deep learning models using simple and readable code, making it ideal for teaching and quick experiments.
- **PyTorch** is developed by Facebook and is very popular in research and academia.
  - It is known for its flexibility and simplicity.
  - PyTorch allows dynamic model building, which makes it easier to understand, debug, and experiment with new ideas.

---
