import React from 'react';
import './App.css';
import Header from "./Content/Header/Header";
import NavBar from "./Content/NavBar/NavBar";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Content/News/News";
import Settings from "./Content/Settings/Settings";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";

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
            </div>

        </div>

    );
}





export default App;
