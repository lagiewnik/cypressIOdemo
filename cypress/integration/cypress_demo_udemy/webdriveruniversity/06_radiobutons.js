///<reference types="Cypress" />

describe("Handle radiobuttons", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click({ force: true }); 
    })

    it("Handle webdriveruni radiobutons", () => {
       

        cy.get('#radio-buttons').find("[type=radio]").first().check();
        cy.get('#radio-buttons').find("[type=radio]").eq(1).check();
        cy.get('#radio-buttons').find("[type=radio]").eq(2).check();
    });


    it("VAlidate webdriveruni state of radiobutons", () => {
        

        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked');
        cy.get('[value="cabbage"]').should('be.disabled');
        
       
    });

})