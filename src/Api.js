import React,{Component} from "react"
import axios  from "axios"
import "./api.css"


class Api extends Component{

    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }


    componentDidMount(){
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=> {
                this.setState({posts:response.data})
            })    }
    

    render(){

        return(

            <ul>
                {this.state.posts.map((items, key)=> {
                    return(
                        <li className="bg-container" key = {key}>{items.title}</li>
                    )
                })}
            </ul>
        )

        
    }
}

export default Api;
