import {Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";
import {pageFixture} from '../../hooks/pageFixers';
setDefaultTimeout(60000);

let browser:Browser;
let page: Page;


Given('I navigate to the OrangeHRM login page', async function () {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await pageFixture.page.waitForLoadState('networkidle');

});

Then('I should be successfully logged in and redirected to the dashboard', async function () {
 const page_title = pageFixture.page.locator("h5");
 await expect(page_title).toBeVisible();
});