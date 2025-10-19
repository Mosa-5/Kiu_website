describe('KIU About Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main tagline', () => {
    cy.contains('Place where Knowledge creates future').should('be.visible');
  });

  it('should display Latin motto', () => {
    cy.contains('Hic Scientia futūrum creat').should('be.visible');
  });

  it('should show about images', () => {
    cy.get('img[src*="about"]').should('have.length.greaterThan', 0);
  });

  it('should display KIU description', () => {
    cy.contains('Kutaisi International University (KIU) has opened its doors to the first cohort of students in 2020')
      .should('be.visible');
  });

  it('should mention university goals', () => {
    cy.contains('international hub of education').should('be.visible');
  });

  it('should describe offered programs', () => {
    cy.contains('undergraduate degree English language programs').should('be.visible');
  });

  it('should have Campus link', () => {
    cy.get('a[href*="/campus"]').should('exist');
  });

  it('should load about section images', () => {
    cy.get('img[src*="about"]').first().should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });

  it('should display mobile-optimized about images', () => {
    cy.get('img[src*="aboutMobile"]').should('exist');
  });
});
