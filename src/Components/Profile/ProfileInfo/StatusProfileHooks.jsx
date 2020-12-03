import React from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const StatusProfileHooks = (props) => {
        
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const updateStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
        return <div>
            <div>
                {
                    !editMode &&
                    <span onDoubleClick={() => setEditMode(true)}
                    className={s.status}>
                    Status: {props.status}
                    </span>
                }
            </div>
            <div>
                {
                    editMode && 
                    <input 
                    onBlur={updateStatus}
                    autoFocus={true} type="text" 
                    onChange={(e) => setStatus(e.currentTarget.value)}
                    value={status}
                    />
                }
            </div>
        </div>
    }

export default StatusProfileHooks;