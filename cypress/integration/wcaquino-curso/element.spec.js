/// <reference types = "cypress" />

describe('Work with basic elements', () => {

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Link', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')

        cy.get('#elementosForm\\:sugestoes')
            .type('My name is mix')
            .should('have.value', 'My name is mix')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('My name is mix{selectall}Matheus Caldas', {delay: 100})
            .should('have.value', 'Matheus Caldas')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
    })

    it('CheckBox', () => {
        cy.get('#formComidaCarne')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true})
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')
    })

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'futebol'])
    })

})