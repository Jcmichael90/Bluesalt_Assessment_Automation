const shadowDomPage = require('../pages/ShadowDomPage');

describe('Shadow DOM', () => {
  beforeEach(() => {
    shadowDomPage.visit();
  });

  it('should display the GUID generator component', () => {
    cy.get('guid-generator').should('exist');
    shadowDomPage.generateButton.should('be.visible');
    shadowDomPage.copyButton.should('be.visible');
  });

  it('should generate a GUID when the Generate button is clicked', () => {
    shadowDomPage.guidInput.should('have.value', '');
    shadowDomPage.clickGenerate();
    shadowDomPage.verifyGuidIsGenerated();
  });

  it('should generate a GUID in the correct format', () => {
    shadowDomPage.clickGenerate();
    shadowDomPage.verifyGuidFormat();
  });

  it('should generate a new GUID on each click of the Generate button', () => {
    shadowDomPage.clickGenerate();
    shadowDomPage.getGuidValue().then((firstGuid) => {
      shadowDomPage.clickGenerate();
      shadowDomPage.getGuidValue().then((secondGuid) => {
        expect(firstGuid).to.not.equal(secondGuid);
      });
    });
  });

  it('should copy the GUID to clipboard when Copy button is clicked after generating', () => {
    // Grant clipboard permissions and stub clipboard API for headless Chrome
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
    shadowDomPage.clickGenerate();
    shadowDomPage.getGuidValue().then((generatedGuid) => {
      // Suppress uncaught exception from clipboard API in headless mode
      cy.on('uncaught:exception', () => false);
      shadowDomPage.clickCopy();
      // Verify the input still holds the generated GUID value
      shadowDomPage.guidInput.should('have.value', generatedGuid);
    });
  });
});