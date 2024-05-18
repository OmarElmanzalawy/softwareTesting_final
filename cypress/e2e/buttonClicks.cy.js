describe('Button Clicks', () => {

  beforeEach(function(){
    cy.visit('https://www.webdriveruniversity.com/Popup-Alerts/index.html')
})

  it('[1] Testing JavaScript Alert', () => {
  
    cy.JavascriptAlert();

  });

  it('[2] Testing Modal Popup', () => {
    
    cy.ModalPopup();
})

it('[3] Testing JavaScript Confirm Box', () => {
    
  cy.ConfirmBox()
})

//can't work
/*it.only('[4] Testing Ajax Loader', () => {
    
  cy.get('#button3').click()

})*/

});
