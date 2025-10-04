import type { Page, Locator } from 'playwright-core';
import type { PageObject } from '../../types/PageObject';
import { translate } from '../../services/LanguageHelper';

export class Category implements PageObject {
    public readonly sortingSelect: Locator;
    public readonly firstProductBuyButton: Locator;
    public readonly noProductsFoundAlert: Locator;

    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.sortingSelect = page.getByLabel(translate('frontend:product:listing.sorting'));
        this.firstProductBuyButton = page.getByRole('button', { name: translate('frontend:product:addToCart') }).first();
        this.noProductsFoundAlert = page.getByText(translate('frontend:product:listing.noProductsFound'));
    }

    url(categoryName: string): string {
        return `${categoryName}/`;
    }
}
