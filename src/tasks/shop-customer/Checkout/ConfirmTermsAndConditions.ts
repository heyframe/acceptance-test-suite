import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const ConfirmTermsAndConditions = base.extend<{ ConfirmTermsAndConditions: Task }, FixtureTypes>({
    ConfirmTermsAndConditions: async ({ ShopCustomer, FrontendCheckoutConfirm }, use)=> {
        const task = () => {
            return async function ConfirmTermsAndConditions() {
                await FrontendCheckoutConfirm.termsAndConditionsCheckbox.check();
                await ShopCustomer.expects(FrontendCheckoutConfirm.termsAndConditionsCheckbox).toBeChecked();
            }
        };

        await use(task);
    },
});
