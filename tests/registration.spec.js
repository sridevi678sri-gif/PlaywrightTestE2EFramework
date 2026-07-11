import {test,expect} from '@playwright/test';
import POMManager from '../pages/POMManager';
import registrationData from '../utils/registrationExistingEmailData.json' with {type:'json'};
import {registrationTestData} from '../utils/registrationData.js';

const timeStamp=Date.now();
const email="sridevi"+timeStamp+"@gmail.com";
const password="test@123";
test.describe.configure({mode:'parallel'});

test("Registration",async function({page}){
const pomManager=new POMManager(page);
   await page.goto(""); //baseurl is there in config.js
   await pomManager.homePage.myAccount.nth(0).click();
   await pomManager.homePage.register.click();
   await expect(pomManager.registrationPage.registrationHeading).toBeVisible();
   await pomManager.registrationPage.firstName.fill("sridevi");
   await pomManager.registrationPage.lastName.fill("merla");
   await pomManager.registrationPage.email.fill(email);
   await pomManager.registrationPage.phone.fill("9876785678");
   await pomManager.registrationPage.password.fill(password);
    await pomManager.registrationPage.passwordConfirm.fill(password);
    await pomManager.registrationPage.privacyPolicy.check();
    await expect(pomManager.registrationPage.privacyPolicy).toBeChecked();
    await pomManager.registrationPage.continue.click();
    await expect(pomManager.registrationPage.accountCreatedMessage).toBeVisible();
    console.log("created account for:"+email+"password:"+password);

})

test("Registration with static test data from json with existing email",async function({page}){
  const pomManager=new POMManager(page);
   await page.goto(""); //baseurl is there in config.js
   await pomManager.homePage.myAccount.nth(0).click();
   await pomManager.homePage.register.click();
   await expect(pomManager.registrationPage.registrationHeading).toBeVisible();
   await pomManager.registrationPage.firstName.fill(registrationData.firstName);
   await pomManager.registrationPage.lastName.fill(registrationData.lastName);
   await pomManager.registrationPage.email.fill(registrationData.email);
   await pomManager.registrationPage.phone.fill(registrationData.telephone);
   await pomManager.registrationPage.password.fill(registrationData.password);
    await pomManager.registrationPage.passwordConfirm.fill(registrationData.passwordConfirm);
    await pomManager.registrationPage.privacyPolicy.check();
    await expect(pomManager.registrationPage.privacyPolicy).toBeChecked();
    await pomManager.registrationPage.continue.click();
    await expect(pomManager.registrationPage.accountCreatedMessage).not.toBeVisible();

})


test("Registration with dynamic test data from js",async function({page}){
   const pomManager=new POMManager(page);
   await page.goto(""); //baseurl is there in config.js
   await pomManager.homePage.myAccount.nth(0).click();
   await pomManager.homePage.register.click();
   await expect(pomManager.registrationPage.registrationHeading).toBeVisible();
   await pomManager.registrationPage.firstName.fill(registrationTestData.firstName);
   await pomManager.registrationPage.lastName.fill(registrationTestData.lastName);
   await pomManager.registrationPage.email.fill(registrationTestData.email);
   await pomManager.registrationPage.phone.fill(registrationTestData.telephone);
   await pomManager.registrationPage.password.fill(registrationTestData.password);
    await pomManager.registrationPage.passwordConfirm.fill(registrationTestData.passwordConfirm);
    await pomManager.registrationPage.privacyPolicy.check();
    await expect(pomManager.registrationPage.privacyPolicy).toBeChecked();
    await pomManager.registrationPage.continue.click();
    await expect(pomManager.registrationPage.accountCreatedMessage).toBeVisible();
    console.log("created account for:"+registrationTestData.email+"password:"+registrationTestData.password);

})