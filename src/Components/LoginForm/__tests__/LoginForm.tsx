import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

test('submitting the form calls onSubmit with username and password',async ()=>{

  let submittedData;
  const handleSubmit =  (data:any) => (submittedData = data);

  render(<LoginForm onSubmit={handleSubmit}/>);
  
  const username = 'jamal@gmail.com';
  const password = 'slkdjflsd34';                                                                                                                                                                                                                                                                                                                                      


  await userEvent.type(screen.getByLabelText(/username/i), username);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole('button',{name:/submit/i}));

  expect(submittedData).toEqual({
    username,
    password
  })
})