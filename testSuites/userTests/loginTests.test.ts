import { Vocal } from '../../Models/vocalModel';
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
  } from '@testing-library/dom'
  import '@testing-library/jest-dom';
//   import {render, screen }'@testing-library/react'

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
        const buttonCheck = await vocal.getElement(vocal.loginHomeButton)
        expect(buttonCheck).toBeVisible()
    })
});