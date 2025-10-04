import { test as base } from '@playwright/test';
import type { Task } from '../../../types/Task';
import type { FixtureTypes} from '../../../types/FixtureTypes';

export const OpenSearchResultPage = base.extend<{ OpenSearchResultPage: Task }, FixtureTypes>({
    OpenSearchResultPage: async ({ FrontendSearch }, use)=> {
        const task = (searchTerm: string) => {
            return async function OpenSearchResultPage() {
                const url = `search?search=${searchTerm}`;
                await FrontendSearch.page.goto(url);
            }
        };
        await use(task);
    },
});
