import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()


describe(' Testing of registration form', () => {
  it('open registration form', () => {
    //test definition 
    cy.visit('https://shravan-02.github.io/EasyRegister/')
  })
  it('testing name fields', () => {
    cy.get('#firstname').type('Shravan')
    cy.get('#firstname').should('have.length.at.least', 1)
    // cy.get('#middlename').type('M')
    // cy.get('#lastname').type('Suresh')
  })
})

describe('Testing form submission', () => {
  it('submit button click', () => {
    cy.get('#submit-btn').click()
  })
})