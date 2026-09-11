import { Then, When } from "@cucumber/cucumber";
import { pageFixture as pf } from "../../hooks/pageFixers";
import { parabankLoginPage } from "../../pageObjects/parabankPageObjects/Pb_loginPageObjects";

let pblogin: parabankLoginPage;

When("User is able to navigate to PB Bank LoginPage", async function(){
    pblogin = new parabankLoginPage(pf.page);
    pblogin.navigateToPBankLoginPage();
})

When ("User enter username as {string} and password as {string} cliked on login", async function(usernname:string, password:string){
    await pblogin.parabankUserLogin(usernname, password);
});

Then ("user able to see the Error message", async function(){
    await pblogin.getValdationText()
})


