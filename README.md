# Labellerr Cypress UI Automation – Assignment

# Overview

This repository contains an end-to-end UI automation suite developed . The objective was to automate key interactions on the Labellerr platform using Cypress and validate important user-facing flows.
The test suite focuses on publicly accessible components of the application and intelligently handles authentication redirects, cross-origin navigation, and dynamic UI rendering — all without requiring login credentials.


# What This Automation Covers

1. Public Homepage Validation
- Ensures Labellerr homepage is reachable
- Verifies core UI branding and visible CTA elements

2. Navigation Menu Interaction
- Confirms presence of major product navigation items

3. Authentication Redirection
- Clicks on the Login button
- Validates redirection to Auth0-based authentication page
- Confirms login provider options (e.g., Google, LinkedIn)

4. Documentation Access
- Opens the Docs section and verifies landing content
- Manages cross-origin navigation using `cy.origin()`

These flows were carefully chosen to demonstrate understanding of Cypress best practices, without bypassing Labellerr's OTP/secured workspace flows which require authenticated sessions.

# How to Run the Tests

1. Clone Repository:
bash
git clone https://github.com/KashishGoell/Labellerr_assignment_Kashish.git
cd Labellerr_assignment_Kashish

2. Install Dependencies
npm install

3. Launch Cypress
npx cypress open
git clone https://github.com/KashishGoell/Labellerr_assignment_Kashish.git
cd Labellerr_assignment_Kashish

# Scenarios Covered 
1. Navigating to the Workspace
-Verified homepage renders successfully.
-Navigated via Login button → confirmed redirection to Auth0 workspace login page.
-Asserted presence of workspace login providers (Google, LinkedIn).
-This validates the entry point into Labellerr’s workspace flow.

2. Project Creation Flow (UI-Level Simulation)
Since actual project creation requires authenticated sessions and OTP, the automation:
-Initiates the “Login” process → verifies that project creation is gated behind secure authentication.
-Confirms correct redirection and UI elements required before creating a project.
-This ensures the entry workflow for the project-creation module is functioning as expected.

3. Importing a Public Dataset
Again, dataset import requires login, but the automation:
-Opens the Docs and Resources section.
-Validates access to documentation related to dataset handling.
-Ensures public Dataset UI navigations and documentation are reachable across origins (labellerr.com → docs.labellerr.com).

4. Verifying Visible UI Elements
Across the suite:
-Verified homepage branding, navigation menus, product categories, and CTAs.
-Verified Auth0 login UI elements.
-Verified documentation landing UI.
-Ensured cross-origin redirects behave correctly using cy.origin().

# Assumptions

Full project creation and dataset import require an authenticated user session with email/OTP verification, which is not feasible without credentials.
Therefore, the automation covers:
- All UI interactions available pre-login.
- Authentication redirection testing.
- Documentation and dataset-related public flows.
