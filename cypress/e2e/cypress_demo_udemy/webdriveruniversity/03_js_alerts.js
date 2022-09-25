///<reference types="Cypress" />

describe("Handle js alerts", () => {
    // it("Should be able to open contact us form", () => {
    //     cy.visit("http://www.webdriveruniversity.com");
    //     cy.get('#contact-us').click({force: true});
    
    // });  
    
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});
        cy.get("#button1").click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })
    });  

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});
        cy.get("#button4").click();

        cy.on('window:confirm', (str) => {
            return true; //clicked OK, confirm button, false for Cancel button
        });

        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });  

    it("Validate js confirm alert box works correctly when clicking cancel button", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});
        cy.get("#button4").click();

        cy.on('window:confirm', (str) => {
            return false;

        });

        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });  

    it("Validate js confirm alert box works correctly using stub", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        //Obsługa zakładek - obejście nowa strona otwiera się nie w nowej zakładce tylko w tej samej poprzez usunięcie atrybutu target przed kliknięciem
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true});
        


        const stub = cy.stub();

        cy.on('window:confirm', stub)

        cy.get("#button4").click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })

       
    });
})