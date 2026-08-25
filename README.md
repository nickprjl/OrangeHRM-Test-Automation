# OrangeHRM Test Automation

Automated end-to-end testing framework for the OrangeHRM application, built using **Playwright** and **TypeScript**.

The project follows a structured **Page Object Model (POM)** approach to improve test maintainability, readability, and scalability. Automated tests are integrated with **GitHub Actions** to support continuous test execution and reporting.

## 🚀 Tech Stack

* **Playwright** – End-to-end test automation
* **TypeScript** – Test implementation
* **Node.js** – Runtime environment
* **GitHub Actions** – Continuous Integration
* **Playwright HTML Reporter** – Test reporting
* **Trace Viewer** – Test failure investigation

---

## 📁 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI workflow
│
├── pages/                        # Page Object Models
│   ├── LoginPage.ts
│   ├── OtpPage.ts
│   ├── Sidebar.ts
│   └── AnalyticsPage.ts
│
├── tests/                        # Test specifications
│   ├── auth/
│   └── ...
│
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies and scripts
└── README.md
```

## 🧪 Test Automation Approach

This project follows the **Page Object Model (POM)** design pattern.

Each application page or major component is represented by a dedicated page object containing:

* Element locators
* Page-specific actions
* Reusable validation methods

This helps keep test files focused on the actual test scenarios while separating UI interaction logic into reusable page classes.

### Example Flow

```text
Test Spec
   ↓
Page Objects
   ↓
Locators & Actions
   ↓
OrangeHRM Application
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm

### Clone the Repository

```bash
git clone https://github.com/nickprjl/OrangeHRM-Test-Automation.git
cd OrangeHRM-Test-Automation
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### Run Smoke Tests

```bash
npm run test:smoke
```

---

## 📊 Test Reports

After test execution, Playwright generates an HTML report.

To open the latest report:

```bash
npm run test:report
```

Or:

```bash
npx playwright show-report
```

The report provides information about:

* Test execution status
* Passed and failed tests
* Test duration
* Error details
* Screenshots and traces when available

---

## 🔍 Debugging Failed Tests

Playwright traces can be used to investigate failed test executions.

A trace may include:

* Test actions
* Page navigation
* Network activity
* Screenshots
* DOM snapshots
* Console output

To open a trace:

```bash
npx playwright show-trace <trace-file>
```

Traces generated during **local execution** are stored or accessed from the local test results, while traces generated in **GitHub Actions** can be downloaded from the workflow artifacts when configured.

---

## 🔄 Continuous Integration

This project uses **GitHub Actions** to automatically execute the Playwright test suite as part of a Continuous Integration workflow.

The workflow can:

1. Check out the repository.
2. Set up the required Node.js environment.
3. Install project dependencies.
4. Install Playwright browsers and required dependencies.
5. Execute the automated test suite.
6. Generate and upload test reports and artifacts.

This helps ensure that automated tests can run consistently in a clean environment without requiring manual execution.

### GitHub Actions Workflow

The workflow configuration is located at:

```text
.github/workflows/playwright.yml
```

You can monitor test execution from the repository's **Actions** tab.

---

## 📋 Current Test Coverage

The automation suite currently focuses on validating key application workflows, including:

### Authentication

* User login
* Email and phone validation
* Invalid login scenarios
* OTP-related workflows

### Navigation

* Sidebar navigation
* Page redirection
* Page load validation

Additional test coverage can be added as the framework evolves.

---

## 🛠️ Test Scripts

| Command               | Description                                    |
| --------------------- | ---------------------------------------------- |
| `npm test`            | Runs the complete Playwright test suite        |
| `npm run test:headed` | Runs tests with a visible browser              |
| `npm run test:debug`  | Runs tests in Playwright debug mode            |
| `npm run test:smoke`  | Runs tests tagged or configured as smoke tests |
| `npm run test:report` | Opens the latest Playwright HTML report        |

---

## 🎯 Project Goals

The goal of this project is to build and maintain a scalable automation framework while practicing and demonstrating:

* End-to-end test automation
* Page Object Model design
* TypeScript with Playwright
* Test case organization
* Reusable test utilities
* Automated regression testing
* Continuous Integration with GitHub Actions
* Test reporting and debugging using Playwright traces

---

## 🔮 Future Improvements

Potential improvements for the project include:

* [ ] Expand test coverage across additional OrangeHRM modules
* [ ] Add API testing
* [ ] Improve test data management
* [ ] Introduce environment-based configuration
* [ ] Add test tagging and execution groups
* [ ] Implement reusable fixtures
* [ ] Add visual regression testing
* [ ] Improve CI reporting and test artifacts
* [ ] Add test execution notifications

---

## 👤 Author

**Nikhil Parajuli**

QA & Software Testing | Test Automation

GitHub: https://github.com/nickprjl

---

## 📄 Disclaimer

This project is created for **learning, practice, and portfolio purposes**. OrangeHRM is used as the application under test, and this repository is not affiliated with or endorsed by OrangeHRM.
