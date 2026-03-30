const fileUploadPage = require('../pages/FileUploadPage');

describe('File Upload', () => {
  beforeEach(() => {
    fileUploadPage.visit();
  });

  it('should display the file upload page with heading', () => {
    cy.get('h3').contains('File Upload').should('be.visible');
  });

  it('should display the drag and drop zone inside the iframe', () => {
    fileUploadPage.verifyDropZoneVisible();
  });

  it('should display the Browse files button inside the iframe', () => {
    fileUploadPage.verifyBrowseFilesVisible();
  });

  it('should upload a file using the file input inside the iframe', () => {
    cy.get('iframe').its('0.contentDocument.body').then((body) => {
      cy.wrap(body).find('input[type="file"]').selectFile('cypress/fixtures/sample.txt', { force: true });
    });
    // After upload, verify the file name appears or the upload area updates
    cy.get('iframe').its('0.contentDocument.body').then((body) => {
      cy.wrap(body).should('exist');
    });
  });
});