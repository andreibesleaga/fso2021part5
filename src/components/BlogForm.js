import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')

  const handleBlogChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    console.log(event.target.value, event.target.name, inputName, inputValue)
    switch(inputName) {
    case 'title' : setNewBlogTitle(inputValue)
      break
    case 'author' : setNewBlogAuthor(inputValue)
      break
    case 'url' : setNewBlogUrl(inputValue)
      break
    }
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl,
      likes:0
    })
    setNewBlogTitle('')
    setNewBlogAuthor('')
    setNewBlogUrl('')
  }


  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>
        Blog title : <input name="title" value={newBlogTitle} onChange={handleBlogChange} /> <br />
        Blog author: <input name="author" value={newBlogAuthor} onChange={handleBlogChange} /> <br />
        Blog URL: <input name="url" value={newBlogUrl} onChange={handleBlogChange} /> <br />
        <button type="submit">save</button>
      </form>

    </div>
  )
}

export default BlogForm