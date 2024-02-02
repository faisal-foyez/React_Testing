// import React, { ReactElement } from 'react';
// import { ReactDOM } from 'react';
import {createRoot} from 'react-dom/client'
import {act} from 'react-dom/test-utils';
import Counter from '../Counter';


beforeEach(()=>{
  document.body.innerHTML = '';
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div');
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div);
  // 🐨 use createRoot to render the <Counter /> to the div
  const root = createRoot(div);

  act(() =>root.render(<Counter />))
  // 🐨 get a reference to the increment and decrement buttons:
  const [increment, decrement] = div.querySelectorAll('button')
  console.log(increment);
  // 🐨 get a reference to the message div:
  let message = div.querySelector('.message')?.innerHTML
  
  expect(message).toBe('Current count: 0')

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  const incrementClickEvent = new MouseEvent('click', {
    bubbles:true,
    cancelable:true,
    button:0
  })
  act(()=>increment.dispatchEvent(incrementClickEvent));
  message = div.querySelector('.message')?.innerHTML
  expect(message).toBe('Current count: 1')
  // 🐨 assert the message.textContent
  const decrementClickEvent = new MouseEvent('click', {
    bubbles:true,
    cancelable:true,
    button:0
  })
  act(()=>decrement.dispatchEvent(decrementClickEvent));
  message = div.querySelector('.message')?.innerHTML
  expect(message).toBe('Current count: 0')
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  div.remove();
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})