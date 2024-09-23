// Coding Task 1
/*Write a function expression called reverseString(). 
It should accept a single argument representing a person's name. 
It should return a reverse string as shown below:

reverseString("John");
reverseString("James");
Output

nhoJ
semaJ */
let reverseString = (name) => {
   
    var reverseName = ""; // Initialize the reverse name
    var numLength = name.length; // Initialize the length of the name
    
    while (numLength > 0) { // Reverse the name
       // Concatenate the same variable with the function substring (index, length). Index is starting from the last index of the variable
       reverseName = reverseName + name.substring(numLength-1,numLength); 
       numLength--;
    }
    console.log (reverseName);
 }
 reverseString("John");
 reverseString("James");