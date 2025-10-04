import { mergeTests } from '@playwright/test';
import { test as DefaultSalesChannel } from './fixtures/DefaultSalesChannel';
import { test as ApiContexts } from './fixtures/ApiContexts';
import { test as PageContexts } from './fixtures/PageContexts';
import { test as Actors } from './fixtures/Actors';
import { test as TestData } from './fixtures/TestData';
import { test as HelperFixtures } from './fixtures/HelperFixtures';
import { test as FrontendPages } from './page-objects/FrontendPages';
import { test as AdministrationPages } from './page-objects/AdministrationPages';
import { test as DataFixtures } from './data-fixtures/DataFixtures';
import { test as ShopAdminTasks } from './tasks/shop-admin-tasks';
import { test as ShopCustomerTasks } from './tasks/shop-customer-tasks';
import { test as FeatureService } from './fixtures/Feature';
import { test as HeyFrameDataFixture } from './fixtures/HeyFrameDataFixtures';

// Export only runtime values from @playwright/test to avoid strip-only mode errors
export { expect, mergeTests } from '@playwright/test';
// Export types from playwright-core for strip-only mode compatibility
export type { APIResponse, Page, Locator, BrowserContext, APIRequestContext, Request } from 'playwright-core';
export * from './services/HeyFrameDataHelpers';
export * from './services/ShopInfo';
export * from './services/ImageHelper';
export * from './types/HeyFrameTypes';
export * from './services/TestDataService';
export * from './services/VisualTestHelpers';
export * from './services/IdProvider';
export * from './services/LanguageHelper';

export { FrontendPageObjects } from './page-objects/FrontendPages';
export { AdminPageObjects } from './page-objects/AdministrationPages';

export type { FixtureTypes } from './types/FixtureTypes';
export type { Task } from './types/Task';
export type { PageObject } from './types/PageObject';
export type { TranslationKey, TranslateFn } from './types/TranslationTypes';

export { BUNDLED_RESOURCES, baseNamespaces } from './locales';

export const test = mergeTests(
    HelperFixtures,
    DefaultSalesChannel,
    HeyFrameDataFixture,
    ApiContexts,
    PageContexts,
    Actors,
    TestData,
    FeatureService,
    FrontendPages,
    AdministrationPages,
    DataFixtures,
    ShopAdminTasks,
    ShopCustomerTasks,
);
