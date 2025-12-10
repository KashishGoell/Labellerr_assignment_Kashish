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
