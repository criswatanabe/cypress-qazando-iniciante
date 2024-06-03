//<reference types="cypress" />
//elementos
const elementos ={
    menu:{
        cadastro:".fa-lock",
        login:".fa-user"
    }



}



//métodos/ações/funções
export default {
    acessarCadastroUsuario(){
       cy.visit('/')
            .get('#top_header')

        cy.get(elementos.menu.cadastro)
            .click()
        
        cy.get('#login_area')
            .should('be.visible')
    },

    acessarTelaLogin(){
        cy.visit('/')
             .get('#top_header')
 
         cy.get(elementos.menu.login)
             .click()
         
         cy.get('.default-form-box')
             .should('be.visible')
     }






}