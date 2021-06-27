describe('Blog app', function() {

  beforeEach(function() {
    //cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
    cy.contains('Blog')
  })

  it('Login form is shown', function() {
    //cy.visit('http://localhost:3000')
    cy.contains('log in').click()
  })

  it('User can login', function () {
    cy.contains('log in').click()
    cy.get('#username').type('andrei')
    cy.get('#password').type('andrei')
    cy.get('#login-button').click()
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('log in').click()
      cy.get('#username').type('andrei')
      cy.get('#password').type('andrei')
      cy.get('#login-button').click()

      cy.contains('logged in')
    })

    it('fails with wrong credentials', function() {
      cy.contains('log in').click()
      cy.get('#username').type('andrei')
      cy.get('#password').type('pssword')
      cy.get('#login-button').click()

      cy.contains('wrong credentials')
    })
  })
})