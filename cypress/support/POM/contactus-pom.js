class contactUs
{

fillDetails(){
    cy.get('[name="first_name"]').type('Omar');
    cy.get('[name="last_name"]').type('Elmanzalawy');
    cy.get('[name=email').type('omarmanz2002@gmail.com');
}

checkIfEmpty(){
    cy.get('[name="first_name"]').should('have.value','')
    cy.get('[name="email"]').should('have.value','')
    cy.get('textarea.feedback-input').should('have.value','')
}

}

export default contactUs