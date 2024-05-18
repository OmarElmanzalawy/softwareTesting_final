describe('Login', () => {
    it.skip('[1]valid username and valid password', () => {
    

    cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
    cy.get('[placeholder="Username"]').type("Omarreda")
    cy.get('[placeholder="Password"]').type("gtyrghf")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it.skip('[2]valid username and invalid password', () => {
    

    cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
    cy.get('[placeholder="Username"]').type("Omarreda")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it('[3]invalid username and valid password', () => {
    

    cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
    cy.get('[placeholder="Password"]').type("giji3")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it.skip('[4]invalid username and invalid password', () => {
    

    cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
    cy.get('#login-button').click()

});
});