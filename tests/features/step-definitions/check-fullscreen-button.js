import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key, logging } from 'selenium-webdriver';
import { expect } from 'chai';

/* No duplicate steps, this one already in common-steps.js
Given('that I have started the game by navigating to {string}', async function(a){
  // TODO: implement step
}); */

/* No duplicate steps, this one already in common-steps.js
Then('I should be at the location {string}', async function(a){
  // TODO: implement step
}); */

/* No duplicate steps, this one already in common-steps.js
When('i click the {string} button', async function(a){
  // TODO: implement step
}); */

/* No duplicate steps, this one already in common-steps.js
Given('that I make the choice to {string}', async function (a) {
  // TODO: implement step
}); */

/* No duplicate steps, this one already in common-steps.js
Given('that i am at the location {string}', async function (a) {
  // TODO: implement step
}); */

Then('the game should go fullscreen', async function(){
  let element = await this.driver.findElement(By.css('i'));
  expect(element).to.not.have.property('::before');
});

When('i press {string}', async function (pressedKey) {
  console.log(pressedKey);
  //let action = new Actions(this.driver);
  await action.sendKeys(Key.pressedKey).build().perform();
});

Then('i should exit fullscreen', async function(){
  let element = await this.driver.findElement(By.css('i'));
  expect(element).to.have.property('::before');
});