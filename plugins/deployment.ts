import { createBackendModule } from '@backstage/backend-plugin-api';
import { coreServices } from '@backstage/backend-plugin-api';

export const deploymentModule = createBackendModule({
  pluginId: 'proxy',
  moduleId: 'deployment-router',
  register(reg) {
    reg.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
      },
      async init({ httpRouter }) {
        httpRouter.use('/deployment', (req, res, next) => {
          next();
        });

        httpRouter.post('/deployment/create-change', async (req, res) => {
          res.json({
            changeNumber: 'CHG0012345',
          });
        });
      },
    });
  },
});