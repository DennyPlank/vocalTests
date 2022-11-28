import { Vocal } from "../../Models/vocalModel";

const vocal = new Vocal()

describe("Login Test Suite", () => {
    beforeAll(async ()=>{
        await vocal.navigate();
    })
    afterAll( async ()=>{
        await vocal.quit()
    }
    )

    test('A user can login', async () =>{
        await vocal.userLogin();
    })
    test('A user can logout', async () => {
        await vocal.userLogout();
    })
})

// describe(('User Tests'), ()=>{
//     beforeEach(async () => {
//         await vocal.navigate()
//     });
//     afterAll( async () => {
//         await driver.sleep(3000)
//         await driver.quit();
//     });

//     test('A user can login from the main page and log back out,', async ()=>{
//         // Login steps
//         await driver.findElement(By.xpath("//a[normalize-space()='Log In']")).click();
//         await driver.findElement(By.xpath("//input[@id='formBasicEmail']")).click();
//         await driver.findElement(By.xpath("//input[@id='formBasicEmail']")).sendKeys("DennyMouzon@gmail.com");
//         await driver.findElement(By.xpath("//input[@id='formBasicPassword']")).click();
//         await driver.findElement(By.xpath("//input[@id='formBasicPassword']")).sendKeys("Mxracer14");
//         await driver.findElement(By.xpath("//button[@type='submit']")).click();
//         await driver.sleep(2000);

//         // Logout steps
//         await driver.findElement(By.xpath("//span[@class='navdropdown-title']")).click();
//         await driver.findElement(By.xpath("//a[normalize-space()='Logout']")).click();

//     });
// });