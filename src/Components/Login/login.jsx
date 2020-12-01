import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../utils/validator';
import { login } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
//debugger
    const myHandleSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
  return (
    <div>
      {props.isAuth
      ? <Redirect to='/dialogs'/>
      : <div><h2>Login</h2>
      <LoginReduxForm onSubmit={myHandleSubmit}/></div>
      }
      
    </div>
  );
};

const LoginForm = (props) => {
    
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">login:</label>
      <Field name='email' component={Input} validate={[required]} type='text' placeholder='login'/>
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <Field name='password' component={Input} validate={[required]} type='password' placeholder='password'/>
      </div>
      <div>
        <Field name='rememberMy' component={Input} type='checkbox' />remember me
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapState = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapState, {login})(Login);
