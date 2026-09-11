import {test, expect, Page, Locator} from "@playwright/test";
import { pageFixture as pf } from "../hooks/pageFixers";
import { setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60*1000);

export class commonUtilitiesFunctions{
    private readonly page;

    constructor (page:Page)
    {
        this.page = pf.page;
        
    }

    async navigateToLoginPage(url:string)
    {
        await pf.page.goto(url);
        await pf.page.waitForTimeout(2000);
        await this.ideal();
    }



    // Re-usable methods

    async enterText(locator:Locator, data:string)
    {
        await (locator).isEnabled();
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

        async getText(locator:Locator)
    {
        await expect(locator).toBeEnabled();
        const text = await locator.textContent();
        await this.page.waitForLoadState('networkidle');
        return text;
    }
   

   
    
}
