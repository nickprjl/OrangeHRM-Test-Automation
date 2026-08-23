import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/auth/LoginPage";
import { PIMPage } from "../pages/pim/PIMPage";
import { EmployeePage } from "../pages/pim/EmployeePage";

type Pages = {
  loginPage: LoginPage;
  pimPage: PIMPage;
  employeePage: EmployeePage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  pimPage: async ({ page }, use) => {
    const pimPage = new PIMPage(page);

    await use(pimPage);
  },

  employeePage: async ({ page }, use) => {
    const employeePage = new EmployeePage(page);

    await use(employeePage);
  },
});

export { expect };
