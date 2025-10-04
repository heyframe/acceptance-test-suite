import type { Page, Locator } from 'playwright-core';
import type { PageObject } from '../../types/PageObject';
import { translate } from '../../services/LanguageHelper';

export class AccountPayment implements PageObject {
    public readonly cashOnDeliveryOption: Locator;
    public readonly paidInAdvanceOption: Locator;
    public readonly invoiceOption: Locator;
    public readonly changeDefaultPaymentButton: Locator;

    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.cashOnDeliveryOption = page.getByLabel(translate('frontend:payment:methods.cashOnDelivery'));
        this.paidInAdvanceOption = page.getByLabel(translate('frontend:payment:methods.paidInAdvance'));
        this.invoiceOption = page.getByLabel(translate('frontend:payment:methods.invoice'));
        this.changeDefaultPaymentButton = page.getByRole('button', { name: translate('frontend:payment:actions.change'), exact: true });
    }

    url() {
        return 'account/payment';
    }
}
