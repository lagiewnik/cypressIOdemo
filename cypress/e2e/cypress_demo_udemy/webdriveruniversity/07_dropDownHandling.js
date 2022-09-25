///<reference types="Cypress" />

describe("Dropdown handlings", () => {


    it("Handle webdriveruni dropdown", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click({ force: true });


        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit');
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery');

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
    })
})