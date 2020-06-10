import React, { Component } from 'react';
import Contact from '../contacts/contact/index';


class Contacts extends Component {
    state = {
        selected : this.props.currUser
    }
    render(){
        const { users, search, switchUser, currUser } = this.props;

        let contacts = [];
        let color = '';
        let k = 0;
        if(search === ''){
            contacts = users.map( curr => {
                k++;
                return (
                <Contact 
                    key = { k } id = { k } {...curr } 
                    switchUser = { switchUser } 
                    currUser = { currUser }
                />)
            })
        }else{
            contacts = users.map( curr => {
                k++;
                
                if(curr.name.toUpperCase().search(search.toUpperCase())!==-1){
                    return (
                    <Contact
                        key = { k } id = { k } {...curr } 
                        switchUser = { switchUser } 
                        currUser = { currUser }
                    />)
                }
            })
        }

        return(
            <div>
                <h2 style = {{ marginLeft : '17px' }}> Chats </h2>
                { contacts }
            </div>
        )
    }
}

export default Contacts;