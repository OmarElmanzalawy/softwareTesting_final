describe('Button Click Tests', () => {
    it('[0] check button click', () => {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Click-Buttons/index.html');
        
        // Define buttons as variables for clarity
        const button1 = '#button1';
        const button2 = '#button2';
        const button3 = '#button3';
        
        // Click each button and verify some action or state change
        cy.get(button1).click().then(() => {
            // Example assertion: Check if a modal or alert appears
            cy.get('#myModalClick').should('be.visible'); // Assuming a modal appears after clicking button1
        });

        cy.get(button2).click().then(() => {
            // Example assertion: Check if a new element is visible or a message changes
            cy.get('#button2ClickMessage').should('be.visible'); // Assuming a message appears after clicking button2
        });

        cy.get(button3).click().then(() => {
            // Example assertion: Check if a new element is visible or a message changes
            cy.get('#button3ClickMessage').should('be.visible'); // Assuming a message appears after clicking button3
        });
        
    });
});
