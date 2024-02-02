import Counter from '../Counter';
import {render, fireEvent} from '@testing-library/react';


beforeEach(()=>{
 document.body.innerHTML = '';
})


test('counter increments and decrements when the buttons are clicked', () => {


 const {container} = render(<Counter />);


 const [increment, decrement] = container.querySelectorAll('button')
 let message = container.querySelector('.message')?.textContent
  expect(message).toBe('Current count: 0')


 fireEvent.click(increment);
 message = container.querySelector('.message')?.textContent
 expect(message).toBe('Current count: 1')


 fireEvent.click(decrement);
 message = container.querySelector('.message')?.textContent
 expect(message).toBe('Current count: 0')




})

