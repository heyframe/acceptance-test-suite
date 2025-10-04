import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes } from '../../../types/FixtureTypes';

export const SearchForTerm = base.extend<{ SearchForTerm: Task }, FixtureTypes>({
    SearchForTerm: async ({ FrontendSearchSuggest }, use) => {
        const task = (searchTerm: string) => {
            return async function SearchForTerm() {
                await FrontendSearchSuggest.searchInput.fill(searchTerm);
                const encodedSearchTerm = encodeURIComponent(searchTerm);
                await FrontendSearchSuggest.page.waitForResponse((response) => response.url().includes(`suggest?search=${encodedSearchTerm}`) && response.ok());
            };
        };

        await use(task);
    },
});
