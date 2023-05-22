# SPP

**min** **dist** = ∑ { j,k | w[j,k]·x[j,k] }

***subject to***

**flowbal(j)**: ∑ { k | x[j,k] } + ∑ { i | -x[i,j] } = b[j]



## Definitions

### Sets

#### j

* Has indices: [0, 3]

#### k(j)

* Has indices: j => heads[j]

#### i(j)

* Has indices: j => tails[j]


### Parameters

#### w[i,j]

weight of arc (i,j)

* Has values: weights

#### b[i]

node balance

* Has values: 1 if i=s; -1 if i=t; 0 o/w


### Variables

#### x[i,j]

1 if (i,j) is on the shortest path; 0 o/w

* Continuous
* ≥ 0


## Model

### minimize dist:
∑ { j,k | w[j,k]·x[j,k] }

### subject to

#### flowbal (j):
∑ { k | x[j,k] } + ∑ { i | -x[i,j] } = b[j]

## Model Explanation

### minimize dist:
minimize total path distance

### subject to

#### flowbal (j):
flow balance constraints


