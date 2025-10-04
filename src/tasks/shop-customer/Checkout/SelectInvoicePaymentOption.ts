import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const SelectInvoicePaymentOption = base.extend<{ SelectInvoicePaymentOption: Task }, FixtureTypes>({
    SelectInvoicePaymentOption: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function SelectInvoicePaymentOption() {
                await FrontendCheckoutConfirm.paymentInvoice.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.paymentInvoice).toBeChecked();
            }
        };

        await use(task);
    },
});
