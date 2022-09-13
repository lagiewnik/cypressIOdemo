///<reference types="Cypress" />

describe("JSON Object ", () => {


    it("JSON Object test", () => {
        const exampleObject = {
            "key": "Ziom",
            "key2": "Morciaty"
        }
        const exampleArray = ["Maria", "Krystyna", "Janina"]
        const exampleCars = [{"marka":"Honda"},{"marka":"Saab"},{"marka":"Lexus"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Poker",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jina",
                    "lastName": "Jeniss",
                },
                {
                    "firstName": "Hua",
                    "lastName": "Menkhing",
                },
            ]

        }
        exampleCars.forEach(function(car) {
            cy.log(car.marka);
        })

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        cy.log(exampleArray[0]);
        cy.log(exampleArray[1]);
        cy.log(exampleArray[2]);

        cy.log(users.lastName);
        cy.log(users.Students[0].firstName);
    });



})