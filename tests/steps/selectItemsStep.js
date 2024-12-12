import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('add {string} items to cart randomly', async ({selectItemsPage}, number) => {
    await selectItemsPage.addProductRandomly(number);
});

Then('verify number of cart is {string}', async ({selectItemsPage}, number) => {
    await selectItemsPage.verifyNumberOfCart(number);
});