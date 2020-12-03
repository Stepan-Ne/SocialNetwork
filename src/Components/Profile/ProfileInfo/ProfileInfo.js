import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfileHooks from './StatusProfileHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader loading={true} />;
  } else {
    return (
        <div className={s.profile}>
          <div>
            <img src={props.profile.photos.large} alt='profile' />
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
