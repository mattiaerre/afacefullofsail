import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('react-uuid', () => () => '0000000-000-0000-000-00000000000');

jest.mock('../package.json', () => ({
  ...jest.requireActual('../package.json'),
  version: '0.0.0-jest.0'
}));

test('App snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('same vessel type', async () => {
  render(<App />);

  fireEvent.click(screen.getAllByTestId('radio')[5]); // Vessel B, type: BIG_SHIP

  expect(screen.getByTestId('notification')).toMatchSnapshot();
});
