import {test} from '@playwright/test';

test('Handling DropDown', async({page})=>{
    await page.goto('https://www.amazon.in');
    // await page.locator('//select[@title="Search in"]').selectOption({value:"search-alias=electronics"});
    // await page.getByTitle('Search in').selectOption('search-alias=baby');
    // await page.selectOption('//select[@title="Search in"]', 'search-alias=baby')
    // await page.getByTitle('Search in').selectOption({label:"Computers & Accessories"}); 
    // await page.getByTitle('Search in').selectOption("Garden & Outdoors"); 
    await page.getByTitle('Search in').selectOption({index: 4});
    
    await page.waitForTimeout(3000)
})

test('Multi select', async({page})=>{
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button',{name:"Multi-Select"}).click();
    await page.locator('.form-multiselect').selectOption([{value:"option1"},{value:"option3"},{value:"option5"}])
    await page.locator('.form-multiselect').selectOption([])
})