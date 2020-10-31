///<reference types="Cypress" />


describe("Iterates over elements", () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");      
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
    it("Logs information about all hair care product", () => {
        
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + "element: " + $el.text());
        })

    
    });  

    it("ADD specific product to bascet", () => {
        
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //    if($el.text().includes('Curls to straight Shampoo')) {
        //        cy.wrap($el).click();
        //    }
        // })
        cy.selectProduct('Curls to straight Shampoo');
   
    }); 

    it("ADD another specific product to bascet", () => {
               
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
   
    }); 
    
})