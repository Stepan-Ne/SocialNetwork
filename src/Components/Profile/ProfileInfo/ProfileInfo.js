import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfileHooks from './StatusProfileHooks';
import userPhoto from '../../img/user.png';
import ContactsForm from './ContactsForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  const submit = (value) => {
    props.setContacts(value).then(() => {
      setEditMode(false)
    })
    
  };

  const chooseImage = (e) => {
    if (e.target.files.length) {
      props.setImageProfile(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <Preloader loading={true} />;
  } else {
    return (
      <div className={s.profile}>
        <div>
          <img src={props.profile.photos.large || userPhoto} alt='profile' />
        </div>
        <div>
          {props.isOwner && <input type='file' onChange={chooseImage} />}
        </div>

        <div>
          <p>Name: {props.profile.fullName}</p>
        </div>
        <StatusProfileHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
       {
         editMode
         ? <ContactsForm initialValues={props.profile} onSubmit={submit} {...props.profile} />
         : <Contacts edit={() => setEditMode(true)} {...props.profile}/>
       } 
       

      </div>
    );
  }
};

const Contacts = (props) => {
  const { contacts, lookingForAJob, fullName, aboutMe, edit, ...restProps } = props;

  return (
    <div  className={s.contactForm} >
      <button onClick={edit}>Edit</button>
      <div>
     <b>Full name</b>: {fullName}
      </div>
      <div>
      <b>aboutMe:</b> {aboutMe}
      </div>
      <div>
      <b>lookingForAJob:</b> {lookingForAJob ? 'yes' : 'no'}
      </div>
      {contacts &&
        Object.keys(contacts).map((key) => {
          return <div key={key}><b>{key}:</b> {contacts[key]}</div>;
        })}
    </div>
  );
};

export default ProfileInfo;
