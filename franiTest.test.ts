import { Frani } from "./franiPage";
const page = new Frani(); 

test("Creating an account", async () => {
    await page.navigate();
    await page.driver.manage().window().maximize()
    await page.click(page.join);
    await page.setInput(page.email, 'maxim85@gmail.com');
    await page.driver.sleep(2000);
    await page.setInput(page.password, 'Freshapple1010!');
    await page.driver.sleep(2000);
    await page.click(page.continue);
    await page.setInput(page.firstName, 'Maxim');
    await page.setInput(page.lastName, 'Smith');
    await page.setInput(page.zipCode, '94105');
    await page.click(page.location);
    await page.setInput(page.mobile, '7072584136');
    await page.click(page.checkMark);
    await page.driver.sleep(2000);
    await page.click(page.signUp);
    await page.driver.sleep(3000);


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
    await page.driver.sleep(2000);
    await page.click(page.xBtn);
    await page.driver.sleep(2000);
    await page.click(page.addToBag);
    await page.driver.sleep(3000);

})

test("Testing location search", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.findYourIhop);
    await page.setInput(page.locationSearch, '94109');
    await page.click(page.searchBtn);
    await page.driver.sleep(2000);
    await page.setInput(page.locationSearch, 'Chicago');
    await page.click(page.searchBtn);
    await page.driver.sleep(2500);

})

test("Testing pause and play button", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.pauseVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);
    await page.driver.quit()

})