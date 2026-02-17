# Go-Live Runbook: Meerut Tennis Bats

This document outlines the procedure for promoting the approved draft build (v3) to production **without any functional code changes**.

## ⚠️ Critical Reminder

**NO FUNCTIONAL CODE CHANGES** should be made as part of the go-live promotion process. This runbook is for deploying the already-approved draft build to production.

---

## Pre-Flight Checks

Before initiating the go-live process, complete the following checklist:

### Code & Build Status
- [ ] **No Pending Code Changes**: Confirm no functional code modifications are in progress or staged
- [ ] **Draft Build Approved**: Draft version 3 has been reviewed and approved for production promotion
- [ ] **Gating Check**: Verify this deployment introduces **zero functional code changes** from approved draft v3

### Functional Testing (Draft Environment)

Complete all tests below in the **draft environment** before proceeding to production deployment:

- [ ] **Homepage Load**: Homepage loads without errors, all sections visible
- [ ] **Internet Identity Login**: Login flow completes successfully
  - [ ] Login button triggers Internet Identity modal
  - [ ] Authentication completes and redirects back to site
  - [ ] Button changes to "Logout" after successful login
- [ ] **Internet Identity Logout**: Logout flow works correctly
  - [ ] Logout button clears authentication
  - [ ] Button changes back to "Login"
  - [ ] Query cache is cleared on logout
- [ ] **Profile Setup**: First-time user profile setup dialog works (for new users)
  - [ ] Dialog appears automatically for users without a profile
  - [ ] Form accepts Name, Email, and Phone
  - [ ] Profile saves successfully
  - [ ] Dialog closes after successful save
- [ ] **Order Submission**: Order form opens, accepts input, and submits successfully
  - [ ] "Order Now" button opens order dialog
  - [ ] All form fields are present and functional
  - [ ] Required fields are validated
  - [ ] Order submits successfully
  - [ ] Success confirmation appears
- [ ] **All Sections Render**: Header, Hero, Products, Speciality, Contact, and Footer all display correctly

### Assets & Resources

Verify all assets load correctly in the draft environment:

- [ ] **Logo Image**: `/assets/generated/meerut-bats-logo.dim_512x512.png` loads correctly
- [ ] **Hero Background**: `/assets/generated/meerut-hero.dim_1600x900.png` loads correctly
- [ ] **No Broken Images**: All images display without broken image icons
- [ ] **Static Assets**: All assets from `/assets/` directory are accessible

### Business Information Verification

**Reference file**: `frontend/src/config/business.ts`

Verify each field below matches the values in the config file:

- [ ] **Business Name**: Confirm value is "Meerut Tennis Bats"
  - Config value: `BUSINESS_INFO.name`
- [ ] **Phone Number**: Verify contact phone number is accurate and formatted correctly
  - Config value: `BUSINESS_INFO.phone` (raw format)
  - Config value: `BUSINESS_INFO.phoneDisplay` (display format)
  - Actual value: `_______________________________________________`
- [ ] **Instagram Handle**: Verify Instagram handle is correct
  - Config value: `BUSINESS_INFO.instagram.handle`
  - Actual value: `_______________________________________________`
- [ ] **Instagram URL**: Verify Instagram URL is correct and accessible
  - Config value: `BUSINESS_INFO.instagram.url`
  - Actual value: `_______________________________________________`
- [ ] **City**: Confirm value is "Meerut"
  - Config value: `BUSINESS_INFO.city`
- [ ] **Tagline**: Verify tagline is approved
  - Config value: `BUSINESS_INFO.tagline`
  - Actual value: "Premium Cricket Tennis Bats from the Sports Capital of India"
- [ ] **Speciality**: Verify speciality description is accurate
  - Config value: `BUSINESS_INFO.speciality`
  - Actual value: "Custom Bat Grip Customization"

**Reviewer Sign-Off**: I have verified all business information fields against `frontend/src/config/business.ts` and confirm they are accurate.

**Reviewer Name**: `_______________________________________________`

**Date**: `_______________________________________________`

---

## Deployment Steps

### 1. Prepare for Deployment

Ensure you are in the project root directory and have the necessary permissions to deploy to production.

