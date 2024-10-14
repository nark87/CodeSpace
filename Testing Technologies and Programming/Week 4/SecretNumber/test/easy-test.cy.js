describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500');

    /* --Assert the content on the page-- */

    // Check if we have the correct h1
    cy.get("h1").should("contain", "Welcome to the Secret Number Game");

    // Check if we have the correct h2
    cy.get("h2#selectInfo").should("contain", "Select the level of the game");

    // Check if we have all button for the game
    cy.get("button#easy").should("contain", "Easy");
    cy.get("button#medium").should("contain", "Medium");
    cy.get("button#expert").should("contain", "Expert");

    /* Play with easy level */

    // Click button easy level
    cy.get("button#easy").contains("Easy").click();

    //Check if we have the content game
    cy.get("div#contentGame");
    cy.get("span#chancesLevel").should("contain", "1 to 10");
    cy.get("input#myInput");
    cy.get("button#go").should("contain", "Go");
    cy.get("span#chancesLeft").should("contain", "3");

    // Interact with input field
    let num = 5;
    cy.get("input#myInput").clear().type(num);
    cy.get("input#myInput").should('have.value', num);

    // Get the random secret number
    cy.get("span#random").then((secretNumber) => {

      // Click button Go for the first chance
      cy.get("button#go").contains("Go").click();

      let secret = parseInt(secretNumber.text());
      
      const i = 2;

      if (num > secret) {
        
        // Check the result for the first chance
        cy.get("span#result").should("contain", "The correct answer is lower than " + num);
        cy.get("span#chancesLeft").should("contain", "2");

        num = 2;

        // Interact with input field
        cy.get("input#myInput").clear().type(num);
        cy.get("input#myInput").should('have.value', num);
          
        // Click button Go for the second chance
        cy.get("button#go").contains("Go").click();

        if (num > secret) {
            
          // Check the result for the second chance
          cy.get("span#result").should("contain", "The correct answer is lower than " + num);
          cy.get("span#chancesLeft").should("contain", "1");
          
          num = 1;

          // Interact with input field
          cy.get("input#myInput").clear().type(num);
          cy.get("input#myInput").should('have.value', num);
            
          // Click button Go for the second chance
          cy.get("button#go").contains("Go").click();

          // Check the end of the game 
          cy.get("div#endGame")

        } else if (num < secret) {

          // Check the result for the first chance
          cy.get("span#result").should("contain", "The correct answer is higher than " + num);
          cy.get("span#chancesLeft").should("contain", "1");

          num = 3;

          // Interact with input field
          cy.get("input#myInput").clear().type(num);
          cy.get("input#myInput").should('have.value', num);
            
          // Click button Go for the second chance
          cy.get("button#go").contains("Go").click();

          // Check the end of the game 
          cy.get("div#endGame")

        } else {
          // Check the end of the game 
          cy.get("div#endGame")
        }

      } else if (num < secret) {

        // Check the result for the first chance
        cy.get("span#result").should("contain", "The correct answer is higher than " + num);
        cy.get("span#chancesLeft").should("contain", "2");

        num = 8;

        // Interact with input field
        cy.get("input#myInput").clear().type(num);
        cy.get("input#myInput").should('have.value', num);
          
        // Click button Go for the second chance
        cy.get("button#go").contains("Go").click();

        if (num > secret) {
            
          // Check the result for the second chance
          cy.get("span#result").should("contain", "The correct answer is lower than " + num);
          cy.get("span#chancesLeft").should("contain", "1");
          
          num = 6;

          // Interact with input field
          cy.get("input#myInput").clear().type(num);
          cy.get("input#myInput").should('have.value', num);
            
          // Click button Go for the second chance
          cy.get("button#go").contains("Go").click();

          // Check the end of the game 
          cy.get("div#endGame")

        } else if (num < secret) {

          // Check the result for the first chance
          cy.get("span#result").should("contain", "The correct answer is higher than " + num);
          cy.get("span#chancesLeft").should("contain", "1");

          num = 9;

          // Interact with input field
          cy.get("input#myInput").clear().type(num);
          cy.get("input#myInput").should('have.value', num);
            
          // Click button Go for the second chance
          cy.get("button#go").contains("Go").click();

          // Check the end of the game 
          cy.get("div#endGame")

        } else {
          // Check the end of the game 
          cy.get("div#endGame")
        }

      } else {
          // Check the end of the game 
          cy.get("div#endGame")
      }
    });

    // Check if we have the button to play again the game
    cy.get("label#questions").should("contain", "Would you like to play again?");

    // Check if we have the button to play again the game
    cy.get("button#play").should("contain", "Play again");

  })
})