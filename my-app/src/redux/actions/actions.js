export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SWITCH_USER = 'SWITCH_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_TO_ME_SUCCESS = 'SEND_MESSAGE_TO_ME_SUCCESS';

const axios = require('axios');


export const changeSearchValue = (newValue) =>{
    return{
        type : CHANGE_SEARCH_VALUE,
        payload : newValue
    }
}

export const switchUser = (newValue) =>{
    return{
        type : SWITCH_USER,
        payload : newValue
    }
}

export const sendMessage = (newValue) =>{
    return{
        type : SEND_MESSAGE,
        payload : newValue
    }
}

const sendMessageToMeSuccess = (newValue) => {
    return {
        type: SEND_MESSAGE_TO_ME_SUCCESS,
        payload: newValue
    }
};

export const sendMessageToMe = (selectedUser) => {
    return dispatch => {
        let now = new Date();
        axios.get('https://api.chucknorris.io/jokes/random').then(resp => {
            console.log(resp.data)
            const payload = {
                num : selectedUser,
                id: 'to_me',
                message : resp.data.value,
                date: now.toLocaleString()
            };
            setTimeout(() => dispatch(sendMessageToMeSuccess(payload)), 1000);
        });
    }
};