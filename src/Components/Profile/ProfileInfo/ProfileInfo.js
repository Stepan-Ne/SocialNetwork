import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import StatusProfile from './StatusProfile';

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
          <StatusProfile status='hello, dear!'/>
        </div>
      );
  }

};

export default ProfileInfo;
