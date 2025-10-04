import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';
import type { Product } from '../../../types/HeyFrameTypes';

export const AddProductToCart = base.extend<{ AddProductToCart: Task }, FixtureTypes>({
    AddProductToCart: async ({ ShopCustomer, FrontendProductDetail }, use) => {
        const task = (ProductData: Product, quantity = '1') => {
            return async function AddProductToCart() {
                await FrontendProductDetail.quantitySelect.fill(quantity);

                await FrontendProductDetail.addToCartButton.click();

                await ShopCustomer.expects(FrontendProductDetail.offCanvasCartTitle).toBeVisible();
                await ShopCustomer.expects(FrontendProductDetail.offCanvasCart.getByText(ProductData.name)).toBeVisible();
            }
        };

        await use(task);
    },
});