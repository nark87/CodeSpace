describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500')

    /* -- Function and constants -- */

    // Define the results. The array starts with the index 0
    const aResults = ["You won!", "You lose!", "It's a tie!"];

    // Define variables
    var res;
    let userOp;
    let comOp;

    // Function rules game
    let gameResult = (user, comp) => { 
      if (user === comp) { // Tie
        return aResults[2];

      } else if ((user === "Rock" && comp === "Scissors") 
        ||(user === "Scissors" && comp === "Paper") 
        || (user === "Paper" && comp === "Rock")) { // User wins
        return aResults[0];

      } else { // User loses
        return aResults[1];
      }
    }

    /* --Assert the content on the page-- */

    // Check if we have the correct Title
    cy.get("title").should("contain", "Vanilla JS - Rock Paper Scissors Challenge");

    // Check if we have 3 buttons - Rock, Paper and Scissors
    cy.get("button#rock").should("contain", "Rock");
    cy.get("button#paper").should("contain", "Paper");
    cy.get("button#scissors").should("contain", "Scissors");

    // Check if we have 3 h2 to show the user choices, computer choices and the result of the game
    cy.get("h2#u-option").should("contain", "Your Option:");
    cy.get("h2#c-option").should("contain", "Computer Option:");
    cy.get("h2#r-game").should("contain", "Result:");

    /* --Play with the Rock button-- */

    // Click Rock Button
    cy.get("button#rock").contains("Rock").click();

    // Assert if rock choice is in the h1 #u-option
    cy.get("span#user-option").should("contain", "Rock");

    // Assert the Game - User is playing with Rock
    cy.get('#rock').then((btn) => { // Get text from button and put into a variable
      userOp = btn.text(); 

      cy.get('span#computer-option').then((span) => { // Get text from span and put into a variable
        comOp = span.text();
        res = gameResult(userOp, comOp); // Function to know who wins

        // Assert the result of the game
        cy.get("span#result").should("contain", res);
      });
    });

    /* --Play with the Paper button-- */

    // Click Paper Button
    cy.get("button#paper").contains("Paper").click();

    // Assert if paper choice is in the h1 #u-option
    cy.get("span#user-option").should("contain", "Paper");

    // Assert the Game - User is playing with Paper
    cy.get('#paper').then((btn) => { // Get text from button and put into a variable
      userOp = btn.text(); 

      cy.get('span#computer-option').then((span) => { // Get text from span and put into a variable
        comOp = span.text();
        res = gameResult(userOp, comOp); // Function to know who wins
        
        // Assert the result of the game
        cy.get("span#result").should("contain", res);
      });
    });

    /* --Play with the Scissors button-- */

    // Click Scissors Button
    cy.get("button#scissors").contains("Scissors").click();
    
    // Assert if scissors choice is in the h1 #u-option
    cy.get("span#user-option").should("contain", "Scissors");

    // Assert the Game - User is playing with Scissors
    cy.get('#scissors').then((btn) => { // Get text from button and put into a variable
      userOp = btn.text(); 

      cy.get('span#computer-option').then((span) => { // Get text from span and put into a variable
        comOp = span.text();
        res = gameResult(userOp, comOp); // Function to know who wins

        // Assert the result of the game
        cy.get("span#result").should("contain", res);
      });
    });
  })
})

