import { test, expect } from "../../fixtures/authenticated.fixture";
import { generateEmployeeData } from "../../utils/data-generators";

test.describe("Employee Management", () => {
  test(
    "User can open Add Employee page",
    {
      tag: "@smoke",
    },
    //need to call authenticatedPage just to trigger the authenticated fixture.
    async ({ authenticatedPage, pimPage, employeePage }) => {
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
    async ({ authenticatedPage, pimPage, employeePage }) => {
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

      await expect(employeePage.employeeName).toContainText(employee.firstName);
      await expect(employeePage.employeeName).toContainText(employee.lastName);
    },
  );

  test(
    "User can search for an employee",
    { tag: "@regression" },
    async ({ authenticatedPage, pimPage, employeePage }) => {
      const employee = generateEmployeeData();
      await pimPage.goto();
      await pimPage.addEmployeeButton.click();
      await employeePage.addEmployee(
        employee.firstName,
        employee.middleName,
        employee.lastName,
      );
      await expect(employeePage.page).toHaveURL(/viewPersonalDetails/, {
        timeout: 6000,
      });
      await pimPage.goto();
      await pimPage.searchEmployee(
        `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
      );
      await expect(
        pimPage.getEmployeeRow(employee.firstName, employee.lastName),
      ).toBeVisible();
    },
  );
});
