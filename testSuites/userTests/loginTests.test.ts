import { Vocal } from '../../Models/vocalModel';

  const vocal = new Vocal()

// Test Variables here
let validEmail = 'ValidEmail@test.com'
let validNickname = "Nickname"
let validPassword = '123456789'
let invalidEmail = 'ThisEmailIsNotValid'
let invalidPassword = 'ThisPassWordIsNotValid'
let nicknameDeleteTest = "Test Nickname"
let emailDeleteTest = "TestEmailTest@test.com"
let passowordDeleteTest = "TestPassWordTest"


describe("Login Test Suite", () => {
    beforeEach(async ()=>{
        await vocal.navigate();
    });
    afterAll( async ()=>{
        await vocal.quit();
    });

    test('A user can login and logout', async () =>{
        await vocal.userLogin(validEmail, validPassword);
        const nameCheck = await vocal.getText(vocal.signedInNameCheck)
        expect(nameCheck).not.toContain("Invalid")
    })
    test('A user can log out', async () => {
        await vocal.userLogin(validEmail, validPassword);
        await vocal.userLogout();
        
        const buttonCheck = await vocal.getText(vocal.loginHomeButton)
        expect(buttonCheck).toContain("Log In")
    })
    
    test('A new user can create an account from the home page', async () =>{
        await vocal.userSignUp(nicknameDeleteTest, emailDeleteTest, passowordDeleteTest)
        let signedInNameCheck = await vocal.getText(vocal.signedInNameCheck)
        expect(signedInNameCheck).toBe(`${nicknameDeleteTest}`)
        await vocal.userAccountDelete()
    })
});