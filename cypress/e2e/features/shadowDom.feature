Feature: Shadow DOM
  As a user
  I want to interact with elements inside a Shadow DOM component
  So that I can verify the GUID generator works correctly

  Background:
    Given I navigate to the Shadow DOM page

  Scenario: GUID generator component is displayed
    Then the guid-generator component should exist
    And the Generate button should be visible
    And the Copy button should be visible

  Scenario: GUID is generated when Generate button is clicked
    Given the GUID input field is empty
    When I click the Generate button
    Then the GUID input field should not be empty

  Scenario: Generated GUID has the correct format
    When I click the Generate button
    Then the GUID should match the pattern "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

  Scenario: Each click of Generate button produces a unique GUID
    When I click the Generate button
    And I note the current GUID value
    And I click the Generate button
    Then the new GUID should be different from the previous one

  Scenario: Copy button copies the GUID to clipboard
    When I click the Generate button
    And I click the Copy button
    Then the GUID input should still hold the generated value