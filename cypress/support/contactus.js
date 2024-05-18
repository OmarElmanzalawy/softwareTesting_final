import contactUs from "./POM/contactus-pom"

const inst = new contactUs();

Cypress.Commands.add('FillAll',() => {
    inst.fillDetails()
    cy.get('textarea.feedback-input').type('dawdawdaw')
    cy.get('[type="submit"]').click()

    cy.url().should('include','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    cy.title().should('eq','Gianni Bruno - Designer')
})

Cypress.Commands.add('WrongFirstName',() => {

    cy.get('[name="last_name"]').type('Elmanzalawy')
    cy.get('[name=email').type('omarmanz2002@gmail.com')
    cy.get('textarea.feedback-input').type('dawdawdaw')
    cy.get('[type="submit"]').click()
    cy.get('body').should('be.exist')
})

Cypress.Commands.add('InvalidEmail',() => {
        cy.get('[name="first_name"]').type('Omar')
        cy.get('[name="last_name"]').type('Elmanzalawy')
        cy.get('[name=email').type('awegapoejgp.com')
        cy.get('textarea.feedback-input').type('dawdawdaw')
        cy.get('[type="submit"]').click()
        cy.get('body').should('have.text','Error: Invalid email address')
})

Cypress.Commands.add('Reset',() => {

    inst.fillDetails()
    cy.get('textarea.feedback-input').type('dawdawdaw')
    cy.get('[type="reset"]').click()
    inst.checkIfEmpty()

})