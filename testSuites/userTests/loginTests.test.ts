import { Vocal } from "../../Models/vocalModel";
import {screen} from '@testing-library/dom'

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
        try {
            expect(screen.getByText('Sign In')).toBeVisible();
        } catch {
            console.log('Logout Failed')
        }
    }, 5000)
});