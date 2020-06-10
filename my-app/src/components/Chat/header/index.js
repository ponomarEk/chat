import React, { Component } from 'react';
import './style.css'

class Header extends Component {

    render(){
        const { avatar, name } = this.props;

        return(
            <div className = 'header-content'>
                <div className = 'chat-header'>
                    <img alt = '' src = { avatar } id = 's1'/>
                    <i id = 'i2' className = "far fa-check-circle"></i>
                    <h4>{ name }</h4>
                </div>
            </div>
        )
    }
}

export default Header;