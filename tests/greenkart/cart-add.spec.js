import { test } from '@playwright/test';
import POMManager from '../../pages/POMManager';

test.describe('GreenKart functional flows', () => {
  test('Add a product to the cart', async ({ page }) => {
    const pomManager = new POMManager(page);

    await pomManager.greenKart.openHomepage();
    await pomManager.greenKart.addFirstProductToCart();
    await pomManager.greenKart.openCart();
    await pomManager.greenKart.expectProductInCart('Brocolli - 1 Kg');
  });
});
