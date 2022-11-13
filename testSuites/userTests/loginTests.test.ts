import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
describe(('this is a test'), ()=>{
    beforeEach(async () => {
        await driver.get(
        "http://vocaljournal.herokuapp.com/"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    test('test', ()=>{
        expect(5).toBe(5);
    })
})