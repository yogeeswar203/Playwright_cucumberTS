Feature: Para Bank Log in page validations
  Background:
    #Given User is able to navigate to LoginPage
    #And User able to enter username as "Admin" and password as "admin123"
    #And User is able to navigate to home successfully

  Scenario: Verify the user not able to LoginPage with invalid credentials
    When User is able to navigate to PB Bank LoginPage
    And User enter username as "test" and password as "test@203" cliked on login
    #And user able to see the Error message
    
  Scenario: Verify user is able to Register with proper data
    When User is able to navigate to PB Bank LoginPage
    And User click on the Register button
    And User fills the registration page details

 