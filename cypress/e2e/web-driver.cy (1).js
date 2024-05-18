describe('Login', () => {
    it('[1] valid username and valid password', () => {
      cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
      cy.get('[placeholder="Username"]').type("Omarreda");
      cy.get('[placeholder="Password"]').type("gtyrghf");
      cy.get('#login-button').click();
  
      // Assertion: Verify successful login (example assumes an alert is shown on successful login)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('validation succeeded'); // Adjust based on actual alert message
      });
    });
  
    it('[2] valid username and invalid password', () => {
      cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
      cy.get('[placeholder="Username"]').type("Omarreda");
      cy.get('[placeholder="Password"]').type("wrongpassword");
      cy.get('#login-button').click();
  
      // Assertion: Verify failed login (example assumes an alert is shown on failed login)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('validation failed'); // Adjust based on actual alert message
      });
    });
  
    it('[3] invalid username and valid password', () => {
      cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
      cy.get('[placeholder="Username"]').type("wrongusername");
      cy.get('[placeholder="Password"]').type("gtyrghf");
      cy.get('#login-button').click();
  
      // Assertion: Verify failed login (example assumes an alert is shown on failed login)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('validation failed'); // Adjust based on actual alert message
      });
    });
  
    it('[4] invalid username and invalid password', () => {
      cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
      cy.get('[placeholder="Username"]').type("wrongusername");
      cy.get('[placeholder="Password"]').type("wrongpassword");
      cy.get('#login-button').click();
  
      // Assertion: Verify failed login (example assumes an alert is shown on failed login)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('validation failed'); // Adjust based on actual alert message
      });
    });
  });
  