const alertsPage = require('../pages/AlertsPage');

describe('Alerts', () => {
  beforeEach(() => {
    alertsPage.visit();
  });

  it('should display Alert, Confirm and Prompt buttons on the page', () => {
    alertsPage.alertButton.should('be.visible');
    alertsPage.confirmButton.should('be.visible');
    alertsPage.promptButton.should('be.visible');
  });

  it('should handle an alert dialog when Alert button is clicked', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.be.a('string');
    });
    alertsPage.alertButton.click();
  });

  it('should accept a confirm dialog when Confirm button is clicked', () => {
    cy.on('window:confirm', () => true);
    alertsPage.confirmButton.click();
    // Page should remain stable after accepting confirm
    alertsPage.confirmButton.should('be.visible');
  });

  it('should dismiss a confirm dialog when Confirm button is clicked and cancel is chosen', () => {
    cy.on('window:confirm', () => false);
    alertsPage.confirmButton.click();
    // Page should remain stable after dismissing confirm
    alertsPage.confirmButton.should('be.visible');
  });

  it('should handle a prompt dialog with a custom response', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('MyCustomResponse');
    });
    alertsPage.promptButton.click();
    // Page should remain stable after prompt
    alertsPage.promptButton.should('be.visible');
  });

  it('should handle a prompt dialog when cancelled (null response)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(null);
    });
    alertsPage.promptButton.click();
    alertsPage.promptButton.should('be.visible');
  });
});