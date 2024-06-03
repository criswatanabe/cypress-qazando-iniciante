
//elementos
const elementos = {
    campos:{
        email:"#user",
        senha:"#password"
    },

    botoes:{
        login:"#btnLogin"

    },

    checkbox:{
        lembrar:"#materialUnchecked"
    },

    mensagens:{
        mensagemErro:".invalid_input",
        mensagemSucesso:"#swal2-title",
        mensagemOla:"#swal2-html-container"
    },
    
    links:{
        semConta:"#createAccount"
    }    

}

//métodos
export default {
    clicarLogin() {
        cy.get(elementos.botoes.login)
            .click()
    },
    validarMensagemErro(mensagem){
        cy.get(elementos.mensagens.mensagemErro)
            .should('be.visible')
            .should('have.text', mensagem)
    },
    preencherEmail(email){
        cy.get(elementos.campos.email)
            .type(email)
    },
    preencherSenha(senha){
        cy.get(elementos.campos.senha)
            .type(senha)
    },
    clicarLinkSemConta(){
        cy.get(elementos.links.semConta)
            .click()
    },
    validarMensagemSucesso(){
        cy.get(elementos.mensagens.mensagemSucesso)
            .should('be.visible')
            .should('have.text', 'Login realizado')
    },
    validarMensagemOla(email){
        cy.get(elementos.mensagens.mensagemOla)
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    },
    marcarLembrar(){
        cy.get(elementos.checkbox.lembrar)
            .check()
    }
}