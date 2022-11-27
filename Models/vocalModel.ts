import {By} from "selenium-webdriver";
import { BasePage } from "../basePage";


export class Vocal extends BasePage{
    loginButton: By = By.xpath(("//a[normalize-space()='Log In']"));

    constructor() {
        super({url: "http://vocaljournal.herokuapp.com/"})
    }
    
    // Place model specific methods here
    async login() {
        await (await this.getElement(this.loginButton)).click()
    }
}