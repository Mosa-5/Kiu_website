describe('KIU Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the language selector', () => {
    cy.contains('ENG').should('be.visible');
  });

  it('should have working logo link to homepage', () => {
    cy.get('a[href*="/"]').find('img[alt*="logo"]').should('exist');
  });

  it('should display navigation links', () => {
    // Check for various possible navigation links
    cy.get('a[href], button').should('have.length.greaterThan', 0);
  });

  it('should have accessible navigation', () => {
    cy.get('nav, header').should('exist');
    cy.get('a').each(($link) => {
      // Links should have text or aria-label
      const hasText = $link.text().trim().length > 0;
      const hasAriaLabel = $link.attr('aria-label');
      expect(hasText || hasAriaLabel).to.be.true;
    });
  });

  it('should navigate to campus page when campus link is clicked', () => {
    cy.contains('Read More').first().click();
    cy.url().should('not.equal', Cypress.config().baseUrl);
  });
});
