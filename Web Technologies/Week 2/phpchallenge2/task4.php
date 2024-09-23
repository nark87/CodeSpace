<?php
/* TASK 4 - else Statements 

In this challenge, create a variable $age is set the value. 
Next create a script that checks the value of $age and displays a message based on the age group 
it falls into:
-  If the value of $age is less than 13, it displays "You are a child."

-  If the value of $age is between 13 and 17, it displays "You are a teenager."

-  If the value of $age is between 18 and 64, it displays "You are an adult."

-  If none of the above conditions are met, it displays "You are a senior citizen."*/

?>

<!-- Age form with POST -->
<h1>Task 4 - else Statements</h1><br>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label> Introduce your age: <input type="text" name="age"></label>
    <input type="submit" value="Submit">
</form>
<br>

<?php

// Get the values submitted via the form, using $_POST
$ageStatement = $_POST['age'];

function checkMyAge (int $age)
{
    if ($age >= 0 && $age < 13) {
        
        $textResult = "You are a child.";

    } else if ($age >= 13 && $age <= 17) {
        
        $textResult = "You are a teenager.";

    } else if ($age >= 18 && $age <= 64) {

        $textResult = "You are an adult.";

    } else if ($age > 64) {

        $textResult = "You are a senior citizen.";

    } else {
    
        $textResult = "Please, introduce a positive number for your age."; 
    }

    return $textResult;
}

echo checkMyAge($ageStatement);

?>