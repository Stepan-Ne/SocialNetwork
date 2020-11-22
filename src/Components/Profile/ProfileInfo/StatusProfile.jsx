import React from 'react';
import s from './ProfileInfo.module.css';

class StatusProfile extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode() {
        this.setState({
            editMode: true 
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    } 
    setStatus(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            <div>
                {
                    !this.state.editMode && 
                    <span className={s.status}
                    onDoubleClick={this.activateEditMode.bind(this)}>
                    Status: {this.props.status}
                    </span>
                }
            </div>
            <div>
                {
                    this.state.editMode && 
                    <input onBlur={this.deactivateEditMode.bind(this)} 
                    autoFocus={true} type="text" 
                    onChange={(e) => this.setStatus.bind(this)(e)}
                    value={this.state.status}/>
                }
            </div>
        </div>
    }
}

export default StatusProfile;