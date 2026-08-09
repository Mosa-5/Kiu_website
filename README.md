# KIU Website

A modern, responsive, and multilingual university website built with **React**, **TypeScript**, and **Vite**.
Developed as a university project to represent **Kutaisi International University (KIU)** with dynamic content, interactive pages, and a polished user experience.

---

## Features

### General

- **Responsive design** — optimized for 1920px and 375px (works well from 372–412px).
- **SEO optimized** for better search engine visibility.
- **Lazy loading** for improved performance.
- **Optimized images** in `.webp` format.
- **High performance metrics** — Lighthouse scores of 90-95+ across Performance, Accessibility, Best Practices, and SEO.

### Pages

- **Home** — overview of KIU with featured sections.
- **About KIU** — detailed information about the university.
- **Research** — information about researches done at KIU.
- **Programs** — list of all study programs.
  - **Individual Program Pages** for _Computer Science_ and _Mathematics_, featuring a sidebar for quick navigation to specific sections.
- **Projects** — showcases of university and student projects.
  - **Project Inner Pages** for detailed project views.
- **Admission** — admission requirements and process.
- **Students** — page dedicated to students and erasmus project.
- **News** — announcements and updates, with **individual news pages** for full article content.
- **Campus** — overview of university campus.
- **Vacancies** — job listings with an **active form** that sends emails to both the sender and the university email address.
- **404 Page** — custom not found page for better user experience.
  
### Functionality

- **Complete multilingual support** with `i18next` and locale files.
- **Login workflow** — stores user data in `localStorage` (temporary frontend-only implementation).
  - Once signed in, a **dropdown** appears with options to **log out** or **navigate to KIU LMS**.
- **Sidebar pop-out navigation** on program pages for better user experience.
- **ChatBot** that answers all questions regarding the university such as campus prices, supervisors and etc.

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
- **LocalStorage** used to simulate authentication persistence (should be replaced with proper auth).

---

## Live Demo
You can view the deployed project here: https://kiu-website.vercel.app/

---

## Design
The website design was created in Figma. You can view the design files here:
[View Figma Design](https://www.figma.com/design/bhYExjkqjBHDOdPFwPhdRn/KIU?node-id=0-1&p=f&t=5eDTpvY1cko9pobe-0)

---

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/Mosa-5/Kiu_website
cd kiu_website
```

### Install dependencies
```bash
npm install
```

### Environment Variables

To enable the chatbot and email functionality, you'll need to obtain environment variables. **Contact Sandro Saralidze for a one-time secret link** to get the required `.env` file.

### Chatbot Configuration

To run the chatbot locally (on vercel it runs normally without these steps):

1. **Uncomment the `server.js` file** - Remove the comment blocks in this file
2. **Update `chatbot.ts`** - Follow the inline comments in the file indicating which lines to uncomment/comment
3. Ensure you have the environment variables configured (see above)

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

## Testing

The project uses **Vitest** for component unit tests and **WebdriverIO** for a production-style browser smoke test.

### Run tests locally

```bash
npm test             # Run the Vitest unit test suite once
npm run test:watch   # Run unit tests in watch mode
npm run test:e2e     # Build the site, serve it locally, and run WebdriverIO
```

The unit tests cover reusable UI behavior and key chatbot interactions. The WebdriverIO smoke test verifies that the English home route loads and that a visitor can open the chatbot in a headless Chrome browser.

### Continuous integration

GitHub Actions runs the unit tests and browser smoke test on pushes to `main`, pull requests targeting `main`, and every Monday at 07:00 UTC. The workflow can also be started manually from the Actions tab.

---

### About KIU

**Kutaisi International University (KIU)** is Georgia’s international center for higher education, science, and technology.
For more information, visit [https://kiu-website.vercel.app]
