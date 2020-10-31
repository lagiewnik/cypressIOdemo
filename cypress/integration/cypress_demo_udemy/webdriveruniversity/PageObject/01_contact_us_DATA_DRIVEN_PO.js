import Homepage_PO from "../../../../support/pageObject/webdriver-uni/Homepage_PO"
import ContactUs_PO from "../../../../support/pageObject/webdriver-uni/ContactUs_PO"
///<reference types="Cypress" />

describe("Test Contact Us form via WebDriverUniversity", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new Homepage_PO;
    const contactUs_PO = new ContactUs_PO();

    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data;
            globalThis.dane = data;
        })

    })

    beforeEach(() => {
        homepage_PO.visitHomepage();
        homepage_PO.clickOnContactUsButton();
    });



    it("Should be able to submit a succesful submission via contact us form", () => {

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'Contact Us');
        cy.url().should('include', '/Contact-Us/contactus.html');
        
        
        contactUs_PO.contactFor_submision(Cypress.env("first_name"), dane.last_name, dane.email, "yoyoyo", 'h1', 'Thank You for your Message!12')
        cy.pause();
    });

    it("Should not be able to submit a succesful submission via contact us form as all fields required", () => {
       

        contactUs_PO.contactFor_submision(Cypress.env("first_name"), dane.last_name, " ", "yoyoyo", 'body', 'Error: Invalid email address')


    });


})