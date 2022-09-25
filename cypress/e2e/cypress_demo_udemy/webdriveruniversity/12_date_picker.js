/// <reference types="Cypress" />
describe("Date picker handlings", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  })
  it("Select date from date picker", () => {

    cy.get('#datepicker').click();
    
    // let date = new Date();
    // date.setDate(date.getDate()) //get current date
    // cy.log(date.getDate())

    let dateF = new Date();
    dateF.setDate(dateF.getDate() + 5)
    cy.log(dateF.getDate())

    var date = new Date();
    date.setDate(date.getDate() + 1);

    var futureYear = date.getFullYear();
    var futureMounth = date.toLocaleString("en-GB", { month: "long" });
    var futureDay = date.getDate();

    cy.log(futureYear);
    cy.log(futureMounth);
    cy.log(futureDay);

    selectMounthAndYear();
    selectFutureDay();


    function selectMounthAndYear() {
      cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDAte) => {
        if (!currentDAte.text().includes(futureYear)) {
          cy.get('.next').first().click();
          selectMounthAndYear();
        }
      }).then(() => {
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDAte) => {
          if (!currentDAte.text().includes(futureMounth)) {
            cy.get('.next').first().click();
            selectMounthAndYear();
          }
        })
      });
    }

    function selectFutureDay() {
      cy.get('.day').not('.old').not('.new').contains(futureDay).click();
    }


  })

})
