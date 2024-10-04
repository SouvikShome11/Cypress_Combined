Feature: Scenario Outline Example for cypress Cucumber

  Scenario Outline: Google Keyword Search
    Given I Visit Google
    When I search for '<Keyword>'

    Examples:
      | Keyword      |
      | Cypress      |
      | Selenium     |
      | Webdriver IO |
