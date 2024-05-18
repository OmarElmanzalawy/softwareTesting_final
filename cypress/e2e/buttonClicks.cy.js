describe('Button Clicks', () => {

  beforeEach(function(){
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
})

  it('[1] Testing JavaScript Alert', () => {
    
    cy.get('#button1').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('I am an alert box!');
    });

  });

  it('[2] Testing Modal Popup', () => {
    
    cy.get('#button2').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('We can inject and us JavaScript');
    });

  

})

it('[3] Testing JavaScript Confirm Box', () => {
    
  cy.get('#button4').click()
  cy.on('window:alert', (text) => {
  expect(text).to.contains('Press a button');
  


  });
})

//can't work
/*it.only('[4] Testing Ajax Loader', () => {
    
  cy.get('#button3').click()

})*/

});
