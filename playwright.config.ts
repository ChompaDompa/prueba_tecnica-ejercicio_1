import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@serenity-js/playwright-test';
import { Photographer } from '@serenity-js/web';

import { TakePhotosOfInteractionsAsPng } from './src/photography/TakePhotosOfInteractionsAsPng';

/**
 * Playwright Test configuration with Serenity/JS integration.
 * See https://serenity-js.org/handbook/test-runners/playwright-test/
 */
const config: PlaywrightTestConfig = {
    testDir: './test',
    timeout: 60_000,
    expect: {
        timeout: 10_000,
    },
    fullyParallel: true,
    forbidOnly: !! process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 1 : undefined,

    reporter: [
        [ 'html', { outputFolder: 'target/playwright-report', open: 'never' } ],
        [ '@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                [ '@serenity-js/serenity-bdd', { specDirectory: './test' } ],
                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
            ],
        } ],
    ],

    use: {
        baseURL: 'https://www.saucedemo.com',
        testIdAttribute: 'data-test',
        defaultActorName: 'Standard User',
        crew: [
            Photographer.whoWill(TakePhotosOfInteractionsAsPng),
        ],
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
    },

    outputDir: 'target/playwright-test-results',

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};

export default config;
