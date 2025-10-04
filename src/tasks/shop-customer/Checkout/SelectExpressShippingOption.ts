import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SelectExpressShippingOption = base.extend<{ SelectExpressShippingOption: Task }, FixtureTypes>({
    SelectExpressShippingOption: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function SelectExpressShippingOption() {
                await FrontendCheckoutConfirm.shippingExpress.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.shippingExpress).toBeChecked();
            }
        };

        await use(task);
    },
});
