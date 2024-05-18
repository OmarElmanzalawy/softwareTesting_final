describe('contact US', () => {
    
    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    
    it('[1] enter all fields in contact us page', () => {

      cy.FillAll();

    });

    it('[2] enter all fields except First Name', () => {
        cy.WrongFirstName();
      });

      it('[3] enter invalid email address', () => {
        cy.InvalidEmail();
      });

      it.only('[4] Fill details and click reset', () => {
        
        cy.Reset();

      });


  })