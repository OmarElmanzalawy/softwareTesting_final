class buttonClicks{

    checkForPopup(btn_id, target){
        cy.get(btn_id).click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains(target);
    }); 
    }
}

export default buttonClicks