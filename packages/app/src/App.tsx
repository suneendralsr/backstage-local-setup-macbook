import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import servicenowPlugin from '@backstage-community/plugin-servicenow/alpha';
import { navModule } from './modules/nav';

export default createApp({
  features: [
    catalogPlugin, 
    navModule,
    servicenowPlugin,
  ],
});
