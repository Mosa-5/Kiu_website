describe('KIU Video Gallery', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display video gallery section', () => {
    cy.contains('Video Gallery').should('be.visible');
  });

  it('should display video thumbnails', () => {
    cy.get('img[src*="youtube"]').should('have.length.greaterThan', 0);
  });

  it('should show multiple videos', () => {
    cy.get('img[src*="youtube"]').should('have.length.greaterThan', 1);
  });

  it('should display video titles', () => {
    cy.contains('KIU Campus Tour').should('be.visible');
  });

  it('should load YouTube thumbnails', () => {
    cy.get('img[src*="img.youtube.com"]').first().should(($img) => {
      const src = $img.attr('src');
      expect(src).to.include('youtube.com');
    });
  });

  it('should have video carousel navigation', () => {
    cy.contains('Previous slide').should('exist');
    cy.contains('Next slide').should('exist');
  });

  it('should display video counter/pagination', () => {
    cy.contains('1/5').should('be.visible');
  });

  it('should navigate through videos', () => {
    cy.contains('Next slide').click();
    cy.wait(500);
    cy.get('img[src*="youtube"]').should('be.visible');
  });

  it('should have Georgian language video titles', () => {
    // Check for Georgian characters
    cy.get('body').then(($body) => {
      const text = $body.text();
      const hasGeorgian = /[\u10A0-\u10FF]/.test(text);
      expect(hasGeorgian).to.be.true;
    });
  });

  it('should display specific video titles', () => {
    const videoTitles = [
      'KIU Campus Tour',
      'ადგილი, სადაც ცოდნა ქმნის მომავალს',
      'მათემატიკოსთა საერთაშორისო კონფერენცია'
    ];
    
    // At least one should be visible
    cy.get('body').should(($body) => {
      const text = $body.text();
      const hasAtLeastOne = videoTitles.some(title => 
        text.includes(title) || text.includes(title.substring(0, 10))
      );
      expect(hasAtLeastOne).to.be.true;
    });
  });
});
