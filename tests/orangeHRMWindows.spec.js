import { test, expect } from '@playwright/test';
import POMManager from '../pages/POMManager';

test("windows handling @windows", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const pomManager = new POMManager(page);

  await page.goto(process.env.ORANGEDEMOURL);
  console.log(await page.url());
//windows
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    pomManager.orangeDemo.orangeLinkedIn.click()
  ]);

  await expect(newPage).toHaveTitle(/LinkedIn/);
  await page.bringToFront();
  await pomManager.orangeDemo.userName.fill(process.env.ORANGEUSER);
  await pomManager.orangeDemo.password.fill(process.env.ORANGEPASSWORD);
  await pomManager.orangeDemo.login.click();
});