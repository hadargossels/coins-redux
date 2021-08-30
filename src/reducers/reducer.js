import { FETCH_COINS, LOADING} from '../actions/types';

const initialState = {
    coins: [],
    loading: false,
}

export default function(state = initialState , action) {
    switch (action.type) {

        case FETCH_COINS:
            return {
                ...state,
                coins: action.payload,
                loading: false
            }

        case LOADING:
            return {
                ...state,
                loading:true
            }

        default:
            return state
    }
}
