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
let validEmail = 'TestEmail@gmail.com'
let validPassword = '123456789'
let invalidEmail = 'ThisEmailIsNotValid'
let invalidPassword = 'ThisPassWordIsNotValid'

describe("Login Test Suite", () => {
    beforeEach(async ()=>{
        await vocal.navigate();
    });
    afterEach( async ()=>{
        await vocal.quit();
    });
    
    test('A user can login and logout', async () =>{
        await vocal.userLogin(validEmail, validPassword);
        await vocal.userLogout();
        const buttonCheck = await vocal.getText(vocal.loginHomeButton)
        expect(buttonCheck).toBeVisible()
    })
});