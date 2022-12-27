import {By} from "selenium-webdriver";
import { BasePage } from "../basePage";

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
    landingPage: By = By.xpath("screen.getByText('Updated button')")
    signUpButton: By = By.xpath("//button[@class='sc-eCImPb cnkRfv landing-button']");
    signUpButtonLogin: By = By.xpath("//a[normalize-space()='Sign Up']");

    
    // Place model specific methods here
    async userLogin(login: string, password: string) {
        await (await this.getElement(this.loginHomeButton)).click()
        await (await this.getElement(this.emailLoginForm)).click()
        await (await this.getElement(this.emailLoginForm)).sendKeys(login)
        await (await this.getElement(this.passwordLoginForm)).click()
        await (await this.getElement(this.passwordLoginForm)).sendKeys(password)
        await (await this.getElement(this.loginSubmitButton)).click();
    }
    async userLogout() {
        await (await this.getElement(this.loggedInDropDownMenu)).click()
        await (await this.getElement(this.loggedInLogoutButton)).click()
    }
}