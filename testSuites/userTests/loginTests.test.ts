import { Vocal } from "../../Models/vocalModel";

const vocal = new Vocal()

// Test Variables here
let validEmail = 'DennyMouzon@gmail.com'
let validPassword = 'Mxracer14'
let invalidEmail = 'ThisEmailIsNotValid'
let invalidPassword = 'ThisPassWordIsNotValid'

describe("Login Test Suite", () => {
    beforeAll(async ()=>{
        await vocal.navigate();
    });
    afterAll( async ()=>{
        await vocal.quit();
    });
    
    test('A user can login and logout', async () =>{
        // Any variables that have a driver call need to have await and be in test
        
        // Assert here to check if were on the landing page
        // expect(signInButtonText).toContain('Sign Up');
        
        await vocal.userLogin(validEmail, validPassword);
        let signInButtonText = await vocal.getText(vocal.signUpButton);
        expect(signInButtonText).not.toContain('Sign Up')
        // Assert we're not on the landing page
        await vocal.userLogout();
        // Assert we're redirected to the landing page after a small delay
    })
    test('A user gets an error message if the try to login with an incorrect password or email', async () => {
        await vocal.userLogin(invalidEmail, invalidPassword);
        // Assert we are still on the landing page and that there are UI error messages 
    })
});