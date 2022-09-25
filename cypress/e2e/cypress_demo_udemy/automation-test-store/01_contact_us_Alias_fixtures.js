///<reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        //cy.viewport(550, 766 );
        cy.fixture("userDetails").as("userFile")
    })
    
    it("Should be able to open contact us form", () => {
        cy.visit("https://automationteststore.com/");
        //cy.get('.info_links_footer > :nth-child(5) > a').click();

        //cy.xpath("//a[contains(text(),'Contact Us')]").click();
        cy.get("a[href$='contact']").click().then(
            function(buttonTitle){
                console.log("Button: " + buttonTitle.text() + " has been clicked.");
                cy.log("Button: " + buttonTitle.text() + " has been clicked.");
            }
        );

        cy.get("@userFile").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
       
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Marianna asdasd asd adf f afd asdf");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        console.log("this is non ordering comand, because is non cypress");
        cy.log("Log from cypress in ordering");

    });  
    

})