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

    it('A blog can be created', function() {
      cy.createBlog({
        title: 'another blog entry',
        author: 'authorOf',
        url: 'http://wwww.',
        likes: 1
      })
    })
  })

})