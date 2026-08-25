import { test, expect } from "../../fixtures/employee.fixture";
import { generateEmployeeData } from "../../utils/data-generators";

test.describe("Employee Management", () => {
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

      await expect(employeePage.page).toHaveURL(/viewPersonalDetails/);

      await expect(employeePage.employeeName).toContainText(employee.firstName);
      await expect(employeePage.employeeName).toContainText(employee.lastName);
    },
  );

  test(
    "User can search for an employee",
    { tag: "@regression" },
    async ({ pimPage, createdEmployee }) => {
      await pimPage.goto();
      await pimPage.searchEmployee(
        `${createdEmployee.firstName} ${createdEmployee.middleName} ${createdEmployee.lastName}`,
      );
      await expect(
        pimPage.getEmployeeRow(
          createdEmployee.firstName,
          createdEmployee.lastName,
        ),
      ).toBeVisible();
    },
  );

  test(
    "User can edit an employee",
    { tag: "@regression" },

    async ({ pimPage, employeePage, createdEmployee }) => {
      const updatedMiddleName = "Updated";
      await pimPage.goto();
      await pimPage.searchEmployee(
        `${createdEmployee.firstName} ${createdEmployee.middleName} ${createdEmployee.lastName}`,
      );
      await pimPage.clickEditEmployee(
        createdEmployee.firstName,
        createdEmployee.lastName,
      );

      await expect(employeePage.firstNameInput).toHaveValue(
        createdEmployee.firstName,
      );

      await expect(employeePage.lastNameInput).toHaveValue(
        createdEmployee.lastName,
      );
      await expect(employeePage.middleNameInput).toBeVisible();
      await employeePage.updateMiddleName(updatedMiddleName);
      await employeePage.page.reload();
      await expect(employeePage.middleNameInput).toHaveValue(updatedMiddleName);
    },
  );
});
