import { test, expect } from "@playwright/test";
import { ENV } from "../../utils/env";

test("OrangeHRM login page loads successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test.only("User can login with valid Credentials", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Username").fill(ENV.username!);
  await page.getByPlaceholder("Password").fill(ENV.password!);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/dashboard/);
});
