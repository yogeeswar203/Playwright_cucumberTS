import {test, expect, Locator, Page} from "@playwright/test";
import {pageFixture as pf} from "../hooks/pageFixers";
import { loginPagehrm } from "./loginPage";

let lp:loginPagehrm;



export class homepagehrm{
    private readonly page;
    private readonly dashboard_txt;
    private readonly addemp_link;
    //private readonly pim_link;
    private readonly leaveDashboard_txt;
    private readonly leavePage_link;
    

    constructor(page:Page)
    {
        this.page=pf.page;
        this.dashboard_txt= pf.page.locator("h6:has-text('Dashboard')");
        //this.pim_link = this.page.locator("a span:has-text('PIM')");
        this.addemp_link = pf.page.locator("a:has-text('Add Employee')");
        this.leaveDashboard_txt = pf.page.locator("h6:has-text('Leave')");
        this.leavePage_link = pf.page.locator("a span:has-text('Leave')");


        
    }

    async getText(locator:Locator)
    {
        await expect(locator).toBeEnabled();
        const text = await locator.textContent();
        await this.page.waitForLoadState('networkidle');
        return text;
    }

    async getHomePageText(){
        const msg = await this.getText(this.dashboard_txt);
        return msg;
    }

    async navigateToAnyModule(portalName:string)
    {
        const dynamicLocatorLink = `a span:has-text('${portalName}')`;
        const linkLocator = this.page.locator(dynamicLocatorLink);
        //console.log(linkLocator)
        await linkLocator.click();
        await this.page.waitForLoadState('networkidle');
        
    }

    async clickOnAddEmployee()
    {
        lp = new loginPagehrm(pf.page);
        await lp.user_click(this.addemp_link);
        await lp.ideal();
    }

    async getLeaveDashboardText(){
        const leaveDashboard_text = await this.getText(this.leaveDashboard_txt);
        return leaveDashboard_text;

    }


     async clickOnLeaveTab(){
        lp = new loginPagehrm(pf.page);
        await lp.user_click(this.leavePage_link);
        lp.ideal();
    }
}