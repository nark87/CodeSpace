describe('Cypress Test 2 - v2', () => {
    it('Visits the Cypress commands actions page, query for email input, type email and assert content in input field', () => {
      // Visit the page
      cy.visit('https://example.cypress.io/commands/actions');
  
      // Assert the content on commands/action page
      cy.url().should("include", "/commands/actions");
      cy.get("h1").should("contain", "Actions");
  
      // Query for email input field
      cy.get('input[type="email"]').as('emailInput');
  
      // Interact with email input field
      const emailAddress = "fake@email.com";
      cy.get('@emailInput').type(emailAddress);
  
      // Assert value email input field
      cy.get('@emailInput').should('have.value', emailAddress);
  
    })
  })