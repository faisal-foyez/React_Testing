import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

test('submitting the form calls onSubmit with username and password',async ()=>{

  const handleSubmit =  jest.fn();

  render(<LoginForm onSubmit={handleSubmit}/>);
  
  const username = 'jamal@gmail.com';
  const password = 'slkdjflsd34';                                                                                                                                                                                                                                                                                                                                      


  await userEvent.type(screen.getByLabelText(/username/i), username);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole('button',{name:/submit/i}));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password
  });

  expect(handleSubmit).toHaveBeenCalledTimes(1);
})