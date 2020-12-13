import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfileHooks from './StatusProfileHooks';
import userPhoto from '../../img/user.png';

const ProfileInfo = (props) => {
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
      </div>
    );
  }
};

export default ProfileInfo;
