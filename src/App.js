import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainerConnect from "./Components/Users/UsersContainerConnect"
function App(props) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile />}/>
                <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainerConnect />}/>
            </div>

        </div>

    );
}





export default App;
