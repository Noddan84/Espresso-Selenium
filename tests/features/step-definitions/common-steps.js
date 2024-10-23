import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.driver.get(url);
});

Given('that I make the choice to {string}', async function (choice) {
  
});

Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {  
  // translate statusType (Health, Money, Espressos) to cssSelector (.health, .money., .espressoCups)
  let cssSelector = '.' + statusType.toLowerCase();
  if (cssSelector === '.espressos') { cssSelector = '.espressocups'; }
  // convert the selector so it only grabs the child element .progress
  cssSelector += ' .progress';
  // grab the dom element and the text inside it and conver to a number (using +)
  let element = await this.get(cssSelector);  
  let numValue = +(await element.getText());
  //compare value and expected value  
  //console.log(numValue);
  expect(numValue).to.equal(expectedNumValue);
});

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  // get the lement with the bag content
  let element = await this.get('.bag-content');
  // get the text and trim from spaces at beginning and end
  let bagContent = (await element.getText()).trim();
  expect(bagContent).to.equal(expectedBagContent);
});

Then('I should be at the location {string}', async function (location) {
  // TODO: implement step
});

When('I wait for the event {string} to take place', async function (event) {
  // TODO: implement step
});