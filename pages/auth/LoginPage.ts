import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorAlert: Locator;
  readonly invalidCredentialsMessage: Locator;
  readonly requiredFieldMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorAlert = page.getByRole("alert");
    this.invalidCredentialsMessage = page.getByText("Invalid credentials");
    this.requiredFieldMessage = page.getByText("Required");
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAndWaitForDashboard(username: string, password: string) {
    let attempt = 0;
    await expect(async () => {
      attempt++;
      await this.goto();
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
      await this.page.waitForURL(/dashboard/);
    }).toPass({ timeout: 10000, intervals: [1000, 2000, 3000] });
    if (attempt > 1) {
      console.log(`Login Success on attempt ${attempt}`);
    }
  }

  async expectErrorMessage(message: string | RegExp) {
    await expect(this.errorAlert).toBeVisible();
    // console.log("Error Message: ", await this.errorAlert.allTextContents());
    await expect(this.errorAlert).toContainText(message);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
