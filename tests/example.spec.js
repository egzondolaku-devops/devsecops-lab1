import { test, expect } from '@playwright/test';

test('Check example.com title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
