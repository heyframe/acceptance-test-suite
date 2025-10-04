import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';
export const ChangeFrontendCurrency = base.extend<{ ChangeFrontendCurrency: Task }, FixtureTypes>({
    ChangeFrontendCurrency: async ({ FrontendHome }, use) => {
        const task = (isoCode: string) => {
            return async function ChangeFrontendCurrency() {
                await FrontendHome.currenciesDropdown.click();
                await FrontendHome.currenciesDropdown.getByText(' '+isoCode).click();

            }
        };

        await use(task);
    },
});