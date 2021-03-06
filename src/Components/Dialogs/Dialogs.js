import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../utils/validator';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  const submit = (formData) => {
    props.sendMessageAC(formData.newMessageBody);
  };
  //create elements on page
  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>

      <div className={s.sendMessageBlock}>
        <AddMessageFormRedux onSubmit={submit} />
      </div>
    </div>
  );
};

//maxLength  необх создавать за пределами комп из-за перерисовки
const maxLength15 = maxLengthCreator(15)
const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea}>
        <Field
          name='newMessageBody'
          component={Textarea}
          validate={[required, maxLength15]}
          label='Enter your message'
        />
      </div>
      <div className={s.sendMessage}>
        <button>Send Message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);
export default Dialogs;
