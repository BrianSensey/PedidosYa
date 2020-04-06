Feature: Oreder a menu

  As a user I should be able to order a menu.

  Background:
    Given I am on a restaurant list

  Scenario: Order a menu
    When I select "Facal" restaurant
    And I add "Sándwich caliente con jamón y queso" to the order
    And I add "Ensalada de frutas" to the order
    And I change the amount of "Ensalada de frutas" to "2"
    Then I see all menus under "Mi pedido"
    And I see the subtotal is "$436"
    And I see the total is "$456"
