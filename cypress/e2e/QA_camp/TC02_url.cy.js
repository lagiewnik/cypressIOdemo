///<reference types="cypress" />

describe("Create and mark-unmark as favorite", function() {
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('be.eq', 'Conduit');
        cy.location('protocol').should('eq','https:')
        cy.get('[type="email"]').type("gogo@pahpah.pl")
        cy.get('[type="password"]').type("1234")
        cy.get('[type="submit"]').click()
        cy.contains("Your Feed",{timeout: 5000}).should('be.visible')
    })
})