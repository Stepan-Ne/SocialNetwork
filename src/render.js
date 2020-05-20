import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import {addPost, updateNewPost} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
        </BrowserRouter>,
        document.getElementById('root')
    )
}