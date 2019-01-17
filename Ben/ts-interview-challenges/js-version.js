/*
How do you find the missing number in a given integer array of 1 to 100?
*/

function findMissingNumber(array) {
  var difference = 1;
  var i = 0;
  do {
    var j = i + 1;
    difference = array[j] - array[i];
    i++;
  }
  while (difference == 1);
  return array[i] - 1;
}

console.log(findMissingNumber([1,2,4,5,6]));

/*
How do you find the duplicate number on a given integer array?
*/

function findDuplicateNumber(array) {
  var difference = 1;
  var i = 0;
  do {
    var j = i + 1;
    difference = array[j] - array[i];
    i++;
  }
  while (difference == 1);
  return array[i];
}

console.log(findDuplicateNumber([1,2,3,4,4,5,6]));

/*
How do you find the largest and smallest number in an unsorted integer array?
*/

function largestAndSmallest(array) {
  var smallest = array[0];
  var largest = array[0];
  for (var i=1; i<array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    else if (array[i] > largest) {
      largest = array[i]
    }
  }
  return [largest, smallest];
}

console.log(largestAndSmallest([4,9,3,4,1,9,6,2,8]));

/*
How do you find all pairs of an integer array whose sum is equal to a given number?
*/

function pairsEqualToNumber(array, number) {
  var pairsArray = [];
  for (var i=0; i<array.length; i++) {
    for (var j=0; j<array.length; j++) {
      if (array[i] + array[j] == number && j != i) {
        pairsArray.push([array[i],array[j]]);
      }
    }
  }
  return pairsArray;
}

console.log(pairsEqualToNumber([3,1,5,2,3,4],5));

/*
How do you find duplicate numbers in an array if it contains multiple duplicates?
*/

function multipleDuplicates(array) {
  var multiplesArray = [];
  for (var i=0; i<array.length; i++) {
    for (var j=i; j<array.length; j++) {
      if (array[i] == array[j] && j != i) {
        multiplesArray.push(array[i]);
      }
    }
  }
  return multiplesArray;
}

console.log(multipleDuplicates([3,1,4,5,2,3,4]));

/*
How is an integer array sorted in place using the quicksort algorithm? (algorithm)
How do you remove duplicates from an array in place? (solution)
*/

/*
How do you reverse an array in place in Javascript? (solution)
*/

function reverseArray(array) {
  var reversedArray = [];
  var endPosition = array.length - 1;
  for (var i=endPosition; i>=0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1,2,3,4,5]));

/*
How are duplicates removed from an array without using any library? (solution)
*/

/*
How do you find the middle element of a singly linked list in one pass? (solution)
How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle? (solution)
How do you reverse a linked list? (solution)
How do you reverse a singly linked list without recursion? (solution)
How are duplicate nodes removed in an unsorted linked list? (solution)
How do you find the length of a singly linked list? (solution)
How do you find the third node from the end in a singly linked list? (solution)
How do you find the sum of two linked lists using Stack? (solution)

How do you print duplicate characters from a string? (solution)
How do you check if two strings are anagrams of each other? (solution)
How do you print the first non-repeated character from a string? (solution)
How can a given string be reversed using recursion? (solution)
How do you check if a string contains only digits? (solution)
How are duplicate characters found in a string? (solution)
How do you count a number of vowels and consonants in a given string? (solution)
How do you count the occurrence of a given character in a string? (solution)
How do you find all permutations of a string? (solution)
How do you reverse words in a given sentence without using any library method? (solution)
How do you check if two strings are a rotation of each other? (solution)
How do you check if a given string is a palindrome? (solution)

How is a binary search tree implemented? (solution)
How do you perform preorder traversal in a given binary tree? (solution)
How do you traverse a given binary tree in preorder without recursion? (solution)
How do you perform an inorder traversal in a given binary tree? (solution)
How do you print all nodes of a given binary tree using inorder traversal without recursion? (solution)
How do you implement a postorder traversal algorithm? (solution)
How do you traverse a binary tree in postorder traversal without recursion? (solution)
How are all leaves of a binary search tree printed? (solution)
How do you count a number of leaf nodes in a given binary tree? (solution)
How do you perform a binary search in a given array? (solution)

How is a bubble sort algorithm implemented? (solution)
How is an iterative quicksort algorithm implemented? (solution)
How do you implement an insertion sort algorithm? (solution)
How is a merge sort algorithm implemented? (solution)
How do you implement a bucket sort algorithm? (solution)
How do you implement a counting sort algorithm? (solution)
How is a radix sort algorithm implemented? (solution)
How do you swap two numbers without using the third variable? (solution)
How do you check if two rectangles overlap with each other? (solution)
How do you design a vending machine? (solution)
*/ 
