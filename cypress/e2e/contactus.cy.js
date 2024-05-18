describe('contact US', () => {
    
    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    
    it('[1] enter all fields in contact us page', () => {
      cy.get('[name="first_name"]').type('Omar')
      cy.get('[name="last_name"]').type('Elmanzalawy')
      cy.get('[name=email').type('omarmanz2002@gmail.com')
      cy.get('textarea.feedback-input').type('dawdawdaw')
      cy.get('[type="submit"]').click()

      cy.url().should('include','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
      cy.title().should('eq','Gianni Bruno - Designer')

    });

    it('[2] enter all fields except First Name', () => {
        cy.get('[name="last_name"]').type('Elmanzalawy')
        cy.get('[name=email').type('omarmanz2002@gmail.com')
        cy.get('textarea.feedback-input').type('dawdawdaw')
        cy.get('[type="submit"]').click()
        cy.get('body').should('be.exist')
      });

      it('[3] enter invalid email address', () => {
        cy.get('[name="first_name"]').type('Omar')
        cy.get('[name="last_name"]').type('Elmanzalawy')
        cy.get('[name=email').type('awegapoejgp.com')
        cy.get('textarea.feedback-input').type('dawdawdaw')
        cy.get('[type="submit"]').click()
        cy.get('body').should('have.text','Error: Invalid email address')
      });

      it.only('[4] Fill details and click reset', () => {
        cy.get('[name="first_name"]').type('Omar')
        cy.get('[name="last_name"]').type('Elmanzalawy')
        cy.get('[name=email').type('omarmanz2002@gmail.com')
        cy.get('textarea.feedback-input').type('dawdawdaw')
        cy.get('[type="reset"]').click()
        cy.get('[name="first_name"]').should('have.value','')
        cy.get('[name="email"]').should('have.value','')
        cy.get('textarea.feedback-input').should('have.value','')

      });


  })