import { Frani } from "./franiPage";
const page = new Frani(); 


test("Testing pause and play button", async () => {
    await page.navigate();
    await page.driver.manage().window().maximize()
    await page.driver.sleep(2000);
    await page.click(page.pauseVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);

})

test("Adding and item to cart", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.orderNow);
    await page.driver.sleep(2000);
    await page.click(page.milkshakes);
    await page.driver.sleep(2000);
    await page.click(page.houseMadeMilkshakes);
    await page.driver.sleep(2000);
    await page.click(page.vanilla);
    await page.driver.sleep(3000);
    await page.click(page.addToBag);
    await page.driver.sleep(3000);

})

test("Testing search bar", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.findYourIhop);
    await page.setInput(page.zipcode, '94109');
    await page.driver.sleep(2000);
    await page.click(page.search);
    await page.driver.sleep(2500);

})

test("Creating an account", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.join);
    await page.setInput(page.email, 'john103@gmail.com');
    await page.driver.sleep(2000);
    await page.setInput(page.password, 'Freshapple1010!');
    await page.driver.sleep(2000);
    await page.click(page.continue);
    await page.driver.quit()


})