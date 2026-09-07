import {Given, When, Then} from "@cucumber/cucumber";
import { loginPagehrm } from "../../pageObjects/loginPage";
import { pageFixture } from "../../hooks/pageFixers";
import { homepagehrm  } from "../../pageObjects/homepageObjects";
import {pimPageObjects} from "../../pageObjects/PIMObjects";

let lpr:loginPagehrm;
let hm:homepagehrm;
let pim:pimPageObjects;



Given('I am logged into OrangeHRM as {string} with password {string}', async function (username:string, password:string ) {
  // Write code here that turns the phrase above into concrete actions
  lpr = new loginPagehrm(pageFixture.page);
  hm = new homepagehrm(pageFixture.page);
  pim = new pimPageObjects(pageFixture.page);
  await lpr.navigateTologin();
  await lpr.userLogin(username,password);
  
});


Given("I navigate to the {string} module page", async function (panelName:string) {
    //console.log(panelName);
    await hm.navigateToAnylink(panelName);
  
});

When("I click on the Add Employee button", async function(){
    await pim.clickonAddemp();
    
});

When ("I enter {string} into the First Name field", async function(firstName:string){
  await pim.eneterFirstName(firstName);
});

When ("I enter {string} into the Middle Name field", async function(middleName:string){
  await pim.eneterMiddleName(middleName);
});

When ("I enter {string} into the Last Name field", async function(lastName:string){
  await pim.eneterLastName(lastName);
});

When ("I leave the {string} field as auto-generated", async function(empID:string){
  await pim.eneterempId(empID);
});

When ("I click the Save button", async function(){
  await pim.clickOnSavebtn();
})

Then ("I should be redirected to the employee's Personal Details page",async function(){
  await pim.getpersonalDetailsText();
})