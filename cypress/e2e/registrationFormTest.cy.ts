import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()


describe(' Testing of registration form', () => {
  it('open registration form', () => {
    //test definition 
    cy.visit('https://shravan-02.github.io/EasyRegister/')
  })
  it('testing name fields', () => {
    cy.get('#firstname').type('Shravan')
    cy.get('#middlename').type('Sreeja')
    cy.get('#lastname').type('Suresh')
    // cy.get('#firstname').should('have.length.at.least', 1)
    // cy.get('#middlename').type('M')
    // cy.get('#lastname').type('Suresh')
  })

  it('testing email field', () => { 
    cy.get('#email').type('shravan@gmail.com')
  })
  it('testing phone field', () => {
    cy.get('#phoneNo').type('7411541144')
    // cy.get('#phone').should('have.length.at.least', 1)
  })
  it('testing designation field', () => {
    cy.get('#designation').select('UX - Engineer').should('have.value', 'UXEng')
    cy.get('#designation').select('Strategic Ops').should('have.value', 'SOps')
    cy.get('#designation').select('Finance').should('have.value', 'Fi')
    cy.get('#designation').select('Marketing').should('have.value', 'Mkt')
   })
  
  
})



describe('Testing form submission', () => {
  it('submit button click', () => {
    cy.get('#submit-btn').click()
  })
})