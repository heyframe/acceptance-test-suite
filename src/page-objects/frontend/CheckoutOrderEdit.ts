import type { Page, Locator } from 'playwright-core';
import type { PageObject } from '../../types/PageObject';
import { translate } from '../../services/LanguageHelper';

export class CheckoutOrderEdit implements PageObject {
    public readonly completePaymentButton: Locator;
    public readonly orderCancelButton: Locator;
    public readonly dialogOrderCancel: Locator;
    public readonly dialogOrderCancelButton: Locator;
    public readonly dialogBackButton: Locator;

    /**
     * Payment options
     */
    public readonly paymentCashOnDelivery: Locator;
    public readonly paymentPaidInAdvance: Locator;
    public readonly paymentInvoice: Locator;

    /**
     * Shipping options
     */
    public readonly shippingStandard: Locator;
    public readonly shippingExpress: Locator;

    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;

        this.completePaymentButton = page.getByRole('button', { name: translate('frontend:payment:actions.completePayment') });
        this.orderCancelButton = page.getByRole('button', { name: translate('frontend:order:actions.cancelOrder') });
        this.dialogOrderCancel = page.getByRole('dialog', { name: translate('frontend:order:actions.cancelOrder') });
        this.dialogOrderCancelButton = this.dialogOrderCancel.getByRole('button', { name: translate('frontend:order:actions.cancelOrder') });
        this.dialogBackButton = this.dialogOrderCancel.getByRole('button', { name: translate('frontend:order:actions.back') });

        this.paymentCashOnDelivery = page.getByLabel(translate('frontend:payment:methods.cashOnDelivery'));
        this.paymentPaidInAdvance = page.getByLabel(translate('frontend:payment:methods.paidInAdvance'));
        this.paymentInvoice = page.getByLabel(translate('frontend:payment:methods.invoice'));

        this.shippingStandard = page.getByLabel(translate('frontend:order:shipping.standard'));
        this.shippingExpress = page.getByLabel(translate('frontend:order:shipping.express'));
    }

    url(orderUuid: string) {
        return `account/order/edit/${orderUuid}`;
    }

    /**
     * Returns the radio button element for a specified payment method.
     *
     * @param paymentMethodName - Name of the payment method on the page.
     */
    getPaymentMethodButton(paymentMethodName: string): Locator {
        return this.page.getByLabel(paymentMethodName);
    }
}
