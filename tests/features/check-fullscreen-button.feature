Feature: Check fullscreen button
  As a user I want to be able to use the fullscreen button from any part of the game

  Scenario: The help button works on the first scene
    Given that I have started the game by navigating to "http://localhost:5500/frontend/"
    Then I should be at the location "outside the Cloud Forest Cafe"
    When i click the "Full screen" button
    Then the game should go fullscreen
    And i should be able to exit full screen with "ESC"

  Scenario: the help button works when i go north and check the Full screen button
    Given that I make the choice to "Go north"
    Then I should be at the location "Empty street"
    When i click the "Full screen" button
    Then the game should go fullscreen
    And i should be able to exit full screen with "ESC"

  Scenario: the help button works when i go east after north and check the Full screen button
    Given that I am at the location "Empty street"
    And that i make the choice to "Go East"
    When i click the "Full screen" button
    Then the game should go fullscreen
    And i should be able to exit full screen with "ESC"

  Scenario: the help button works when i go to the location south from the Start and check the Full screen button
    Given that i am at the location "a crowded bar where everyone is friendly"
    And that I make the choice to "Go west"
    And that I make the choice to "Go south"
    And that I make the choice to "Go south"
    When i click the "Full screen" button
    Then the game should go fullscreen
    And i should be able to exit full screen with "ESC"

  Scenario: i go to the festival and check the Full screen button
    Given that i am at the location "the contry-side"
    And that I make the choice to "Go west"
    When i click the "Full screen" button
    Then the game should go fullscreen
    And i should be able to exit full screen with "ESC"