@Regression
Feature: Select Items Feature

    Background:
        Given open url "https://www.saucedemo.com"
        And input username "standard_user" and password "secret_sauce"
        And click Login button

    @Positive
    Scenario Outline: Validate add <Number of Products> items to cart
        When add "<Number of Products>" items to cart randomly
        Then verify number of cart is "<Number of Products>"
        Examples:
        | Number of Products |
        | 2                  |
        | 3                  |
        | 4                  |
