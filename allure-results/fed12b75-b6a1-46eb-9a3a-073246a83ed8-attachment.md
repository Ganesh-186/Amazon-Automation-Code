# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browser.spec.js >> Launch browser
- Location: tests\browser.spec.js:3:1

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1 | import {test, chromium} from '@playwright/test';
  2 | 
  3 | test('Launch browser', async({page})=>{
  4 | 
> 5 |     await page.goto()
    |                ^ Error: page.goto: url: expected string, got undefined
  6 | })
```