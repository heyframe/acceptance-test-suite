import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SelectStandardShippingOption = base.extend<{ SelectStandardShippingOption: Task }, FixtureTypes>({
    SelectStandardShippingOption: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function SelectStandardShippingOption() {
                await FrontendCheckoutConfirm.shippingStandard.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.shippingStandard).toBeChecked();
            }
        };

        await use(task);
    },
});
