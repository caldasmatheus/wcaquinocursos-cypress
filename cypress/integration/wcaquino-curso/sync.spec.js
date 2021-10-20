/// <reference types = "cypress" />

describe('Esperas...', () => {

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento ficar disponivel', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').type('Testando')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()

        cy.get('#lista li')
            .find('span')
            .should('have.text', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        cy.get('#buttonListDOM').click()

        cy.get('#lista li span', {timeout: 10000})
            .should('have.length', 2)
    })

})