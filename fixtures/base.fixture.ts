import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/auth/LoginPage";

type Pages = {
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
});

export { expect };
