describe('KIU Programs Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the programs section heading', () => {
    cy.contains('Programs').should('be.visible');
  });

  it('should display all program types', () => {
    cy.contains("Bachelor's").should('be.visible');
    cy.contains("Master's").should('be.visible');
    cy.contains('Doctoral').should('be.visible');
  });

  it('should display Single-Cycle program', () => {
    cy.contains('Single-Cycle').should('be.visible');
  });

  it('should display program images', () => {
    cy.get('img[alt*="Bachelor"], img[alt*="Master"], img[alt*="Doctoral"]')
      .should('have.length.greaterThan', 0);
  });

  it('should load program images correctly', () => {
    cy.get('img[alt*="Bachelor"]').first().should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });

  it('should have all four program categories', () => {
    const programs = ["Bachelor's", "Single-Cycle", "Master's", "Doctoral"];
    programs.forEach(program => {
      cy.contains(program).should('be.visible');
    });
  });

  it('should display programs in a grid or list layout', () => {
    cy.get('img[alt*="Bachelor"]').should('be.visible');
    cy.get('img[alt*="Master"]').should('be.visible');
  });
});
