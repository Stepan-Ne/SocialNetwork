import React from 'react';

import './App.css';
import Header from "./Content/Header/Header";
import NavBar from "./Content/NavBar/NavBar";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Content/News/News";
import Settings from "./Content/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
        </BrowserRouter>
    );
}





export default App;
