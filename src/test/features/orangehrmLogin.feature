Feature: OrangeHRM Login Functionality test

@smoke
  Scenario: Verify user is able to login ORM
        Given I navigate to the OrangeHRM login pages
            When I enter a valid username
            And I enter a valid password
            And I click on the submit button
            Then I should be successfully logged in and redirected to the dashboard test
    