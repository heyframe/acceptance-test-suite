import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SubmitOrder = base.extend<{ SubmitOrder: Task }, FixtureTypes>({
    SubmitOrder: async ({ ShopCustomer, FrontendCheckoutConfirm, FrontendCheckoutFinish }, use)=> {
        const task = () => {
            return async function SubmitOrder() {
                await FrontendCheckoutConfirm.submitOrderButton.click();
                await ShopCustomer.expects(FrontendCheckoutFinish.headline).toBeVisible();
            }
        };

        await use(task);
    },
});