Feature: Check help button
As a user I want to be able to use the help button from any part of the game

  Scenario: The help button works on the first scene
    Given that I have started the game by navigating to "http://localhost:5500/"
    Then I should be at the location "outside the Cloud Forest Cafe"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear
  
  Scenario: the help button works when i go north and check the help button
    Given that I make the choice to "Go north"
    Then I should be at the location "an empty street"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear
  
  Scenario: the help button works when i go east after north and check the help button
    Given that i am at the location "an empty street"
    And that I make the choice to "Go east"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear
  
  Scenario: the help button works when i go to the location south from the Start and check the help button
    Given that i am at the location "a crowded bar where everyone is friendly"
    And that I make the choice to "Go west"
    And that I make the choice to "Go south"
    And that I make the choice to "Go south"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear
  
  Scenario: i go to the festival and check the help button
    Given that i am at the location "the contry-side"
    And that I make the choice to "Go west"
    When i click the "Help" button
    Then the Help description should appear
    When i click the "Continue" button
    Then the Help description should disappear