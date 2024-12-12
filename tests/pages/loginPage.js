import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = 'input#user-name';
        this.password = 'input#password';
        this.loginBtn = 'input#login-button';
    }

    async openAt(url) {
        await this.page.goto(url);
    }

    async inputUsernameAndPassword(username, password) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
    }

    async clickLoginBtn() {
        await this.page.click(this.loginBtn)
    }

    async urlContainsString(url) { 
        await expect(this.page).toHaveURL(new RegExp(url));
    }
}

export { LoginPage };