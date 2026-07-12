import {test,expect} from '@playwright/test';
import POMManager from '../pages/POMManager';
test("login",async({browser})=>{
  //login -sridevi
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
    
   
})



