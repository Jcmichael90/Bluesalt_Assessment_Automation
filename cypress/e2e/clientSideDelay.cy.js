const clientSideDelayPage = require('../pages/ClientSideDelayPage');

describe('Client Side Delay', () => {
  beforeEach(() => {
    clientSideDelayPage.visit();
  });

  it('should display the trigger button on page load', () => {
    clientSideDelayPage.triggerButton.should('be.visible').and('contain.text', 'Button Triggering Client Side Logic');
  });

  it('should show result label after clicking the trigger button and waiting for client-side processing', () => {
    clientSideDelayPage.clickTriggerButton();
    clientSideDelayPage.waitForResult(20000);
  });

  it('should not show result label before clicking the button', () => {
    cy.contains('p', 'Data calculated on the client side.').should('not.exist');
  });
});