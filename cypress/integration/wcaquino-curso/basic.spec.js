/// <reference types = "cypress" />


describe('Cypress basic', () =>{

    it.only('Should visiti a page and assert title', () =>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')
    
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')

    }) 

    it('Should find and interact with an element', () =>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })  
})