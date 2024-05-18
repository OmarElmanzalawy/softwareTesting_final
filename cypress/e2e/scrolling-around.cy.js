describe('Visit and Hover', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html');
  });

  it('first zone', () => {
    cy.get('#zone1').trigger('mouseover');
    cy.wait(1000);
  });

  it('secound zone', () => {
    cy.get('#zone2').trigger('mouseover');
    cy.wait(1000);
  });

  it('third zone', () => {
    cy.get('#zone3').trigger('mouseover');
    cy.wait(1000);
  });

  it('last zone', () => {
    cy.get('#zone4').trigger('mouseover');
    cy.wait(1000);
  });
});
