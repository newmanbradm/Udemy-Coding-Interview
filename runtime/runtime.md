##Contant Time 
###1 or O(1)
No matter how many elements we're working with, the algorithm will always take the same amount of time.

##Logarithmic Time
###log(n) or O(log(n))
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)

##Linear Time
###n or O(n)
Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime.

##Quasilinear Time
###n x log(n) or O(n x log(n))
You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that any sorting operation is n x log(n)

##Quadratic Time
###n ^ 2 or O(n ^ 2)
Every element in a collection has to be compared to every other element. Remember the handshake problem, where every new person to the room has to shake every other person's hand upon entering.

##Exponential Time
###2 ^ n or O(2 ^ n)
If you add a 'single' element to a collection, the processing power required doubles. This is very bad, and should ne avoided deciding on an algorithm. 