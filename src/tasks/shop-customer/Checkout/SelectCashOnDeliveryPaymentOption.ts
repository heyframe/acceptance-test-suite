import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SelectCashOnDeliveryPaymentOption = base.extend<{ SelectCashOnDeliveryPaymentOption: Task }, FixtureTypes>({
    SelectCashOnDeliveryPaymentOption: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function SelectCashOnDeliveryPaymentOption() {
                await FrontendCheckoutConfirm.paymentCashOnDelivery.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.paymentCashOnDelivery).toBeChecked();
            }
        };

        await use(task);
    },
});