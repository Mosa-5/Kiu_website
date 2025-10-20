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

You can view the deployed project here: https://kiu-website.vercel.app/

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
