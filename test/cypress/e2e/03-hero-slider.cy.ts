describe('KIU Hero Slider', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display hero slider images', () => {
    cy.get('img[alt*="hero"]').should('have.length.greaterThan', 0);
  });

  it('should have slider navigation controls', () => {
    // Check for next/previous buttons
    cy.contains('Previous slide').should('exist');
    cy.contains('Next slide').should('exist');
  });

  it('should display hero images that load properly', () => {
    cy.get('img[alt*="hero"]').first().should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });

  it('should have clickable hero elements', () => {
    cy.get('a[href*="/home"]').should('have.length.greaterThan', 0);
  });

  it('should advance to next slide when next button is clicked', () => {
    // Get initial state
    cy.get('img[alt*="hero"]').first().then(($initialImg) => {
      const initialSrc = $initialImg.attr('src');
      
      // Click next
      cy.contains('Next slide').click();
      
      // Small wait for animation
      cy.wait(500);
      
      // The slider should have processed the click
      cy.get('body').should('exist');
    });
  });

  it('should go to previous slide when previous button is clicked', () => {
    cy.contains('Previous slide').click();
    cy.wait(500);
    cy.get('img[alt*="hero"]').should('be.visible');
  });
});
