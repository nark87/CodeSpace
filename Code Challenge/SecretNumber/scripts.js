
// Define class game - Higher/Lower game
class Game {
    // Constructor for Game class
    constructor() {
        // Initialise Attributes
        this._chances = 0;
        this._secretNumber = 0;
    }

    // Getters method
    get chances() { // user chances for the game
        return this._chances;
    }

    get secretNumber() { // secret number
        return this._secretNumber;
    }

    // Setters method
    set chances(chances) { // Set the user chances for the game
        this._chances = chances;
    }

    set secretNumber(secretNumber) { // Set the secret number for the game
        this._secretNumber = secretNumber;
    }

    compareNumber (num) { // Compare the user guess with the secret number
        if (this._secretNumber == num) { // If the user guess the number return true
            return true;

        } else { // If user does not guess the number return false and reduce one chance
            this._chances = this._chances - 1;
            return false;
        }
    }

    resultGame (num) { // Return the result of each user guess
        if (this._secretNumber > num) { // Secret number higher than user number

            return "The correct answer is higher than " + num;

        } else if (this._secretNumber < num) { // Secret number lower than user number

            return "The correct answer is lower than " + num;

        } else { //Secret number equal user number

            return num + " is the correct answer!";
        }
    }
}

// Get the info game div
const infoGame = document.getElementById("infoGame");

// Get the content game div
const contentGame = document.getElementById("contentGame");
// Not to show until we select the level of the game
contentGame.style.display='none'; 

// Get the end game div
const endGame = document.getElementById("endGame");
// Not to show until the game is finished
endGame.style.display='none';

// Get the button for the level of the game
const easyBtn = document.getElementById("easy");

// Get the button to guess the secret number
const goBtn = document.getElementById("go");

// Get the button to play again the secret number
const playBtn = document.getElementById("play");

// Get the spans from the game
const optionLevel = document.getElementById("optionLevel");
const chancesLevel = document.getElementById("chancesLevel");
const chancesLeft = document.getElementById("chancesLeft");
const result = document.getElementById("result");
const finalResult = document.getElementById("resultGame");

// Get the input number from the user
const inputValue = document.getElementById("myInput");

// Define the levels of the game. The array starts with the index 0
const levels = ["easy","medium","expert"];
const infoLevels = ["You choose the easy level! Guess a number between 1 to 10 with 3 chances", 
                "You choose the medium level! Guess a number between 1 to 50 with 5 chances",
                "You choose the expert level! Guess a number between 1 to 100 with 10 chances."];
const rangeLevel = ["1 to 10", "1 to 50", "1 to 100"];
const maxRange = [10, 50, 100];

// Define the chances for each level. Position 0 is easy. Position 1 is medium. Position 2 is expert
const chances = [3,5,10];

// Define the results while you are playing. The array starts with the index 0
const results = ["The correct answer is higher than", "The correct answer is lower than", "This is the correct answer!"];

// Create a new instance of the Game class with the easy level
const myGame = new Game();

// Add click event to the level buttons - User interaction
easyBtn.addEventListener("click",function(){
    selectGame(infoLevels[0], chances[0], rangeLevel[0], maxRange[0]);
});

/* BUTTONS LISTENERS */

// Button Go - User uses to guess the secret number
goBtn.addEventListener("click",function(){

    if (isNaN(inputValue.value)) // When it is not a number
    {
        alert("Only input numbers"); // Show an alert

    } else { // It is a number
        
        //Return boolean Comparing user input number with secret number
        const resultEnd = myGame.compareNumber(inputValue.value);

        //Retunr test with the result of the comparation
        const resultGame = myGame.resultGame(inputValue.value);
    
        if (resultEnd == true) { // User guess the number
    
            //Hide the content game
            contentGame.style.display='none';
    
            //Show the end game
            inputValue.value = " "; //Set empty the input
            result.style.display='none'; // Hide result span of the content game

            // Show result of the GAME
            finalResult.innerHTML = "You won the game. The secret number was " + myGame.secretNumber;
            
            //Show the end Game content
            endGame.style.display='inLine';
    
        } else { // User does not guess the number

            if (myGame.chances < 1) { // We do not have chances to play
                // Hide the content game
                contentGame.style.display='none';
    
                // Show the end game
                inputValue.value = " "; //Set empty the input
                result.style.display='none'; // Hide result span of the content game

                // Show result of the GAME
                finalResult.innerHTML = "You loose the game. The secret number was " + myGame.secretNumber;
                
                //Show the end Game content
                endGame.style.display='inLine'; 

            } else { // We still have chances to play

                inputValue.value = " "; //Set empty the input
                chancesLeft.innerHTML = myGame.chances; //Show how many chances we have left
                result.innerHTML = resultGame; //SHow the result of the user guess
            }
        }
    }
});

// Button Play Again - User uses to play again the game
playBtn.addEventListener("click",function(){

    // Hide the end game content
    endGame.style.display='none';

    // Set emty the result game span and show it
    result.innerHTML = " ";
    result.style.display='inLine';

    // Show the info game content
    infoGame.style.display='inLine';
});

/* FUNCTIONS */

// Function - Play the game
function selectGame(info, chance, range, max) {

    // Hide the selector game
    infoGame.style.display='none';

    // Set info to span in the content game
    optionLevel.innerHTML = info;
    chancesLevel.innerHTML = range;
    chancesLeft.innerHTML = chance;

    // Show content game to the user
    contentGame.style.display='inLine';

    // Set the chances and secret number into the instance myGame
    myGame.chances = chance;
    myGame._secretNumber = randomInteger(1, max);
    randomNum.innerHTML = myGame.secretNumber;
}

// Function - Random number between 2 numbers included
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

