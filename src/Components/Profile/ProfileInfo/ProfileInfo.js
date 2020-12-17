import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfileHooks from './StatusProfileHooks';
import userPhoto from '../../img/user.png';
import Contacts from './Contacts';

const ProfileInfo = (props) => {

  const submit = (value) => {
    console.log(value)
  }
  
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
        <Contacts onSubmit={submit} {...props.profile}/>
      </div>
    );
  }
};

export default ProfileInfo;
