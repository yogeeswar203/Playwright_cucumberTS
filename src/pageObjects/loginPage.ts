import {test, expect, Page, Locator} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixers";

export class loginPagehrm{
    private readonly page;
    private readonly usernametxt;
    private readonly passwordtxt;
    private readonly loginbtn;

    constructor (page:Page)
    {
        this.page = page;
        this.usernametxt = this.page.locator("input[name='username']");
        this.passwordtxt = this.page.locator("input[name='password']");
        this.loginbtn = this.page.locator("button[type='submit']");
    }

    async enterText(locator:Locator, data:string){
        await locator.clear();
        await locator.fill(data);
    }

    async clickOnlinkbtn(locator:Locator){
        await locator.click();
    }

    async userLogin(username:string, password:string){
        await this.enterText(this.usernametxt, username);
        await this.enterText(this.passwordtxt, password);
        await this.clickOnlinkbtn(this.loginbtn);


    }

    async enterUsername(data:string)
    {
        await this.usernametxt.clear();
        await this.usernametxt.fill(data);
    }

    async enterpassword(data:string)
    {
        await this.passwordtxt.clear();
        await this.passwordtxt.fill(data);
    }

    async clickonLoginbtn(){
        await this.loginbtn.click();
    }

    async navigateTologin()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    
}

