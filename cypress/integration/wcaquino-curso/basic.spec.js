/// <reference types = "cypress" />


describe('Cypress basic', () =>{

    it('Should visiti a page and assert title', () =>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')
    
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')

    })  
})