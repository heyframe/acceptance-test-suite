import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SelectPaidInAdvancePaymentOption = base.extend<{ SelectPaidInAdvancePaymentOption: Task }, FixtureTypes>({
    SelectPaidInAdvancePaymentOption: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function SelectPaidInAdvancePaymentOption() {
                await FrontendCheckoutConfirm.paymentPaidInAdvance.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.paymentPaidInAdvance).toBeChecked();
            }
        };

        await use(task);
    },
});
