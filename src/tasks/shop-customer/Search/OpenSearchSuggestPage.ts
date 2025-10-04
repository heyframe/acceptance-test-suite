import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const OpenSearchSuggestPage = base.extend<{ OpenSearchSuggestPage: Task }, FixtureTypes>({
    OpenSearchSuggestPage: async ({ FrontendSearchSuggest }, use)=> {
        const task = (searchTerm: string) => {
            return async function OpenSearchSuggestPage() {
                const url = `suggest?search=${searchTerm}`;
                await FrontendSearchSuggest.page.goto(url);
            }
        };
        await use(task);
    },
});
