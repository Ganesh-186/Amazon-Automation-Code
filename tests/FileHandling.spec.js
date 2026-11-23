import {test} from '@playwright/test';

test('Upload', async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    // await page.locator('#uploadFile').setInputFiles('./Screen shot/facebook.jpeg');
    // await page.locator('#uploadFile').setInputFiles("D:\\Class\\Playwright\\1PM\\flipkart.png");
    await page.setInputFiles("#uploadFile", "D:/Class/Playwright/1PM/flipkart.png")
    await page.setInputFiles("#uploadFile",[])
})

test ("Multiple files", async({page})=>{
    await page.goto("https://www.file.io/");
    await page.locator("#select-files-input").setInputFiles([
        "./Screen shot/facebook.jpeg",
        "./Screen shot/Instagram.png",
        "D:\\Class\\Playwright\\1PM\\flipkart.png"

    ])

    await page.waitForEvent('download')
})


test("Download", async({page})=>{
    await page.goto("https://demoqa.com/upload-download");

    const [downloaded_file] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole("button",{name:"Download"}).click()
    ]);

    // await downloaded_file.saveAs("./Download/" + await downloaded_file.suggestedFilename());
    await downloaded_file.saveAs("./Download/Image.png");
})