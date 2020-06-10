import { CHANGE_SEARCH_VALUE, SWITCH_USER, SEND_MESSAGE, SEND_MESSAGE_TO_ME_SUCCESS } from '../actions/actions'

let initialState = {

    searchValue : '',
    users : [
        {
            name : 'Igor Igor',
            avatar : 'https://tutkatamka.com.ua/wp-content/uploads/2018/02/1-74.jpg',
            content : [
                {
                    id : 'to_me',
                    message : 'Quickly come to the meeting room 1B, we have a big server issue',
                    date : new Date(2020, 5, 4, 17, 49, 23)
                },
                {
                    id : 'from_me',
                    message : `I am having breakfest right now, can't you wait for 10 minutes?`,
                    date : new Date(2020, 5, 4, 17, 53, 17)
                },
                {
                    id : 'to_me',
                    message : `We are losing money! Quick!`,
                    date : new Date(2020, 5, 4, 17, 54, 52)
                }
            ]            
        },
        {
            name : 'hy',
            avatar : 'https://tutkatamka.com.ua/wp-content/uploads/2018/02/3-70.jpg',
            date : new Date(2020, 4, 16, 12, 33, 10),
            content : [
                {
                    id : 'to_me',
                    message : 'Hello!',
                    date : new Date(2020, 5, 2, 11, 59, 3)
                },
                {
                    id : 'from_me',
                    message : `Hi , how are you?`,
                    date : new Date(2020, 5, 2, 14, 53, 17)
                },
                {
                    id : 'to_me',
                    message : `Fine! And you?`,
                    date : new Date(2020, 5, 2, 20, 4, 12)
                }
            ]
        },
    ],
    selectedUser : 1
}

export const myReducer = ( state = initialState , action ) => {
    switch(action.type){
        case CHANGE_SEARCH_VALUE : 
            return {
                ...state ,
                searchValue : action.payload
            }
        case SWITCH_USER : 
            return {
                ...state ,
                selectedUser : action.payload
            }
        case SEND_MESSAGE : 
            let newArr = state.users.map( ( curr, index ) => {
                if( index + 1 === action.payload.num ){
                    return {
                        ...curr,
                        content : [ ...curr.content , {
                            id: action.payload.id,
                            message : action.payload.message,
                            date : action.payload.date
                            }
                        ]
                    }
                }else{
                    return curr
                }
            })
            return {
                ...state ,
                users : newArr
            } 
        case SEND_MESSAGE_TO_ME_SUCCESS : 
            let arr = state.users.map( ( curr, index ) => {
                if( index + 1 === action.payload.num ){
                    return {
                        ...curr,
                        content : [ ...curr.content , {
                            id: action.payload.id,
                            message : action.payload.message,
                            date : action.payload.date
                            }
                        ]
                    }
                }else{
                    return curr
                }
            })
            return {
                ...state ,
                users : arr
            }             
        default : return state
    }
}