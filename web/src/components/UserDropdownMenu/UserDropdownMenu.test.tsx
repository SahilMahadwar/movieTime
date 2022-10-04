import { render } from '@redwoodjs/testing/web'

import UserDropdownMenu from './UserDropdownMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserDropdownMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserDropdownMenu />)
    }).not.toThrow()
  })
})
