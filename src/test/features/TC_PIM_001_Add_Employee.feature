Feature: PIM Employee Management
  As an HR Administrator
  I want to manage employee records within the PIM module
  So that the company maintains an accurate and up-to-date employee directory

  @smoke @pim
  Scenario: Add a new employee with only mandatory fields
    Given I am logged into OrangeHRM as "Admin" with password "admin123"
    And I navigate to the "PIM" module page
    When I click on the Add Employee button
    And I enter "Jane" into the First Name field
    And I enter "Dac" into the Middle Name field
    And I enter "Smith" into the Last Name field 
    And I click the Save button
    #Then I should see a success toast message
    Then I should be redirected to the employee's Personal Details page