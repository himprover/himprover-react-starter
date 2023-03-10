import {fireEvent, render} from '@testing-library/react';
import {Home} from './Home';

describe('js test', () => {
  it('normal test', () => {
    expect(1 + 1).toBe(2);
  });

  it('dom test', () => {
    const app = render(<Home />);
    const num = app.getByText('0');
    const button = app.getByText('test button');

    fireEvent.click(button);
    expect(num).toHaveTextContent('1');
  });
});
