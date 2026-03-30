Feature: Alerts
  As a user
  I want to handle browser alert, confirm, and prompt dialogs
  So that I can verify the application correctly manages native browser dialogs

  Background:
    Given I navigate to the Alerts page

  Scenario: Alert, Confirm and Prompt buttons are displayed
    Then the Alert button should be visible
    And the Confirm button should be visible
    And the Prompt button should be visible

  Scenario: Alert dialog is handled when Alert button is clicked
    When I click the Alert button
    Then the alert dialog should be accepted

  Scenario: Confirm dialog is accepted when OK is clicked
    When I accept the confirm dialog
    And I click the Confirm button
    Then the Confirm button should still be visible

  Scenario: Confirm dialog is dismissed when Cancel is clicked
    When I dismiss the confirm dialog
    And I click the Confirm button
    Then the Confirm button should still be visible

  Scenario: Prompt dialog responds with a custom value
    When I respond to the prompt with "MyCustomResponse"
    And I click the Prompt button
    Then the Prompt button should still be visible

  Scenario: Prompt dialog is cancelled with null response
    When I cancel the prompt dialog
    And I click the Prompt button
    Then the Prompt button should still be visible