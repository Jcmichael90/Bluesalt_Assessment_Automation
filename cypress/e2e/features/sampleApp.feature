Feature: Sample App
  As a user
  I want to login and logout of the Sample App
  So that I can verify authentication functionality works correctly

  Background:
    Given I navigate to the Sample App page

  Scenario: Login form is displayed on page load
    Then the username input should be visible
    And the password input should be visible
    And the login button should be visible with text "Log In"

  Scenario: User is logged out by default
    Then the status label should show "User logged out."

  Scenario: Successful login with valid credentials
    When I enter username "testuser" and password "pwd"
    And I click the login button
    Then the status label should show "Welcome, testuser!"
    And the button should show "Log Out"

  Scenario: Log Out button appears after successful login
    When I enter username "testuser" and password "pwd"
    And I click the login button
    Then the button should show "Log Out"

  Scenario: User can logout successfully
    When I enter username "testuser" and password "pwd"
    And I click the login button
    And I click the login button
    Then the status label should show "User logged out."

  Scenario: Login fails with wrong password
    When I enter username "testuser" and password "wrongpassword"
    And I click the login button
    Then the status label should contain "Invalid username/password"

  Scenario: Login fails with empty username
    When I clear the username field and enter password "pwd"
    And I click the login button
    Then the status label should not contain "Welcome"