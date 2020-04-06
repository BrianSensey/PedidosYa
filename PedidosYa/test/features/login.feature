Feature: Performing a login

  As a user of PedidosYa, I should be able to log in.

  Background:
    Given I am on the home page

  Scenario: Log in with correct credentials
    When I login with email and password
      | email           | password     |
      | tomas@oktana.io | Password1234 |
    Then I appear logged in as "Tomas"
    
