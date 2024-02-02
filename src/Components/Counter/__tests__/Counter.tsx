import Counter from '../Counter';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/'

beforeEach(()=>{
 document.body.innerHTML = '';
})


test('counter increments and decrements when the buttons are clicked', () => {

  const {container} = render(<Counter />);

  const [increment, decrement] = container.querySelectorAll('button')
  let message = container.querySelector('.message')
    expect(message).toHaveTextContent('Current count: 0')


  fireEvent.click(increment);
  message = container.querySelector('.message')
  expect(message).toHaveTextContent('Current count: 1')


  fireEvent.click(decrement);
  message = container.querySelector('.message')
  expect(message).toHaveTextContent('Current count: 0')

})

