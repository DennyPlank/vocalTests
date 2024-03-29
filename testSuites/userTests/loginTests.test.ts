import { Vocal } from '../../Models/vocalModel';

  const vocal = new Vocal()

// Test Variables here
let validEmail = 'ValidEmail@test.com'
let validPassword = '123456789'
let nicknameDeleteTest = "Test Nickname"
let emailDeleteTest = "TestEmailTest@test.com"
let passwordDeleteTest = "TestPassWordTest"


describe("User log in and profile Test Suite", () => {
    vocal.vocalSetupAndTeardown();

    test('A user can login', async () =>{
        await vocal.userLogin(validEmail, validPassword);
        await vocal.assertHomePageSignedIn();
    }, 5000)

    test('A user can log out', async () => {
        await vocal.userLogin(validEmail, validPassword);
        await vocal.userLogout();
        await vocal.assertHomePageLoggedOut();
    }, 5000)
    
    test('A new user can create/delete an account', async () =>{
        await vocal.userSignUp(nicknameDeleteTest, emailDeleteTest, passwordDeleteTest)
        await vocal.assertHomePageSignedIn()
        await vocal.userAccountDelete();
        await vocal.assertHomePageLoggedOut();
    }, 5000)

    // test('A user can update their account info', async ()=>{
    //     await vocal.userLogin(validEmail, validPassword)
    //     await vocal.userAcountUpdate("Dennis");
    // })
});