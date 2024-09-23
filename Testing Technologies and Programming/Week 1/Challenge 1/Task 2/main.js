// Coding Task 2
/*Write a function expression called reverseArray(). 
It should accept an array as a single argument. 
It should return a reversed array and it should work for any data type.

reverseArray([1, 2, 3, 4, 5]);
reverseArray(["I", "like", "JavaScript"]);
Output

[5, 4, 3, 2, 1]
["JavaScript", "like", "I"] */

let reverseArray = (arr) => {
   
    var newArray = []; // Initialize the new array
    var arrayLength = arr.length; // Initialize the length of the array
 
    while (arrayLength > 0) { // Reverse the array
       newArray.push(arr[arrayLength-1]); // Push into a new array the values from the array given starting from the last index
       arrayLength--; // Decrease the index for the loop
    }
    console.log (newArray);
 }
 reverseArray([1, 2, 3, 4, 5]);
 reverseArray(["I", "like", "JavaScript"]);