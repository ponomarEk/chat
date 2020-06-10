import React, { Component } from 'react';
import './style.css'

class MainUser extends Component{
    state = {
        value : ''
    }
    onSearch = (e) => {
        this.setState({
            value : e.target.value
        })
        this.props.changeSearchValue(e.target.value)
    }
    render(){
        return(
            <div className = 'header'>
                <div className = 'main-user'>
                    <img id = 'main-user' alt = 'Main User' src = { 'https://agapova.kh.ua/wp-content/uploads/2018/11/user.png' }/>
                    <i id = 'i2' className = "far fa-check-circle"></i>
                    <h2>Oleksandr Ponomarenko</h2>
                </div>
                <div className="search clearfix">
                      <button className="search__photo">
                          <i class="fas fa-search"></i>
                      </button>
                      <input type = "search" placeholder = "Search" value = { this.state.value } onChange = { this.onSearch }/>  
                </div>
            </div>
        )
    }
}

export default MainUser;