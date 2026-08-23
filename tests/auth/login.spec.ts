import { test, expect } from "../../fixtures/base.fixture";
import { ENV } from "../../utils/env";
import { LoginPage } from "../../pages/auth/LoginPage";

test.describe("Login", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test("OrangeHRM login page loads successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);
  });

  test("User can login with valid Credentials", async ({ page, loginPage }) => {
    await loginPage.login(ENV.username, ENV.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test("User cannot login with invalid Credentials", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login("Not Admin", "Wrong Password");
    await loginPage.expectErrorMessage(/Invalid credentials/);
  });

  test("Required validation is displayed when credentials are empty", async ({
    loginPage,
  }) => {
    await loginPage.clickLogin();
    await expect(loginPage.requiredFieldMessage).toHaveCount(2);
  });
});
