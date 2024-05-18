beforeEach(function(){
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
})


describe('Actions', () => {
    it('[1] Double Click', () => {    
      cy.get('h2').dblclick(); 
    });

    it('[2] Click And Hold', () => {
      cy.get('#click-box').trigger('mousedown'); 
    });

    it('[3] drag and drop', () => {
      cy.get('#draggable > p > b').then(($draggedElement) => {
        cy.get('#droppable > p > b').then(($droppableElement) => {
          const droppablePosition = $droppableElement[0].getBoundingClientRect();
          const draggablePosition = $draggedElement[0].getBoundingClientRect();
          const offsetX = droppablePosition.x - draggablePosition.x + 10; 
          const offsetY = droppablePosition.y - draggablePosition.y + 10; 
          cy.get('#draggable > p > b').trigger('mousedown', { which: 1 });
          cy.get('body').trigger('mousemove', { clientX: draggablePosition.x + offsetX, clientY: draggablePosition.y + offsetY });
          cy.get('#droppable > p > b').trigger('mouseup');
        });
      });
    });

    it('[4] hover and choose Link 1', () => {
      cy.get('.hover > .dropbtn').trigger('mouseover');
      cy.get('.hover .dropdown-content').contains('Link 1').click();
    });


});