import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('open url {string}', async ({loginPage}, url) => {
    await loginPage.openAt(url);
});

Given('input username {string} and password {string}', async ({loginPage}, username, password) => {
    await loginPage.inputUsernameAndPassword(username, password);
});

Given('click Login button', async ({loginPage}) => {
    await loginPage.clickLoginBtn();
});

Then('verify inventory page opened', async ({loginPage}) => {
    await loginPage.urlContainsString("inventory.html");
});