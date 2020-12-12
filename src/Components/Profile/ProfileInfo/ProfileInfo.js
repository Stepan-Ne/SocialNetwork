import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfileHooks from './StatusProfileHooks';
import userPhoto from '../../img/user.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader loading={true} />;
  } else {
    return (
        <div className={s.profile}>
          <div>
            <img src={props.profile.photos.large || userPhoto} alt='profile' />
          </div>
          <div>
            <input type="file"/>z
          </div>
    
          <div>
            <p>Name: {props.profile.fullName}</p>
          </div>
          <StatusProfileHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
      );
  }

};

export default ProfileInfo;
