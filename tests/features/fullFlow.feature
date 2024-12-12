@Regression
Feature: Full Flow Feature

    Background:
        Given open url "https://www.saucedemo.com"
        And input username "standard_user" and password "secret_sauce"
        And click Login button
        And add "2" items to cart randomly

    @Positive
    Scenario: Full flow of order
        When click Cart button
        And remove an item product
        And click Checkout button
        And input checkout form
        | First Name | Steven |
        | Last Name  | Hadi   |
        | Zip        | 50242  |
        And click Continue button
        And click Finish button
        Then verify checkout complete page opened
