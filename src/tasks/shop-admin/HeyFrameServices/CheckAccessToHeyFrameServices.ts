import { expect, test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';
import type { AclRole, User } from '../../../types/HeyFrameTypes';
import { createNewAdminPageContext } from '../../../services/AdminLoginHelper';
import { translate } from '../../../services/LanguageHelper';

export const CheckAccessToHeyFrameServices = base.extend<{ CheckAccessToHeyFrameServices: Task }, FixtureTypes>({
    CheckAccessToHeyFrameServices: async ({ TestDataService, SalesChannelBaseConfig, browser }, use) => {
        const task = (customUser?: User, aclRole?: AclRole) => {
            return async function CheckAccessToHeyFrameServices() {
                let user;

                if (customUser === undefined) {
                    user = await TestDataService.createUser();
                } else {
                    user = await TestDataService.getUserById(customUser.id);
                    user.password = customUser.password;
                }

                const adminPage = await createNewAdminPageContext(user, browser, SalesChannelBaseConfig, TestDataService.AdminApiClient);

                const heyframeServicesAdvertisementBanner = adminPage.locator('.sw-settings-services-dashboard-banner__content').first();
                const heyframeServicesExploreNowButton = heyframeServicesAdvertisementBanner.getByRole('button', {
                    name: translate('administration:heyframeServices:buttons.exploreNow'),
                });

                await expect(heyframeServicesAdvertisementBanner).toBeVisible();
                await expect(heyframeServicesExploreNowButton).toBeVisible();
                await expect(heyframeServicesAdvertisementBanner).toContainText(translate('administration:heyframeServices:dashboard.heyframeServicesIntroduction'));
                await heyframeServicesExploreNowButton.click();

                const adminPrivilegeHeader = adminPage.getByRole('heading', { name: translate('administration:heyframeServices:messages.accessDenied') }).first();
                const heyframeServicesHeader = adminPage.getByRole('heading', { name: translate('administration:heyframeServices:headings.futureProofStore') });

                if (!aclRole?.privileges.includes('system:plugin:maintain')) {
                    await expect(adminPrivilegeHeader).toBeVisible();
                } else {
                    await expect(adminPrivilegeHeader).toBeHidden();
                    await expect(heyframeServicesHeader).toBeVisible();
                }
            };
        };
        await use(task);
    },
});
