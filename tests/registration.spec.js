import {test,expect} from '@playwright/test';
import { time } from 'node:console';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';

const timeStamp=Date.now();
const email="sridevi"+timeStamp+"@gmail.com";
const password="test@123";
test("Registration",async function({page}){

 const homePage=new HomePage(page);
 const registrationPage=new RegistrationPage(page);
   await page.goto(""); //baseurl is there in config.js
   await homePage.myAccount.nth(0).click();
   await homePage.register.click();
   await expect(registrationPage.registrationHeading).toBeVisible();
   await registrationPage.firstName.fill("sridevi");
   await registrationPage.lastName.fill("merla");
   await registrationPage.email.fill(email);
   await registrationPage.phone.fill("9876785678");
   await registrationPage.password.fill(password);
    await registrationPage.passwordConfirm.fill(password);
    await registrationPage.privacyPolicy.check();
    await expect(registrationPage.privacyPolicy).toBeChecked();
    await registrationPage.continue.click();
    await expect(registrationPage.accountCreatedMessage).toBeVisible();



  





})