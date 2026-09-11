import { expect, Page } from "@playwright/test";
import { pageFixture as pf } from "../../hooks/pageFixers";
import { commonUtilitiesFunctions } from "../common_driverutilies";

let cuf:commonUtilitiesFunctions;
const pbBankLoginUrl = "https://parabank.parasoft.com/parabank/register.htm";
export class parabankRegisterpage{
    private readonly firstname_txt;
    private readonly lastname_txt;
    private readonly address_txt;
    private readonly state_txt;
    private readonly city_txt;
    private readonly zipcode_txt;
    private readonly phone_txt;
    private readonly ssn_txt;
    private readonly username_txt;
    private readonly password_txt;
    private readonly cnf_password_txt;
   

    

    constructor (page:Page)
    {
        
        this.firstname_txt  = pf.page.locator("input[id='customer.firstName']");
        this.lastname_txt   = pf.page.locator("input[id='customer.lastName']");
        this.address_txt    = pf.page.locator("input[id='customer.address.street']");
        this.state_txt      = pf.page.locator("input[id='customer.address.state']");
        this.city_txt       = pf.page.locator("input[id='customer.address.city']");
        this.zipcode_txt    = pf.page.locator("input[id='customer.address.zipCode']");
        this.phone_txt      = pf.page.locator("input[id='customer.phoneNumber']");
        this.ssn_txt        = pf.page.locator("input[id='customer.ssn']");
        
        this.username_txt = pf.page.locator("input[name='customer.username']");
        this.password_txt = pf.page.locator("input[name='customer.password']");
        this.cnf_password_txt = pf.page.locator("input[name='repeatedPassword']");

    }

    async enter_textonRegisterPage(){
        cuf = new commonUtilitiesFunctions(pf.page);
        await cuf.enterText(this.firstname_txt,"Joe");
        await cuf.enterText(this.lastname_txt,"Dueo");
        await cuf.enterText(this.address_txt,"USA");
        await cuf.enterText(this.state_txt,"LOS Vegas");
        await cuf.enterText(this.city_txt,"San");
        await cuf.enterText(this.zipcode_txt,"215205");
        await cuf.enterText(this.phone_txt,"+39412441");
        await cuf.enterText(this.ssn_txt,"7895541");
        await cuf.enterText(this.username_txt,"test@gmail.com");
        await cuf.enterText(this.password_txt,"test@203");
        await cuf.enterText(this.cnf_password_txt,"test@203");
    }
    
}