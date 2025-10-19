describe('KIU Website Responsive Design', () => {
  const viewports = [
    { name: 'Mobile - iPhone SE', width: 375, height: 667 },
    { name: 'Mobile - iPhone 12', width: 390, height: 844 },
    { name: 'Tablet - iPad', width: 768, height: 1024 },
    { name: 'Tablet - iPad Pro', width: 1024, height: 1366 },
    { name: 'Desktop - 1280px', width: 1280, height: 720 },
    { name: 'Desktop - 1920px', width: 1920, height: 1080 },
  ];

  viewports.forEach(({ name, width, height }) => {
    describe(`${name} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit('/');
      });

      it('should display logo properly', () => {
        cy.get('img[alt*="Kiu logo"], img[alt*="logo"]').first().should('be.visible');
      });

      it('should display main content', () => {
        cy.contains('Place where Knowledge creates future').should('be.visible');
      });

      it('should not have horizontal scroll', () => {
        cy.document().then((doc) => {
          expect(doc.documentElement.scrollWidth).to.equal(width);
        });
      });

      it('should display navigation elements', () => {
        cy.get('a, button').should('have.length.greaterThan', 0);
      });

      it('should have readable text size', () => {
        cy.get('body').should('have.css', 'font-size');
        cy.get('p').first().invoke('css', 'font-size').then((fontSize) => {
          const size = parseFloat(fontSize as string);
          expect(size).to.be.greaterThan(12);
        });
      });
    });
  });

  describe('Responsive Features', () => {
    it('should adapt hero slider for mobile', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('img[alt*="hero"]').should('be.visible');
    });

    it('should show mobile-optimized images when appropriate', () => {
      cy.viewport(375, 667);
      cy.visit('/');
      cy.get('img[src*="Mobile"]').should('exist');
    });

    it('should maintain aspect ratios on all devices', () => {
      cy.viewport('ipad-2');
      cy.visit('/');
      cy.get('img').first().then(($img) => {
        const img = $img[0] as HTMLImageElement;
        expect(img.naturalWidth).to.be.greaterThan(0);
        expect(img.naturalHeight).to.be.greaterThan(0);
      });
    });
  });
});
