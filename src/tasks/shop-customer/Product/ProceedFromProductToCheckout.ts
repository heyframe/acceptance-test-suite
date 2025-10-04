import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const ProceedFromProductToCheckout = base.extend<{ ProceedFromProductToCheckout: Task }, FixtureTypes>({
    ProceedFromProductToCheckout: async ({ ShopCustomer, FrontendProductDetail, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function ProceedFromProductToCheckout() {
                await FrontendProductDetail.offCanvasCartGoToCheckoutButton.click();

                await ShopCustomer.expects(FrontendCheckoutConfirm.headline).toBeVisible();
            }
        };

        await use(task);
    },
});
