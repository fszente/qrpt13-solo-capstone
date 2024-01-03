import { Frani } from "./franiPage";
const page = new Frani(); 


test("Click on the pasuse and play button", async () => {
    await page.navigate();
    await page.driver.manage().window().maximize()
    await page.driver.sleep(2000);
    await page.click(page.pauseVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);
    await page.driver.sleep(1000);
    await page.click(page.playVideo);

})

test("Click on order now", async () => {
    await page.navigate();
    await page.driver.sleep(2000);
    await page.click(page.orderNow);
    await page.driver.sleep(3000);
    await page.click(page.milkshakes);
    await page.driver.sleep(3000);
    await page.click(page.houseMadeMilkshakes);
    await page.driver.sleep(3000);
    await page.click(page.vanilla);
    await page.driver.sleep(3000);
    await page.click(page.addToBag);
    await page.driver.sleep(4000);
    await page.driver.quit()

})
