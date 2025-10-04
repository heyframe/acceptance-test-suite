import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';
import type { Product } from '../../../types/HeyFrameTypes';

export const AddProductToCartFromWishlist = base.extend<{ AddProductToCartFromWishlist: Task }, FixtureTypes>({
    AddProductToCartFromWishlist: async ({ ShopCustomer, FrontendWishlist, FrontendOffCanvasCart }, use) => {
        const task = (ProductData: Product) => {
            return async function AddProductToCartFromWishlist() {
                const listedItem = await FrontendWishlist.getListingItemByProductName(ProductData.name);
                await listedItem.productAddToShoppingCart.click();
                await FrontendWishlist.page.waitForResponse((response) => response.url().includes(`checkout/offcanvas`) && response.ok());
                await ShopCustomer.expects(FrontendOffCanvasCart.itemCount).toBeVisible();
                const offcanvasItem = await FrontendOffCanvasCart.getLineItemByProductNumber(ProductData.productNumber);
                const itemsPrice = await offcanvasItem.productTotalPriceValue.innerText();
                const expectedPrice = await listedItem.productPrice.innerText();
                ShopCustomer.expects(itemsPrice).toBe(expectedPrice);
            }
        };

        await use(task);
    },
});

export const RemoveProductFromWishlist = base.extend<{ RemoveProductFromWishlist: Task }, FixtureTypes>({
    RemoveProductFromWishlist: async ({ FrontendHome , FrontendWishlist}, use) => {
        const task = (ProductData: Product) => {
            return async function RemoveProductFromWishlist() {
                const listedItem = await FrontendHome.getListingItemByProductName(ProductData.name);
                await listedItem.wishlistAddedIcon.click();
                await FrontendWishlist.page.waitForResponse((response) => response.url().includes(`remove/${ProductData.id}`) && response.ok());
            }
        };

        await use(task);
    },
});

export const AddProductToWishlist = base.extend<{ AddProductToWishlist: Task }, FixtureTypes>({
    AddProductToWishlist: async ({ FrontendHome , ShopCustomer}, use) => {
        const task = (ProductData: Product) => {
            return async function AddProductToWishlist() {
                const listedItem = await FrontendHome.getListingItemByProductName(ProductData.name);
                await listedItem.wishlistNotAddedIcon.click();
                await ShopCustomer.expects(listedItem.wishlistAddedIcon).toBeVisible();
            }
        };

        await use(task);
    },
});