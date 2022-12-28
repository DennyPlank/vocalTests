import {By, until} from "selenium-webdriver";
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
    signedInNameCheck: By = By.xpath("//span[@class='navdropdown-title']");
    nickNameInput: By = By.xpath("//input[@placeholder='Enter Nickname']")
    signUpEmailInput: By = By.xpath("//input[@id='formBasicEmail']")
    signUpPassword: By = By.xpath("//div[3]//input[1]")
    signUpPasswordConfirm: By = By.xpath("//div[4]//input[1]")
    signUpRegisterButton: By = By.xpath("//button[@type='submit']")
    loggedInProfileButton: By = By.xpath("//a[normalize-space()='Profile']")
    loggedInDeleteUserButton: By = By.xpath("//button[normalize-space()='Delete User']")
    loggedInFinalDeleteUserButton: By = By.xpath("//button[normalize-space()='Delete Account']")
    

    
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

    async userAccountDelete() {
        await (await this.getElement(this.loggedInDropDownMenu)).click()
        await (await this.getElement(this.loggedInProfileButton)).click()
        
        // The below element is not in view. We need to get the element into view before it can be clicked on.
        await (await this.getElement(this.loggedInDeleteUserButton)).click()
        await (await this.getElement(this.loggedInFinalDeleteUserButton)).click()
        await this.sleep(1500)
        console.log("Account delete successful")
    }

    async userSignUp(nickname: string, email: string, password: string){
        await (await this.getElement(this.signUpButton)).click()
        await (await this.getElement(this.nickNameInput)).sendKeys(nickname)
        await (await this.getElement(this.signUpEmailInput)).sendKeys(email)
        await (await this.getElement(this.signUpPassword)).sendKeys(password)
        await (await this.getElement(this.signUpPasswordConfirm)).sendKeys(password)
        await (await this.getElement(this.signUpRegisterButton)).click()
        console.log(`Success! Password: ${password}, Email: ${email}.`)
        await this.sleep(2500)
    }
}