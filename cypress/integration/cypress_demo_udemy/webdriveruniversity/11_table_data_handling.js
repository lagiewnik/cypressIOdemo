/// <reference types="Cypress" />
describe("TAble Data handlings", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
    it("Calculate and assert the total age of users", () => {
      var userDetails = [];
      cy.get("#thumbnail-1 td").each(($el, index, $list) => {
          userDetails[index] = $el.text();

      }).then(() => {
        var i;
        let numb = 0;
        for(i = 0; i <userDetails.length ; i++){
          if(Number(userDetails[i])){
            numb += Number(userDetails[i])
          }
          //cy.log(userDetails[i])
        };
        cy.log("Found total age: " + numb);
        expect(numb).eq(322);
      });
    });

    it("Verify age for user selected by name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list)=>{
            const textName = $el.text();
            if(textName.includes("Woods")){
              cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                const userAge = age.text();
                expect(userAge).equal('80');
              })
            }
        })
    });
    
  
});
  