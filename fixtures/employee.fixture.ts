import { test as base, expect } from "./authenticated.fixture";
import { EmployeeData, generateEmployeeData } from "../utils/data-generators";

type EmployeeFixtures = {
  createdEmployee: EmployeeData;
};

export const test = base.extend<EmployeeFixtures>({
  createdEmployee: async ({ pimPage, employeePage }, use) => {
    const employee = generateEmployeeData();
    await pimPage.goto();
    await pimPage.clickAddEmployee();
    await employeePage.addEmployee(
      employee.firstName,
      employee.middleName,
      employee.lastName,
    );
    await expect(employeePage.page).toHaveURL(/viewPersonalDetails/);
    await expect(employeePage.employeeName).toContainText(employee.lastName);

    await use(employee);
  },
});

export { expect };
