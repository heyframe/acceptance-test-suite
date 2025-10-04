import { mergeTests } from '@playwright/test';

import { SaveProduct } from './shop-admin/Product/SaveProduct';
import { ExpectNotification } from './shop-admin/ExpectNotification';
import { CreateLinkTypeCategory } from './shop-admin/Category/CreateLinkTypeCategory';
import { BulkEditProducts } from './shop-admin/Product/BulkEditProducts';
import { BulkEditCustomers } from './shop-admin/Customers/BulkEditCustomers';
import { AssignEntitiesToRule } from './shop-admin/Rule/AssignEntitiesToRule';
import { CreateFlow } from './shop-admin/Flow/CreateFlow';
import { LoginViaReviewsTab } from './shop-customer/Account/LoginViaReviewsTab';
import { DeactivateHeyFrameServices } from './shop-admin/HeyFrameServices/DeactivateHeyFrameServices';
import { CheckVisibilityOfServicesBanner } from './shop-admin/HeyFrameServices/CheckVisibilityOfServicesBanner';
import { CheckAccessToHeyFrameServices } from './shop-admin/HeyFrameServices/CheckAccessToHeyFrameServices';

export const test = mergeTests(
    SaveProduct,
    ExpectNotification,
    CreateLinkTypeCategory,
    BulkEditProducts,
    BulkEditCustomers,
    AssignEntitiesToRule,
    CreateFlow,
    LoginViaReviewsTab,
    CheckAccessToHeyFrameServices,
    CheckVisibilityOfServicesBanner,
    DeactivateHeyFrameServices,
);