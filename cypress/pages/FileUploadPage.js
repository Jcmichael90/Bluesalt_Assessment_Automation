class FileUploadPage {
  // Selectors - File upload is inside an iframe
  get uploadIframe() {
    return cy.get('iframe');
  }

  get dropZone() {
    return cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find('div.dropzone, section');
  }

  get browseFilesLabel() {
    return cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find('label');
  }

  get fileInput() {
    return cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find('input[type="file"]');
  }

  // Actions
  visit() {
    cy.visit('/upload');
  }

  /**
   * Upload a file using the hidden file input inside the iframe
   @param {string} filePath - relative path to fixture file e.g. 'example.txt'
   */
  uploadFile(filePath) {
    cy.get('iframe').its('0.contentDocument.body').then((body) => {
      cy.wrap(body).find('input[type="file"]').selectFile(`cypress/fixtures/${filePath}`, { force: true });
    });
  }

  verifyDropZoneVisible() {
    cy.get('iframe').its('0.contentDocument.body').then((body) => {
      cy.wrap(body).find('p').contains('Drag and drop your files here').should('be.visible');
    });
  }

  verifyBrowseFilesVisible() {
    cy.get('iframe').its('0.contentDocument.body').then((body) => {
      cy.wrap(body).find('label').contains('Browse files').should('be.visible');
    });
  }
}

module.exports = new FileUploadPage();