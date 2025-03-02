---
header: APY-04
title: APY-04 Libraries of Python
slug: apy-04
semester: 4
image: /python.jpg
accent: "#eec52f"
link: https://drive.google.com/file/d/1s9ucdjgVktoCVYQOUVf3ZDkpQ0RXpzLN/view?usp=sharing
---

## Introduction

- Libraries are pre-written code that can be imported and used to perform specific tasks.
- Libraries provide reusable functions, classes, and modules.
- Libraries simplify complex processes and make development faster.

## NumPy

- Powerful library for numerical computation.
- **Features**:
  - Provides support for large, multi-dimensional arrays and matrices.
  - Mathematical functions to operate on these arrays.
  - Applications: Data manipulation, scientific computing, matrix operations.

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr)
```

- **Resources**: [Tutorial](https://youtu.be/x7ULDYs4X84?si=HM0PLMidDdj227Fq) | [Documentation](https://numpy.org/doc/stable/)

## Pandas

- Library used for data manipulation and analysis.
- **Features**:
  - `DataFrames` for handling structured data.
  - Tools for reading/writing CSV, Excel, SQL, etc.
  - Handling missing data, data aggregation, and transformation.

```python
import pandas as pd

data = {'Name': ['John', 'Anna', 'Peter'], 'Age': [28, 24, 35]}
df = pd.DataFrame(data)

print(df)
```

- **Resources**: [Tutorial](https://youtu.be/E9WGC0SLPVs?si=XNj3lq9iKNvR5wDC) | [Documentation](https://pandas.pydata.org/docs/)

## Matplotlib

- A plotting library for creating static, animated, and interactive visualizations.
- **Features**:
  - Line plots, scatter plots, histograms, etc.
  - Customization of plots (labels, legends, etc.)

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [1, 4, 9, 16]

plt.plot(x, y)

plt.show()
```

- **Resources**: [Tutorial](https://youtube.com/playlist?list=PLjVLYmrlmjGcC0B_FP3bkJ-JIPkV5GuZR&si=GlS-mq_b1ZEVRyJl) | [Documentation](https://matplotlib.org/stable/users/index)

## PyGame

- A library for creating games and multimedia applications.
- **Features**:
  - Tools for handling images, sounds, and game mechanics.
  - Supports 2D game development.

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption('Pygame Example')
pygame.quit()
```

- **Resources**: [Tutorial](https://youtu.be/AY9MnQ4x3zk?si=M-TqKMK7k14GBqwL) | [Documentation](https://www.pygame.org/docs/)

## Statsmodels

- Used for statistical modeling and testing.
- **Features**:
  - Linear regression, time-series analysis, hypothesis testing.
  - Models for econometrics and statistical computations.

```python
import statsmodels.api as sm

data = sm.datasets.get_rdataset('mtcars').data
model = sm.OLS(data['mpg'], sm.add_constant(data[['hp', 'wt']])).fit()
print(model.summary())
```

- **Resources**: [Tutorial](https://youtu.be/VmbA0pi2cRQ?si=ji-yhGtw6RfqqVql) | [Documentation](https://www.statsmodels.org/stable/index.html)

## Scikit-learn

- A library for machine learning.
- **Features**:
  - Supports supervised and unsupervised learning algorithms.
  - Tools for model evaluation and selection.
  - Easy to use API for training and testing models.

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

iris = load_iris()

clf = RandomForestClassifier()
clf.fit(iris.data, iris.target)
```

- **Resources**: [Tutorial](https://youtu.be/hDKCxebp88A?si=auoU-RZbBk5uglt9) | [Documentation](https://scikit-learn.org/stable/user_guide.html)

## SciPy

- A library used for scientific and technical computing.
- **Features**:
  - Optimization, integration, interpolation, eigenvalue problems, etc.
  - Built on top of NumPy for numerical computations.

```python
from scipy import integrate

result = integrate.quad(lambda x: x**2, 0, 1)
print(result)
```

- **Resources**: [Tutorial](https://www.youtube.com/live/k8s-R3csOt0?si=U0zF-MCoxL017hoz) | [Documentation](https://docs.scipy.org/doc/scipy/)

## TensorFlow

- A popular open-source library for machine learning and AI.
- **Features**:
  - Used for deep learning and neural networks.
  - Provides tools for both research and production.

```python
import tensorflow as tf

model = tf.keras.Sequential([tf.keras.layers.Dense(64, activation='relu', input_shape=(32,)),

tf.keras.layers.Dense(10, activation='softmax')])
```

- **Resources**: [Tutorial](https://youtu.be/6g4O5UOH304?si=_cnGiup9MWW1wKat) | [Documentation](https://www.tensorflow.org/tutorials)

## Questions

1. Explain the features and applications of the NumPy library in Python. Write a program to create a 2D array. (5)
2. What is Pandas? Write a Python program to create and manipulate a DataFrame. (5)
3. Explain how the Matplotlib library is used for data visualization in Python. Plot a line chart as an example. (4)
4. Discuss the role of TensorFlow in Python for deep learning applications. Write a basic program using TensorFlow. (5)
5. Write a Python program to calculate basic statistical metrics (mean, median, standard deviation) using NumPy. (4)
6. How is the SciPy library used for scientific computing? Write a program to solve a linear algebra problem using SciPy. (4)
7. Compare NumPy and Pandas. Provide examples where each library is more suitable. (3)
8. Write a Python program to visualize data using Matplotlib by creating a bar chart and pie chart. (5)
9. Explain the process of data manipulation using Pandas. Write a program to sort and filter data in a DataFrame. (5)
10. Write a Python program to perform polynomial fitting using NumPy and visualize the results with Matplotlib. (5)

---
