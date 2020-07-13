import React,{Component} from 'react'
import axios from 'axios'

class POSTlist extends Component{
    constructor(props){
        super(props)
        this.state={
            UserId:'',
            title:'',
            body:''
        }
    }

    changehandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        const{userID,title,body}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='UserID' value={userID} onChange={this.changehandler}></input>
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changehandler}></input>
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changehandler}></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default POSTlist