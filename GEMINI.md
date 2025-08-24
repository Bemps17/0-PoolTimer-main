# Gemini Deployment Plan

## 1. Project Overview

**Pool Timer Pro** is a modern, feature-rich shot clock web application designed for refereeing 8-ball pool matches. It is a Progressive Web App (PWA) built with vanilla JavaScript, HTML, and CSS, offering high-precision timing, full customizability (themes, timings, alerts), audio/visual cues via Tone.js, and offline capabilities through a Service Worker.

## 2. Deployment Goals

This deployment aims to enhance the application by:
1.  Adding a Netlify-powered contact form for user feedback.
2.  Updating all production URLs to the official domain: `https://pooltimer.netlify.app/`.
3.  Implementing a robust Content Security Policy (CSP) and other security headers via a `netlify.toml` configuration file.
4.  Improving the project's documentation (`README.md`).

## 3. Current Status

The project is a fully functional PWA, deployed and active on Netlify. The current task is to integrate the new features and configurations as outlined in the goals.

## 4. Deployment Steps

### 4.1. Pre-deployment

-   [x] **Add Contact Form Modal:**
    -   Integrate a new "Contact" button in the configuration panel.
    -   Create the HTML structure for the contact modal, including a Netlify-ready form (`<form name="contact" ...>`).
    -   Add CSS to style the new modal and form, ensuring it matches the existing theme.
    -   Update `app.js` to handle the display logic for the contact modal.

-   [x] **Update Production URLs:**
    -   Modify `index.html` to replace placeholder URLs with `https://pooltimer.netlify.app/` in `canonical` and `og:url` meta tags.
    -   Update `README.md` to include a direct link to the live application.

-   [x] **Create `netlify.toml`:**
    -   Create a new `netlify.toml` file at the root of the project.
    -   Configure the `[build]` settings for a static site.
    -   Define all security headers (`Content-Security-Policy`, `Permissions-Policy`, etc.) in the `[[headers]]` section. This centralizes security configuration and removes it from `index.html`.

-   [x] **Update `index.html`:**
    -   Remove the old `Content-Security-Policy` meta tag, as it is now handled by `netlify.toml`.

-   [x] **Update `README.md`:**
    -   Refresh the content to reflect new features (contact form) and provide clearer instructions for use.

### 4.2. Deployment

-   [ ] Commit all changes to the main branch.
-   [ ] Push the commit to the remote repository. Netlify will automatically trigger a new build and deployment from the main branch.

### 4.3. Post-deployment

-   [ ] **Verify Live Site:** Access `https://pooltimer.netlify.app/` and confirm that all changes are live.
-   [ ] **Test Contact Form:** Open the contact modal, submit a test message, and verify its reception in the Netlify "Form submissions" dashboard.
-   [ ] **Check Security Headers:** Use browser developer tools (Network tab) or an online tool to confirm that the new CSP and other security headers are being correctly applied.
-   [ ] **Review Console:** Check the browser's developer console for any new errors or CSP violations.

## 5. Rollback Plan

In case of a critical failure during or after deployment (e.g., site down, major functionality broken), the following steps will be taken:
1.  **Immediate Rollback:** Go to the Netlify project dashboard.
2.  Navigate to the "Deploys" section.
3.  Select the last known stable deployment and click "Publish deploy" to instantly roll back the live site to the previous version.
4.  Investigate the issue in a local or development environment before attempting a new deployment.

## 6. Monitoring and Maintenance

-   **Netlify Build Logs:** Monitor for any build failures on future commits.
-   **Form Submissions:** Regularly check the Netlify dashboard for user feedback received through the contact form.
-   **Uptime Monitoring:** (Optional) Set up an external uptime monitoring service to get alerts if the site becomes unavailable.
