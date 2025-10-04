import type { Page, Locator } from 'playwright-core';
import type { PageObject } from '../../types/PageObject';
import { translate } from '../../services/LanguageHelper';

export class PageNotFound implements PageObject {
    public readonly pageNotFoundImage: Locator;
    public readonly headline: Locator;
    public readonly pageNotFoundMessage: Locator;
    public readonly backToShopButton: Locator;

    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.pageNotFoundImage = page.getByAltText(translate('frontend:pageNotFound:title'));
        this.headline = page.getByRole('heading', { name: translate('frontend:pageNotFound:title') });
        this.pageNotFoundMessage = page.getByText(translate('frontend:pageNotFound:message'));
        this.backToShopButton = page.getByRole('link', { name: translate('frontend:pageNotFound:backToShop') });
    }

    url() {
        return 'non-existing-page';
    }
}
