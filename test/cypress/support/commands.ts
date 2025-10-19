/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to check if an element is visible in viewport
       * @example cy.get('.element').isInViewport()
       */
      isInViewport(): Chainable<Element>;
      
      /**
       * Custom command to wait for images to load
       * @example cy.waitForImages()
       */
      waitForImages(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
  const rect = subject[0].getBoundingClientRect();
  
  expect(rect.top).to.be.lessThan(window.innerHeight);
  expect(rect.bottom).to.be.greaterThan(0);
  expect(rect.left).to.be.lessThan(window.innerWidth);
  expect(rect.right).to.be.greaterThan(0);
  
  return subject;
});

Cypress.Commands.add('waitForImages', () => {
  cy.get('img').should(($imgs) => {
    const loaded = $imgs.filter((i, img) => {
      return (img as HTMLImageElement).naturalWidth > 0;
    });
    expect(loaded.length).to.equal($imgs.length);
  });
});

export {};
