# Algo-Gem


A gem that overwrites the Array class and is able to implement different type methods quickly so the user can choose which is made for the best case scenario.

##Algorithm Methods

##Simple Sorts!
<br>
Two of the simplest sorts are insertion sort and selection sort, both of which are efficient on small data, due to low overhead, but not efficient on large data.
<div>
  <h3>Selection Sort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Selection_sort_animation.gif/250px-Selection_sort_animation.gif">
</div>
<br>
The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
<br>
<div>
  <h3>Insertion Sort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif">
</div>
<br>
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
<br>
##Efficient Sorts!
<br>
Practical general sorting algorithms are almost always based on an algorithm with average complexity (and generally worst-case complexity) O(n log n), of which the most common are heap sort, merge sort, and quicksort. Each has advantages and drawbacks, with the most significant being that simple implementation of merge sort uses O(n) additional space, and simple implementation of quicksort has O(n2) worst-case complexity.
<br>
While these algorithms are asymptotically efficient on random data, for practical efficiency on real-world data various modifications are used. First, the overhead of these algorithms becomes significant on smaller data, so often a hybrid algorithm is used, commonly switching to insertion sort once the data is small enough. Second, the algorithms often perform poorly on already sorted data or almost sorted data – these are common in real-world data, and can be sorted in O(n) time by appropriate algorithms. Finally, they may also be unstable, and stability is often a desirable property in a sort. Thus more sophisticated algorithms are often employed, such as Timsort (based on merge sort) or introsort (based on quicksort, falling back to heap sort).
<div>
  <h3>Quick Sort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif">
<div>
<br>
Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.
<br>
<div>
  <h3>Merge Sort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif">
<div>
<br>
Merge sort is a popular conquer and divide sorting algorithm. Merge sort first divides the list into the smallest unit (1 element), then compares each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged.
<br>
<div>
  <h3>Heapsort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif">
<div>
<br>
In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete binary tree. The complete binary tree maps the binary tree structure into the array indices; each array index represents a node; the index of the node's parent, left child branch, or right child branch are simple expressions. For a zero-based array, the root node is stored at index 0; if i is the index of the current node, then in the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap. Once all objects have been removed from the heap, the result is a sorted array.
<br>
##Bubble Sorts and Variants!
<br>
Bubble sort, and variants such as the cocktail sort, are simple but highly inefficient sorts. They are thus frequently seen in introductory texts, and are of some theoretical interest due to ease of analysis, but they are rarely used in practice, and primarily of recreational interest. Some variants, such as the Shell sort, have open questions about their behavior.
<div>
  <h3>Bubble Sort</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif">
<div>
<br>
 Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the right order (the latter one is smaller than the former one). After each iteration, one less element (the last one) is needed to be compared until there are no more elements left to be compared.
<br>


##Algorithms

I am also storing algorithms I have stumbled upon and have given me difficulty.
<br>I encourage anyone to add challenging algorithm problems on the Algortihms Directory.



## Resources

https://www.interviewcake.com/
<br>https://leetcode.com/
<br>https://www.glassdoor.com/Interview/index.htm
<br>http://devbootcamp-algorithm-night.github.io/
<br>https://en.wikipedia.org/wiki/Sorting_algorithm
