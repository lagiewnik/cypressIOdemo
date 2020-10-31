///<reference types="Cypress" />

describe("Handle checkboxes", () => {

    beforeEach(() => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.visit("/");
        cy.navigateTo_webDriverUniHomePage();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click({ force: true });
    })

    it("Handle webdriveruni checkboxes", () => {
        


        cy.get('#checkboxes > :nth-child(1) > input').as('option01')
        cy.get('@option01').should('not.be.checked');
        //cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('@option01').check().should('be.checked');




    });
    it("Handle webdriveruni checkboxes - uncheckes", () => {
        


        cy.get('#checkboxes > :nth-child(5) > input').as('option03')
        cy.get('@option03').should('be.checked');
        //cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('@option03').uncheck().should('not.be.checked');

    });

    it("Handle webdriveruni checkboxes - multiple selected", () => {
       


        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-4","option-3"]).should('be.checked');
        

    });

})