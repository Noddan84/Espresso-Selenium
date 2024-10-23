
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';


Then('the Help description should appear', async function(){
  let element = await this.driver.findElement(By.css('.description'));
  let description = (await element.getText()).trim();
  expect(description).to.includes("You're a hipster. And you love iThings and your cool bag.");
});

Then('the Help description should disappear', async function () {
  let element = await this.driver.findElement(By.css('.description'));
  let description = (await element.getText()).trim();
  expect(description).to.not.includes("You're a hipster. And you love iThings and your cool bag.");
});
/* 
Given('that I make the choice to {string}', async function(a){
  // TODO: implement step
});

Given('that i am at the location {string}', async function(a){
  // TODO: implement step
}); */