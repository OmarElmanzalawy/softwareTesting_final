describe('Accordion%TextAffect', () => {
    it('[1] how to select elements by ID ', () => {
        cy.visit("https://www.webdriveruniversity.com/Accordion/index.html") 
        cy.get('#manual-testing-accordion').click()
        cy.get('#cucumber-accordion').click()
        cy.get('#automation-accordion').click()
        cy.get('#click-accordion').click()


    });
    
    
});