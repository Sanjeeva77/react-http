
import axios from 'axios'
import React, { Component } from 'react'

export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
            // this.setState({errorMsg:error.message})
            this.setState({errorMsg:'error retrieving data'})
        })
    }
    render() {
        const {posts,errorMsg}=this.state
        return (
            <div>
                List of Posts
                {
                    posts.length?posts.map(
                        post=><div key={post.id}>{post.title}</div>):null
                }
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default PostList

//Flow starts with constructor ,state property called posts
//which is an empty array 
//control flows to render() method. text list of posts is
//displayed actual list is not rendered because the array is empty at the moment
//control flows to componentDidMount() we make get request to API end point
//once datat is retrived update the state post property 
//when we change the state component will rerender
//this time array is not empty and henca the list of titles are
//rendered in the browaer


//how to display error message 
