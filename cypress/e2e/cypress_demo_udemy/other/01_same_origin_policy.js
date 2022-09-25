///<reference types="Cypress" />

describe("Cypress web security", () => {
    // it("Should be able to open contact us form", () => {
    //     cy.visit("http://www.webdriveruniversity.com");
    //     cy.get('#contact-us').click({force: true});
    
    // });  
    
    it("VAlidate visiting 2 differernt domain", () => {
        
        cy.visit("http://www.webdriveruniversity.com");
        cy.visit("https://automationteststore.com/");
        
    });  

    it("VAlidate visiting 2 differernt domain by user action", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#automation-test-store").invoke('removeAttr','target').click();
        
    }); 


})