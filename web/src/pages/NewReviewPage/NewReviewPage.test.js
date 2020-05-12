import { render, cleanup } from '@testing-library/react'

import NewReviewPage from './NewReviewPage'

describe('NewReviewPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NewReviewPage />)
    }).not.toThrow()
  })
})
