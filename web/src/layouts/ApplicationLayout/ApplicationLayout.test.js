import { render, cleanup } from '@testing-library/react'

import ApplicationLayout from './ApplicationLayout'

describe('ApplicationLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationLayout />)
    }).not.toThrow()
  })
})
