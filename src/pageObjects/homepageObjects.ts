import {test, expect, Locator, Page} from "@playwright/test";
import {pageFixture} from "../hooks/pageFixers";
import { loginPagehrm } from "./loginPage";

let lpr:loginPagehrm;



export class homepagehrm{
    private readonly page;
    private readonly dashboard_txt;
    private readonly pim_link;
    private readonly moduleName:any;
    

    constructor(page:Page)
    {
        this.page=page;
        this.dashboard_txt= this.page.locator("h6:has-text('Dashboard')");
        this.pim_link = this.page.locator("a span:has-text('PIM')");
        this.moduleName;
        
    }

    async getText(locator:Locator)
    {
        const text = await locator.textContent();
        await this.page.waitForLoadState('networkidle');
        return text;
    }

    async getHomePageText(){
        const msg = await this.getText(this.dashboard_txt);
        console.log(msg);
    }

    async navigateToPIM()
    {
        lpr = new loginPagehrm(pageFixture.page);
        await lpr.clickOnlinkbtn(this.pim_link);
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToAnylink(portalName:string)
    {
        const dynamicLocatorLink = `a span:has-text('${portalName}')`;
        const linkLocator = this.page.locator(dynamicLocatorLink);
        //console.log(linkLocator)
        await linkLocator.click();
        await this.page.waitForLoadState('networkidle');
        
    }


}