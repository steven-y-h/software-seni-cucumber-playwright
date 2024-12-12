# Software Seni

## Description
This project is a test automation suite designed to validate login feature, select items feature, and full flow order feature using Playwright and Cucumber. The project follows the Page Object Model (POM) structure, making the test cases modular and easy to maintain.

## Approach
1. **Page Object Model (POM):**
   Each web page used in the tests has a corresponding page class, which encapsulates the page's elements and actions. This approach improves code reusability and readability, as well as simplifies the maintenance of test scripts.
2. **Cucumber BDD:**
   Cucumber is used for Behavior-Driven Development (BDD), allowing us to write test scenarios in a human-readable format. Each scenario represents a specific user flow, written in Gherkin syntax, making it easy to understand for both technical and non-technical stakeholders.

## Prerequisites
Before running the project, ensure you have the following installed:
1. **Node.js** (v14 or later)  
2. **npm** (comes with Node.js)
3. **Git**

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   
## How to Run Tests

### Run All Tests
To execute all tests:
```bash
npm run test
```

### Run Tests for a Specific Feature File
To execute a specific feature file, use the following command:
```bash
npx cucumber-js --tags "@tagName"
```
Replace `@tagName` with the tag of the feature/scenario you want to run.


## Generating Reports
Reports are automatically generated after the test run. To view the HTML report:
```bash
npx playwright show-report
```