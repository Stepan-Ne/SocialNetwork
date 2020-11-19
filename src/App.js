import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavBar from './Components/NavBar/NavBar';
import ProfilecontainerConnect from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainerConnect from './Components/Users/UsersContainerConnect';
import Login from './Components/Login/login';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route
          path='/profile/:userId?'
          render={() => <ProfilecontainerConnect />}
        />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' render={() => <UsersContainerConnect />} />
        <Route path='/login' render={() => <Login/>}/>
      </div>
    </div>
  );
}

export default App;
