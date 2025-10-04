import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const ProceedFromCartToCheckout = base.extend<{ ProceedFromCartToCheckout: Task }, FixtureTypes>({
    ProceedFromCartToCheckout: async ({
        ShopCustomer,
        FrontendCheckoutCart,
        FrontendCheckoutConfirm,
    }, use) => {
        const task = () => {
            return async function ProceedFromCartToCheckout() {
                await FrontendCheckoutCart.goToCheckoutButton.click();
                await ShopCustomer.expects(FrontendCheckoutConfirm.headline).toBeVisible();
            }
        }

        await use(task);
    },
});
