describe('how to attach file', () => {
    it('[1]attaching pdf file', () => {
        cy.vist('https://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myfile').attachfile('pdf-test.pdf')
        cy.get('#submit-button').click()
   
    });
    it('[2]without attack', () => {
        cy.vist('https://www.webdriveruniversity.com/File-Upload/index.html')
        //cy.get('#myfile').attachfile('pdf-test.pdf')
        cy.get('#submit-button').click()
   
    });
    
    
});