import { test, expect } from "../../fixtures/base.fixture";
import { ENV } from "../../utils/env";
import { AUTH_DATA } from "../../test-data/auth.data";

test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test(
    "OrangeHRM login page loads successfully",
    { tag: "@smoke" },
    async ({ page }) => {
      await expect(page).toHaveTitle(/OrangeHRM/);
    },
  );

  test(
    "User can login with valid Credentials",
    { tag: ["@smoke", "@regression"] },
    async ({ page, loginPage }) => {
      await loginPage.login(ENV.username, ENV.password);
      await expect(page).toHaveURL(/dashboard/);
    },
  );

  test(
    "User cannot login with invalid Credentials",
    { tag: ["@regression", "@negative"] },
    async ({ page, loginPage }) => {
      await loginPage.login(
        AUTH_DATA.invalidUsername,
        AUTH_DATA.invalidPassword,
      );
      await loginPage.expectErrorMessage(/Invalid credentials/);
    },
  );

  test(
    "Required validation is displayed when credentials are empty",
    { tag: ["@regression", "@negative"] },
    async ({ loginPage }) => {
      await loginPage.clickLogin();
      await expect(loginPage.requiredFieldMessage).toHaveCount(2);
    },
  );
});
