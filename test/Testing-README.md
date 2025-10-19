# KIU Website Test Automation Suite

Comprehensive test automation suite for the Kutaisi International University website.

## 📦 What's Included

- **11 Cypress E2E Test Files**: Complete coverage of all website sections
- **3 Jest Unit Test Suites**: Utility function validation with full coverage
- **Custom Test Utilities**: Reusable helpers and validators
- **Full TypeScript Support**: Type-safe test code
- **Configuration Files**: Ready-to-use Cypress and Jest configs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

### Running Tests

#### Cypress E2E Tests

```bash
# Open Cypress Test Runner (interactive)
npx cypress open

# Run all tests headlessly
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/01-homepage.cy.ts"
```

#### Jest Unit Tests

```bash
# Run all Jest tests
npx jest

# Run with coverage report
npx jest --coverage

# Watch mode
npx jest --watch

# Run specific test file
npx jest tests/unit/validators.test.ts
```

## 📁 Project Structure

```
kiu-test-automation/
├── cypress/
│   ├── e2e/
│   │   ├── 01-homepage.cy.ts
│   │   ├── 02-navigation.cy.ts
│   │   ├── 03-hero-slider.cy.ts
│   │   ├── 04-news-section.cy.ts
│   │   ├── 05-programs-section.cy.ts
│   │   ├── 06-video-gallery.cy.ts
│   │   ├── 07-campus-section.cy.ts
│   │   ├── 08-about-section.cy.ts
│   │   ├── 09-accessibility.cy.ts
│   │   ├── 10-performance.cy.ts
│   │   └── 11-responsive-design.cy.ts
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── tests/
│   ├── unit/
│   │   ├── dateFormatter.test.ts
│   │   ├── validators.test.ts
│   │   └── testHelpers.test.ts
│   ├── utils/
│   │   ├── dateFormatter.ts
│   │   ├── validators.ts
│   │   └── testHelpers.ts
│   └── setup.ts
├── cypress.config.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```

## 🧪 Test Coverage

### Cypress E2E Tests (11 Files)

1. **Homepage Tests** - Page structure, logo, main content sections
2. **Navigation Tests** - Links, language selector, routing
3. **Hero Slider Tests** - Image loading, carousel controls
4. **News Section Tests** - Cards, dates, navigation to detail pages
5. **Programs Section Tests** - All program types display
6. **Video Gallery Tests** - YouTube thumbnails, carousel
7. **Campus Section Tests** - Content, facilities, images
8. **About Section Tests** - Taglines, descriptions, links
9. **Accessibility Tests** - WCAG compliance, alt text, headings
10. **Performance Tests** - Load times, DOM depth, resource loading
11. **Responsive Design Tests** - 6 viewport sizes, mobile/tablet/desktop

### Jest Unit Tests (3 Suites)

1. **Date Formatter Tests** - formatDate(), isValidDate(), isFutureDate()
2. **Validator Tests** - URL, email, length, image URL validation
3. **Test Helper Tests** - ID generation, retry logic, uniqueness checks

## 🛠 Custom Cypress Commands

- `cy.isInViewport()` - Check if element is visible in viewport
- `cy.waitForImages()` - Wait for all images to load

## 📊 Test Statistics

- **Total Test Files**: 14 (11 Cypress + 3 Jest)
- **Test Suites**: 14+
- **Individual Tests**: 100+
- **Code Coverage**: Comprehensive utility function coverage

## 🎯 Key Features

✅ Complete KIU website validation
✅ Responsive design testing across multiple viewports
✅ Accessibility compliance verification
✅ Performance benchmarking
✅ TypeScript support throughout
✅ Reusable test utilities
✅ Custom Cypress commands
✅ Comprehensive error handling
✅ Detailed test documentation

## 📝 Test Target

All tests are configured to run against: **https://kiu-website.vercel.app**

To test a different environment, update the `baseUrl` in `cypress.config.ts`:

```typescript
export default defineConfig({
  e2e: {
    baseUrl: 'https://your-url-here.com',
    // ...
  },
});
```

## 🔧 Configuration

### Cypress Configuration (`cypress.config.ts`)
- Base URL: https://kiu-website.vercel.app
- Viewport: 1280x720
- Video recording: Disabled
- Screenshots on failure: Enabled

### Jest Configuration (`jest.config.js`)
- Test environment: jsdom
- Coverage directory: coverage/
- TypeScript support: ts-jest
- Setup file: tests/setup.ts

## 📖 Usage Examples

### Running Specific Test Categories

```bash
# Run only accessibility tests
npx cypress run --spec "cypress/e2e/09-accessibility.cy.ts"

# Run only performance tests
npx cypress run --spec "cypress/e2e/10-performance.cy.ts"

# Run only validator unit tests
npx jest validators.test.ts
```

### Generating Coverage Reports

```bash
# Generate Jest coverage report
npx jest --coverage

# Coverage report will be in ./coverage/ directory
# Open ./coverage/lcov-report/index.html in browser
```

## 🤝 Contributing

This test suite is comprehensive but can always be expanded. Consider adding:
- Visual regression tests
- API integration tests (if endpoints are exposed)
- Load testing scenarios
- Cross-browser testing configurations

## 📄 License

MIT

## 🎓 About KIU

Kutaisi International University (KIU) is Georgia's international hub for education, science, and technology.
Learn more at: https://kiu-website.vercel.app

---

**Happy Testing! 🚀**
