# Labellerr Cypress UI Automation – Assignment

## Overview

This repository contains a Cypress-based UI automation suite developed as part of the Labellerr internship assignment.

The objective of this assignment was to validate key user-facing UI interactions on the Labellerr platform using Cypress, while following realistic and production-safe automation practices.

The test suite focuses on **publicly accessible UI flows and authentication entry points**, without attempting to bypass secured login or workspace-level functionality.

---

## What This Automation Covers

### 1. Homepage Validation
- Verifies that the Labellerr homepage loads successfully
- Confirms visible branding and core UI text

### 2. Top Navigation UI Validation
- Confirms the presence of major navigation elements:
  - Product
  - Technology
  - Solutions
  - Pricing
  - Login / Sign in

### 3. Authentication Entry Point Verification
- Validates that the Login / Sign in option is available in the UI
- Confirms that authentication is gated behind a secure login flow
- Ensures the entry point for workspace access is visible and functional

### 4. Documentation & Learning Access
- Verifies that documentation / learning resources are discoverable from the homepage
- Confirms public access to documentation-related UI elements

---

## How to Run the Tests

### Prerequisites
- Node.js (v16 or above)
- npm

### Steps to Execute

```bash
-git clone https://github.com/KashishGoell/Labellerr_assignment_Kashish.git
-cd Labellerr_assignment_Kashish
-After Cypress launches:Select E2E Testing,Choose Chrome as the browser, Click Start E2E Testing in Chrome, Select and run labellerr.cy.js
-npm install
-npx cypress open

--- 

## Assumptions & Constraints

-Labellerr uses Auth0-based OAuth authentication.

-Workspace-level actions such as project creation and dataset import require authenticated sessions.

-No test credentials or sandbox environment were provided.

## How this was handled

-Authentication boundaries were respected

-Public UI interactions and entry points were validated

-Secure login mechanisms were not bypassed

-No hardcoded credentials or flaky login workarounds were used

-This approach aligns with Cypress best practices and real-world QA automation standards for production SaaS applications.

## Notes on Automation Strategy

-Tests are designed to be stable and non-brittle

-Third-party scripts and cross-origin redirects are handled safely

-Assertions focus on UI readiness rather than forcing protected workflo



