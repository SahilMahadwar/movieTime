import { render } from '@testing-library/react';

import { Template } from './Template';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Template />);
    expect(baseElement).toBeTruthy();
  });
});
