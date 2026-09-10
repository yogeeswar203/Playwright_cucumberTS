import { When, setDefaultTimeout, Then } from "@cucumber/cucumber";
import {pageFixture, pageFixture as pf} from "../../hooks/pageFixers"
import { loginPagehrm } from "../../pageObjects/loginPage";
import { homepagehrm } from "../../pageObjects/homepageObjects";
import { expect } from "@playwright/test";

setDefaultTimeout(60*1000);
let lp:loginPagehrm;
let hp: homepagehrm;

When("User is able to navigate to LoginPage", async function(){
    // Object creating for the login and Home page
    lp = new loginPagehrm(pf.page);
    hp = new homepagehrm(pf.page);

    await lp.navigateToLoginPage();


});

Then("User able to enter username as {string} and password as {string}", async function(username, password){
    await lp.adminuserLogin(username, password);

    
});

Then("User is able to navigate to home successfully", async function(){
    const homepage_txt = await hp.getHomePageText();
    //console.log("The Home message",homepage_txt);
     await expect(homepage_txt).toBe("Dashboard");

   
});

Then ("User navigate to {string} page", async function(moduleName)
{
       await hp.navigateToAnyModule(moduleName);
});

Then ("user click on Add employee", async function(){
    await hp.clickOnAddEmployee();
})

