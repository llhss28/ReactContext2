import React from "react"
// import ThemeProvider from "./ThemeProvider"

function Ugly(props){
    return(
    <div>
        <img src ={props.image} ></img>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <button onClick = {props.remove}>Delete</button>
        <button>Edit</button>
    </div>
    )
}

export default Ugly