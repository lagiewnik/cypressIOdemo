/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Execute login process
       * @example
       * cy.SignIn(login, password)
       */
      SignIn(login: string, password: string): Chainable<any>
    }
  }