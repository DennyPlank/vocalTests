import {By} from "selenium-webdriver";
import { BasePage } from "../basePage";

// Login credentials
let userEmail = 'DennyMouzon@gmail.com'
let userPassword = 'Mxracer14'

export class Vocal extends BasePage{
    constructor() {
        super({url: "http://vocaljournal.herokuapp.com/"})
    }

    // Model specific variables go here (xpath's)
    loginHomeButton: By = By.xpath("//a[normalize-space()='Log In']");
    emailLoginForm: By = By.xpath("//input[@id='formBasicEmail']");
    passwordLoginForm: By = By.xpath("//input[@id='formBasicPassword']")
    loginSubmitButton: By = By.xpath("//button[@type='submit']")
    loggedInDropDownMenu: By = By.xpath("//span[@class='navdropdown-title']")
    loggedInLogoutButton: By = By.xpath("//a[normalize-space()='Logout']")

    
    // Place model specific methods here
    async userLogin() {
        await (await this.getElement(this.loginHomeButton)).click()
        await (await this.getElement(this.emailLoginForm)).click()
        await (await this.getElement(this.emailLoginForm)).sendKeys(userEmail)
        await (await this.getElement(this.passwordLoginForm)).click()
        await (await this.getElement(this.passwordLoginForm)).sendKeys(userPassword)
        await (await this.getElement(this.loginSubmitButton)).click();
    }
    async userLogout(){
        await (await this.getElement(this.loggedInDropDownMenu)).click()
        await (await this.getElement(this.loggedInLogoutButton)).click()
    }
}