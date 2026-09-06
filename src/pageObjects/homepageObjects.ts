import {test, expect, Locator, Page} from "@playwright/test";
import {} from "../hooks/pageFixers";

export class homepagehrm{
    private readonly page;
    private readonly dashboard_txt;

    constructor(page:Page)
    {
        this.page=page;
        this.dashboard_txt= this.page.locator("h6:has-text('Dashboard')");
    }

    async getText(locator:Locator)
    {
        await this.page.waitForLoadState('networkidle')
        const text = await locator.textContent();
        return text;
    }

    async getHomePageText(){
        const msg = await this.getText(this.dashboard_txt);
        console.log(msg);
    }
}