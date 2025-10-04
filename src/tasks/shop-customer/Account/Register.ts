import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';
import type { RegistrationData } from '../../../types/HeyFrameTypes';

export const Register = base.extend<{ Register: Task }, FixtureTypes>({
    Register: async ({ FrontendAccountLogin, IdProvider, TestDataService }, use) => {
        let registeredEmail = '';

        const defaultRegistrationData: RegistrationData = {
            isCommercial: false,
            isGuest: false,
            salutation: 'Mr.',
            firstName: 'Jeff',
            lastName: 'Goldblum',
            email: `${IdProvider.getIdPair().uuid}@test.com`,
            password: 'heyframe',
            street: 'Ebbinghof 10',
            city: 'Schöppingen',
            country: 'Germany',
            postalCode: '48624',
            company: 'heyframe',
            department: 'Operations',
            vatRegNo: 'DE1234567890',
        };

        const task = (overrides?: Partial<RegistrationData>,
                    /**
                      * @deprecated The 'isCommercial' argument is deprecated and will be removed in a future version. 
                      * Please avoid using it and rely on the `isCommercial` field in `RegistrationData` instead.
                      */
            isCommercial?: boolean) => {
            return async function Register() {
                const registrationData = { ...defaultRegistrationData, ...overrides };

                registeredEmail = registrationData.email;

                await FrontendAccountLogin.salutationSelect.selectOption(registrationData.salutation);
                await FrontendAccountLogin.firstNameInput.fill(registrationData.firstName);
                await FrontendAccountLogin.lastNameInput.fill(registrationData.lastName);

                  // Deprecation warning for the 'isCommercial' argument
                  if (registrationData.isCommercial || isCommercial) {
                    await FrontendAccountLogin.companyInput.fill(registrationData.company);
                    await FrontendAccountLogin.departmentInput.fill(registrationData.department);
                    await FrontendAccountLogin.vatRegNoInput.fill(registrationData.vatRegNo);
                }

                await FrontendAccountLogin.registerEmailInput.fill(registrationData.email);

                if (!registrationData.isGuest) {
                    await FrontendAccountLogin.registerPasswordInput.fill(registrationData.password);
                }

                await FrontendAccountLogin.streetAddressInput.fill(registrationData.street);
                await FrontendAccountLogin.postalCodeInput.fill(registrationData.postalCode);
                await FrontendAccountLogin.cityInput.fill(registrationData.city);
                await FrontendAccountLogin.countryInput.selectOption({ label: registrationData.country });

                await FrontendAccountLogin.registerButton.click();

                const customer = await TestDataService.getCustomerByEmail(registeredEmail);
                if (customer) {
                    TestDataService.addCreatedRecord('customer', customer.id);
                }
            };
        };

        await use(task);
    },
});