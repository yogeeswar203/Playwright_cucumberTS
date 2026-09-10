import {Before, BeforeAll, After, AfterAll, AfterStep } from '@cucumber/cucumber'
import {chromium, Browser,  BrowserContext} from '@playwright/test';
import {pageFixture} from './pageFixers';
import * as fs from 'fs';


let browser:Browser;
let context: BrowserContext;

BeforeAll(async function(){
  browser = await chromium.launch({headless:false});

});

AfterAll(async function(){

  await browser.close();
})

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

After(async function () {
    
    const envDetails = `
    
Browser=Chrome
Project=Style Haven
Environment=Staging
Execution_Time=${new Date().toLocaleString()}
  `;
  
  // Write this file into the allure-results folder
  fs.writeFileSync('allure-results/environment.properties', envDetails.trim());
    

  await pageFixture.page.close();
  await context.close();
})

AfterStep(async function (scenario) 
{
   // Because we removed the 'if' condition, this runs for Passed AND Failed tests
  if (pageFixture.page) {
    const screenshot = await pageFixture.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/jpeg');
  } else {
    console.error("Page object is undefined. Check your Before hook.");
  }
});

