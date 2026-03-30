class AlertsPage {
  // Selectors
  get alertButton() {
    return cy.get('button').contains('Alert');
  }

  get confirmButton() {
    return cy.get('button').contains('Confirm');
  }

  get promptButton() {
    return cy.get('button').contains('Prompt');
  }

  // Actions
  visit() {
    cy.visit('/alerts');
  }

  clickAlertAndAccept() {
    cy.on('window:alert', (text) => {
      expect(text).to.be.a('string');
    });
    this.alertButton.click();
  }

  clickConfirmAndAccept() {
    cy.on('window:confirm', () => true);
    this.confirmButton.click();
  }

  clickConfirmAndDismiss() {
    cy.on('window:confirm', () => false);
    this.confirmButton.click();
  }

  clickPromptAndRespond(response) {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(response);
    });
    this.promptButton.click();
  }
}

module.exports = new AlertsPage();