Feature: Search restaurants

  As a user I should be able to search for restaurants
  based on my location and preferences.

  Background:
    Given I am on the home page

  Scenario Outline: Search restaurants by address
    When I select "<department>" as the department
    And I enter "<address>" as the address
    Then I am taken to the restaurants list
    And I can see restaurants in the list

    Examples:
      | department | address          |
      | Maldonado  | Sarandi 792      |
      | Montevideo | 18 de Julio 1249 |

