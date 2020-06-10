import React from 'react';

import Users from './components/Users';
import Chat from './components/Chat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeSearchValue, switchUser, sendMessage, sendMessageToMe } from './redux/actions/actions';

function App( props ) {
  return (
    <div className = 'container'>
      <Users {...props }/>
      <Chat { ...props }/>
    </div>
  );
}

const mapStateToProps = ( state ) => {
  let arr = [];
  state.users.forEach( value => {
      return arr.push( value );
   });
   return { 
     users : arr ,
     search : state.searchValue,
     selectedUser : state.selectedUser 
    };
}


const mapActionsToProps = ( dispatch ) => {
  return{
    changeSearchValue : bindActionCreators ( changeSearchValue, dispatch ),
    switchUser : bindActionCreators ( switchUser, dispatch ),
    sendMessage : bindActionCreators ( sendMessage, dispatch ),
    sendMessageToMe : bindActionCreators ( sendMessageToMe, dispatch )
  }
}

export default connect( mapStateToProps, mapActionsToProps )( App );