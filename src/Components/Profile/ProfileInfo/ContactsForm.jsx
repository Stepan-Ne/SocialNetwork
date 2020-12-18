import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import { Textarea } from '../../Common/FormsControls/FormsControls';

// Validate > reqiured
const required = (value) => {

    return value ? undefined : "Required";
}

// Component with Fields
const ContactsForm = (props) => {

const {contacts, lookingForAJob, aboutMe,  ...restProps} = props;

    return <form onSubmit={props.handleSubmit} className={s.contactForm}>

        <div>
            <Field label='About me: ' name='aboutMe' 
            validate={[required]}
            component={textareaField} type='text'/>
        </div>

        <div>
            <Field label='Looking for a job: ' name='lookingForAJob' 
            validate={[required]}
            component={radiobuttonField} type='checkbox'/>
        </div>

        {
           contacts && Object.keys(contacts).map(key => {
                return <div key={key}>{key}</div>
            })
        }

         <button type="submit">Submit</button>
    </form>
}

// Validate textarea takes props from Field
const textareaField = ({input, label, meta, type}) => {

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

const radiobuttonField = ({input, label, meta, type}) => {

    return <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {
                meta.touched &&
                meta.error && <span className={s.error}>{meta.error}</span>
            }
        </div>
    </div>
}

export default reduxForm({form: 'contacts'})(ContactsForm);