import React from "react";
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTlqDc74BqwsX0lyiMzvC3D2_rljyRiczzYFTAb40PSAM2NIV6&usqp=CAU' alt='profile'/>
            </div>

            <div>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;