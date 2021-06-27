describe('Blog app', function() {

  beforeEach(function() {
    //cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
    cy.contains('Blogs')
  })

  it('Login form is shown', function() {
    //cy.visit('http://localhost:3000')
    cy.contains('log in').click()
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'andrei', password: 'andrei' })
    })

    it('A blog can be liked', function() {
      cy.get('.like').first().click()
    })
    it('A blog can be deleted', function() {
      cy.get('.remove').first().click()
    })

  })

})