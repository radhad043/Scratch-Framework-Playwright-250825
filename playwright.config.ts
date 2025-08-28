import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: 1,
  timeout: 60000,
  use: {
    headless: false, // Full-screen only works in headed mode
    launchOptions: {
      args: ['--start-maximized'], // Maximizes the browser window
    },
    viewport: null, // Important: disables the default viewport to allow full screen
    ignoreHTTPSErrors: true,
  },
  reporter: [
    ['allure-playwright'],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['junit', { outputFile: 'test-results/test-results.xml' }],
    ['html', { outputFolder: 'test-results/html', open: 'always' }],
  ],
  globalTeardown: './globalTeardown.ts',
};

export default config;