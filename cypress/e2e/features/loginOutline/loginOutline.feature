Feature: Login Outline

@probando
Scenario Outline: Login with valid credentials
    Given I am on the login page2
    When I fill in my email and password with <user> and <pass>
    Then I should validate that I am not logged in 
    Examples:
        | user | pass |
        | user3 | pass3 |
        | user4 | pass4 |