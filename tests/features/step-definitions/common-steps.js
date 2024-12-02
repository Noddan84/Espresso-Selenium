import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.driver.get(url);
});

Given('that i am at the location {string}', async function (location) {
  let element = await this.driver.findElement(By.css('.description'));
  let description = (await element.getText()).trim();
  expect(description).to.contains(location);
});

Given('that I make the choice to {string}', async function (ChosenOption) {
  let choices = await this.driver.findElements(By.css('ul li'));
  for (let choice of choices) {
    if (await choice.getText() === ChosenOption) {
      await choice.click();
      break;
    }
  }
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
  sleep(500);
  let element = await this.driver.findElement(By.css('.description'));
  let description = (await element.getText()).trim();
  expect(description).to.contains(location);
});

/*When('I wait for the event {string} to take place', async function (event) {
  // TODO: implement step
  let messageElement = await this.driver.findElement(By.css(`.description`));
  let messageText = await messageElement.getText();
  expect(messageText).to.include(event); // Kontrollera att meddelandet är korrekt

});*/

When('I wait for the event {string} to take place', async function (event) {
  let messageElement = await this.driver.findElement(By.css(`.description`));
  let messageText;

  // Loop för att klicka på "Wait" tills meddelandet matchar det förväntade
  let buttons = await this.driver.findElements(By.xpath('//ul/li[text()="Wait"]'));

  while (true) {
    // Klicka på "Wait" om knappen finns
    if (buttons.length > 0) {
      await buttons[0].click();
      await this.driver.sleep(500); // Vänta en kort stund mellan klick

      // Hämta texten från meddelandet
      messageText = await messageElement.getText();

      // Kontrollera om texten matchar det förväntade
      if (messageText.includes(event)) {
        break; // Avsluta loopen om texten är korrekt
      }

      // Hämta knapparna igen för att se om det finns fler att klicka på
      buttons = await this.driver.findElements(By.xpath('//ul/li[text()="Wait"]'));
    } else {
      // Om det inte finns fler "Wait"-knappar, bryt loopen
      break;
    }
  }

  // Kontrollera att meddelandet är korrekt
  expect(messageText).to.include(event);
});

When('i click the {string} button', async function (buttonName) {
  let buttons = await this.driver.findElements(By.css('ul li'));
  for (let button of buttons) {
    if (await button.getText() === buttonName) {
      await button.click();
      break;
    }
  }
});

Then('the value of my {string} should decrease', async function (statusType) {
  let cssSelector = '.' + statusType.toLowerCase() + ' .progress .val';
  let element = await this.driver.findElement(By.css(cssSelector));
  let initialValue = +(await element.getText());

  // Click the "Wait" button repeatedly - seems to take 7 clicks
  for (let i = 0; i < 6; i++) {
    let listItem = await this.driver.findElement(By.xpath(`//ul/li[text()="Wait"]`));
    await listItem.click();
    await this.driver.sleep(500); // Wait 500ms after each click
  }

  // Check the value again
  let updatedValue = +(await element.getText());
  expect(updatedValue).to.be.below(initialValue);
});

Then('the value of my {string} should have decreased', async function (statusType) {
  let cssSelector = '.' + statusType.toLowerCase() + ' .progress .val';
  let element = await this.driver.findElement(By.css(cssSelector));
  let initialValue = +(await element.getText());

  // Click the "Wait" button repeatedly
  for (let i = 0; i < 3; i++) {
    let listItem = await this.driver.findElement(By.xpath(`//ul/li[text()="Wait"]`));
    await listItem.click();
    await this.driver.sleep(500); // Wait 500ms after each click
  }

  // Check the value again
  let updatedValue = +(await element.getText());
  expect(updatedValue).to.be.below(initialValue);
});
