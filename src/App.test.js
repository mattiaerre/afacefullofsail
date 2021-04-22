import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-uuid', () => () => '0000000-000-0000-000-00000000000');

test('App snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
