describe('Cypress Test 2', () => {
  it('Visits the Cypress commands actions page, query for email input, type email and assert content in input field', () => {
    // Visit the page
    cy.visit('https://example.cypress.io/commands/actions');

    // Assert the content on commands/action page
    cy.url().should("include", "/commands/actions");
    cy.get("h1").should("contain", "Actions");

    // Query for email input field
    cy.get(".action-email");

    // Interact with email input field
    cy.get('.action-email').type('fake@email.com');

    // Assert value email input field
    cy.get('.action-email').should('have.value', 'fake@email.com');

  })
})