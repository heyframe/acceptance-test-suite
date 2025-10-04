import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const ChangeProductQuantity = base.extend<{ ChangeProductQuantity: Task }, FixtureTypes>({
    ChangeProductQuantity: async ({
        ShopCustomer,
        FrontendCheckoutCart,
    }, use) => {
        const task = (quantity: string) => {
            return async function ChangeProductQuantityOnCart() {
                await FrontendCheckoutCart.cartQuantityNumber.fill(quantity);
                await FrontendCheckoutCart.cartQuantityNumber.press('Enter');
                await ShopCustomer.expects(FrontendCheckoutCart.cartQuantityNumber).toHaveValue(quantity);
            }
        }

        await use(task);
    },
});