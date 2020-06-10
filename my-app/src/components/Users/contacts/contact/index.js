import React, { Component } from 'react';
import './style.css'

class Contact extends Component {
    
    render(){
        const { name, avatar, content, id, switchUser, currUser } = this.props;
    
        const chooseContact = () => {
            switchUser(id);
        }

        let className = 'contact';
        if( id === currUser ){
            className+=' selected'
        }
        if( content.length>0 ){
            return(
                <>
                <div className = { className } onClick = { chooseContact }>
                        <img alt = '' src = { avatar }></img>
                        <i id = 'i1'className = "far fa-check-circle"></i>
                        <div>
                            <div style = {{ display : 'flex', width : '250px' }}>
                                <h3>{ name }</h3>
                                <span className = 'message-date'> { content[ content.length-1 ].date.toLocaleString() } </span>
                            </div>
                            <p className = 'last-message'> { content[ content.length-1 ].message.length < 25 ?
                                        content[ content.length-1 ].message :
                                        content[ content.length-1 ].message.substr( 0,24 ) + '...'  } </p>
                        </div>          
                </div>
                </>
            )
        }else{
            return(
                <>
                <div className = { className } onClick = { chooseContact }>
                        <img alt = '' src = { avatar }></img>
                    <i id = 'i1'className = "far fa-check-circle"></i>
                    <div style = {{ display : 'flex', width : '250px' }}>
                        <h3>{ name }</h3>
                    </div>
                </div>
                </>
            )
        }

    }
}

export default Contact;