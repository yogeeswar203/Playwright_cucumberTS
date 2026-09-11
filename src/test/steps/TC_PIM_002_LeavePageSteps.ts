import { When, setDefaultTimeout, Then } from "@cucumber/cucumber";
import {pageFixture, pageFixture as pf} from "../../hooks/pageFixers"
import { loginPagehrm } from "../../pageObjects/loginPage";
import { homepagehrm } from "../../pageObjects/homepageObjects";
import { expect } from "@playwright/test";

setDefaultTimeout(60*1000);
let lp:loginPagehrm;
let hp: homepagehrm;

Then ("User navigate to leave page", async function(){
    lp = new loginPagehrm(pf.page);
    hp = new homepagehrm(pf.page);
    await hp.clickOnLeaveTab();
});

Then ("User is able to see leave dashboard", async function(){
    
    let LeaveText = await hp.getLeaveDashboardText();
    console.log(`User is able to navigate to ${LeaveText} page succesfully`);
    
})

