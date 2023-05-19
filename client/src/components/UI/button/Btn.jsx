import React from 'react';
import classes from "./btn.module.css";

const Btn = ({children, ...props}) => {
    return (
        <button onChange={(e)=>{e.preventDefault();}} {...props} className={classes.btn}>
            {children}
        </button>
    )
};

export default Btn;