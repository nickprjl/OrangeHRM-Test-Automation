import { test, expect } from "@playwright/test";
import { ENV } from "../../utils/env";
import { LoginPage } from "../../pages/auth/LoginPage";

test.describe("Login", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.goto();
  });

  test("OrangeHRM login page loads successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);
  });

  test("User can login with valid Credentials", async ({ page }) => {
    await loginPage.login(ENV.username, ENV.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test("User cannot login with invalid Credentials", async ({ page }) => {
    await loginPage.login("Not Admin", "Wrong Password");
    await loginPage.expectErrorMessage(/Invalid credentials/);
  });

  test("Required validation is displayed when credentials are empty", async () => {
    await loginPage.clickLogin();
    await expect(loginPage.requiredFieldMessage).toHaveCount(2);
  });
});
