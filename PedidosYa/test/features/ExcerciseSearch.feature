Feature: Search restaurants by address and restaurant

    Description: As a user I should be able to search for restaurants based on my location and preferences.

    Background:
      Given I am on the home page

    Scenario: Search gourmet restaurants using both an address and a restaurant name
      When I enter an address "Plaza Cagancha 1234" and a restaurant "La Pasiva"
      And I choose an address option
      And I confirm the address location
      And I filter by restaurants that accept credit card
      And I choose a restaurant option
      And I search two "Húngara porteña" in menu search field
      Then I verify the order appears correctly in “Mi pedido” section
      And I verify the order appears has a discount today and what percentage it is
      And I verify the price of the order

    Scenario: Search gourmet restaurants using both an address and a restaurant name
      When I enter an address "Plaza Cagancha 1234" and a restaurant "Gourmet"
      Then I verify all restaurants have the word "Gourmet" in their name

    Scenario: Search gourmet restaurants using an address name
      When I enter an address "Plaza Cagancha 1234"
      And I filter by restaurants that accept credit card
      And I filter by "Picadas" category
      Then I verify the list of restaurants returns results