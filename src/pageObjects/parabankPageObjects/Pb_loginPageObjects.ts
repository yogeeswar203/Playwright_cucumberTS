import { expect, Page } from "@playwright/test";
import { pageFixture as pf } from "../../hooks/pageFixers";
import { commonUtilitiesFunctions } from "../common_driverutilies";

let cuf:commonUtilitiesFunctions;
const pbBankLoginUrl = "https://parabank.parasoft.com/parabank/register.htm";
export class parabankLoginPage{
    private readonly username_txt;
    private readonly password_txt;
    private readonly login_btn;
    private readonly validation_text;

    

    constructor (page:Page)
    {
        this.username_txt = pf.page.locator("input[name='username']");
        this.password_txt = pf.page.locator("input[name='password']");
        this.login_btn = pf.page.getByRole('button',{name :'Log in'});
        this.validation_text = pf.page.locator(".error");
    }

    async navigateToPBankLoginPage()
    {
        cuf = new commonUtilitiesFunctions(pf.page);
        await cuf.navigateToLoginPage(pbBankLoginUrl);
    }

    async parabankUserLogin(username:string, password:string){
        await cuf.enterText(this.username_txt,username);
        await cuf.enterText(this.password_txt, password);
        await cuf.user_click(this.login_btn);

    }

    async getValdationText()
    {
        const error_msg = await cuf.getText(this.validation_text);
        //console.log(error_msg);
        expect(error_msg).toBe("The username and password could not be verified.");
    }

   




}