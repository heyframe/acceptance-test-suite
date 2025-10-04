import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';
import type { Customer } from '../../../types/HeyFrameTypes';

export const Login = base.extend<{ Login: Task }, FixtureTypes>({
    Login: async ({ ShopCustomer, DefaultSalesChannel, FrontendAccountLogin, FrontendAccount }, use) => {
        const task = (customCustomer?: Customer) => {
            return async function Login() {

                const customer = customCustomer ? customCustomer : DefaultSalesChannel.customer;

                await ShopCustomer.goesTo(FrontendAccountLogin.url());

                await FrontendAccountLogin.emailInput.fill(customer.email);
                await FrontendAccountLogin.passwordInput.fill(customer.password);
                await FrontendAccountLogin.loginButton.click();

                await ShopCustomer.expects(FrontendAccount.personalDataCardTitle).toBeVisible();
            }
        };

        await use(task);
    },
});