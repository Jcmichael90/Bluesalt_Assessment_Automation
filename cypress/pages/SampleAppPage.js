class SampleAppPage {
  // Selectors
  get usernameInput() {
    return cy.get('input[placeholder="User Name"]');
  }

  get passwordInput() {
    return cy.get('input[placeholder="********"]');
  }

  get loginButton() {
    return cy.get('#login');
  }

  get statusLabel() {
    return cy.get('label');
  }

  // Actions
  visit() {
    cy.visit('/sampleapp');
  }

  login(username, password) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password);
    this.loginButton.click();
  }

  logout() {
    this.loginButton.click();
  }

  getStatusText() {
    return this.statusLabel.invoke('text');
  }

  verifyLoggedIn(username) {
    this.statusLabel.should('contain.text', `Welcome, ${username}!`);
    this.loginButton.should('contain.text', 'Log Out');
  }

  verifyLoggedOut() {
    this.statusLabel.should('contain.text', 'User logged out.');
    this.loginButton.should('contain.text', 'Log In');
  }
}

module.exports = new SampleAppPage();