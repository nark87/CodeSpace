describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5500');
  
      /* --Assert the content on the page-- */
  
      // Check if we have the correct h1
      cy.get("h1").should("contain", "Welcome to the Secret Number Game");
  
      // Check if we have the correct h2
      cy.get("h2#selectInfo").should("contain", "Select the level of the game");
  
      // Check if we have all button for the calculator
      cy.get("button#easy").should("contain", "Easy");
      cy.get("button#medium").should("contain", "Medium");
      cy.get("button#expert").should("contain", "Expert");
  
      /* Play with easy level */
  
      // Click button easy level
      cy.get("button#medium").contains("Medium").click();
  
      //Check if we have the content game
      cy.get("div#contentGame");
      cy.get("span#chancesLevel").should("contain", "1 to 50");
      cy.get("input#myInput");
      cy.get("button#go").should("contain", "Go");
      cy.get("span#chancesLeft").should("contain", "5");
  
      // Interact with input field
      const num = 25;
      cy.get("input#myInput").type(num);
      cy.get("input#myInput").should('have.value', num);
  
      // Click button Go for the first chance
      cy.get("button#go").contains("Go").click();
  
      // Check the result for the first chance
      cy.get("span#result");
      cy.get("span#chancesLeft").should("contain", "4");
    })
  })