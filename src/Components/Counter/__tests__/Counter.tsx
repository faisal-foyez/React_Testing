import Counter from '../Counter';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/'

test('counter increments and decrements when the buttons are clicked', async () => {

  render(<Counter />);

  const increment = screen.getByRole('button',{name:/increment/i});
  const decrement = screen.getByRole('button', {name:/decrement/i});

  let message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 0');

  await userEvent.click(increment);
  message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 1');

  await userEvent.click(decrement);
  message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 0');

})

