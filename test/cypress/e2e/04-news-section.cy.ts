describe('KIU News Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the news section heading', () => {
    cy.contains('News').should('be.visible');
  });

  it('should display news cards', () => {
    cy.get('img[alt*="newsImg"]').should('have.length.greaterThan', 0);
  });

  it('should show "See All" link for news', () => {
    cy.contains('See All').should('be.visible');
    cy.get('a[href*="/news"]').should('exist');
  });

  it('should display news items with dates', () => {
    // Check for date patterns like "Sep 15, 2025"
    cy.get('body').should('contain', 'Sep');
    cy.get('body').should('contain', '2025');
  });

  it('should display news titles', () => {
    cy.contains('Academic Registration for Fall 2025-2026 Now Open').should('be.visible');
  });

  it('should have clickable news cards that navigate to detail pages', () => {
    cy.get('a[href*="/news/"]').first().should('exist').click();
    cy.url().should('include', '/news/');
  });

  it('should display multiple news items', () => {
    cy.get('a[href*="/news/"]').should('have.length.greaterThan', 1);
  });

  it('should load news images properly', () => {
    cy.get('img[alt*="newsImg"]').first().should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });

  it('should have news carousel navigation', () => {
    // Check for previous/next slide buttons in news section
    cy.get('button, a').filter(':contains("Previous"), :contains("Next")');
  });

  it('should display recent news items', () => {
    const newsItems = [
      'Academic Registration for Fall 2025-2026 Now Open',
      'Innovation Summer School',
      'Community Health Initiative',
      'Transportation Infrastructure',
      'Environmental Protection'
    ];
    
    newsItems.slice(0, 3).forEach(title => {
      cy.get('body').should('contain', title.substring(0, 20));
    });
  });
});
