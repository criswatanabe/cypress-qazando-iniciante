// <reference types="cypress" />

// Elements
const elements ={
    botoes:{
        cadastrar:"#btnRegister"
    },

    campos:{
        nome:"#user",
        email:"#email",
        senha:"#password"
    },

    mensagens:{
        errorMessage:".errorLabel",
        sucessoMessage:"#swal2-title",
        boasVindasMessage:"#swal2-html-container"
    }
}

// ações/metodos/funcoes
export default {
    clicarCadastrar() {
        cy.get(elements.botoes.cadastrar)
            .click()
    },

    validarMensagemErro(mensagem){
        cy.get(elements.mensagens.errorMessage)
            .should('be.visible')
            .should('have.text', mensagem)
    },

    // OU 
    //validarMensagemErro(message){
    //     cy.get(elements.mensagens.errorMessage)
    //         .then((element) => {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq(message)
    //         })
    //     }

    preencheNome(nome){
        cy.get(elements.campos.nome)
            .type(nome)
    },

    preencherEmail(email){
        cy.get(elements.campos.email)
            .type(email)
    },

    preencherSenha(senha){
        cy.get(elements.campos.senha)
            .type(senha)
    },

    validarMensagemSucesso(){
        cy.get(elements.mensagens.sucessoMessage)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
    },

    validarMensagemBoasVindas(nome){
        cy.get(elements.mensagens.boasVindasMessage)
            .should('be.visible')
            //.should('have.text', 'Bem-vindo ' + nome)
            // OU
            .should('have.text',  `Bem-vindo ${nome}`)

    }
      

}