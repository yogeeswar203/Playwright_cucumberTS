import {test, expect, Page, Locator} from "@playwright/test";
import { pageFixture as pf } from "../hooks/pageFixers";
import { setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60*1000);
let logInPageURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

export class loginPagehrm{
    private readonly page;
    private readonly usernametxt;
    private readonly passwordtxt;
    private readonly loginbtn;
    


    constructor (page:Page)
    {
        this.page = pf.page;
        this.usernametxt = pf.page.locator("input[name='username']");
        this.passwordtxt = pf.page.locator("input[name='password']");
        this.loginbtn = pf.page.locator("button[type='submit']");
        
    }

    async navigateToLoginPage()
    {
        await pf.page.goto(logInPageURL);
        await pf.page.waitForTimeout(2000);
        await this.ideal();
    }
    async adminuserLogin(username:string, password:string)
    {
        await this.enterText(this.usernametxt,username);
        await this.enterText(this.passwordtxt,password);
        await this.user_click(this.loginbtn);
        await this.ideal();
        
    }



    // Re-usable methods

    async enterText(locator:Locator, data:string)
    {
        await locator.fill(data);
        await pf.page.waitForLoadState("networkidle");

    }

    async user_click(locator:Locator)
    {
        await expect(locator).toBeEnabled();
        await locator.click();
        await pf.page.waitForLoadState("networkidle");
    }

    async ideal()
    {
        await pf.page.waitForLoadState("networkidle");
    }

   

   
    
}
