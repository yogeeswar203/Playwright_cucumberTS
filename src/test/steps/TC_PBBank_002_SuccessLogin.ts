import { Then, When } from "@cucumber/cucumber";
import { pageFixture as pf } from "../../hooks/pageFixers";
import { parabankLoginPage } from "../../pageObjects/parabankPageObjects/Pb_loginPageObjects";
import { parabankRegisterpage } from "../../pageObjects/parabankPageObjects/Pb_RegisterPageObjects";

let pblogin: parabankLoginPage;
let pbreg:parabankRegisterpage;

When("User click on the Register button", async function(){
    pblogin = new parabankLoginPage(pf.page);
    pbreg = new parabankRegisterpage(pf.page);
    await pblogin.navigateToPBankLoginPage();
    

}) 

Then ("User fills the registration page details", async function(){
    await pbreg.enter_textonRegisterPage();
})
