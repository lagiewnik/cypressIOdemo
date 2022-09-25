///<reference types="Cypress" />


describe("Multiple items to basket", () => {
    before(() => {
        cy.fixture("products_to_basket").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");      
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Add items to basket", () => {
        globalThis.data.productName.forEach((element) => {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .label').click();
        

    
    });  

   
    
})