import actions from "./POM/actions-pom";

const inst = new actions();

Cypress.Commands.add('DoubleClick',() => {
    cy.get('h2').dblclick(); 
})

Cypress.Commands.add('Hold',() => {
    //cy.get('#click-box').trigger('mousedown'); 

    inst.trigger('#click-box','mousedown')
})

Cypress.Commands.add('DragAndDrop',() => {
    cy.get('#draggable > p > b').then(($draggedElement) => {
        cy.get('#droppable > p > b').then(($droppableElement) => {
          const droppablePosition = $droppableElement[0].getBoundingClientRect();
          const draggablePosition = $draggedElement[0].getBoundingClientRect();
          const offsetX = droppablePosition.x - draggablePosition.x + 10; 
          const offsetY = droppablePosition.y - draggablePosition.y + 10; 
          cy.get('#draggable > p > b').trigger('mousedown', { which: 1 });
          cy.get('body').trigger('mousemove', { clientX: draggablePosition.x + offsetX, clientY: draggablePosition.y + offsetY });
          //cy.get('#droppable > p > b').trigger('mouseup');
          inst.trigger('#droppable > p > b','mouseup')
        });
      });
})