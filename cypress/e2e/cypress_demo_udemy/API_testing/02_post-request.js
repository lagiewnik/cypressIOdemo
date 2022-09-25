///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("POST request", () =>
{
    var result;
    var titleOfPosts = new Array();
    faker.setLocale("pl")
    const subject = faker.lorem.words();
    const author = faker.name.firstName() + " " + faker.name.lastName()


    it("Create new /posts api", ()=> {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": subject,
                "author": author
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })

    it("Validate title of latest post", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach(function(item) {
                titleOfPosts.push(item["title"]);
            })
        }).then(() => {
            var latestPost = titleOfPosts[titleOfPosts.length -1]
            expect(latestPost).to.eq(subject);
        })
      })

})