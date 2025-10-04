import { test as base } from '@playwright/test';
import { Actor } from '../services/Actor';
import type { FixtureTypes } from '../types/FixtureTypes';

export interface ActorFixtureTypes {
    ShopCustomer: Actor;
    ShopAdmin: Actor;
}

export const test = base.extend<FixtureTypes>({
    ShopCustomer: async ({ FrontendPage }, use) => {
        const shopCustomer = new Actor('Shop customer', FrontendPage);

        await use(shopCustomer);
    },

    ShopAdmin: async ({ AdminPage, SalesChannelBaseConfig }, use) => {
        const shopAdmin = new Actor('Shop administrator', AdminPage, SalesChannelBaseConfig.adminUrl);

        await use(shopAdmin);
    },
});