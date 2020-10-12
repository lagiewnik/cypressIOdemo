///<reference types="Cypress" />

describe("Test Login form on SIT-TMB", () => {
    it("Should be able to open login form", () => {
        cy.visit("https://ccb-ref-tmb-sit.krakow.comarch:81/auth/login");
        cy.get('.input').type("marsen0090{enter}");
        
        cy.wait(1000);
        cy.get('.input').type("1234567890Aa.{enter}");
        
    });  
    
    


})