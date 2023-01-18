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
  var quantidade = 4
       
    //utilização de variável
    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie')
      .click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
       
    cy.get('.dropdown-toggle > .mini-cart-items')
      .should('contain', quantidade)
      .click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('.showlogin').click()


    // utilização de comando customizado
    cy.acessar
   
    // utilização do faker
    cy.get('#billing_first_name').clear().type(faker.name.firstName())
    cy.get('#billing_last_name').clear().type(faker.name.lastName())


    // utilização de page objects e massa de dados
    EnderecoPage.editarDadosFaturamento(
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
