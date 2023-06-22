# KP - Knapsack Problem

**max** **knapsack_value** = ∑ { i | v[i]·x[i] }

***subject to***

**knapsack_capacity**: ∑ { i | w[i]·x[i] } ≤ C



## Definitions

### Sets

#### i

available items

* Has indices: [0, 5]


### Parameters

#### v[i]

value of packing item i

* Has values: values

#### C

total capacity of the knapsack

* Has values: capacity

#### w[i]

weight of item i

* Has values: weights


### Variables

#### x[i]

1 if item i is packed in the knapsack; 0 otherwise

* Binary
* in [0, 1]


## Model

### maximize knapsack_value:
∑ { i | v[i]·x[i] }

### subject to

#### knapsack_capacity:
∑ { i | w[i]·x[i] } ≤ C

## Model Explanation

### maximize knapsack_value:
maximize total value of packed items in the knapsack

### subject to

#### knapsack_capacity:
total weight of packed items cannot exceed the knapsack capacity


