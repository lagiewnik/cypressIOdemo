///<reference types="cypress" />
describe("Get request", () =>
{
    var result
    it("Validate status code of the /posts api", ()=> {
        result = cy.request("http://localhost:3000/posts");
        result.its("status").should("equal",200);
    })

    it("Validate  /posts api correct key and values", ()=> {
        result = cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);

            expect(body[0]).has.property( "title", "json-server Example");
            expect(body[5]).has.property( "author", "ziomal z lasu");

            body.forEach(element => {
                expect(element).to.have.all.keys("id", "title", "author");
                cy.log("Author: " + element["author"]  +" & title: " + element["title"] )
            });
        });
        
    })
})