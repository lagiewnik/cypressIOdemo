///<reference types="cypress" />
import { faker } from '@faker-js/faker';


describe("Create and mark-unmark as favorite", function() {
    const user = "gogo@pahpah.pl";
    const password = "1234";

    faker.setLocale("pl")
    const article_title = faker.lorem.sentence(2);
    const article_about = faker.lorem.slug(3);
    const article_text = faker.lorem.paragraph(2)

    before(function(){
        cy.SignIn(user, password);
    })


    it('Create post', ()=>{
        //cy.contains('New Post').click();
        cy.get("ul.navbar-nav").children().as('menu')
        cy.get('@menu').contains('New Post').click();
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

    it("Mark-unmark as favorite", function(){
        //cy.get('a.nav-link').contains(user).click();
        cy.get("ul.navbar-nav").children().contains(user).click();
        cy.contains("My Articles").should('be.visible');
        cy.get('.ion-heart').first().click();
        cy.contains('Favorited Articles').click();
        cy.url().should('include','favorites');
        //cy.wait(3000)
        cy.contains('Favorited Articles').should('be.visible');
        cy.get('.btn-primary').first().then(($fav) =>{
            return $fav.text();
        }).as('favCount');
        cy.get('@favCount').then(($count)=>{
            expect(parseInt($count)).to.eq(1)
        })
        //cy.get('@favCount').should('contain.text',' 1');
        cy.get('.btn-primary').first().click()
        cy.reload()
        cy.contains("No articles are here... yet.").should('be.visible')
        cy.go('back')

    })

})