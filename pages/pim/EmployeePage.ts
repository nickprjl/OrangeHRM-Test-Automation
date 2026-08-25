import { Page, Locator } from "@playwright/test";

export class EmployeePage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly addEmployeeSaveButton: Locator;
  readonly employeeName: Locator;
  readonly personalDetailsSection: Locator;
  readonly personalDetailsSaveButton: Locator;

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
    this.addEmployeeSaveButton = page.getByRole("button", {
      name: "Save",
    });
    this.employeeName = page.locator(".orangehrm-edit-employee-name");

    this.personalDetailsSection = page
      .locator(".orangehrm-horizontal-padding.orangehrm-vertical-padding")
      .filter({
        has: page.getByRole("heading", { name: "Personal Details" }),
      });
    this.personalDetailsSaveButton = this.personalDetailsSection.getByRole(
      "button",
      { name: "Save" },
    );
  }

  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);

    await this.addEmployeeSaveButton.click();
  }

  async updateMiddleName(middleName: string) {
    await this.middleNameInput.fill(middleName);
    await this.personalDetailsSaveButton.click();
  }
}
