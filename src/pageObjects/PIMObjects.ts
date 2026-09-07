import {test, expect, Locator, Page} from "@playwright/test";
import {pageFixture} from "../hooks/pageFixers";
import { loginPagehrm } from "./loginPage";
import {homepagehrm} from "../pageObjects/homepageObjects"

let lpr:loginPagehrm;
let hmp:homepagehrm;
let buttonName="Add";


export class pimPageObjects{

    private readonly page:Page;
    private readonly firstname_txt;
    private readonly middlename_txt;
    private readonly lastname_txt;
    private readonly empid_txt;
    private readonly submit_addemp_btn;
    private readonly PersonalDetails_text;
   

    

    constructor(page:Page)
    {
        this.page =page;
        this.firstname_txt = this.page.locator("input[name='firstName']");
        this.middlename_txt = this.page.locator("input[name='middleName']");
        this.lastname_txt = this.page.locator("input[name='lastName']")
        this.submit_addemp_btn = this.page.locator("button[type='submit']");
        this.empid_txt = this.page.locator("[class='oxd-input oxd-input--active']").last();
        this.PersonalDetails_text = this.page.locator("a:has-text('Personal Details')");
        
    }

    async clickonAddemp(){
        lpr = new loginPagehrm(pageFixture.page);
        hmp = new homepagehrm(pageFixture.page);
        const dynamicbtnLocator = `button:text-is('${buttonName}')`;
        const clickableBtnLocator = this.page.locator(dynamicbtnLocator);
        //console.log(clickableBtnLocator);
        lpr.clickOnlinkbtn(clickableBtnLocator);
        await this.page.waitForLoadState("networkidle");
    }

    async eneterFirstName(fname:string)
    {
        await lpr.enterText(this.firstname_txt,fname);
    }

        async eneterMiddleName(mname:string)
    {
        await lpr.enterText(this.middlename_txt,mname);
    }

        async eneterLastName(lname:string)
    {
        await lpr.enterText(this.lastname_txt,lname);
    }

     async eneterempId(empID:string)
    {
        await lpr.enterText(this.empid_txt,empID);
    }

    async clickOnSavebtn(){
       lpr.clickOnlinkbtn(this.submit_addemp_btn);

    }

    async getpersonalDetailsText(){
        const exp_text = await hmp.getText(this.PersonalDetails_text);
        //console.log(exp_text);
        expect(exp_text).toBe("Personal Details");
    }


}