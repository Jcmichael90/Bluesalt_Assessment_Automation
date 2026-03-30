const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const clientSideDelayPage = require('../../pages/ClientSideDelayPage');

Given('I navigate to the Client Side Delay page', () => {
  clientSideDelayPage.visit();
});

Then('the trigger button should be visible with text {string}', (text) => {
  clientSideDelayPage.triggerButton.should('be.visible').and('contain.text', text);
});

When('I click the trigger button', () => {
  clientSideDelayPage.clickTriggerButton();
});

Then('the result label {string} should appear within 20 seconds', (labelText) => {
  cy.contains('p', labelText, { timeout: 20000 }).should('be.visible');
});

Then('the result label should not be visible on the page', () => {
  cy.contains('p', 'Data calculated on the client side.').should('not.exist');
});