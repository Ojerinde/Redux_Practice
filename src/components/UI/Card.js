import React from "react";// Without JSX we have to import React in all components

import './Card.css'
const Card = (props) =>  {
    const classes = `card ${props.className}`; // This enables all the className on the Card wrapper is supported 
    return <div className={classes}>{props.children}</div> //props.children is the  content btw opening and closing child of where the Card function is used as wrapper.
}
export default Card