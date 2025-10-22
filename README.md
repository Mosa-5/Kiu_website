# KIU Website

A modern, responsive, and multilingual university website built with **React**, **TypeScript**, and **Vite**.
Developed as a university project to represent **Kutaisi International University (KIU)** with dynamic content, interactive pages, and a polished user experience.

---

## Features

### General

- **Responsive design** — optimized for both 1920px and 372px displays.
- **SEO optimized** for better search engine visibility.
- **Lazy loading** for improved performance.
- **Optimized images** in `.webp` format.

### Pages

- **Home** — overview of KIU with featured sections.
- **About KIU** — detailed information about the university.
- **Programs** — list of all study programs.
  - **Individual Program Pages** for _Computer Science_ and _Mathematics_, featuring a sidebar for quick navigation to specific sections.
- **Projects** — showcases of university and student projects.
  - **Project Inner Pages** for detailed project views.
- **Admission** — admission requirements and process.
- **News** — announcements and updates, with **individual news pages** for full article content.
- **Vacancies** — job listings with an **active form** that sends emails to both the sender and the university email address.

### Functionality

- **Complete multilingual support** with `i18next` and locale files.
- **Login workflow** — stores user data in `localStorage` (temporary frontend-only implementation).
  - Once signed in, a **dropdown** appears with options to **log out** or **navigate to KIU LMS**.
- **Sidebar pop-out navigation** on program pages for better user experience.

---

## Tech Stack

| Category      | Technology                                    |
| ------------- | --------------------------------------------- |
| Framework     | React 19 + Vite                               |
| Language      | TypeScript                                    |
| Styling       | Tailwind CSS + CVA (Class Variance Authority) |
| Components    | shadcn/ui                                     |
| Forms         | React Hook Form + Zod                         |
| Translations  | i18next + react-i18next                       |
| Routing       | React Router DOM                              |
| Animations    | tw-animate-css                                |
| Email Service | EmailJS                                       |
| Icons         | Lucide React                                  |

---

## Technical Highlights

- **CVA (Class Variance Authority)** used to extract and manage Tailwind styles in separate TypeScript files for cleaner and reusable components.
- **i18next + locale files** for translation management and automatic language detection.
- **Shadcn UI** for accessible and themeable component design.
- **EmailJS integration** for client-side form submission without a backend.
- **LocalStorage** used to simulate authentication persistence.

---

## Live Demo

You can view the deployed project here (vercel is down right now, this is an older version): https://kiu-website.vercel.app/

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/kiu_website.git
cd kiu_website
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the build

```bash
npm run preview
```

---

## Notes

- The project currently does **not include a backend** — all authentication and data storage are handled locally for demonstration purposes.
- Vacancies form uses **EmailJS** to send emails directly from the client.
- Future improvements could include backend integration (e.g., Supabase, Firebase, or Node.js server).

---

## Test Automation Suite Summary

This repository includes a comprehensive automated testing framework for the KIU Website.
**Testing source code repository:** [https://github.com/lenossm/kiu-website-testing]

---

### Included Components

- 11 Cypress end-to-end (E2E) test files covering all major website sections
- 3 Jest unit test suites for core utility functions
- Custom reusable utilities and validation helpers
- Full TypeScript support for all test files
- Pre-configured Cypress and Jest environments ready for execution

---

### Quick Start

```bash
npm install
npx cypress open          # Launch Cypress Test Runner (interactive)
npx cypress run           # Execute all E2E tests headlessly
npx jest                  # Run all Jest unit tests
npx jest --coverage       # Generate a test coverage report
```

---

### Test Coverage Overview

- Comprehensive testing across Homepage, Navigation, Hero Slider, News, Programs, Video Gallery, Campus, About, Accessibility, Performance, and Responsive Design
- Unit testing for key utility modules, including date formatting, input validation, and helper functions
- Over 100 individual test cases ensuring consistent functionality and stability

---

### Key Features

- Responsive design verification across multiple viewports
- Accessibility compliance based on WCAG guidelines
- Performance benchmarking and DOM load monitoring
- Custom Cypress commands (`cy.isInViewport()`, `cy.waitForImages()`)
- Modular and reusable testing utilities

---

### About KIU

**Kutaisi International University (KIU)** is Georgia’s international center for higher education, science, and technology.
For more information, visit [https://kiu-website.vercel.app]
