import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';

const required = (value) => {

    return value ? undefined : "Required";
}


const Contacts = (props) => {
const {contacts, lookingForAJob, aboutMe,  ...restProps} = props;
    return <form onSubmit={props.handleSubmit} className={s.contactForm}>
        <div>
        
            <Field label='About me: ' name='aboutMe' 
            validate={[required]}
            component={renderField} type='text'/>
        </div>
        {
           contacts && Object.keys(contacts).map(key => {
                return <div key={key}>{key}</div>
            })
        }
         <button type="submit">Submit</button>
    </form>
}

const renderField = ({input, label, meta, type}) => {

    return <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} type={type}/>
            {
                meta.touched &&
                meta.error && <span className={s.error}>{meta.error}</span>
            }
        </div>
    </div>
}

export default reduxForm({form: 'contacts'})(Contacts);