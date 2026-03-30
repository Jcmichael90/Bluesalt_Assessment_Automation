const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const sampleAppPage = require('../../pages/SampleAppPage');

Given('I navigate to the Sample App page', () => {
  sampleAppPage.visit();
});

Then('the username input should be visible', () => {
  sampleAppPage.usernameInput.should('be.visible');
});

Then('the password input should be visible', () => {
  sampleAppPage.passwordInput.should('be.visible');
});

Then('the login button should be visible with text {string}', (text) => {
  sampleAppPage.loginButton.should('be.visible').and('contain.text', text);
});

Then('the status label should show {string}', (text) => {
  sampleAppPage.statusLabel.should('contain.text', text);
});

Then('the button should show {string}', (text) => {
  sampleAppPage.loginButton.should('contain.text', text);
});

When('I enter username {string} and password {string}', (username, password) => {
  sampleAppPage.usernameInput.clear().type(username);
  sampleAppPage.passwordInput.clear().type(password);
});

When('I click the login button', () => {
  sampleAppPage.loginButton.click();
});

When('I clear the username field and enter password {string}', (password) => {
  sampleAppPage.usernameInput.clear();
  sampleAppPage.passwordInput.clear().type(password);
});

Then('the status label should contain {string}', (text) => {
  sampleAppPage.statusLabel.should('contain.text', text);
});

Then('the status label should not contain {string}', (text) => {
  sampleAppPage.statusLabel.should('not.contain.text', text);
});