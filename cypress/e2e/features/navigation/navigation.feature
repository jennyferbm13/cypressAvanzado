Feature: NavigationBar
#Algo que se va a correr antes de cada prueba
Background:
Given I am on the login page
And I fill in my email and password with "username" and "password"

Scenario: Navigate to the Feaure Navigation Bar
Given I am on the home page
When I click on the Account Activity Nav
Then I should see the Account Activity content

