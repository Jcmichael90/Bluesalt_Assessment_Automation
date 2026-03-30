const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const fileUploadPage = require('../../pages/FileUploadPage');

Given('I navigate to the File Upload page', () => {
  fileUploadPage.visit();
});

Then('the page heading {string} should be visible', (heading) => {
  cy.get('h3').contains(heading).should('be.visible');
});

Then('the drag and drop zone should be visible inside the iframe', () => {
  fileUploadPage.verifyDropZoneVisible();
});

Then('the Browse files button should be visible inside the iframe', () => {
  fileUploadPage.verifyBrowseFilesVisible();
});

When('I upload the file {string} using the file input', (fileName) => {
  cy.get('iframe').its('0.contentDocument.body').then((body) => {
    cy.wrap(body).find('input[type="file"]').selectFile(`cypress/fixtures/${fileName}`, { force: true });
  });
});

Then('the file upload area should still be present', () => {
  cy.get('iframe').its('0.contentDocument.body').then((body) => {
    cy.wrap(body).should('exist');
  });
});