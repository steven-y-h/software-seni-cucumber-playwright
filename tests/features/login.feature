@Regression
Feature: Login Feature

    Background:
        Given open url "https://www.saucedemo.com"

    @Positive
    Scenario: Successfull login
        And input username "standard_user" and password "secret_sauce"
        When click Login button
        Then verify inventory page opened