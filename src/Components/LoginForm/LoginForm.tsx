interface LoginFormProps{
  onSubmit:(data:any)=>{}
}

const LoginForm:React.FC<LoginFormProps> = ({onSubmit}) =>{
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    const formData = new FormData(event?.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    onSubmit({
      username,
      password
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username : </label>
        <input type="text" name="username" id="username"/>
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password"/>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default LoginForm;