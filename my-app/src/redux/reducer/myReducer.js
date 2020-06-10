import { CHANGE_SEARCH_VALUE, SWITCH_USER, SEND_MESSAGE, SEND_MESSAGE_TO_ME_SUCCESS } from '../actions/actions'

let initialState = {

    searchValue : '',
    users : [
        {
            name : 'Igor Main',
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
            name : 'Best Friend',
            avatar : 'https://tutkatamka.com.ua/wp-content/uploads/2018/02/3-70.jpg',
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
        {
            name : 'Alice Duda',
            avatar : 'https://4tololo.ru/files/images/20151308202252.jpg',
            content : [
                {
                    id : 'to_me',
                    message : 'You so beautiful :)',
                    date : new Date(2020, 2, 7, 14, 1, 23)
                },
                {
                    id : 'from_me',
                    message : `Hi , Thank you!`,
                    date : new Date(2020, 2, 7, 14, 22, 17)
                },
                {
                    id : 'from_me',
                    message : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                    date : new Date(2020, 2, 7, 20, 4, 12)
                }
            ]
        },
        {
            name : 'Jorginho',
            avatar : 'https://www.comnews.ru/sites/default/files2019/styles/large/public/articles/2019-10/%D0%A0%D1%83%D0%B4%D0%BE%D0%B2_%D0%BA%D0%B2.jpg?itok=Wu2t8z1r',
            content : [
                
            ]
        },
        {
            name : 'Alex',
            avatar : 'https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg',
            content : [
               
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