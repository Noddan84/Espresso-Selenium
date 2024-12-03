Feature: Check fullscreen button
  As a user I want to be able to use the fullscreen button from any part of the game

  Scenario: The help button works on the first scene
    Given that I have started the game by navigating to "http://localhost:5500/"
    Then that i am at the location "outside the cafe"
    When i click to go Fullscreen
    Then the game should go fullscreen
    When i press "ESCAPE"
    Then i should exit fullscreen

  Scenario: the help button works when i go north and check the Full screen button
    Given that I make the choice to "Go north"
    Then that i am at the location "on an empty street"
    When i click to go Fullscreen
    Then the game should go fullscreen
    When i press "ESCAPE"
    Then i should exit fullscreen

  Scenario: the help button works when i go east after north and check the Full screen button
    Given that i am at the location "on an empty street"
    And that I make the choice to "Go east"
    When i click to go Fullscreen
    Then the game should go fullscreen
    When i press "ESCAPE"
    Then i should exit fullscreen

  Scenario: the help button works when i go to the location south from the Start and check the Full screen button
    Given that i am at the location "in a crowded bar"
    And that I make the choice to "Go west"
    And that I make the choice to "Go south"
    And that I make the choice to "Go south"
    When i click to go Fullscreen
    Then the game should go fullscreen
    When i press "ESCAPE"
    Then i should exit fullscreen

  Scenario: i go to the festival and check the Full screen button
    Given that i am at the location "in the country-side"
    And that I make the choice to "Go west"
    When i click to go Fullscreen
    Then the game should go fullscreen
    When i press "ESCAPE"
    Then i should exit fullscreen