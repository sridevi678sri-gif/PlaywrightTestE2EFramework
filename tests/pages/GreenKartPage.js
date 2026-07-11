import { expect } from '@playwright/test';

export default class GreenKartPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = page.getByRole('button', { name: 'ADD TO CART' }).first();
    this.cartIcon = page.locator('a.cart-icon');
  }

  async openHomepage() {
    await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  }

  async addFirstProductToCart() {
    await this.firstAddToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async expectProductInCart(productName) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }
}
