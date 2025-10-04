import { test as base, expect } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';

export const DeactivateHeyFrameServices = base.extend<{ DeactivateHeyFrameServices: Task }, FixtureTypes>({
    DeactivateHeyFrameServices: async ({ ShopAdmin, AdminHeyFrameServices }, use ) => {
        const task = () => {
            return async function DeactivateHeyFrameServices() {

                if (AdminHeyFrameServices.url() != '#/sw/settings/services/index') {
                    await ShopAdmin.goesTo(AdminHeyFrameServices.url());
                }
                await AdminHeyFrameServices.deactivateServicesButton.click();
                await ShopAdmin.expects(AdminHeyFrameServices.deactivateServicesModal).toBeVisible();
                const disableResponsePromise = AdminHeyFrameServices.page.waitForResponse(`${ process.env['APP_URL'] }api/services/disable`);
                await AdminHeyFrameServices.deactivateServicesConfirmButton.click();
                const disableResponse = await disableResponsePromise;
                expect(disableResponse.ok()).toBeTruthy();
                await ShopAdmin.expects(AdminHeyFrameServices.deactivatedBanner).toBeVisible({ timeout: 15000 });
            }
        }
        await use(task);
    },
});