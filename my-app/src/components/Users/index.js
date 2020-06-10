import React, { Component } from 'react';

import MainUser from '../Users/main-user';
import Contacts from '../Users/contacts';
import './style.css'
class Users extends Component {
    render(){
        return(
            <div className = 'users'>
                <MainUser {...this.props }/>
                <Contacts {...this.props } currUser = {this.props.selectedUser}/>
            </div>
        )
    }
}

export default Users;