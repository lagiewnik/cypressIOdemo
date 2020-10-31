///<reference types="Cypress" />

describe("Handle Iframe & modals", () => {
    
    
    it("Handle webdriveruni iframe & modals", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#iframe').invoke("removeAttr","target").click({force: true});

        //podpięcie się do iframu
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        });

        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal');

        cy.get('@modal').should(($exceptedText) => {
            const text = $exceptedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

        cy.get('@modal').contains('Close').click();

        
    });  

})