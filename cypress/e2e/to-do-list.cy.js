describe('to do list', () => {
    it.skip('[1] add new one in to do list', () => {
      cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")

      cy.get('input').type("wash my car")
      cy.get('input').type('{enter}')
      
    });
    it.skip('[2] mark first to-do', () => {
        cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")

        cy.get('ul > :nth-child(1)').click()
        });

     it.skip('[3] delete the first to-do', () => {
        cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")

        cy.get(':nth-child(1) > span > .fa').click()
        });

 it.skip('[4] delete the first & last to-do', () => {
        cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")

        cy.get(':nth-child(1) > span > .fa').click()
        cy.get(':nth-child(3) > span > .fa').click()
        
        });

        it('[5] marke all to-do', () => {
            cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")
            cy.get('input').type("go to the gym")
            cy.get('input').type('{enter}') 
            cy.get('input').type("make my meals")
            cy.get('input').type('{enter}')     
            cy.get('ul > :nth-child(1)').click()
            cy.get('ul > :nth-child(2)').click()
            cy.get('ul > :nth-child(3)').click()
            cy.get('ul > :nth-child(4)').click()
            cy.get('ul > :nth-child(5)').click()
    
            
            });

            it('[6] delete all to-do', () => {
                cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")
                cy.get(':nth-child(1) > span > .fa').click()
                cy.get(':nth-child(2) > span > .fa').click() 
                cy.get(':nth-child(3) > span > .fa').click()
                
                
                });
  });