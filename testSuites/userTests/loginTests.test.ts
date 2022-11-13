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

describe(('User Tests'), ()=>{
    beforeEach(async () => {
        await driver.get(
        "http://vocaljournal.herokuapp.com/"
        );
    });
    afterAll( async () => {
        await driver.quit();
    });

    test('A user can login from the main page', async ()=>{
        await driver.findElement(By.xpath("//a[normalize-space()='Log In']")).click();
        await driver.sleep(500);
    });
});