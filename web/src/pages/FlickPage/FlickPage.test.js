import { render, cleanup } from '@testing-library/react'

import FlickPage from './FlickPage'

describe('FlickPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FlickPage />)
    }).not.toThrow()
  })
})
