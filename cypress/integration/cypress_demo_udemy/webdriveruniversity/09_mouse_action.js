///<reference types="Cypress" />

describe("Mouse action ", () => {


    it("scroll element into view", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke("removeAttr", "target").click({ force: true });




    });

    it("drag and drop element", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke("removeAttr", "target").click({ force: true });

        cy.get('#draggable').trigger('mousedown', {which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true});

    });

    it("double click element", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke("removeAttr", "target").click({ force: true });

        cy.get('#double-click').dblclick();
       

    });

    it("hold down left mouse click element", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke("removeAttr", "target").click({ force: true });

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        });
       

    });
});