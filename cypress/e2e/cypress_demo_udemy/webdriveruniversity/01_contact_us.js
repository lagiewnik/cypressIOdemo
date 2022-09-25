///<reference types="Cypress" />

describe("Test Contact Us form via WebDriverUniversity", () => {
    // it("Should be able to open contact us form", () => {
    //     cy.visit("http://www.webdriveruniversity.com");
    //     cy.get('#contact-us').click({force: true});
    
    // });  
    
    it("Should be able to submit a succesful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include','Contact Us');
        cy.url().should('include','/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("James");
        cy.get('[name="last_name"]').type("Bond");
        cy.get('[name="email"]').type("jb@jb.com");
        cy.get('textarea.feedback-input').type("qwe eqwjeoqwejioqwe jqowejoiqwjeoiqwje");
        cy.get('[type="submit"]').click();

        cy.get('h1').should('have.text','Thank You for your Message!');
    });  

    it("Should not be able to submit a succesful submission via contact us form as all fields required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true});
        cy.get('[name="first_name"]').type("Andzej");
        cy.get('[name="last_name"]').type("Bond");
        cy.get('textarea.feedback-input').type("qwe eqwjeoqwejioqwe jqowejoiqwjeoiqwje");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('all fields are required');
    }); 


})