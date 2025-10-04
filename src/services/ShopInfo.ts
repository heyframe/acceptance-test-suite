import { type AdminApiContext } from './AdminApiContext';

export const isSaaSInstance = async (adminApiContext: AdminApiContext): Promise<boolean> => {
    const instanceFeatures = await adminApiContext.get('./instance/features');
    return instanceFeatures.ok();
};

export const isThemeCompiled = async (context: AdminApiContext, frontendUrl: string): Promise<boolean> => {
    const response = await context.get(frontendUrl);

    const body = (await response.body()).toString();

    const matches = body.match(/.*"(https?:\/\/.*all\.css[^"]*)".*/);
    if (matches && matches?.length > 1) {
        const allCssUrl = matches[1];

        const allCssResponse = await context.get(allCssUrl);

        return allCssResponse.status() < 400;
    }

    return false;
};