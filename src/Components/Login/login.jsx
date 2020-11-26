import React from 'react';
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {

    const myHandleSubmit = (formData) => {
        console.log(formData)
    }
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={myHandleSubmit}/>
    </div>
  );
};

const LoginForm = (props) => {
    
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field name='login' component='input' type='text' placeholder='login'/>
      </div>
      <div>
        <Field name='password' component='input' type='text' placeholder='password'/>
      </div>
      <div>
        <Field name='rememberMy' component='input' type='checkbox' />remember me
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;
