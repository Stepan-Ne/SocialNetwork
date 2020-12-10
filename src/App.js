import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavBar from './Components/NavBar/NavBar';
import ProfilecontainerConnect from './Components/Profile/Profile';
import { Route, withRouter } from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Login from './Components/Login/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initApp } from './Redux/app-reducer';
import Preloader from './Components/Common/Preloader/preloader';
import withSuspense from './Components/hoc/withSuspense';
const UsersContainerConnect = React.lazy(() => import('./Components/Users/UsersContainerConnect'));

class App extends React.Component {

  componentDidMount() {
    this.props.initApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
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
        <Route path='/users' render={withSuspense(UsersContainerConnect)} />
        <Route path='/login' render={() => <Login/>}/>
      </div>
    </div>
  );
}
}
const mapState = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapState, {initApp}))(App);
