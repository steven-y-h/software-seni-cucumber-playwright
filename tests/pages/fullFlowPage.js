import { expect } from '@playwright/test';

class FullFlowPage {
    constructor(page) {
        this.page = page;
        this.cartBtn = 'a.shopping_cart_link';
        this.checkoutBtn = '#checkout';
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zip = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
    }

    async clickCartBtn() {
        await this.page.click(this.cartBtn);
    }

    async clickRemoveBtn(number) {
        for (let i = 1; i <= number; i++) {
            await this.page.waitForTimeout(500);
            const removeBtn = await this.page.locator("xpath=(//button[contains(@class,'cart_button')])[" + i + "]");
            await removeBtn.click();
        }
    }

    async clickCheckoutBtn() {
        await this.page.click(this.checkoutBtn);
    }

    async inputCheckoutForm(dataTable) {
        const dataArray = dataTable.raw();
        const formData = Object.fromEntries(dataArray);
        await this.page.fill(this.firstName, formData['First Name']);
        await this.page.fill(this.lastName, formData['Last Name']);
        await this.page.fill(this.zip, formData['Zip']);
    }

    async clickContinueBtn() {
        await this.page.click(this.continueBtn);
    }

    async clickFinishBtn() {
        await this.page.click(this.finishBtn);
    }
}

export { FullFlowPage };