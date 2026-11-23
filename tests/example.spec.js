import {test} from '@playwright/test'

test('Launch Flipkart',async({page})=>{
  await page.goto('https://www.flipkart.com/');
  await page.goto('https://www.facebook.com/')
})


test('Open Insta',async({page})=>{
  await page.goto('https://www.instagram.com');
  const title = await page.title();
  console.log(await page.url());
  console.log(title);

  await page.screenshot({path:"D:\\8AM\\Instagram.png"})
  await page.screenshot({path:"./Screen shot/Instagram.png"})

  await page.goto('https://facebook.com')
  const titleFacebook = await page.title();
  console.log(await page.url());
  console.log(titleFacebook);

  await page.screenshot({path:'./Screen shot/facebook.jpeg'})
  await page.goBack()
})





'I\'am Ganesh'

"I'am Ganesh"

//   I'am "Ganesh"


'I\'am "Ganesh"'

"I'am \"Ganesh\""

"i \\ganesh"

"i / "