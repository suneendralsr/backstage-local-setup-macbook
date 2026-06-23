import { Router } from 'express';
import fetch from 'node-fetch';

export async function createRouter() {
  const router = Router();

  router.post('/create-change', async (req, res) => {
    const { serviceName, environment, version, owner } = req.body;

    const response = await fetch(
      'https://dev406616.service-now.com/api/now/table/change_request',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from('admin:password').toString('base64'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          short_description: `Deploy ${serviceName} to ${environment}`,
          description: `Deployment initiated from Backstage

Owner: ${owner}
Version: ${version}`,
          type: 'standard',
          category: 'Software',
        }),
      },
    );

    const data = await response.json();

    res.json({
      changeNumber: data.result.number,
    });
  });

  return router;
}