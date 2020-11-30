import React from 'react';
import s from './renderedField.module.css';


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error ? s.formControl : ''}>
            <textarea {...input} placeholder={props.label}/>
            <div>
            {meta.touched && meta.error && 
            <span className={s.error}>{meta.error}</span>}
            </div>
    
        </div>
    )
};      