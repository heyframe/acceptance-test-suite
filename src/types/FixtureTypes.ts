import type { ApiContextTypes } from '../fixtures/ApiContexts';
import type { PageContextTypes } from '../fixtures/PageContexts';
import type { ActorFixtureTypes } from '../fixtures/Actors';
import type { TestDataFixtureTypes } from '../fixtures/TestData';
import type { HelperFixtureTypes } from '../fixtures/HelperFixtures';
import type { DefaultSalesChannelTypes } from '../fixtures/DefaultSalesChannel';
import type { HeyFrameDataFixtureTypes } from '../fixtures/HeyFrameDataFixtures';
import type { FrontendPageTypes } from '../page-objects/FrontendPages';
import type { AdministrationPageTypes } from '../page-objects/AdministrationPages';
import type { DataFixtureTypes } from '../data-fixtures/DataFixtures';
import type { FeatureFixtureTypes } from '../fixtures/Feature';

export interface FixtureTypes extends
    ApiContextTypes,
    PageContextTypes,
    ActorFixtureTypes,
    TestDataFixtureTypes,
    HelperFixtureTypes,
    FeatureFixtureTypes,
    DefaultSalesChannelTypes,
    HeyFrameDataFixtureTypes,
    FrontendPageTypes,
    AdministrationPageTypes,
    DataFixtureTypes {}