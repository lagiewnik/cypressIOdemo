import AutoStore_Homepage_PO from "../../../../support/pageObject/automation-test-store/AutoStore_Homepage_PO.js"
import AutoStore_HairCare_PO from "../../../../support/pageObject/automation-test-store/AutoStore_HairCare_PO.js"

///<reference types="Cypress" />


describe("Multiple items to basket", () => {
    const autoStore_HomePage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    before(() => {
        cy.fixture("products_to_basket").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        autoStore_HomePage_PO.accessHomepage();
        autoStore_HomePage_PO.clickOn_hairCare();      
        
    })

    it("Add items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductToBasket();
        

    
    });  

   
    
})