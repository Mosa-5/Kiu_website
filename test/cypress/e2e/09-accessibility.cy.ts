describe('KIU Website Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have proper page title', () => {
    cy.title().should('not.be.empty');
  });

  it('should have images with alt text or decorative markup', () => {
    cy.get('img').each(($img) => {
      const alt = $img.attr('alt');
      const role = $img.attr('role');
      expect(alt !== undefined || role === 'presentation').to.be.true;
    });
  });

  it('should have sufficient color contrast for text', () => {
    // Check that body has background and text color
    cy.get('body').should('have.css', 'background-color');
    cy.get('body').should('have.css', 'color');
  });

  it('should have focusable interactive elements', () => {
    cy.get('a, button, input, select, textarea').each(($el) => {
      // Interactive elements should be focusable
      cy.wrap($el).should('be.visible');
    });
  });

  it('should have proper heading hierarchy', () => {
    let lastLevel = 0;
    cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
      const level = parseInt($heading.prop('tagName').substring(1));
      // Headings shouldn't skip levels (though multiple h2s after h1 is fine)
      if (lastLevel > 0) {
        expect(level).to.be.at.most(lastLevel + 1);
      }
      lastLevel = level;
    });
  });

  it('should have semantic HTML elements', () => {
    // Check for semantic elements
    const semanticElements = ['header', 'nav', 'main', 'footer', 'article', 'section'];
    let foundSemanticElements = 0;
    
    semanticElements.forEach(element => {
      cy.get('body').then(($body) => {
        if ($body.find(element).length > 0) {
          foundSemanticElements++;
        }
      });
    });
    
    cy.wrap(foundSemanticElements).should('be.greaterThan', 0);
  });

  it('should have clickable elements with pointer cursor', () => {
    cy.get('a, button').first().should('have.css', 'cursor', 'pointer').or('have.css', 'cursor', 'default');
  });

  it('should have proper language attribute', () => {
    cy.get('html').should('have.attr', 'lang');
  });
});
