describe('KIU Campus Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the campus section', () => {
    cy.contains('Our Campus').should('be.visible');
  });

  it('should display campus tagline', () => {
    cy.contains('A vibrant social life is part of the Experience').should('be.visible');
  });

  it('should show campus description text', () => {
    cy.contains('Kutaisi International University').should('be.visible');
    cy.contains('160 hectares').should('be.visible');
  });

  it('should mention key campus features', () => {
    cy.contains('on-campus housing').should('be.visible');
    cy.contains('laboratories').should('be.visible');
  });

  it('should have campus images', () => {
    cy.get('img[alt*="hero img"], img[alt*="image"]').should('have.length.greaterThan', 0);
  });

  it('should display campus carousel with multiple images', () => {
    cy.get('img[src*="image"]').should('have.length.greaterThan', 1);
  });

  it('should have Read More link', () => {
    cy.contains('Read More').should('be.visible');
  });

  it('should mention Kutaisi location details', () => {
    cy.contains('Kutaisi').should('be.visible');
    cy.contains('25 km from Kutaisi International Airport').should('be.visible');
  });

  it('should describe campus facilities', () => {
    const facilities = ['laboratories', 'libraries', 'cafeterias'];
    facilities.forEach(facility => {
      cy.contains(facility).should('be.visible');
    });
  });

  it('should load campus images properly', () => {
    cy.get('img[src*="image"]').first().should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });
});
