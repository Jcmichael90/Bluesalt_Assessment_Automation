# Automated Testing Suite — UI Test Automation Playground

This project automatically checks that a website called [UI Test Automation Playground](http://www.uitestingplayground.com) works correctly. Think of it as a robot that visits the website, clicks buttons, fills in forms, and confirms everything behaves as expected — so you don't have to do it manually every time.

---

## 🤔 What Does This Project Do?

It runs **29 automated checks** across 6 different sections of the website. Each check simulates what a real user would do — like logging in, uploading a file, or clicking a button — and then verifies the result is correct.

---

## ✅ What Gets Tested?

| Section | What It Checks |
|---------|----------------|
| **Login (Sample App)** | Logging in with correct and incorrect credentials, logging out |
| **Client Side Delay** | Buttons and content that take a moment to appear on screen |
| **Dynamic Table** | A table that changes its layout — checks data is still read correctly |
| **Shadow DOM** | A hidden part of the page — checks content inside it is accessible |
| **Alerts** | Pop-up messages (alerts, confirmations, prompts) behave correctly |
| **File Upload** | Uploading a file through the website works as expected |

---

## 💻 What Do I Need to Run This?

Before running the tests, make sure you have the following installed on your computer:

1. **Node.js** (version 16 or newer) — [Download here](https://nodejs.org)
2. **Google Chrome** browser — [Download here](https://www.google.com/chrome)

> Not sure if Node.js is installed? Open a terminal and type `node --version`. If you see a version number, you're good to go.

---

## 🚀 How to Set Up

Open a terminal in this project folder and run:

```bash
npm install
```

This downloads all the tools the project needs. You only need to do this once.

---

## ▶️ How to Run the Tests

### Run all tests at once
```bash
npm test
```

### Run only the plain test scripts
```bash
npm run test:e2e
```

### Run only the human-readable scenario tests
```bash
npm run test:bdd
```

### Open the visual test runner (great for watching tests run live)
```bash
npm run cypress:open
```

---

## 🤖 Automatic Testing (GitHub Actions)

This project is set up to run tests **automatically** whenever code is pushed to GitHub. You don't need to do anything — it runs on its own in the cloud and reports whether all tests passed or failed.

- Tests run on every code change to the `main` or `master` branch
- You can also trigger a manual run from the GitHub Actions tab
- Test reports and any failure screenshots are saved and available to download after each run

---

## 📂 How the Project Is Organised

Here's a plain-English breakdown of the key folders:

| Folder / File | What It Contains |
|---------------|-----------------|
| `cypress/e2e/` | The actual test scripts |
| `cypress/e2e/features/` | Tests written in plain English sentences (e.g. "Given I log in, When I click logout, Then I should be logged out") |
| `cypress/pages/` | Helper files that know how to interact with each page of the website |
| `cypress/fixtures/` | Sample files used during testing (e.g. a file used to test the upload feature) |
| `reports/` | Test results saved after each run |
| `cypress.config.js` | Settings for the test tool |
| `.github/workflows/` | Instructions for running tests automatically on GitHub |

---

## 📊 Test Results

After running the tests, a results report is saved in the `reports/` folder. Open `reports/html/results.html` in your browser to see a visual summary of what passed and what failed.

If any test fails, a screenshot of the failure is automatically saved in `cypress/screenshots/` to help identify what went wrong.

---

## 🌐 Website Being Tested

**URL**: [http://www.uitestingplayground.com](http://www.uitestingplayground.com)

This is a publicly available practice website designed specifically for testing tools and automation practice.

---

## ❓ Need Help?

If the tests aren't running or something looks wrong, here are a few things to check:

- Make sure you ran `npm install` before running tests
- Make sure Google Chrome is installed
- Make sure you have an internet connection (the website being tested is online)
- Check that your Node.js version is 16 or higher (`node --version`)