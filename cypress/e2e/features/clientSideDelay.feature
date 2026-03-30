Feature: Client Side Delay
  As a user
  I want to interact with elements that appear after client-side JavaScript processing
  So that I can verify the application handles delayed content correctly

  Background:
    Given I navigate to the Client Side Delay page

  Scenario: Trigger button is visible on page load
    Then the trigger button should be visible with text "Button Triggering Client Side Logic"

  Scenario: Result label appears after clicking the trigger button
    When I click the trigger button
    Then the result label "Data calculated on the client side." should appear within 20 seconds

  Scenario: Result label is not shown before clicking the button
    Then the result label should not be visible on the page