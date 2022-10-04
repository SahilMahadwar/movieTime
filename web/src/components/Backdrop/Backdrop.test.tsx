import { render } from '@redwoodjs/testing/web'

import Backdrop from './Backdrop'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Backdrop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Backdrop />)
    }).not.toThrow()
  })
})
