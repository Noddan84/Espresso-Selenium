import seleniumWebdriver, { By } from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import edge from 'selenium-webdriver/edge.js';

const GITHUB_ACTIONS = process.env['GITHUB_ACTIONS'] === 'true';

const options = new edge.Options();
//headless && options.addArguments('--headless=new');
(headless || GITHUB_ACTIONS) && options.addArguments('--headless=new');

export const driver = new seleniumWebdriver
  .Builder()
  .setEdgeOptions(options)
  .forBrowser(browser.EDGE)
  .build();

class CustomWorld {
  constructor() {
    this.driver = driver;
  }

  async get(cssSelector) {
    return await this.driver.findElement(By.css(cssSelector));
  }

  async getMany(cssSelector) {
    return await this.driver.findElements(By.css(cssSelector));
  }

  async getByXPath(xPath) {
    return await this.driver.findElement(By.xpath(xPath));
  }

  async getManyByXPath(xPath) {
    return await this.driver.findElements(By.xpath(xPath));
  }

  async getWait(cssSelector, maxTimeToWaitMs = 5000) {
    return await this.driver.wait(
      until.elementLocated(By.css(cssSelector)), maxTimeWaitMs);
  }

  async getByXPathWait(xPath, maxTimeToWaitMs = 5000) {
    return await this.driver.wait(
      until.elementLocated(By.xpath(xPath)), maxTimeWaitMs);
  }

}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);