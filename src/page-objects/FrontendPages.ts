import { test as base } from '@playwright/test';
import type { FixtureTypes } from '../types/FixtureTypes';

import { Home } from './frontend/Home';
import { ProductDetail } from './frontend/ProductDetail';
import { Category } from './frontend/Category';
import { CheckoutCart } from './frontend/CheckoutCart';
import { OffCanvasCart } from './frontend/OffCanvasCart';
import { CheckoutConfirm } from './frontend/CheckoutConfirm';
import { CheckoutFinish } from './frontend/CheckoutFinish';
import { CheckoutRegister } from './frontend/CheckoutRegister';
import { Account } from './frontend/Account';
import { AccountLogin } from './frontend/AccountLogin';
import { AccountRecover } from './frontend/AccountRecover';
import { AccountProfile } from './frontend/AccountProfile';
import { AccountOrder } from './frontend/AccountOrder';
import { AccountAddresses } from './frontend/AccountAddresses';
import { AccountPayment } from './frontend/AccountPayment';
import { Search } from './frontend/Search';
import { SearchSuggest } from './frontend/SearchSuggest';
import { CustomRegister } from './frontend/CustomRegister';
import { CheckoutOrderEdit } from './frontend/CheckoutOrderEdit';
import { AccountAddressCreate } from './frontend/AccountAddresssCreate';
import { PageNotFound } from './frontend/PageNotFound';
import { ContactForm } from './frontend/ContactForm';
import { Wishlist } from './frontend/Wishlist';
import { Footer } from './frontend/Footer';
import { Header } from './frontend/Header';

export interface FrontendPageTypes {
    FrontendHome: Home;
    FrontendProductDetail: ProductDetail;
    FrontendCategory: Category;
    FrontendCheckoutCart: CheckoutCart;
    FrontendOffCanvasCart: OffCanvasCart;
    FrontendCheckoutConfirm: CheckoutConfirm;
    FrontendCheckoutFinish: CheckoutFinish;
    FrontendCheckoutRegister: CheckoutRegister;
    FrontendAccount: Account;
    FrontendAccountLogin: AccountLogin;
    FrontendAccountRecover: AccountRecover;
    FrontendAccountProfile: AccountProfile;
    FrontendAccountOrder: AccountOrder;
    FrontendAccountAddresses: AccountAddresses;
    FrontendAccountAddressCreate: AccountAddressCreate;
    FrontendAccountPayment: AccountPayment;
    FrontendSearch: Search;
    FrontendSearchSuggest: SearchSuggest;
    FrontendCustomRegister: CustomRegister;
    FrontendCheckoutOrderEdit: CheckoutOrderEdit;
    FrontendPageNotFound: PageNotFound;
    FrontendContactForm: ContactForm;
    FrontendWishlist: Wishlist;
    FrontendFooter: Footer;
    FrontendHeader: Header;
}

export const FrontendPageObjects = {
    Home,
    ProductDetail,
    Category,
    CheckoutCart,
    OffCanvasCart,
    CheckoutConfirm,
    CheckoutFinish,
    CheckoutRegister,
    Account,
    AccountLogin,
    AccountRecover,
    AccountProfile,
    AccountOrder,
    AccountAddresses,
    AccountAddressCreate,
    AccountPayment,
    Search,
    SearchSuggest,
    CustomRegister,
    CheckoutOrderEdit,
    PageNotFound,
    ContactForm,
    Wishlist,
    Footer,
    Header,
}

export const test = base.extend<FixtureTypes>({

    FrontendHome: async ({ FrontendPage }, use) => {
        await use(new Home(FrontendPage));
    },

    FrontendProductDetail: async ({ FrontendPage }, use) => {
        await use(new ProductDetail(FrontendPage));
    },

    FrontendCategory: async ({ FrontendPage }, use) => {
        await use(new Category(FrontendPage));
    },

    FrontendCheckoutCart: async ({ FrontendPage }, use) => {
        await use(new CheckoutCart(FrontendPage));
    },

    FrontendOffCanvasCart: async ({ FrontendPage }, use) => {
        await use(new OffCanvasCart(FrontendPage));
    },

    FrontendCheckoutConfirm: async ({ FrontendPage }, use) => {
        await use(new CheckoutConfirm(FrontendPage));
    },

    FrontendCheckoutFinish: async ({ FrontendPage }, use) => {
        await use(new CheckoutFinish(FrontendPage));
    },

    FrontendCheckoutRegister: async ({ FrontendPage }, use) => {
        await use(new CheckoutRegister(FrontendPage));
    },

    FrontendAccount: async ({ FrontendPage, InstanceMeta }, use) => {
        await use(new Account(FrontendPage, InstanceMeta));
    },

    FrontendAccountLogin: async ({ FrontendPage }, use) => {
        await use(new AccountLogin(FrontendPage));
    },

    FrontendAccountRecover: async ({ FrontendPage }, use) => {
        await use(new AccountRecover(FrontendPage));
    },

    FrontendAccountProfile: async ({ FrontendPage, InstanceMeta }, use) => {
        await use(new AccountProfile(FrontendPage, InstanceMeta));
    },

    FrontendAccountOrder: async ({ FrontendPage }, use) => {
        await use(new AccountOrder(FrontendPage));
    },

    FrontendAccountAddresses: async ({ FrontendPage , InstanceMeta }, use) => {
        await use(new AccountAddresses(FrontendPage, InstanceMeta));
    },

    FrontendAccountAddressCreate: async ({ FrontendPage }, use) => {
        await use(new AccountAddressCreate(FrontendPage));
    },

    FrontendAccountPayment: async ({ FrontendPage }, use) => {
        await use(new AccountPayment(FrontendPage));
    },

    FrontendSearch: async ({ FrontendPage }, use) => {
        await use(new Search(FrontendPage));
    },

    FrontendSearchSuggest: async ({ FrontendPage }, use) => {
        await use(new SearchSuggest(FrontendPage));
    },

    FrontendCustomRegister: async ({ FrontendPage }, use) => {
        await use(new CustomRegister(FrontendPage));
    },

    FrontendCheckoutOrderEdit: async ({ FrontendPage }, use) => {
        await use(new CheckoutOrderEdit(FrontendPage));
    },

    FrontendPageNotFound: async ({ FrontendPage }, use) => {
        await use(new PageNotFound(FrontendPage));
    },
  
    FrontendContactForm: async ({ FrontendPage, InstanceMeta }, use) => {
        await use(new ContactForm(FrontendPage, InstanceMeta));
    },
  
    FrontendWishlist: async ({ FrontendPage }, use) => {
        await use(new Wishlist(FrontendPage));
    },

    FrontendFooter: async ({ FrontendPage }, use) => {
        await use(new Footer(FrontendPage));
    },

    FrontendHeader: async ({ FrontendPage }, use) => {
        await use(new Header(FrontendPage));
    },
});
