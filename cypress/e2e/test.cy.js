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
    });
  })