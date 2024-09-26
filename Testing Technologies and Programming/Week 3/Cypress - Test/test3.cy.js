describe('Cypress Test 3', () => {
  it('Visits the Cypress commands actions page, query for class .action-btn and click on, query id #action-canvas and click on', () => {
    // Visit the page
    cy.visit('https://example.cypress.io/commands/actions');

    // Assert the content on commands/action page
    cy.url().should("include", "/commands/actions");
    cy.get("h1").should("contain", "Actions");

    // Query for action button class .action-btn 
    cy.get(".action-btn").contains("Click to toggle popover");

    // Interact with action button class .action-btn - Click on it
    cy.get(".action-btn").contains("Click to toggle popover").click();

    // Assert Pop over after click on action button
    cy.get(".popover-title").should("contain", "Popover");

    // Query for action canvas id #action-canvas
    cy.get("#action-canvas");

    // Interact with action canvas id #action-canvas - click on it
    cy.get("#action-canvas").click();

    // Query and interact for action canvas id #action-canvas - click on TopLeft
    cy.get("#action-canvas").click("topLeft");

    // Query and interact for action canvas id #action-canvas - click on BottomRight
    cy.get("#action-canvas").click("bottomRight");

  })
})