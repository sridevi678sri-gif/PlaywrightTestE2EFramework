import {test,expect} from '@playwright/test';
import POMManager from '../pages/POMManager';
test("login and verify available products to place order",async({browser})=>{
   const productTabs=[
  'Desktops',
  'Laptops & Notebooks',
  'Components',
  'Tablets',
  'Software',
  'Phones & PDAs',
  'Cameras',
  'MP3 Players'
];
    const context= await browser.newContext();
    const page=await context.newPage();
    const pomManager=new POMManager(page);
    
    await page.goto("");
    await pomManager.homePage.myAccount.click();
    await pomManager.homePage.login.click();
    console.log("USERNAME:", process.env.EMAIL);
console.log("PASSWORD:", process.env.PASSWORD);
    await pomManager.registrationPage.email.fill(process.env.EMAIL);
    await pomManager.registrationPage.password.fill(process.env.PASSWORD);
    await pomManager.registrationPage.login.click();
    await expect(pomManager.accountPage.myOrders).toContainText("My Orders");
    await page.waitForLoadState('networkidle');
   await expect(await pomManager.accountPage.productTabs.allTextContents()).toEqual(productTabs);
  await pomManager.accountPage.cameras.click();
  await pomManager.accountPage.sortBy.selectOption("Price (High > Low)");
  await pomManager.accountPage.cameraProduct.locator("button[onclick*='cart.add']").click();
  await expect(pomManager.accountPage.productAddedSuccess).toBeAttached();
  await pomManager.accountPage.checkout.click();
 const text = (await pomManager.accountPage.outOfStock.textContent())
  .replace("×", "")
  .trim();
  await expect(text).toBe("Products marked with *** are not available in the desired quantity or not in stock!");


    
   
})



