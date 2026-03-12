import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('Text is visible', () => {
  const todo = { text: 'Text Todo', done: false }

  render(<Todo todo={todo} />)

  screen.getByText('Text Todo')
})
