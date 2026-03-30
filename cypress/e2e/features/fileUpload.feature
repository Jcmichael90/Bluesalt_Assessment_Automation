Feature: File Upload
  As a user
  I want to upload files through the file upload interface
  So that I can verify the application handles file uploads correctly

  Background:
    Given I navigate to the File Upload page

  Scenario: File Upload page heading is displayed
    Then the page heading "File Upload" should be visible

  Scenario: Drag and drop zone is displayed inside the iframe
    Then the drag and drop zone should be visible inside the iframe

  Scenario: Browse files button is displayed inside the iframe
    Then the Browse files button should be visible inside the iframe

  Scenario: File can be uploaded using the file input
    When I upload the file "sample.txt" using the file input
    Then the file upload area should still be present