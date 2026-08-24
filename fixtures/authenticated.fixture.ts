import { test as base, expect } from "./base.fixture";
import { ENV } from "../utils/env";
import { Page } from "@playwright/test";

type AuthenticatedFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthenticatedFixtures>({
  authenticatedPage: async ({ loginPage, page }, use) => {
    await loginPage.goto();
    await loginPage.login(ENV.username, ENV.password);
    await use(page);
  },
});

export { expect };
