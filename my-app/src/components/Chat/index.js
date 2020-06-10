import React, { Component } from 'react';
import Header from './header';
import ChatHistory from './chat-history';
import Input from './input'
import './style.css'

class Chat extends Component {
    render(){
        const { users, selectedUser } = this.props;
        return(
            <div className = 'chat'>
                <Header {...users[ selectedUser - 1 ] } />
                <ChatHistory {...users[ selectedUser - 1 ] } />
                <Input  {...users[ selectedUser - 1 ] } {...this.props} />
            </div>
        )
    }
}

export default Chat;