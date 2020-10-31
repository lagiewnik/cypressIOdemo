class AutoStore_Homepage_PO {
    accessHomepage() {
        cy.visit("https://automationteststore.com/");      
    }

    clickOn_hairCare() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click({timeout: 20000});
    };


}

export default AutoStore_Homepage_PO;