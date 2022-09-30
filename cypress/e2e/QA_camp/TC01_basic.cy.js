///<reference types="cypress" />

describe("Login", function() {
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('[type="email"]').type("gogo@pahpah.pl")
        cy.get('[type="password"]').type("1234")
        cy.get('[type="submit"]').click()
    })
})