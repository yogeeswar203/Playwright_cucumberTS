Feature: PIM Employee Management
  As an HR Administrator
  I want to manage employee records within the PIM module
  So that the company maintains an accurate and up-to-date employee directory
  Background:
    Given User is able to navigate to LoginPage
    And User able to enter username as "Admin" and password as "admin123"
    And User is able to navigate to home successfully

  Scenario:
    When User navigate to leave page
    Then User is able to see leave dashboard

 