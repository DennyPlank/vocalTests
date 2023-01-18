import {By, until} from "selenium-webdriver";
import { BasePage } from "../basePage";


export class Vocal extends BasePage{
    constructor() {
        super({url: "http://vocaljournal.herokuapp.com/"})
    }

    // Model specific variables go here (xpath's and cssSelectors)
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
    userProfileUpdateSubmit: By = By.xpath("//input[@class='form-control focus-visible']")
    nickNameIndicator: By = By.xpath("//input[@value='NickName']")

    
    // Put some Selectors here to show useage 
    signUpRegisterButton: By = By.css("button[type='submit']")
    loggedInProfileButton: By = By.css(".dropdown-item[aria-selected='false']")
    loggedInDeleteUserButton: By = By.css("div[id='root'] div div div button[class='sc-eCImPb cnkRfv']")
    loggedInFinalDeleteUserButton: By = By.css("div[role='dialog'] button:nth-child(2)")
    updateUserProfileButton: By = By.css(".sc-iCfMLu.dkzZXO")
    

    
    // Place model specific methods here
    async vocalSetupAndTeardown() {
        beforeEach(async ()=>{
            await this.navigate();
        });
        afterAll( async ()=>{
            await this.quit();
        });
    }

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
        await this.goToProfilePage();
        await this.scrollToElement(this.loggedInDeleteUserButton)
        // The below element is not in view and needs to be scrolled too.
        await (await this.getElement(this.loggedInDeleteUserButton)).click()
        await (await this.getElement(this.loggedInFinalDeleteUserButton)).click()
        await this.sleep(500)
        console.log("Account delete successful")
    }

    async userSignUp(nickname: string, email: string, password: string){
        await (await this.getElement(this.signUpButton)).click()
        await (await this.getElement(this.nickNameInput)).sendKeys(nickname)
        await (await this.getElement(this.signUpEmailInput)).sendKeys(email)
        await (await this.getElement(this.signUpPassword)).sendKeys(password)
        await (await this.getElement(this.signUpPasswordConfirm)).sendKeys(password)
        await (await this.getElement(this.signUpRegisterButton)).click()
        await this.sleep(500)
        console.log(`Success! Password: ${password}, Email: ${email}.`)
    }

    async goToProfilePage() {
        await (await this.getElement(this.loggedInDropDownMenu)).click()
        await (await this.getElement(this.loggedInProfileButton)).click()
    }

    async userAcountUpdate(nickNameHere: string) {
        await this.goToProfilePage()
        await this.scrollToElement(this.updateUserProfileButton)
        await (await this.getElement(this.nickNameIndicator)).click();
        console.log("1")
        await this.sleep(5000)
        await (await this.getElement(this.nickNameIndicator)).clear();
        console.log("2")
        await (await this.getElement(this.nickNameIndicator)).sendKeys(`${nickNameHere}`)
        await (await this.getElement(this.userProfileUpdateSubmit)).click();
    }

    // Asserts here

    async assertHomePageLoggedOut() {
        let buttonCheck = await this.getText(this.loginHomeButton)
        expect(buttonCheck).toContain("Log In")
    }
    async  assertHomePageSignedIn() {
        let signedInNameCheck = await this.getText(this.signedInNameCheck)
        expect(signedInNameCheck).toContain("Nick")
    }
}