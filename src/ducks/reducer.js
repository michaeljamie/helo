const initialState = {
    username: '',
    profile_pic: '',
    userId: 0

}

const UPDATE_INFO = 'UPDATE_INFO'
// const CLEAR_INFO = 'CLEAR_INFO'


export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_INFO:
            return Object.assign( {}, state, {userId: action.payload.userID, username: action.payload.username, profile_pic: `https://robohash.org/${action.payload.username}.png`} )
        // case CLEAR_INFO:
        //     return Object.assign( {}, state, {name: action.payload} )
        default: 
            return state;
    }
}

export function updateInfo( userId, username ){
    return{  
        type: UPDATE_INFO,
        payload: {
            userId,
            username
        }
    }
}

// export function clearInfo( param ){
//     return{  
//         type: CLEAR_INFO,
//         payload: param
//     }
// }