# Production Smoke Check Checklist

Run these tests against the live production URL immediately after deployment to verify core functionality.

---

## Test Execution Information

**Production URL**: `_______________________________________________`

**Tester Name**: `_______________________________________________`

**Test Date/Time**: `_______________________________________________`

**Browser Used**: `_______________________________________________`

**Device/OS**: `_______________________________________________`

**Overall Test Result**: [ ] ✅ PASS  [ ] ❌ FAIL

---

## Environment Setup

- [ ] Production URL obtained from deployment output (recorded above)
- [ ] Browser console open (F12) to monitor for errors
- [ ] Test user account ready (or prepared to create new Internet Identity)
- [ ] Screenshot tool ready for capturing any failures
- [ ] Network tab open to monitor API calls and asset loading

---

## Test Cases

### 1. Homepage Load
**Objective**: Verify the site loads without runtime errors

**Status**: [ ] ✅ PASS  [ ] ❌ FAIL  [ ] ⏸️ BLOCKED

**Test Steps**:
- [ ] Navigate to production URL
- [ ] Page loads within 5 seconds
- [ ] No JavaScript errors in browser console
- [ ] All sections visible:
  - [ ] Header with logo and navigation
  - [ ] Hero section with background image
  - [ ] Products section with 4 feature cards
  - [ ] Speciality section with 3 service cards
  - [ ] Contact section with phone/location/Instagram
  - [ ] Footer with attribution link
- [ ] All images load correctly (no broken images):
  - [ ] Logo image in header
  - [ ] Hero background image
- [ ] Login button visible in header
- [ ] Floating action buttons visible (Order Now, View Speciality)

**Notes/Issues**: 
