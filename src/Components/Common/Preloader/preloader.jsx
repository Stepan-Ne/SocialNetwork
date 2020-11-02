import React from "react";
import s from "../../Users/Users.module.css";

const Preloader = (props) => {

    return <div className={ props.loading ? s.ldsRing : ''}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default Preloader;