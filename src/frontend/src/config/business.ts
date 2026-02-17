/**
 * Single source of truth for business contact information
 * 
 * VERIFICATION REQUIRED FOR GO-LIVE:
 * Before promoting to production, verify each field below is accurate:
 * - name: Business name displayed throughout the site
 * - city: City/location displayed in contact section
 * - phone: Contact phone number (raw format for tel: links)
 * - phoneDisplay: Contact phone number (formatted for display)
 * - instagram.handle: Instagram handle (with @ symbol)
 * - instagram.url: Full Instagram profile URL
 * - speciality: Main service/product speciality
 * - tagline: Hero section tagline
 * 
 * Last verified: [DATE] by [NAME]
 * Verification checklist: See frontend/GO_LIVE.md "Business Information Verification" section
 */

export const BUSINESS_INFO = {
  name: "Meerut Tennis Bats",
  city: "Meerut",
  phone: "819303306",
  phoneDisplay: "819303306",
  instagram: {
    handle: "@meerutbats",
    url: "https://www.instagram.com/meerutbats" // Update with your actual Instagram handle
  },
  speciality: "Custom Bat Grip Customization",
  tagline: "Premium Cricket Tennis Bats from the Sports Capital of India"
};
