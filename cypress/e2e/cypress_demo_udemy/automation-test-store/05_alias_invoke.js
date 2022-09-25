///<reference types="Cypress" />


describe("Iterates over elements", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
       
        
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq('0').invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5005);
        cy.get('@productThumbnail').should('include', 'Seaweed ');

    
    });  


    it("Validate a count of product on main page", () => {
        cy.visit("https://automationteststore.com/");
       
        cy.get(".thumbnail").as('productsThumbnails');
        cy.get('@productsThumbnails').its("length").should('be.equal', 16);
        //the same:
        cy.get('@productsThumbnails').should('have.length', 16);
        cy.get('@productsThumbnails').find('.productcart').invoke('attr','title').should('include', "Add to Cart");
    });
    
    it.only("Calculate total a count of normal and sale product on main page", {retries: {rumMode: 2,
    openMode:2 }} , () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productsThumbnails')
        cy.get('@productsThumbnails').find('.oneprice').each(($el, index, $list)=> {
                cy.log($el.text());

        })

        cy.get('@productsThumbnails').find('.oneprice').invoke('text').as('itemPrices');
        cy.get('@productsThumbnails').find('.pricenew').invoke('text').as('salesitemsPrices');


        var itemsTotal = 0;
        cy.get('@itemPrices').then($priceTxt => {
            var itemPrice = $priceTxt.split('$');
            var i;
            var itemPriceTotal  = 0;
            for(i = 0; i<itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non sale price total is: " + itemPriceTotal );
        })

        cy.get('@salesitemsPrices').then($priceTxt => {
            var salesItemPrice = $priceTxt.split('$');
            var i;
            var salesItemPriceTotal  = 0;
            for(i = 0; i<salesItemPrice.length; i++){
                cy.log(salesItemPrice[i]);
                salesItemPriceTotal += Number(salesItemPrice[i]);
            }
            itemsTotal += salesItemPriceTotal;
            cy.log("Sales price total is: " + salesItemPriceTotal );
        })
        .then(() => {
            cy.log("The total price of all product is: " + itemsTotal);
           //expect(itemsTotal).to.equal(636.45) CORRECT
            expect(itemsTotal).to.equal(636.41)//INVALID
        })
       
        
    });
})