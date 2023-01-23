/// <reference types="cypress" />
var faker = require('faker')
import EnderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  //utilização de hook  
  beforeEach(() => {
        cy.visit('produtos')
    })


  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    // utilização de comando customizados
    cy.addProduto('Abominable Hoodie', 4)    
    
    cy.acessar
   
    // utilização de page objects e massa de dados
    EnderecoPage.editarDadosFaturamento(
       dadosEndereco[1].nome,
       dadosEndereco[1].sobrenome,
       dadosEndereco[1].empresa,
       dadosEndereco[1].pais,
       dadosEndereco[1].endereco,
       dadosEndereco[1].numero,
       dadosEndereco[1].cidade,
       dadosEndereco[1].estado,
       dadosEndereco[1].cep,
       dadosEndereco[1].telefone,
       dadosEndereco[1].email,
    )
       
    cy.get('#terms').check()
    cy.get('#place_order').click()

    cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
  })
})
