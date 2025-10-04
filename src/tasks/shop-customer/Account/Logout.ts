import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const Logout = base.extend<{ Logout: Task }, FixtureTypes>({
    Logout: async ({ ShopCustomer, FrontendAccountLogin }, use)=> {
        const task = () => {
            return async function Logout() {

                await ShopCustomer.goesTo(FrontendAccountLogin.url());
                await ShopCustomer.expects(FrontendAccountLogin.loginButton).not.toBeVisible();

                await FrontendAccountLogin.logoutLink.click();
                await ShopCustomer.expects(FrontendAccountLogin.successAlert).toBeVisible();
            }
        };

        await use(task);
    },
});
