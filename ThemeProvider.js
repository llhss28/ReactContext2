import React, { Children } from "react"
import Ugly from "./Ugly"
import Button from "./Button"

const ThemeContext = React.createContext()

class ThemeProvider extends React.Component{
    state = {
        image: "",
        title: "",
        description: "",
        imageList: []
    }

    imageGen = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    addPic = (e) => {
        let newbie = {
            image: this.state.image,
            title: this.state.title,
            description: this.state.description
        }
        e.preventDefault()
        this.setState(prevState =>{
            return{
                imageList: [...prevState.imageList, newbie ]
            }
        })
        console.log(this.state.imageList)
    }

    // remove = (item) => {
    //     console.log(1111,item)
    //     this.setState(prevState =>{
    //         const newList = prevState.imageList.filter(ugly => ugly === )
    //         return{

    //         }
    //     })
    // }

    
    render(){
        const final = this.state.imageList.map(ugly => <Ugly image = {ugly.image} title = {ugly.title} description = {ugly.description} />) 
    return(
        <div>
            <ThemeContext.Provider value = {{image: this.state.image, title: this.state.title, description: this.state.description, imageGen: this.imageGen, addPic: this.addPic, final: final}}>
                {this.props.children}
            </ThemeContext.Provider>
        </div>
    )}
}

export {ThemeContext, ThemeProvider}