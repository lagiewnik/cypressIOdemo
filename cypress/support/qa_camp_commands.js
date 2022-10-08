Cypress.Commands.add("SignIn", (user, password)=> {
    cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('be.eq', 'Conduit');
        cy.location('protocol').should('eq','https:')
        cy.get('form').within(($form)=>{
            cy.get('[type="email"]').type(user)
            cy.get('[type="password"]').type(password)
            cy.root().submit()
        })
        
        cy.contains("Your Feed",{timeout: 5000}).should('be.visible')
})