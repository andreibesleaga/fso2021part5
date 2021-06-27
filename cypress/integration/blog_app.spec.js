describe('Blog app', function() {

  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Blogs')
    cy.contains('ABN 2021')
  })

  it('login form can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('log in').click()
  })

})