///<reference types="Cypress" />

describe("Verifing variables, cypress command and jquery commmands", () => {
    it("Navigation to specific page", () => {
        cy.visit("https://automationteststore.com/");
       
        //The following would be failed - not recomended
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        //The following would be passed - not recomended
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();

        //recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();


    
    });  

    it("Navigation to specific product page", () => {

        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        
        //following will be failed:
        // const header = cy.get('h1 .maintext');
        // cy.log(header.text();)
        
        
        cy.get('h1 .maintext').then(($headerText) => 
        {
            const headerTextValue = $headerText.text();
            cy.log("Opening page: " + headerTextValue);
            expect(headerTextValue).is.eq('Makeup');
        })
    });


    it.only("Validate properties of contact us page", () => {

        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        // using cypress commands and chaining
        cy.contains('#ContactUsFrm', "Contact Us Form").find("#field_11").should('contain',"First name:");

        //using jQuery Approach
        cy.contains('#ContactUsFrm', "Contact Us Form").then($formContent => {
            const firstNameText = $formContent.find("#field_11").text();
            expect(firstNameText).to.contain("First name:");

            //embedded commands(Closure):
            cy.get("#field_11").then(textFN =>{
                cy.log(textFN.text());
                cy.log(textFN);
            })
        })

    });

    
})