import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../utils/validator';

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
      <Field name='login' component={Input} validate={[required]} type='text' placeholder='login'/>
      </div>
      <div>
        <Field name='password' component={Input} validate={[required]} type='text' placeholder='password'/>
      </div>
      <div>
        <Field name='rememberMy' component={Input} type='checkbox' />remember me
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;
