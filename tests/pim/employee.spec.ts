import { test, expect } from "../../fixtures/base.fixture";
import { ENV } from "../../utils/env";
import { generateEmployeeData } from "../../utils/data-generators";

test.describe("Employee Management", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(ENV.username, ENV.password);
  });

  test(
    "User can open Add Employee page",
    {
      tag: "@smoke",
    },
    async ({ pimPage, employeePage }) => {
      await pimPage.goto();

      await pimPage.clickAddEmployee();

      await expect(employeePage.firstNameInput).toBeVisible();
    },
  );

  test(
    "User can create a new employee",
    {
      tag: ["@smoke", "@regression"],
    },
    async ({ pimPage, employeePage }) => {
      const employee = generateEmployeeData();

      await pimPage.goto();

      await pimPage.clickAddEmployee();

      await employeePage.addEmployee(
        employee.firstName,
        employee.middleName,
        employee.lastName,
      );

      await expect(employeePage.page).toHaveURL(/viewPersonalDetails/, {
        timeout: 6000,
      });
    },
  );
});
