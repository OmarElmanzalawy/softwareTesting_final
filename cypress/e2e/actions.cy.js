beforeEach(function(){
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
})


describe('Actions', () => {
    it('[1] Double Click', () => {    
      cy.DoubleClick()
    });

    it('[2] Click And Hold', () => {
      cy.Hold()
    });

    it('[3] drag and drop', () => {
      cy.DragAndDrop()
    });


    /*
    it('[4] hover and choose Link 1', () => {
      cy.get('.hover > .dropbtn').trigger('mouseover');
      cy.get('.hover .dropdown-content').contains('Link 1').click();
    });*/


});