///<reference types="cypress" />
import { faker } from '@faker-js/faker';


describe("Create and mark-unmark as favorite", function() {
    const user = "gogo@pahpah.pl";
    const password = "1234";

    faker.setLocale("pl")
    const article_title = faker.lorem.sentence(2);
    const article_about = faker.lorem.slug(3);
    const article_text = faker.lorem.paragraph(2)

    it('Sign in', function(){
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


    it('Create post', ()=>{
        //cy.contains('New Post').click();
        cy.get("ul.navbar-nav").children().contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.location('hash').should('include', '#/editor');
        cy.get('form').within(($form) => {
            cy.get('input').first().type(article_title);
            cy.get('input').eq(1).type(article_about);

            cy.get('textarea').last().type(article_text);
            cy.get('button').contains('Publish Article').click();
        })
        
        cy.url().should('include',"article");
    })

    it("Mark-unmark as favorite", ()=>{
        //cy.get('a.nav-link').contains(user).click();
        cy.get("ul.navbar-nav").children().contains(user).click();
        cy.contains("My Articles").should('be.visible');
        cy.get('.ion-heart').first().click();
        cy.contains('Favorited Articles').click();
        cy.url().should('include','favorites');
        cy.get('.ion-heart').first().click();
        cy.reload()
        cy.contains("No articles are here... yet.").should('be.visible')
        cy.go('back')

    })

})