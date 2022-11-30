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
        await vocal.userLogin(validEmail, validPassword);
        await vocal.userLogout();
    })
    test('A user gets an error message if the try to login with an incorrect password or email', async () => {
        await vocal.userLogin(invalidEmail, invalidPassword);
        await vocal.sleep(5000)
    })
});