///<reference types="Cypress" />

describe("Autocomplete list ", () => {


    it("select specify product from autocomplete list", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke("removeAttr", "target").click({ force: true });

        cy.get('#myInput').type('Ki');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const product = $el.text();
            const prodToSelect = 'Kingfish';

            if (product === prodToSelect) {
                $el.click();

                cy.get('#submit-button').click();
                cy.url().should('include', prodToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('g');
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const product = $el.text();
                const prodToSelect = 'Grapes';

                if (product === prodToSelect) {
                    $el.click();

                    cy.get('#submit-button').click();
                    cy.url().should('include', prodToSelect)
                }
            })
        })
    })
})