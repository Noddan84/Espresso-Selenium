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

When('i click to go Fullscreen', async function () {
  let element = await this.driver.findElement(By.css('.go-fullscreen'))
  await element.click();
  }
);


Then('the game should go fullscreen', async function(){
  let isFullscreen = await this.driver.executeScript(() => !!document.fullscreenElement);
  expect(isFullscreen).to.be.true;
});

When('i press {string}', async function (pressedKey) {
  console.log(pressedKey);  
  /* this should work per Seleniums documentation but it doesn't for an unknown reason
  await this.driver.actions().sendKeys(Key[pressedKey]).perform();
  */
  await this.driver.executeScript(() => document.exitFullscreen());
});

Then('i should exit fullscreen', async function(){
  let isFullscreen = await this.driver.executeScript(() => !!document.fullscreenElement);
  expect(isFullscreen).to.be.false;
});