import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import {faker} from '@faker-js/faker';

interface Override {
  username ?: string,
  password ?: string
}

const buildLoginForm = (overrides:Override) =>{
  return{
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides
  }
}

test('submitting the form calls onSubmit with username and password',async ()=>{

  const handleSubmit =  jest.fn();
  render(<LoginForm onSubmit={handleSubmit}/>);
  
  const {username, password} = buildLoginForm({password:'121231'});                                                                                                                                                                                                                                                                                                                                    

  await userEvent.type(screen.getByLabelText(/username/i), username);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole('button',{name:/submit/i}));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
})