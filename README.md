# vocalTests

Hello! This is a test frame work designed to test the Vocal Recording App built with React. 
This currently framework uses Selenium, Jest, and Chromedriver and only supports Chrome v105 or later. 

You will be running the 'loginTests.test.ts'. There is only 1 test suite and it includes 3 test:
1) Loging in
2) Logging out
3) Creating an account and deleting an account

Structure:
The 'basePage.ts' file contains non-specific functions that selenium can use on any google browser. 
The 'vocalModel.ts' file contains the needed selenium imports, the root model for Vocal, and model specific functions that will only work on Vocal.
The 'loginTests.test.ts' file contains the test suite and a few specific variabls not applicalable to the Vocal model. 
