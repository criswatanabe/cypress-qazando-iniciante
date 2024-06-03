import commum_page from '../support/pages/commum_page'
import login from '../support/pages/login_page'

import { faker } from '@faker-js/faker';

const email = faker.internet.email()
const nome = faker.person.firstName()

describe('Login', () => {
    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarTelaLogin()
    })

    it('Email em branco', () => {
        login.clicarLogin()
        login.validarMensagemErro('E-mail inválido.')
    }),
    it('Email inválido', () => {
        login.preencherEmail(nome)
        login.clicarLogin()
        login.validarMensagemErro('E-mail inválido.')
    }),

    it('Senha em branco', () => {
        login.preencherEmail(email)
        login.clicarLogin()
        login.validarMensagemErro('Senha inválida.')
    }),

    it('Senha inválida', () => {
        login.preencherEmail(email)
        login.preencherSenha('1234')
        login.clicarLogin()
        login.validarMensagemErro('Senha inválida.')
    }),

    it('Ainda não tem conta', () => {
        login.clicarLinkSemConta()
        commum_page.acessarCadastroUsuario()
    }),

    it.only('Login com sucesso', () => {
        login.preencherEmail(email)
        login.preencherSenha('123456')
        login.marcarLembrar()
        login.clicarLogin()
        login.validarMensagemSucesso()
        login.validarMensagemOla(email)
    })
})