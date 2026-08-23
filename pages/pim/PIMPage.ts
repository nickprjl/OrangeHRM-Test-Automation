import { Page, Locator } from "@playwright/test";

export class PIMPage {
  readonly page: Page;

  readonly addEmployeeButton: Locator;
  readonly employeeListTab: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addEmployeeButton = page.getByRole("button", { name: "Add" });
    this.employeeListTab = page.getByRole("link", { name: "Employee List" });
  }

  async goto() {
    await this.page.goto("/web/index.php/pim/viewEmployeeList");
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }
}
