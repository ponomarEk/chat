import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class ChatHistory extends Component{

    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render(){
        const { content, avatar } = this.props; 
        const chatHistory = content.map( curr => {
            if(curr.id === 'to_me'){
                return(
                    <div className = 'message'>
                        <img id = 'avatar' src = { avatar } alt = '' />
                        <div className = 'left'>
                            <span> { curr.message } </span>  
                        </div>
                        <span className = 'date'> { curr.date.toLocaleString() } </span>
                    </div>                
                    )
            }else {
                return (
                    <div className = 'message'>
                        <div className = 'right'>
                            <span> { curr.message } </span>  
                        </div>
                        <span className = 'date'> { curr.date.toLocaleString() } </span>
                    </div>
                )
            }
        })
        return(
            <div className = 'chat-history'  ref = { (el) => { this.messagesContainer = el; }} >
                { chatHistory }
            </div>
        )
    }
}

export default ChatHistory;