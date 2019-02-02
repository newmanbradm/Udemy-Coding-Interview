##Identifying Runtime Complexity

######Iterating with a simple for loop through a single collection?
Probably O(n)

######Iterating through half a collection?
Still O(n). There are no constants in runtime (so n/2 does not exist)

######Iterating through two ***different*** collections with separate for loops?
O(n + m) 

######Two nested for loops iterating over the same collection?
O(n ^ 2)

######Two nested for loops iterating over ***different*** collections?
O(n x m)

######Sorting?
O(n x log(n))

######Searching a sorted array? 
O(log(n))