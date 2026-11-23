import {test, chromium} from '@playwright/test';

test('Locators', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo:{dir:'./Video/'}
    });
    const page = await context.newPage();

    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('iphone');

    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com/');

    await page2.waitForTimeout(5000);

})
