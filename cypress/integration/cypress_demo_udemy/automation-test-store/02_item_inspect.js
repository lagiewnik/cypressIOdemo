///<reference types="Cypress" />

describe("Inspect items by using chain of commands ", () => {
    it("Click on the first item by header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    
    });  

    it.only("Click on the first item by item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(
            function(itemHeaderText){
                console.log("Selected the following item: " + itemHeaderText.text());
            }
        );
    
    });

    it("Click on the first item by item index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click();
    
    });
    

})