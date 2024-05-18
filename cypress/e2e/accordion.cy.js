describe('Text Effects', () => {

    beforeEach(function(){
      cy.visit('https://www.webdriveruniversity.com/Accordion/index.html')
  })

  it('[1] Click on Manual Testing button', () => {
    /*cy.get('#manual-testing-accordion').click();
    cy.get('#manual-testing-description > p').should('contain','Manual testing has for some time been')*/
    cy.ManualTest();
})

it('[2] Click on Cucumber B button', () => {

  cy.cucumber();

})

it('[3] Click on Automation Testing button', () => {
  cy.AutomationTesting();
})

it('[4] Click on Text will appear after 5 seconds button', () => {
  
  cy.AppearingText();

})

})