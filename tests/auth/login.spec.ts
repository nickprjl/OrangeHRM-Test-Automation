import { test, expect } from "@playwright/test";

test("OrangeHRM login page loads successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/OrangeHRM/);
});
