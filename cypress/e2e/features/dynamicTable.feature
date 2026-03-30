Feature: Dynamic Table
  As a user
  I want to verify values in a dynamic table with changing column positions
  So that I can confirm the application correctly displays process data

  Background:
    Given I navigate to the Dynamic Table page

  Scenario: Table is displayed with correct headers
    Then the task manager table should be visible
    And the table should have a "CPU" column header
    And the table should have a "Name" column header

  Scenario: Chrome process is present in the table
    Then the Chrome process should be listed in the table

  Scenario: Chrome CPU value in table matches the label
    Then the Chrome CPU value in the table should match the yellow label

  Scenario: Chrome CPU label is displayed below the table
    Then the Chrome CPU label should be visible below the table