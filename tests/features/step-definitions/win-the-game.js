import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

/* No duplicate steps, this one already in common-steps.js
Given('that I have started the game by navigating to {string}', async function (url) { });*/

/* No duplicate steps, this one already in common-steps.js
Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) { });*/

/* No duplicate steps, this one already in common-steps.js
Then('my hipster bag should contain {string}', async function (expectedBagContent) { });*/

/* No duplicate steps, this one already in common-steps.js
Then('I should be at the location {string}', async function (location) {
  // TODO: implement step
});
*/

/* No duplicate steps, this one already in common-steps.js
Given('that I make the choice to {string}', async function (choice) {
  // TODO: implement step
});*/

/* Given('that i am at the location {string}', async function (a) {
  // TODO: implement step
}); */

/* No duplicate steps, this one already in common-steps.js
When('I wait for the event {string} to take place', async function (event) {
});*/

Then('the value of my {string} should be unchanged', async function (Health) {
  // TODO: implement step
  let cssSelector = '.' + Health.toLowerCase() + ' .progress .val';
  let element = await this.driver.findElement(By.css(cssSelector));
  let initialValue = +(await element.getText());  

  // Check the value again
  let updatedValue = +(await element.getText());
  expect(updatedValue).to.be.equal(initialValue);

});

Then('I should be given the new choice {string}', async function (ChosenOption) {  
  let choices = await this.driver.findElements(By.css('ul li'));
  for (let choice of choices) {
    if (await choice.getText() === ChosenOption) {
      await choice.click();
      break;
    }
  }
});
