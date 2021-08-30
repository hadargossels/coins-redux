import {FETCH_COINS, LOADING} from './types'
import axios from 'axios';

// export const fetchCoins = () => dispatch => {
//     axios.get('data.json')
//     .then( response =>
//         dispatch({
//             type: FETCH_COINS,
//             payload: response.data
//         })
//     )
//     .catch(err => console.log(err))
// }

export function fetchCoins() {
    return function(dispatch) {
        return     axios.get('data.json')
        .then( response =>
            dispatch({
                type: FETCH_COINS,
                payload: response.data
            })
        )
        .catch(err => console.log(err))
    };
}

export const setLoading = () =>{
    return {
        type:LOADING
    }
}
