import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I click on {string}', async function (buttonName) {
  let buttons = await this.driver.findElements(By.css('ul li'));
  for (let button of buttons) {
    if (await button.getText() === buttonName) {
      await button.click();
      break;
    }
  }
});

When('the value of my {string} turns to {int}', async function (statusType, expectedValue) {
  let cssSelector = '.' + statusType.toLowerCase() + ' .progress .val';

  // Wait until health reaches 0
  await this.driver.wait(async () => {
    let element = await this.driver.findElement(By.css(cssSelector));
    let currentValue = +(await element.getText());
    return currentValue === expectedValue;
  }, 10000); // wait up to 10 seconds
});

Then('I should see an infomessage telling me I lost the game', async function () {
  let messageElement = await this.driver.findElement(By.css(`.description`));
  let messageText = await messageElement.getText();
  expect(messageText).to.include("You health has deteriorated too much"); // Kontrollera att meddelandet är korrekt
});

Then('I should see a {string} button', async function (buttonType) {
  // Använd buttonType för att söka efter knappen
  let button = await this.driver.findElement(By.xpath(`//ul/li[text()="${buttonType}"]`));
  expect(await button.isDisplayed()).to.be.true;
});
