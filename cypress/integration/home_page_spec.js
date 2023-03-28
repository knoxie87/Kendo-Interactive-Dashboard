describe('The delete widget functionality', () => {
    it('successfully deletes a widget', () => {
      cy.visit('http://localhost:3001') // change URL to match your dev URL
      cy.get('.delete-position-button').first().click()
      cy.wait(500)
      cy.get('.k-card-title').contains('Total job views').should('not.exist');
    })
  })

  describe('The widgets should be stored', () => {
      
  })