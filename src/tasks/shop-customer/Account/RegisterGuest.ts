import { test as base, expect } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';
import type { components } from '@heyframe/api-client/admin-api-types';

/**
 * @deprecated - Use `Register.ts` instead.
 */

export const RegisterGuest = base.extend<{ RegisterGuest: Task }, FixtureTypes>({
    RegisterGuest: async ({ FrontendAccountLogin, AdminApiContext }, use) => {

        const registrationData = {
            firstName: 'Jeff',
            lastName: 'Goldblum',
            email: 'invalid',
            password: 'heyframe',
            street: 'Ebbinghof 10',
            city: 'Schöppingen',
            country: 'Germany',
            postalCode: '48624',
        }

        const task = (email: string, country = 'Germany') => {
            return async function RegisterGuest() {

                registrationData.email = email;

                await FrontendAccountLogin.firstNameInput.fill(registrationData.firstName);
                await FrontendAccountLogin.lastNameInput.fill(registrationData.lastName);

                await FrontendAccountLogin.registerEmailInput.fill(registrationData.email);

                await FrontendAccountLogin.streetAddressInput.fill(registrationData.street);
                await FrontendAccountLogin.cityInput.fill(registrationData.city);
                if (country != 'Germany') {
                    await FrontendAccountLogin.countryInput.selectOption(country);

                } else {
                    await FrontendAccountLogin.countryInput.selectOption(registrationData.country);

                }
                await FrontendAccountLogin.postalCodeInput.fill(registrationData.postalCode);

                await FrontendAccountLogin.registerButton.click();
            }
        };

        await use(task);

        const customerResponse = await AdminApiContext.post('search/customer', {
            data: {
                limit: 1,
                filter: [{
                    type: 'equals',
                    field: 'email',
                    value: registrationData.email,
                }],
            },
        });
        expect(customerResponse.ok()).toBeTruthy();

        const customerResponseData = await customerResponse.json() as { data: components['schemas']['Customer'][] };

        for (const customer of customerResponseData.data) {
            await AdminApiContext.delete(`customer/${customer.id}`);
        }
    },
});
