const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const shadowDomPage = require('../../pages/ShadowDomPage');

Given('I navigate to the Shadow DOM page', () => {
  shadowDomPage.visit();
});

Then('the guid-generator component should exist', () => {
  cy.get('guid-generator').should('exist');
});

Then('the Generate button should be visible', () => {
  shadowDomPage.generateButton.should('be.visible');
});

Then('the Copy button should be visible', () => {
  shadowDomPage.copyButton.should('be.visible');
});

Given('the GUID input field is empty', () => {
  shadowDomPage.guidInput.should('have.value', '');
});

When('I click the Generate button', () => {
  shadowDomPage.clickGenerate();
});

Then('the GUID input field should not be empty', () => {
  shadowDomPage.verifyGuidIsGenerated();
});

Then('the GUID should match the pattern {string}', () => {
  shadowDomPage.verifyGuidFormat();
});

When('I note the current GUID value', () => {
  shadowDomPage.getGuidValue().then((guid) => {
    cy.wrap(guid).as('firstGuid');
  });
});

Then('the new GUID should be different from the previous one', () => {
  cy.get('@firstGuid').then((firstGuid) => {
    shadowDomPage.getGuidValue().then((secondGuid) => {
      expect(firstGuid).to.not.equal(secondGuid);
    });
  });
});

When('I click the Copy button', () => {
  cy.window().then((win) => {
    if (!win.navigator.clipboard) {
      Object.defineProperty(win.navigator, 'clipboard', {
        value: { writeText: cy.stub().resolves() },
        writable: true,
      });
    } else {
      cy.stub(win.navigator.clipboard, 'writeText').resolves();
    }
  });
  cy.on('uncaught:exception', () => false);
  shadowDomPage.clickCopy();
});

Then('the GUID input should still hold the generated value', () => {
  shadowDomPage.guidInput.should('not.have.value', '');
});