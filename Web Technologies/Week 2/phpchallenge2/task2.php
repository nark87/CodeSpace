<?php
/* TASK 2 - Calculator 

Create a simple calculator program that takes two numbers as input and performs basic arithmetic operations 
on them using PHP operators. The program should display the results of each operation.

Requirements:

1. The program should display a form that allows the user to enter two numbers and select 
   an operation (+, -, *, or /).
2. The program should use PHP operators to perform the selected operation on the two numbers.
3. The program should display the result of the operation in a user-friendly format.*/

// Form - Input 2 numbers and the operator
?>

<!-- Calculator form with POST -->
<h1>Task 2 - Calculator</h1><br>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label> Number 1: <input type="text" name="number1"></label><br><br>
    <label> Number 2: <input type="text" name="number2"></label><br><br>
    <label>Choose an operation:</label>
    <select name="operators" id="operators">
        <option value="adding">'+' - Adding</option>
        <option value="subtracting">'-' - Subtracting</option>
        <option value="multiplying">'*' - Multiplying</option>
        <option value="dividing">'/' - Dividing</option>
    </select>
    <input type="submit" value="Calculate">
</form>
<br><br>

<?php

// Get the values submitted via the form, using $_POST
$num1 = $_POST['number1'];
$num2 = $_POST['number2'];
$operator = $_POST['operators'];

// Define function - Calculator
function calculator(float $num1, float $num2, string $operator)
{
    switch ($operator) {
        case "adding": // Adding
            $value = $num1 + $num2;
            break;
        case "subtracting": // Subtracting
            $value = $num1 - $num2;
            break;
        case "multiplying": // Multiplying
            $value = $num1 * $num2;
            break;
        case "dividing": // Dividing 
            $value = $num1 / $num2;
            break;
        default:
            $value = 0;
    }
    return $value;
}

if (is_numeric($num1))
{
    if (is_numeric($num2)) 
    {
        // Call the function - Calculator
        $result = calculator($num1, $num2, $operator); // Result for the operation selection

        // Output
        echo "<label> The result of " . $num1 . " " . $operator . " " . $num2 . " is: " . $result . "</label><br><br>";
    }
    else {
        // Output
        echo "<label>Please, introduce a correct number.</label><br><br>";
    }
    
} else {
    // Output
    echo "<label>Please, introduce a correct number.</label><br><br>";
}