import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';
import type { Customer, Product } from '../../../types/HeyFrameTypes';

export const LoginViaReviewsTab = base.extend<{ LoginViaReviewsTab: Task }, FixtureTypes>({
    LoginViaReviewsTab: async ({ ShopCustomer, DefaultSalesChannel, FrontendProductDetail }, use) => {
        const task = (product: Product, customCustomer?: Customer) => {
            return async function LoginViaReviewsTab() {

                const customer = customCustomer ? customCustomer : DefaultSalesChannel.customer;

                await ShopCustomer.goesTo(FrontendProductDetail.url(product));
                await FrontendProductDetail.reviewsTab.click();
                await FrontendProductDetail.reviewTeaserButton.click();

                await FrontendProductDetail.reviewEmailInput.fill(customer.email);
                await FrontendProductDetail.reviewPasswordInput.fill(customer.password);
                await FrontendProductDetail.reviewLoginButton.click();

                await ShopCustomer.expects(FrontendProductDetail.productName).toHaveText(product.name);
            }
        };

        await use(task);
    },
});