import React, { useContext } from "react"
import Ugly from "./Ugly"
import {ThemeContext} from "./ThemeProvider"


function Button(){

    const {image, title, description, imageGen, addPic, final}= useContext(ThemeContext)
    return(
        <div>
        <form className = "myform">

            <input 
            placeholder = "Image URL"
            name = "image"
            value = {image}
            onChange = {imageGen}
            ></input>

            <input 
            placeholder = "Title"
            name = "title"
            value = {title}
            onChange = {imageGen}
            ></input>


            <input 
            placeholder = "Description"
            name = "description"
            value = {description}
            onChange = {imageGen}
            ></input><br />


            <button
            onClick = {addPic}
            >Submit</button>


            <div>{image}</div>

        </form>
        {final}
        </div>
    )}


export default Button