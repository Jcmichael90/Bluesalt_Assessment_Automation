// Custom Cypress commands can be added here
// Example: cy.login(), cy.uploadFile(), etc.

// Shadow DOM helper - pierce shadow root to find elements
Cypress.Commands.add('shadowGet', (host, selector) => {
  return cy.get(host).shadow().find(selector);
});