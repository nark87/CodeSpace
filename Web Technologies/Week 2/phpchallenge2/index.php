<?php

/* TASK 1 - PHP Function 

Create a PHP function that takes in a string as an argument and returns the string with all vowels replaced with the character "x".

1. Define a PHP function replaceVowelsWithX that takes in a string argument $str.

2. Define an array $vowels that contains all the vowels in both lowercase and uppercase.

3. Use the str_replace function to replace all occurrences of the vowels in $str with the character "x".

4. Return the modified string as the output of the function.

5.  Then use the echo statement to output the modified string to the screen.

Help can be found here:  https://www.w3schools.com/php/func_string_str_replace.asp*/



// Define the string
$stringInput = "Hello World!";

// Define function - Replace vowels with "x"
function replaceVowelsWithX(string $str)
{
    $vowels = array('a','A','e','E','i','I','o','O','u','U'); //Array vowels lowercase and uppercase
    
    $value = str_replace($vowels,"x",$str);
    return $value;
}

// Call the function - Replace vowels with "x"
$stringOutput = replaceVowelsWithX($stringInput);

// Output
echo "<h1>Task 1 - PHP Function</h1>
        <label>Input: " . $stringInput . "</label><br>
        <label>Output: " . $stringOutput . "</label>
<br><br>";
?>

<?php
