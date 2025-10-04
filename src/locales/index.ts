// Direct imports of all locale files - bundled at build time
import administrationCategory from './en/administration/category.json' with { type: 'json' };
import administrationCustomer from './en/administration/customer.json' with { type: 'json' };
import administrationCustomField from './en/administration/customField.json' with { type: 'json' };
import administrationDataSharing from './en/administration/dataSharing.json' with { type: 'json' };
import administrationDocument from './en/administration/document.json' with { type: 'json' };
import administrationLandingPage from './en/administration/landingPage.json' with { type: 'json' };
import administrationLayout from './en/administration/layout.json' with { type: 'json' };
import administrationLogin from './en/administration/login.json' with { type: 'json' };
import administrationFlowBuilder from './en/administration/flowBuilder.json' with { type: 'json' };
import administrationDashboard from './en/administration/dashboard.json' with { type: 'json' };
import administrationManufacturer from './en/administration/manufacturer.json' with { type: 'json' };
import administrationOrder from './en/administration/order.json' with { type: 'json' };
import administrationPayment from './en/administration/payment.json' with { type: 'json' };
import administrationPromotion from './en/administration/promotion.json' with { type: 'json' };
import administrationRule from './en/administration/rule.json' with { type: 'json' };
import administrationSettings from './en/administration/settings.json' with { type: 'json' };
import administrationShipping from './en/administration/shipping.json' with { type: 'json' };
import administrationYourProfile from './en/administration/yourProfile.json' with { type: 'json' };
import administrationCustomerGroup from './en/administration/customerGroup.json' with { type: 'json' };
import administrationFirstRunWizard from './en/administration/firstRunWizard.json' with { type: 'json' };
import administrationHeyFrameServices from './en/administration/heyframeServices.json' with { type: 'json' };
import administrationProduct from './en/administration/product.json' with { type: 'json' };

import frontendAccount from './en/frontend/account.json' with { type: 'json' };
import frontendAddress from './en/frontend/address.json' with { type: 'json' };
import frontendCheckout from './en/frontend/checkout.json' with { type: 'json' };
import frontendProduct from './en/frontend/product.json' with { type: 'json' };
import frontendNavigation from './en/frontend/navigation.json' with { type: 'json' };
import frontendContact from './en/frontend/contact.json' with { type: 'json' };
import frontendConsent from './en/frontend/consent.json' with { type: 'json' };
import frontendHome from './en/frontend/home.json' with { type: 'json' };
import frontendLogin from './en/frontend/login.json' with { type: 'json' };
import frontendOrder from './en/frontend/order.json' with { type: 'json' };
import frontendPageNotFound from './en/frontend/pageNotFound.json' with { type: 'json' };
import frontendPayment from './en/frontend/payment.json' with { type: 'json' };
import frontendRecover from './en/frontend/recover.json' with { type: 'json' };
import frontendOffCanvasCart from './en/frontend/offCanvasCart.json' with { type: 'json' };

// German locales - Administration
import deAdministrationCategory from './zh/administration/category.json' with { type: 'json' };
import deAdministrationCustomer from './zh/administration/customer.json' with { type: 'json' };
import deAdministrationCustomerGroup from './zh/administration/customerGroup.json' with { type: 'json' };
import deAdministrationCustomField from './zh/administration/customField.json' with { type: 'json' };
import deAdministrationDashboard from './zh/administration/dashboard.json' with { type: 'json' };
import deAdministrationDataSharing from './zh/administration/dataSharing.json' with { type: 'json' };
import deAdministrationDocument from './zh/administration/document.json' with { type: 'json' };
import deAdministrationFirstRunWizard from './zh/administration/firstRunWizard.json' with { type: 'json' };
import deAdministrationFlowBuilder from './zh/administration/flowBuilder.json' with { type: 'json' };
import deAdministrationLandingPage from './zh/administration/landingPage.json' with { type: 'json' };
import deAdministrationLayout from './zh/administration/layout.json' with { type: 'json' };
import deAdministrationLogin from './zh/administration/login.json' with { type: 'json' };
import deAdministrationManufacturer from './zh/administration/manufacturer.json' with { type: 'json' };
import deAdministrationOrder from './zh/administration/order.json' with { type: 'json' };
import deAdministrationPayment from './zh/administration/payment.json' with { type: 'json' };
import deAdministrationProduct from './zh/administration/product.json' with { type: 'json' };
import deAdministrationPromotion from './zh/administration/promotion.json' with { type: 'json' };
import deAdministrationRule from './zh/administration/rule.json' with { type: 'json' };
import deAdministrationSettings from './zh/administration/settings.json' with { type: 'json' };
import deAdministrationShipping from './zh/administration/shipping.json' with { type: 'json' };
import deAdministrationHeyFrameServices from './zh/administration/heyframeServices.json' with { type: 'json' };
import deAdministrationYourProfile from './zh/administration/yourProfile.json' with { type: 'json' };

// German locales - Frontend
import deFrontendAccount from './zh/frontend/account.json' with { type: 'json' };
import deFrontendAddress from './zh/frontend/address.json' with { type: 'json' };
import deFrontendCheckout from './zh/frontend/checkout.json' with { type: 'json' };
import deFrontendConsent from './zh/frontend/consent.json' with { type: 'json' };
import deFrontendContact from './zh/frontend/contact.json' with { type: 'json' };
import deFrontendHome from './zh/frontend/home.json' with { type: 'json' };
import deFrontendLogin from './zh/frontend/login.json' with { type: 'json' };
import deFrontendNavigation from './zh/frontend/navigation.json' with { type: 'json' };
import deFrontendOffCanvasCart from './zh/frontend/offCanvasCart.json' with { type: 'json' };
import deFrontendOrder from './zh/frontend/order.json' with { type: 'json' };
import deFrontendPageNotFound from './zh/frontend/pageNotFound.json' with { type: 'json' };
import deFrontendPayment from './zh/frontend/payment.json' with { type: 'json' };
import deFrontendProduct from './zh/frontend/product.json' with { type: 'json' };
import deFrontendRecover from './zh/frontend/recover.json' with { type: 'json' };

// Bundle all resources for i18next (no filesystem operations needed!)
export const BUNDLED_RESOURCES = {
    en: {
        // Administration
        'administration/category': administrationCategory,
        'administration/customer': administrationCustomer,
        'administration/customField': administrationCustomField,
        'administration/dataSharing': administrationDataSharing,
        'administration/document': administrationDocument,
            'administration/landingPage': administrationLandingPage,
            'administration/layout': administrationLayout,
            'administration/login': administrationLogin,
        'administration/flowBuilder': administrationFlowBuilder,
        'administration/dashboard': administrationDashboard,
        'administration/manufacturer': administrationManufacturer,
        'administration/order': administrationOrder,
        'administration/payment': administrationPayment,
        'administration/promotion': administrationPromotion,
        'administration/rule': administrationRule,
        'administration/settings': administrationSettings,
        'administration/shipping': administrationShipping,
        'administration/yourProfile': administrationYourProfile,
        'administration/customerGroup': administrationCustomerGroup,
        'administration/firstRunWizard': administrationFirstRunWizard,
        'administration/heyframeServices': administrationHeyFrameServices,
        'administration/product': administrationProduct,
        // Frontend
        'frontend/account': frontendAccount,
        'frontend/address': frontendAddress,
        'frontend/checkout': frontendCheckout,
        'frontend/product': frontendProduct,
        'frontend/navigation': frontendNavigation,
        'frontend/contact': frontendContact,
        'frontend/consent': frontendConsent,
        'frontend/home': frontendHome,
        'frontend/login': frontendLogin,
        'frontend/order': frontendOrder,
        'frontend/pageNotFound': frontendPageNotFound,
        'frontend/payment': frontendPayment,
        'frontend/recover': frontendRecover,
        'frontend/offCanvasCart': frontendOffCanvasCart,
    },
    de: {
        // Administration
        'administration/category': deAdministrationCategory,
        'administration/customer': deAdministrationCustomer,
        'administration/customerGroup': deAdministrationCustomerGroup,
        'administration/customField': deAdministrationCustomField,
        'administration/dashboard': deAdministrationDashboard,
        'administration/dataSharing': deAdministrationDataSharing,
        'administration/document': deAdministrationDocument,
        'administration/firstRunWizard': deAdministrationFirstRunWizard,
        'administration/flowBuilder': deAdministrationFlowBuilder,
        'administration/landingPage': deAdministrationLandingPage,
        'administration/layout': deAdministrationLayout,
        'administration/login': deAdministrationLogin,
        'administration/manufacturer': deAdministrationManufacturer,
        'administration/order': deAdministrationOrder,
        'administration/payment': deAdministrationPayment,
        'administration/product': deAdministrationProduct,
        'administration/promotion': deAdministrationPromotion,
        'administration/rule': deAdministrationRule,
        'administration/settings': deAdministrationSettings,
        'administration/shipping': deAdministrationShipping,
        'administration/heyframeServices': deAdministrationHeyFrameServices,
        'administration/yourProfile': deAdministrationYourProfile,
        // Frontend
        'frontend/account': deFrontendAccount,
        'frontend/address': deFrontendAddress,
        'frontend/checkout': deFrontendCheckout,
        'frontend/consent': deFrontendConsent,
        'frontend/contact': deFrontendContact,
        'frontend/home': deFrontendHome,
        'frontend/login': deFrontendLogin,
        'frontend/navigation': deFrontendNavigation,
        'frontend/offCanvasCart': deFrontendOffCanvasCart,
        'frontend/order': deFrontendOrder,
        'frontend/pageNotFound': deFrontendPageNotFound,
        'frontend/payment': deFrontendPayment,
        'frontend/product': deFrontendProduct,
        'frontend/recover': deFrontendRecover,
    },
} as const;

// Export namespaces for type generation (reused in TranslationTypes.ts)
export const baseNamespaces = {
    administration: {
        category: administrationCategory,
        customer: administrationCustomer,
        customField: administrationCustomField,
        dataSharing: administrationDataSharing,
        document: administrationDocument,
        landingPage: administrationLandingPage,
        layout: administrationLayout,
        login: administrationLogin,
        flowBuilder: administrationFlowBuilder,
        dashboard: administrationDashboard,
        manufacturer: administrationManufacturer,
        order: administrationOrder,
        payment: administrationPayment,
        promotion: administrationPromotion,
        rule: administrationRule,
        settings: administrationSettings,
        shipping: administrationShipping,
        yourProfile: administrationYourProfile,
        customerGroup: administrationCustomerGroup,
        firstRunWizard: administrationFirstRunWizard,
        heyframeServices: administrationHeyFrameServices,
        product: administrationProduct,
    },
    frontend: {
        account: frontendAccount,
        address: frontendAddress,
        checkout: frontendCheckout,
        product: frontendProduct,
        navigation: frontendNavigation,
        contact: frontendContact,
        consent: frontendConsent,
        home: frontendHome,
        login: frontendLogin,
        order: frontendOrder,
        pageNotFound: frontendPageNotFound,
        payment: frontendPayment,
        recover: frontendRecover,
        offCanvasCart: frontendOffCanvasCart,
    },
} as const;
