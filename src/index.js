import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/state";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPost} from "./Redux/state";

 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
subscribe(rerenderEntireTree)

rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
