class ClientSideDelayPage {
  // Selectors
  get triggerButton() {
    return cy.get('#ajaxButton');
  }

  get resultLabel() {
    return cy.get('p').contains('Data calculated on the client side.');
  }

  // Actions
  visit() {
    cy.visit('/clientdelay');
  }

  clickTriggerButton() {
    this.triggerButton.click();
  }

  waitForResult(timeout = 20000) {
    cy.contains('p', 'Data calculated on the client side.', { timeout }).should('be.visible');
  }
}

module.exports = new ClientSideDelayPage();