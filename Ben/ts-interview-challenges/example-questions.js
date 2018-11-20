/*
How do you find the missing number in a given integer array of 1 to 100?
*/
var missingNumberOneToHundred = function (integerArray) {
    var arraySum = 0;
    for (var _i = 0, integerArray_1 = integerArray; _i < integerArray_1.length; _i++) {
        var integer = integerArray_1[_i];
        arraySum += integer;
    }
    return "Missing number is " + (5050 - arraySum);
};
console.log(missingNumberOneToHundred([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));
/*
How do you find the largest and smallest number in an unsorted integer array?
*/
var largestAndSmallest = function (integerArray) {
    var largest = integerArray[0];
    var smallest = integerArray[0];
    for (var _i = 0, integerArray_2 = integerArray; _i < integerArray_2.length; _i++) {
        var integer = integerArray_2[_i];
        if (integer > largest)
            largest = integer;
        else if (integer < smallest)
            smallest = integer;
    }
    return "The largest number is " + largest + " and the smallest number is " + smallest;
};
console.log(largestAndSmallest([7, 4, 12, 6, 3, 10]));
/*
How do you find the duplicate number on a given integer array?
*/
var duplicateNumberOrderedArray = function (integerArray) {
    var arraySum = 0;
    for (var _i = 0, integerArray_3 = integerArray; _i < integerArray_3.length; _i++) {
        var integer = integerArray_3[_i];
        arraySum += integer;
    }
    var minValue = integerArray[0];
    var maxValue = integerArray[integerArray.length - 1];
    var nonMissingSum = (maxValue - minValue + 1) * (maxValue + minValue) / 2;
    return "Duplicate number is " + (arraySum - nonMissingSum);
};
console.log(duplicateNumberOrderedArray([6, 7, 8, 8, 9, 10, 11]));
/*
How do you find all pairs of an integer array whose sum is equal to a given number?
*/
/*
How do you find duplicate numbers in an array if it contains multiple duplicates?
How is an integer array sorted in place using the quicksort algorithm? (algorithm)
How do you remove duplicates from an array in place? (solution)
How do you reverse an array in place in Javascript? (solution)
How are duplicates removed from an array without using any library? (solution)

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
