import { expect } from '@playwright/test';

class SelectItemsPage {
    constructor(page) {
        this.page = page;
        this.numberOfCart = 'span.shopping_cart_badge';
    }

    async addProductRandomly(number) {
        for (let i = 1; i <= number; i++) {
          await this.page.waitForTimeout(500);
          const addToCartBtn = await this.page.locator("xpath=(//button[contains(@class,'btn_inventory')])[" + i + "]");
          await addToCartBtn.click();
        }
    }

    async verifyNumberOfCart(number) {
        await expect(this.page.locator(this.numberOfCart)).toHaveText(number);
    }
}

export { SelectItemsPage };