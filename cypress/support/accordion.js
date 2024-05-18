Cypress.Commands.add('ManualTest',() => {
    cy.get('#manual-testing-accordion').click();
    cy.get('#manual-testing-description > p').should('contain','Manual testing has for some time been')
})

Cypress.Commands.add('cucumber',() => {
  cy.get('#cucumber-accordion').click();
  cy.get('#cucumber-testing-description > p').should('contain','Cucumber (BDD) simplifies the requirement capturing process. Requirements can be captured, broken down and simplified effortlessly; making the captured requirements readable to anyone within the organisation and in turn providing the required details and backbone to')
})

Cypress.Commands.add('AutomationTesting',() => {
  cy.get('#automation-accordion').click();
  cy.get('#automation-testing-description > p').should('contain','Automation testing has been steadily grown in popularity these past few years thanks to the time/ cost savings and efficiency that it offers. Companies throughout the world have or plan to use automation testing to rapidly speed up their test capabilities. Automation test engineers are in great demand and offer an average salary of £45,000+ (2018). Now is a great time to learn about automation test engineering and this')
  })

Cypress.Commands.add('AppearingText',() => {
    cy.get('#click-accordion').click();
    cy.wait(5000)
    print('wait is done')
    cy.get('#timeout').should('contain','This text has appeared after 5 seconds')
    cy.get('#click-accordion').click();
    cy.get('#click-accordion').click();
})