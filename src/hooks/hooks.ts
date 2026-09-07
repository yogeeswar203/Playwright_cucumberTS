import {Before, BeforeAll, After, AfterAll, Status, AfterStep} from '@cucumber/cucumber'
import {chromium, Browser, Page} from '@playwright/test';
import {pageFixture} from './pageFixers';
import * as fs from 'fs';

let page:Page;
let browser:Browser;

BeforeAll(async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
});

AfterAll(async function () {
    await page.waitForTimeout(3000);
    const envDetails = `
    
Browser=Chrome
Project=Style Haven
Environment=Staging
Execution_Time=${new Date().toLocaleString()}
  `;
  
  // Write this file into the allure-results folder
  fs.writeFileSync('allure-results/environment.properties', envDetails.trim());
    

  await page.close();
  await browser.close();
})

AfterStep(async function (scenario) 
{
   // Because we removed the 'if' condition, this runs for Passed AND Failed tests
  if (page) {
    const screenshot = await pageFixture.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/jpeg');
  } else {
    console.error("Page object is undefined. Check your Before hook.");
  }
})

