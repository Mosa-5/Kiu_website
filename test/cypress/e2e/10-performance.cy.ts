describe('KIU Website Performance', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load within reasonable time', () => {
    cy.window().then((win) => {
      const performance = win.performance;
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      
      // Page should load in under 5 seconds
      expect(loadTime).to.be.lessThan(5000);
    });
  });

  it('should load images efficiently', () => {
    let imageCount = 0;
    let loadedCount = 0;

    cy.get('img').each(($img) => {
      imageCount++;
      if (($img[0] as HTMLImageElement).complete) {
        loadedCount++;
      }
    }).then(() => {
      expect(loadedCount).to.be.greaterThan(0);
    });
  });

  it('should not have excessive DOM depth', () => {
    cy.get('body').then(($body) => {
      const getMaxDepth = (element: HTMLElement, depth: number = 0): number => {
        const children = Array.from(element.children);
        if (children.length === 0) return depth;
        
        return Math.max(...children.map(child => 
          getMaxDepth(child as HTMLElement, depth + 1)
        ));
      };
      
      const maxDepth = getMaxDepth($body[0]);
      // Reasonable max depth for modern web apps
      expect(maxDepth).to.be.lessThan(30);
    });
  });

  it('should not have too many total DOM elements', () => {
    cy.get('*').then(($elements) => {
      // Less than 2000 total elements for good performance
      expect($elements.length).to.be.lessThan(2000);
    });
  });

  it('should load critical resources', () => {
    cy.window().then((win) => {
      const resources = win.performance.getEntriesByType('resource');
      expect(resources.length).to.be.greaterThan(0);
    });
  });
});
