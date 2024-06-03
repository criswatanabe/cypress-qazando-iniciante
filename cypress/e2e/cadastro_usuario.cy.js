// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

const nome = faker.person.fullName()
const nomePrimeiro = faker.person.firstName()
const email = faker.internet.email()

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Cadastro nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Cadastro E-mail vazio', () => {
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser preenchido corretamente')
        // bug de ortografia neste teste
    })
        
    it('Cadastro E-mail inválido', () => {
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencherEmail(nomePrimeiro) // invalido, estou entrando com um nome qq
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser preenchido corretamente')
        // bug de ortografia neste teste
    })

    it('Cadastro senha vazio', () => {
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencherEmail(email) //valido faker.js
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro senha inválido', () => {
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencherEmail(email) //valido faker.js
        cadastro_usuario_page.preencherSenha('1234')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
    
    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencherEmail(email) //valido faker.js
        cadastro_usuario_page.preencherSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso()
        cadastro_usuario_page.validarMensagemBoasVindas(nome)
    })

})