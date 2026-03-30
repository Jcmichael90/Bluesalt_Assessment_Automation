const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const alertsPage = require('../../pages/AlertsPage');

Given('I navigate to the Alerts page', () => {
  alertsPage.visit();
});

Then('the Alert button should be visible', () => {
  alertsPage.alertButton.should('be.visible');
});

Then('the Confirm button should be visible', () => {
  alertsPage.confirmButton.should('be.visible');
});

Then('the Prompt button should be visible', () => {
  alertsPage.promptButton.should('be.visible');
});

When('I click the Alert button', () => {
  cy.on('window:alert', (text) => {
    expect(text).to.be.a('string');
  });
  alertsPage.alertButton.click();
});

Then('the alert dialog should be accepted', () => {
  alertsPage.alertButton.should('be.visible');
});

When('I accept the confirm dialog', () => {
  cy.on('window:confirm', () => true);
});

When('I dismiss the confirm dialog', () => {
  cy.on('window:confirm', () => false);
});

When('I click the Confirm button', () => {
  alertsPage.confirmButton.click();
});

Then('the Confirm button should still be visible', () => {
  alertsPage.confirmButton.should('be.visible');
});

When('I respond to the prompt with {string}', (response) => {
  cy.window().then((win) => {
    cy.stub(win, 'prompt').returns(response);
  });
});

When('I cancel the prompt dialog', () => {
  cy.window().then((win) => {
    cy.stub(win, 'prompt').returns(null);
  });
});

When('I click the Prompt button', () => {
  alertsPage.promptButton.click();
});

Then('the Prompt button should still be visible', () => {
  alertsPage.promptButton.should('be.visible');
});