<?php

/* TASK 1 (This challenge that involves creating a PHP script that utilises variables, strings, and math):
First, create two variables called $width and $height, and assign them the respective values of 10 and 5.
Next, create a third variable called $area, and assign it the value of $width multiplied by $height.
Finally, print out a string that includes the value of $width, $height, and $area in a sentence.*/

// Define width and height
$width = 10;
$height = 5;

// Area of width and height
$area = $width * $height;

// Output
echo "<h1>Task 1</h1>
        <label>The rectangle has a width of " . $width . " meters, 
        a height of " . $height . " meters, and an area of " . $area . " square meters.</label>
<br><br>";


/* TASK 2 (This challenge that involves creating a PHP script that utilises strings, numbers and math):
Create a PHP program that takes two numbers and outputs the result of adding, subtracting, multiplying, 
and dividing them. The program should also concatenate the two numbers into a string.*/

// Define two numbers
$num1 = 10;
$num2 = 5;

// Operations
$adding = $num1 * $num2; // Adding
$subtracting = $num1 - $num2; // Subtracting
$multiplying = $num1 * $num2; // Multiplying
$dividing  = $num1 / $num2; // Dividing 
$concatenate = $num1 . "" . $num2; //Concatenate

// Output
echo "<h1>Task 2</h1>
        <label>Adding of " . $num1 . " and " . $num2 . " is: " . $adding . "</label><br>
        <label>Subtraction of " . $num1 . " and " . $num2 . " is: " . $subtracting . "</label><br>
        <label>Multiplication of " . $num1 . " and " . $num2 . " is: " . $multiplying . "</label><br>
        <label>Division of " . $num1 . " and " . $num2 . " is: " . $dividing . "</label><br>
        <label>Concatenation of " . $num1 . " and " . $num2 . " is: " . $concatenate . "</label>
<br><br>";


/* TASK 3 (Age Calculator)
Create a program that uses variables to store the user's age and the number of days, hours, and minutes they have been alive.*/

// Define strings
$string1 = "Welcome to the Age Calculator!";
$string2 = "You have been alive for:";
$age = 25;
$days = $age * 365;
$hours = $days * 24;
$minutes = $hours * 60;

// Output
echo "<h1>Task 3</h1>
        <h2>$string1</h2>
        <h3>Your age: " . $age . "</h3>
        <h3>$string2</h3>
        <div>
            <label>" . $days . " days</label><br>
            <label>" . $hours . " hours</label><br>
            <label>" . $minutes . " minutes</label>
        <div>
<br><br>";


/* TASK 4 Numeric Arrays
Create and initialise an array variable using a suitable variable name to display the following values:
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday*/

# Create and initialise the array, days of the week.
$daysArray = array( 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday', 'Friday', 'Saturday', 'Sunday' );


// Output
echo "<h1>Task 4</h1>
        <label>Days of the week:</label><br>
<ul>";
# Display the value in all elements as a bulleted list.
foreach( $daysArray as $value ) 
{ echo "<li>" . $value . "</li>"; } 

echo "</ul>
<br><br>";


/* TASK 5 Associative Arrays
Create and initialise an array variable using a suitable variable name 
to display the following values for climate in Edinburgh:

The “hottest” months in Edinburgh are normally July and August. 
During summer, the average low temperatures are 52°F (11°C) and average highs are 66°F (19°C)

The coldest months of the year are January and February, 
with average lows of 33.8°F (1°C) and highs that rarely exceed 44.6°F (7°C).*/

# Create and initialise the array, days of the week.
$temperatureArray = array( 
    "July-August" => array (
        "high" => '66°F (19°C)',
        "low" => '52°F (11°C)'
        ),
           
     "January-February" => array (
        "high" => '44.6°F (7°C)',
        "low" => '33.8°F (1°C)'
        )
);

# Create and initialize the variables
$summer = "July-August";
$winter = "January-February";


// Output
#Display the table with the values
echo "<h1>Task 5</h1>
        <table>
            <tr>
                <th>Month</th>
                <th>High</th>
                <th>Low</th>
            </tr>
            <tr>
                <td>$summer</td>";

foreach( $temperatureArray[$summer] as $temperature ) {
    echo "<td>" . $temperature. "</td>"; }

echo "</tr>
        <tr>
            <td>$winter</td>";

foreach( $temperatureArray[$winter] as $temperature ) {
    echo "<td>" . $temperature. "</td>"; }
            
echo "</tr>
        </table>
<br><br>";


/* TASK 6 Multi-Dimensional Arrays
Create and initialise an array variable using a suitable variable name to display the following of student’s results:
Name                    Physics           English       Maths

Aarron                    74%                 69%            70%

Jamie                     64%                 79%            69%

Harry                     55%                 52%            57%



2.  Print to screen Aarron's Physics results.

3.  Print to screen Jamie's English results.

4.  Print to screen Harry's Maths results.*/

# Create and initialise the array, student marks.
$studenArray = array( 
    "Aarron" => array (
        "physics" => '74%',
        "english" => '69%',
        "maths" => '70%'
        ),
    "Jamie" => array (
        "physics" => '64%',
        "english" => '79%',
        "maths" => '69%'
        ),
           
    "Harry" => array (
        "physics" => '55%',
        "english" => '52%',
        "maths" => '57%'
        )
);

// Output
echo "<h1>Task 6</h1>
        <h3>Student Results:</h3>
        <div>
            <label>Aarron's Physics results: " . $studenArray['Aarron']['physics'] . "</label><br>
            <label>Jamie's English results: " . $studenArray['Jamie']['english'] . "</label><br>
            <label>Harry's Maths results: " . $studenArray['Harry']['maths'] . "</label><br>
        <div>
<br><br>";

?>

<style>

    table {
        border-collapse: collapse;
        width: 50%;
        border: 1px solid black;
        align-content: center;
    }

    th {
        background-color: #D6EEEE;
        border: 1px solid black;
    }

    td {
        text-align: center;
        border: 1px solid black;
    }
</style>