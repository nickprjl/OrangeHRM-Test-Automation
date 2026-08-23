import { test, expect } from "@playwright/test";
import { ENV } from "../../utils/env";
import { LoginPage } from "../../pages/auth/LoginPage";

test("OrangeHRM login page loads successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test("User can login with valid Credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(ENV.username, ENV.password);
  await expect(page).toHaveURL(/dashboard/);
});

test.only("User cannot login with invalid Credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("Not Admin", "Wrong Password");
  await loginPage.expectErrorMessage(/Invalid credentials/);
});
