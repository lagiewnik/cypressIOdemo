///<reference types="cypress" />
import { faker } from '@faker-js/faker';


describe("Create and mark-unmark as favorite", function() {
    const user = "gogo@pahpah.pl";
    const password = "1234";

    faker.setLocale("pl")
    const article_title = faker.lorem.sentence();
    const article_about = faker.lorem.slug(7);
    const article_text = faker.lorem.paragraph(3)

    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('be.eq', 'Conduit');
        cy.location('protocol').should('eq','https:')
        cy.get('[type="email"]').type(user)
        cy.get('[type="password"]').type(password)
        cy.get('[type="submit"]').click()
        cy.contains("Your Feed",{timeout: 5000}).should('be.visible')
    })


    it('Create post', ()=>{
        cy.contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.location('hash').should('include', '#/editor');
        cy.get('[placeholder="Article Title"]').type(article_title);
        cy.get('[placeholder="What\'s this article about?"]').type(article_about);
        cy.get('[placeholder="Write your article (in markdown)"]').type(article_text);
        cy.get('button').contains('Publish Article').click();
        cy.url().should('include',"article");
    })

    it("Mark-unmark as favorite", ()=>{
        cy.get('a.nav-link').contains(user).click();
        cy.contains("My Articles").should('be.visible');
        
    })

})