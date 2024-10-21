import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import edge from 'selenium-webdriver/edge.js';

const options = new edge.Options();
//headless && options.addArguments('--headless=new');

class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver
      .Builder()
      .setEdgeOptions(options)
      .forBrowser(browser.EDGE)
      .build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);