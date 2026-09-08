# Veloo Technology — Website

## Structure

```
/
├── index.html          Home page
├── services.html        Services page
├── about.html            About Us page
├── contact.html         Contact page (form is front-end only, no backend yet)
├── faq.html                FAQ page
├── css/
│   └── style.css        Shared stylesheet for all pages
└── js/
    └── main.js          Shared script for all pages (clocks, forms, accordion, nav toggle, etc.)
```

## Notes

- Colors, fonts and spacing are controlled from `css/style.css` — edit once, updates everywhere.
- Contact info (phone, email, WhatsApp) appears in the nav, footer, and floating buttons on every page.
  To update it, search each HTML file for the phone number `0756928667` and email
  `velootechnology@gmail.com` and replace.
- The contact form on `contact.html` currently only shows a success message — it does not send
  anywhere yet. To receive real submissions, connect it to an email service (e.g. Formspree) or a
  backend endpoint.
- Placeholder content to replace before launch: client names in the homepage marquee, blog/news
  posts, team member names and bios on the About page, and the founding-year timeline.
