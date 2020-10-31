///<reference types="Cypress" />

describe("VAlidate webdriveruni homepage links", () => {
    // it("Should be able to open contact us form", () => {
    //     cy.visit("http://www.webdriveruniversity.com");
    //     cy.get('#contact-us').click({force: true});
    
    // });  
    
    it("VAlidate links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true});
        cy.url().should('include','contactus.html');
       
        cy.go('back');
        cy.reload();
        cy.reload(true); //reload without usin cache

        cy.go('forward');
        cy.url().should('include','contactus.html');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr','target').click({force: true});
        cy.url().should('include','Login-Portal');
        cy.go('back');

        
        cy.get('#to-do-list').invoke('removeAttr','target').click({force: true});
        cy.url().should('include','To-Do-List');
        cy.go('back');
    });  


})