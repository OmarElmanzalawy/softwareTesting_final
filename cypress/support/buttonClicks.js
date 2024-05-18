Cypress.Commands.add('JavascriptAlert',() => {
    cy.get('#button1').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('I am an alert box!');
    }); 
})

Cypress.Commands.add('ModalPopup',() => {
    cy.get('#button2').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('We can inject and us JavaScript');
    }); 
})

Cypress.Commands.add('ConfirmBox',() => {
    cy.get('#button4').click()
  cy.on('window:alert', (text) => {
  expect(text).to.contains('Press a button');
  


  }); 
})