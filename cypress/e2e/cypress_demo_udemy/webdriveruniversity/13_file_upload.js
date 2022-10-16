/// <reference types="Cypress" />
describe("File upload handling", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
  })

  it("Upload file", () => {

    cy.fixture("Mapy_1.PNG", "base64").then(fileContent => {
      cy.get('#myFile').attachFile(
        {
          fileContent,
          fileName: "Mapy_1.PNG",
          mimeType: "image/png"
        },
        {
          uploadType: "input"
        }
      )
    });
    cy.get("#submit-button").click();
  })

  it("Upload no file", () => {

    
    cy.get("#submit-button").click();
   

  })
})
