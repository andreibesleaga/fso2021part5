import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('blog renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'authorOf',
    link: 'http://www',
    likes: 0
  }

  const component = render(
    <Blog blog={blog} />
  )

  const element = component.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
  expect(component.container).toHaveTextContent('Component testing is done with react-testing-library')
  expect(component.container).toHaveTextContent('authorOf')
  expect(component.container).toNotHaveTextContent('http')
  expect(component.container).toNotHaveTextContent('likes')
})

test('blog renders content has author create', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'authorOf',
    link: 'http://www',
    likes: 0
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent('Component testing is done with react-testing-library')
  expect(component.container).toHaveTextContent('authorOf')
  expect(component.container).querySelector('input[name="author"]').toHaveTextContent('authorOf')

  //const element = component.getByText('Component testing is done with react-testing-library')
  //expect(element).toBeDefined()

})
