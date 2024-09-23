<?php
/* TASK 3 - for Loop

Write a PHP program that displays the multiplication table of a given number using a for loop.

The program should accept a single input from the user, which is the number whose multiplication 
table should be displayed. 
The output should display the multiplication table from 1 to 10.
For example, if the user enters the number 5, the output should be:

Multiplication table of 5:

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50*/
?>

<!-- Calculator form with POST -->
<h1>Task 3 - for Loop</h1><br>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label> Introduce a number: <input type="text" name="numberloop"></label>
    <input type="submit" value="Submit">
</form>
<br>

<?php

// Get the values submitted via the form, using $_POST
$numberLoop = $_POST['numberloop'];

if (is_numeric($numberLoop))
{
    echo "Multiplication table of " . $numberLoop . "<br><br>";

    for ($i = 1; $i <= 10; $i++)
    {
        $valueLoop = $numberLoop * $i;
        echo "<label>" . $numberLoop . " x " . $i . " = " . $valueLoop ."</label><br>";
    } 
}
else {
    // Output
    echo "<label>Please, introduce a number.</label><br><br>";
}