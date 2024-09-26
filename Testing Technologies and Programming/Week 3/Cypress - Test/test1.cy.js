describe('Cypress Test 1', () => {
  it('Visits the Cypress example page, query an element, interacts with it and assert it', () => {
    // Visit the page
    cy.visit('https://example.cypress.io');

    // Query for an element
    cy.get(".home-list").contains("Traversal");

    // Interact with the element
    cy.get(".home-list").contains("Traversal").click();

    // Assert the content on the page
    cy.url().should("include", "/commands/traversal");
    cy.get("h1").should("contain", "Traversal");
  })
})