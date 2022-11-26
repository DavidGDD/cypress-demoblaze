Feature: BlazeDemo Automation

  As a candidate to The Knot WW
  I want to test some features of Blazemeter
  So that i cant probe my skills with Cypress

  @regression @smoke
  Scenario: Blazedemo should show a complete top navigation header
    Given A user in the landing page
    When  the landing page is fully loaded
    Then  the top-navigation elements are visibles

  @regression
  Scenario: Select a laptop to cart
    Given A user in the laptop shop
    When  An item is selected
    Then  The item should be added to cart

  @regression
  Scenario: Unselect an item from cart
    Given A user with a laptop in cart
    When  The item is unselected from cart
    Then  The cart is empty

  @regression
  Scenario: Select a phone to cart
    Given A user in the phone shop
    When  An item is selected
    Then  The item should be added to cart

