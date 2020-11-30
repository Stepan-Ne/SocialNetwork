import React from 'react';
import s from './renderedField.module.css';

export const FormControl = ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error ? s.formControl : ''}>
            {props.children}
            <div>
            {meta.touched && meta.error && 
            <span className={s.error}>{meta.error}</span>}
            </div>
        </div>
    )
};   

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return (
        <>
        <FormControl {...props}>
            <textarea {...input} placeholder={restProps.label} {...restProps}/>
        </FormControl>
        </>
        
    )
};   

export const Input = (props) => {
    const {input, type, restProps} = props;
    return <>
    <FormControl {...props}>
            <input {...input} type={type} {...restProps}/>
    </FormControl>
    </>
}