Feature: OrangeHRM Login Functionality
  As a registered user of OrangeHRM,
  I want to be able to log in to my account,
  So that I can access my employee dashboard.


  Scenario: Verify user is able to login to Orange HRM site successfully
    Given I navigate to the OrangeHRM login page
    Then I should be successfully logged in and redirected to the dashboard

    