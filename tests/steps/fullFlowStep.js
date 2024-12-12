import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

When('click Cart button', async ({fullFlowPage}) => {
    await fullFlowPage.clickCartBtn();
});

When('remove an item product', async ({fullFlowPage}) => {
    await fullFlowPage.clickRemoveBtn(1);
});

When('click Checkout button', async ({fullFlowPage}) => {
    await fullFlowPage.clickCheckoutBtn();
});

When('input checkout form', async ({fullFlowPage}, dataTable) => {
    await fullFlowPage.inputCheckoutForm(dataTable);
});

When('click Continue button', async ({fullFlowPage}) => {
    await fullFlowPage.clickContinueBtn();
});

When('click Finish button', async ({fullFlowPage}) => {
    await fullFlowPage.clickFinishBtn();
});

Then('verify checkout complete page opened', async ({loginPage}) => {
    await loginPage.urlContainsString('checkout-complete.html');
});