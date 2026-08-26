import { Page, Locator } from "@playwright/test";

export class PIMPage {
  readonly page: Page;

  readonly addEmployeeButton: Locator;
  readonly employeeListTab: Locator;
  readonly employeeNameInput: Locator;
  readonly supervisorNameInput: Locator;
  readonly searchButton: Locator;
  readonly deleteConfirmationDialog: Locator;
  readonly confirmDeleteButton: Locator;
  readonly cancelDeleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addEmployeeButton = page.getByRole("button", { name: "Add" });
    this.employeeListTab = page.getByRole("link", { name: "Employee List" });
    this.employeeNameInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Name" })
      .getByPlaceholder("Type for hints...");
    this.supervisorNameInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Supervisor Name" })
      .getByPlaceholder("Type for hints...");
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.deleteConfirmationDialog = page
      .locator(".orangehrm-dialog-popup")
      .filter({ hasText: "Are you Sure?" })
      .filter({ has: page.getByRole("button", { name: "Yes, Delete" }) });
    this.confirmDeleteButton = this.deleteConfirmationDialog.getByRole(
      "button",
      {
        name: "Yes, Delete",
      },
    );
    this.cancelDeleteButton = this.deleteConfirmationDialog.getByRole(
      "button",
      {
        name: "No, Cancel",
      },
    );
  }

  async goto() {
    await this.page.goto("/web/index.php/pim/viewEmployeeList");
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async searchEmployee(employeeName: string) {
    await this.employeeNameInput.fill(employeeName);
    await this.searchButton.click();
  }

  getEmployeeRow(firstName: string, lastName: string): Locator {
    return this.page
      .getByRole("row")
      .filter({ hasText: firstName })
      .filter({ hasText: lastName });
  }

  async clickEditEmployee(firstName: string, lastName: string) {
    await this.getEmployeeRow(firstName, lastName)
      .locator(".oxd-table-cell-actions")
      .getByRole("button")
      .first()
      .click();
  }

  async clickDeleteEmployee(firstName: string, lastName: string) {
    await this.getEmployeeRow(firstName, lastName)
      .locator(".oxd-table-cell-actions")
      .getByRole("button")
      .nth(1)
      .click();
  }
}
