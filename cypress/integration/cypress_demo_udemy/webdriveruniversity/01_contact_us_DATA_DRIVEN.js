///<reference types="Cypress" />

describe("Test Contact Us form via WebDriverUniversity", () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data;
            globalThis.dane = data;
        })

    })

    beforeEach(() => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");

        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    });



    it("Should be able to submit a succesful submission via contact us form", () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'Contact Us');
        cy.url().should('include', '/Contact-Us/contactus.html');
        // cy.get('[name="first_name"]').type(dane.first_name);
        // cy.get('[name="last_name"]').type(dane.last_name);
        // cy.get('[name="email"]').type(dane.email);
        // cy.get('textarea.feedback-input').type("qwe eqwjeoqwejioqwe jqowejoiqwjeoiqwje");
        // cy.get('[type="submit"]').click();

        // cy.get('h1').should('have.text', 'Thank You for your Message!');

        cy.contactUsForm_submit(Cypress.env("first_name"), dane.last_name, dane.email, "yoyoyo", 'h1', 'Thank You for your Message!' );
    });

    it("Should not be able to submit a succesful submission via contact us form as all fields required", () => {
        // cy.get('[name="first_name"]').type(dane.first_name);
        // cy.get('[name="last_name"]').type(dane.last_name);
        // cy.get('textarea.feedback-input').type("qwe eqwjeoqwejioqwe jqowejoiqwjeoiqwje");
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('all fields are required');

        cy.contactUsForm_submit(dane.first_name, dane.last_name, " ", "yoyoyo", 'body', 'Error: Invalid email address' );

    });


})