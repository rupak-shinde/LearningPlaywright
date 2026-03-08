import { test } from '@playwright/test';

test('force inspector', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.pause();   // 👈 THIS IS THE KEY
});