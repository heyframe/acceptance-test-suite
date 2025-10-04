import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';
import type { Address } from '../../../types/HeyFrameTypes';

export const AddNewAddress = base.extend<{ AddNewAddress: Task }, FixtureTypes>({
    AddNewAddress: async ({ FrontendAccountAddresses, FrontendAccountAddressCreate }, use)=> {
        const task = (address: Address) => {
            return async function AddNewAddress() {
                await FrontendAccountAddresses.addNewAddressButton.click();

                await FrontendAccountAddressCreate.firstNameInput.fill(address.firstName);
                await FrontendAccountAddressCreate.lastNameInput.fill(address.lastName);
                await FrontendAccountAddressCreate.companyInput.fill(address.company);
                await FrontendAccountAddressCreate.departmentInput.fill(address.department);
                await FrontendAccountAddressCreate.streetInput.fill(address.street);
                await FrontendAccountAddressCreate.zipcodeInput.fill(address.zipCode);
                await FrontendAccountAddressCreate.cityInput.fill(address.city);
                await FrontendAccountAddressCreate.countryDropdown.selectOption({label: address.country});

                if (address.state) {
                    await FrontendAccountAddressCreate.stateDropdown.selectOption({label: address.state});
                }

                await FrontendAccountAddressCreate.saveAddressButton.click();
            }
        };

        await use(task);
    },
});
