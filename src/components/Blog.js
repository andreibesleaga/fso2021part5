import React from 'react'
import blogService from '../services/blogs'

const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}

const Button = (props) => {
  const idBtn = props.text + '_' + props.id
  if(loggedUserJSON) {
    return (
      <button id={idBtn} className={props.text} onClick={props.handleClick}>
        {props.text}
      </button>
    )
  } else {
    return null
  }
}

const updateEntry = (blog) => {
  blog.likes = blog.likes + 1
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
    blogService.update(blog.id, blog)
    window.location.reload()
  } else {
    alert('Unautorized!')
  }
}

const removeEntry = (id) => {
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    if(window.confirm('Remove blog entry?')) {
      blogService.setToken(user.token)
      blogService.erase(id)
      window.location.reload()
    }
  } else {
    alert('Unautorized!')
  }
}

const Blog = ({ blog }) => (
  <div style={blogStyle}>
    <h4>Blog entry</h4>
    <p>
      Title : {blog.title} <br />
      Author: {blog.author} <br />
      URL: {blog.url} <br />
      Likes: {blog.likes} &nbsp;
      <Button handleClick={() => updateEntry(blog)} text="like" id={blog.id} /> <br />
      <Button handleClick={() => removeEntry(blog.id)} text="remove" id={blog.id} />
    </p>
  </div>
)

export default Blog
