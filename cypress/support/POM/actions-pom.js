class actions{

    trigger(id,event){
        cy.get(id).trigger(event); 
    }

} export default actions