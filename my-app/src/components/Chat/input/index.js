import React, { Component } from 'react';
import './style.css';

class Input extends Component{
    state = { 
        value : ''
    }
    changeValue = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    sendMessage = () => {
        if(this.state.value!== ''){
            let now = new Date();
            this.props.sendMessage({
                num : this.props.selectedUser,
                id : 'from_me',
                date : now.toLocaleString(),
                message : this.state.value
            });
            this.setState({
                value : ''
            })
            this.props.sendMessageToMe(this.props.selectedUser);
        }else{
            alert('Input a message!')
        }
    }
    render(){
        return(
            <div className = 'input'>
                <input value = { this.state.value } onChange = { this.changeValue } placeholder = "Type your message"/>
                <button onClick = { this.sendMessage }>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        )
    }
}

export default Input;