import React,{Component} from 'react'

class POSTform extends Component{
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
export default POSTform