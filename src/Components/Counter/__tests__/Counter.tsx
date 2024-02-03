import Counter from '../Counter';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/'

test('counter increments and decrements when the buttons are clicked', () => {

  render(<Counter />);

  const increment = screen.getByRole('button',{name:/increment/i})
  const decrement = screen.getByRole('button', {name:/decrement/i})

  let message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 0')


  fireEvent.click(increment);
  message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 1')


  fireEvent.click(decrement);
  message = screen.getByText(/count/i);
  expect(message).toHaveTextContent('Current count: 0')

})

