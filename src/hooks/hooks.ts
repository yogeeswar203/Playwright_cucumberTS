import {Before, BeforeAll, After, AfterAll} from '@cucumber/cucumber'
import {chromium, Browser, Page} from '@playwright/test';
import {pageFixture} from './pageFixers';

let page:Page;
let browser:Browser;

BeforeAll(async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
});

AfterAll(async function () {
    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();
    
})