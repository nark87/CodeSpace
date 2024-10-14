
class Game {
    // Constructor for Game class
    constructor() {
        // Initialise Attributes
        this._chances = 0;
        this._secretNumber = 0;
    }

    // Getters method
    get chances() { // chances
        return this._chances;
    }

    get secretNumber() { // secret number
        return this._secretNumber;
    }

    // Setters method
    set chances(chances) {
        this._chances = chances;
    }

    set secretNumber(secretNumber) {
        this._secretNumber = secretNumber;
    }

    compareNumber (num) {
        if (this._secretNumber == num) {
            return true;

        } else {
            this._chances = this._chances - 1;
            return false;
        }
    }

    resultGame (num) {
        if (this._secretNumber > num) { // Secret number higher than user number

            return "The correct answer is higher than " + num;

        } else if (this._secretNumber < num) { // Secret number lower than user number

            return "The correct answer is lower than " + num;

        } else { //Secret number equal user number

            return num + " is the correct answer!";
        }
    }
}

// Get the infor game div
const infoGame = document.getElementById("infoGame");

// Get the content game div
const contentGame = document.getElementById("contentGame");
contentGame.style.display='none';

// Get the end game div
const endGame = document.getElementById("endGame");
endGame.style.display='none';

// Get the button for the level of the game id into a variable
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const expertBtn = document.getElementById("expert");

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
const randomNum = document.getElementById("random"); // Use only for testing
randomNum.style.display = "none";

// Get the input number from the user
const inputValue = document.getElementById("myInput");

//const resultSpan = document.getElementById("result");

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

// Define auxiliar variable to know the level selected
const auxLevel = "";

// Create a new instance of the Game class with the easy level
const myGame = new Game();

// Add click event to the level buttons - User interaction
easyBtn.addEventListener("click",function(){
    selectGame(levels[0], infoLevels[0], chances[0], rangeLevel[0], maxRange[0]);
});

mediumBtn.addEventListener("click",function(){
    selectGame(levels[1], infoLevels[1], chances[1], rangeLevel[1], maxRange[1]);
});

expertBtn.addEventListener("click",function(){
    selectGame(levels[2], infoLevels[2], chances[2], rangeLevel[2], maxRange[2]);
});

goBtn.addEventListener("click",function(){

    if (isNaN(inputValue.value)) // It is other than a number
    {
        alert("Only input numbers");

    } else { // It is a number
        const resultEnd = myGame.compareNumber(inputValue.value);
        const resultGame = myGame.resultGame(inputValue.value);
    
        if (resultEnd == true) { // User guess the number
    
            // Hide the content game
            contentGame.style.display='none';
    
            // Show the end game
            inputValue.value = " ";
            result.style.display='none';
            finalResult.innerHTML = "You won the game. The secret number was " + myGame.secretNumber;
            endGame.style.display='inLine';
    
        } else { // User does not guess the number
            if (myGame.chances < 1) {
                // Hide the content game
                contentGame.style.display='none';
    
                // Show the end game
                inputValue.value = " ";
                result.style.display='none';
                finalResult.innerHTML = "You loose the game. The secret number was " + myGame.secretNumber;
                endGame.style.display='inLine'; 
            } else {
                inputValue.value = " ";
                chancesLeft.innerHTML = myGame.chances;
                result.innerHTML = resultGame;
            }
        }
    }
});

playBtn.addEventListener("click",function(){

    // Hide the content game
    endGame.style.display='none';

    // Show the end game
    result.innerHTML = " ";
    result.style.display='inLine';
    infoGame.style.display='inLine';
});

// Play the game function
function selectGame(level, info, chance, range, max) {

    // Hide the selector game
    infoGame.style.display='none';

    // Set info info span in the content game
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

// Random number between 2 numbers included
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

