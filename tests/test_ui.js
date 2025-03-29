describe('Calculator App', () => {
  it('Should add numbers correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#num1').type('10')
    cy.get('#num2').type('5')
    cy.get('#add').click()
    cy.get('#result').should('contain', '15')
  })
})
