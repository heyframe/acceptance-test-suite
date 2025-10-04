import type { Page, Locator } from 'playwright-core';
import type { PageObject } from '../../types/PageObject';
import { translate } from '../../services/LanguageHelper';

export class SettingsListing implements PageObject {
    public readonly contentView: Locator;
    public readonly header: Locator;
    public readonly heyframeServicesLink: Locator;
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('.sw-settings__content-header');
        this.contentView = page.locator('.sw-desktop__content');
        this.heyframeServicesLink = page.locator('.sw-settings__content-grid').getByRole('link', { name: translate('administration:heyframeServices:links.heyframeServices') });
    }
    url() {
        return '#/sw/settings/index/shop';
    }
}
