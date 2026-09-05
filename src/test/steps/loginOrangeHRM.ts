import {Given, When, Then} from "@cucumber/cucumber";
import { loginPagehrm } from "../../pageObjects/loginPage";
import { pageFixture } from "../../hooks/pageFixers";

let lpr:loginPagehrm;

Given('I navigate to the OrangeHRM login pages', async function () {
  // Write code here that turns the phrase above into concrete actions
  lpr = new loginPagehrm(pageFixture.page);
  await lpr.navigateTologin();
  console.log("Naviagted to home page")
  
});

When('I enter a valid username', async function () {
  // Write code here that turns the phrase above into concrete actions
  await lpr.enterUsername("Admin");
  
});

When('I enter a valid password', async function () {
  // Write code here that turns the phrase above into concrete actions
  await lpr.enterpassword("admin123");
});

When('I click on the submit button', async function () {
  // Write code here that turns the phrase above into concrete actions
  await lpr.clickonLoginbtn();
  
});

Then('I should be successfully logged in and redirected to the dashboard test', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Logged in")
});