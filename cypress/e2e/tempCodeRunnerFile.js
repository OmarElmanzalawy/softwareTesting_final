describe('Visit and Hover', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html');
  });

  it('hovers over the first zone', () => {
    cy.get('#zone1').trigger('mouseover');
    cy.wait(1000);
    // Example assertion: Verify some change happens in the first zone
    cy.get('#zone1').should('have.class', 'active'); // Replace with actual expected behavior
  });

  it('hovers over the second zone', () => {
    cy.get('#zone2-entries').trigger('mouseover');
    cy.wait(1000);
    // Example assertion: Verify some change happens in the second zone
    cy.get('#zone2-entries').should('have.class', 'active'); // Replace with actual expected behavior
  });

  it('hovers over the third zone', () => {
    cy.get('#zone3-entries').trigger('mouseover');
    cy.wait(1000);
    // Example assertion: Verify some change happens in the third zone
    cy.get('#zone3-entries').should('have.class', 'active'); // Replace with actual expected behavior
  });

  it.only('hovers over the last zone', () => {
    cy.get('#zone4').trigger('mouseover');
    cy.wait(1000);
    // Example assertion: Verify some change happens in the last zone
    cy.get('#zone4').should('have.class', 'active'); // Replace with actual expected behavior
  });
});
