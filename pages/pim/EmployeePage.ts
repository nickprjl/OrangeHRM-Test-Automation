import { Page, Locator } from "@playwright/test";

export class EmployeePage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly saveButton: Locator;
  readonly employeeName: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByPlaceholder("First Name");
    this.middleNameInput = page.getByPlaceholder("Middle Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.employeeIdInput = page
      .locator("label")
      .filter({ hasText: "Employee Id" })
      .locator("..")
      .getByRole("textbox");
    this.saveButton = page.getByRole("button", {
      name: "Save",
    });
    this.employeeName = page.locator(".orangehrm-edit-employee-name");
  }

  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);

    await this.saveButton.click();
  }
}
