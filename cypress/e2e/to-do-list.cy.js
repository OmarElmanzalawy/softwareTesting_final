describe('To-Do List', () => {
  it('[1] add new one to the to-do list', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    cy.get('input').type("wash my car");
    cy.get('input').type('{enter}');
    
    // Assertion: Verify the new item is added to the list
    cy.get('ul').should('contain', 'wash my car');
  });

  it('[2] mark first to-do', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    cy.get('ul > :nth-child(1)').click();
    
    // Assertion: Verify the first to-do is marked as completed
    cy.get('ul > :nth-child(1)').should('have.class', 'completed');
  });

  it('[3] delete the first to-do', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    // Capture the text of the first to-do item to verify its deletion later
    cy.get('ul > :nth-child(1)').then($firstToDo => {
      const firstToDoText = $firstToDo.text();

      cy.get(':nth-child(1) > span > .fa').click();
      
      // Assertion: Verify the first to-do is deleted
      cy.get('ul').should('not.contain', firstToDoText);
    });
  });

  it('[4] delete the first & last to-do', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    // Capture the text of the first and last to-do items to verify their deletion later
    cy.get('ul > :nth-child(1)').then($firstToDo => {
      const firstToDoText = $firstToDo.text();

      cy.get('ul > :nth-child(3)').then($lastToDo => {
        const lastToDoText = $lastToDo.text();

        cy.get(':nth-child(1) > span > .fa').click();
        cy.get(':nth-child(3) > span > .fa').click();
        
        // Assertions: Verify the first and last to-dos are deleted
        cy.get('ul').should('not.contain', firstToDoText);
        cy.get('ul').should('not.contain', lastToDoText);
      });
    });
  });

  it('[5] mark all to-dos', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    // Add two new to-dos
    cy.get('input').type("go to the gym{enter}");
    cy.get('input').type("make my meals{enter}");

    // Mark all to-dos
    cy.get('ul > :nth-child(1)').click();
    cy.get('ul > :nth-child(2)').click();
    cy.get('ul > :nth-child(3)').click();
    cy.get('ul > :nth-child(4)').click();
    cy.get('ul > :nth-child(5)').click();

    // Assertions: Verify all to-dos are marked as completed
    cy.get('ul > :nth-child(1)').should('have.class', 'completed');
    cy.get('ul > :nth-child(2)').should('have.class', 'completed');
    cy.get('ul > :nth-child(3)').should('have.class', 'completed');
    cy.get('ul > :nth-child(4)').should('have.class', 'completed');
    cy.get('ul > :nth-child(5)').should('have.class', 'completed');
  });

  it('[6] delete all to-dos', () => {
    cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");

    // Capture the text of the first three to-do items to verify their deletion later
    cy.get('ul > :nth-child(1)').then($firstToDo => {
      const firstToDoText = $firstToDo.text();

      cy.get('ul > :nth-child(2)').then($secondToDo => {
        const secondToDoText = $secondToDo.text();

        cy.get('ul > :nth-child(3)').then($thirdToDo => {
          const thirdToDoText = $thirdToDo.text();

          cy.get(':nth-child(1) > span > .fa').click();
          cy.get(':nth-child(2) > span > .fa').click();
          cy.get(':nth-child(3) > span > .fa').click();
          
          // Assertions: Verify all to-dos are deleted
          cy.get('ul').should('not.contain', firstToDoText);
          cy.get('ul').should('not.contain', secondToDoText);
          cy.get('ul').should('not.contain', thirdToDoText);
        });
      });
    });
  });
});
