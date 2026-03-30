class ShadowDomPage {
  // Selectors - Shadow DOM host element
  get guidGeneratorHost() {
    return cy.get('guid-generator');
  }

  get guidInput() {
    return cy.get('guid-generator').shadow().find('input');
  }

  get generateButton() {
    return cy.get('guid-generator').shadow().find('#buttonGenerate');
  }

  get copyButton() {
    return cy.get('guid-generator').shadow().find('#buttonCopy');
  }

  // Actions
  visit() {
    cy.visit('/shadowdom');
  }

  clickGenerate() {
    this.generateButton.click();
  }

  clickCopy() {
    this.copyButton.click();
  }

  getGuidValue() {
    return this.guidInput.invoke('val');
  }

  generateAndGetGuid() {
    this.clickGenerate();
    return this.getGuidValue();
  }

  verifyGuidIsGenerated() {
    this.guidInput.should('not.have.value', '');
  }

  verifyGuidFormat() {
    // GUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    const guidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    this.guidInput.invoke('val').should('match', guidPattern);
  }
}

module.exports = new ShadowDomPage();