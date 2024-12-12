import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';
import { SelectItemsPage } from '../pages/selectItemsPage';
import { FullFlowPage} from '../pages/fullFlowPage';

export const test = base.extend(({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    selectItemsPage: async ({page}, use) => {
        const selectItemsPage = new SelectItemsPage(page);
        await use(selectItemsPage);
    },

    fullFlowPage: async ({page}, use) => {
        const fullFlowPage = new FullFlowPage(page);
        await use(fullFlowPage);
    }
}))