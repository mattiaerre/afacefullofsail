import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { name } from './info';

jest.mock('react-uuid', () => () => '0000000-000-0000-000-00000000000');

const version = '0.0.0-jest.0';

test('App snapshot', () => {
  const { container } = render(<App name={name} version={version} />);
  expect(container).toMatchSnapshot();
});

test('same vessel type', () => {
  render(<App name={name} version={version} />);

  fireEvent.click(screen.getAllByTestId('radio')[5]); // Vessel B, type: BIG_SHIP

  expect(screen.getByTestId('notification')).toMatchSnapshot();
});
