import buttonClicks from "./POM/buttonClicks-pom";

const inst = new buttonClicks()

Cypress.Commands.add('JavascriptAlert',() => {

    inst.checkForPopup('#button1','I am an alert box!') 
})

Cypress.Commands.add('ModalPopup',() => {

    inst.checkForPopup('#button2','We can inject and us JavaScript')  
})

Cypress.Commands.add('ConfirmBox',() => {

  inst.checkForPopup('#button4','Press a button')
  
})