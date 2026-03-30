const sampleAppPage = require('../pages/SampleAppPage');

describe('Sample App', () => {
  beforeEach(() => {
    sampleAppPage.visit();
  });

  it('should display login form with username, password fields and login button', () => {
    sampleAppPage.usernameInput.should('be.visible');
    sampleAppPage.passwordInput.should('be.visible');
    sampleAppPage.loginButton.should('be.visible').and('contain.text', 'Log In');
  });

  it('should show "User logged out." status on initial page load', () => {
    sampleAppPage.verifyLoggedOut();
  });

  it('should login successfully with valid credentials and show welcome message', () => {
    sampleAppPage.login('testuser', 'pwd');
    sampleAppPage.verifyLoggedIn('testuser');
  });

  it('should show Log Out button after successful login', () => {
    sampleAppPage.login('testuser', 'pwd');
    sampleAppPage.loginButton.should('contain.text', 'Log Out');
  });

  it('should logout successfully and return to logged out state', () => {
    sampleAppPage.login('testuser', 'pwd');
    sampleAppPage.verifyLoggedIn('testuser');
    sampleAppPage.logout();
    sampleAppPage.verifyLoggedOut();
  });

  it('should fail login with wrong password and show invalid credentials message', () => {
    sampleAppPage.login('testuser', 'wrongpassword');
    sampleAppPage.statusLabel.should('contain.text', 'Invalid username/password');
  });

  it('should fail login with empty username', () => {
    // Type a space then clear to avoid cy.type() empty string error
    sampleAppPage.usernameInput.clear();
    sampleAppPage.passwordInput.clear().type('pwd');
    sampleAppPage.loginButton.click();
    sampleAppPage.statusLabel.should('not.contain.text', 'Welcome');
  });
});