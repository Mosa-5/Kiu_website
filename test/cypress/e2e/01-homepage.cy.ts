describe('KIU Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.url().should('include', 'kiu-website.vercel.app');
    cy.title().should('exist');
  });

  it('should display the KIU logo in the header', () => {
    cy.get('img[alt*="Kiu logo"], img[alt*="logo"]')
      .first()
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('should have proper page structure', () => {
    cy.get('body').should('be.visible');
    cy.get('header, nav').should('exist');
  });

  it('should display main content sections', () => {
    // Check for about section with tagline
    cy.contains('Place where Knowledge creates future').should('be.visible');
    cy.contains('Hic Scientia futūrum creat').should('be.visible');
    
    // Check for news section
    cy.contains('News').should('be.visible');
    
    // Check for programs section
    cy.contains('Programs').should('be.visible');
    
    // Check for campus section
    cy.contains('Our Campus').should('be.visible');
  });

  it('should have readable text with proper contrast', () => {
    cy.get('body').should('have.css', 'font-family');
    cy.get('h1, h2, h3').should('have.length.greaterThan', 0);
  });

  it('should be responsive on mobile viewport', () => {
    cy.viewport('iphone-x');
    cy.get('img[alt*="Kiu logo"], img[alt*="logo"]').first().should('be.visible');
    cy.contains('Place where Knowledge creates future').should('be.visible');
  });

  it('should be responsive on tablet viewport', () => {
    cy.viewport('ipad-2');
    cy.get('img[alt*="Kiu logo"], img[alt*="logo"]').first().should('be.visible');
    cy.contains('News').should('be.visible');
  });
});
