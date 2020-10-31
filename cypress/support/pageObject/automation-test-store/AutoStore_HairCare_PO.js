class AutoStore_HairCare_PO {
    
addHairCareProductToBasket( ) {
    globalThis.data.productName.forEach((element) => {
        cy.addProductToBasket(element).then(() => {
            debugger;
        })
    })
    cy.get('.dropdown-toggle > .label').click().debug();
}

}

export default AutoStore_HairCare_PO;