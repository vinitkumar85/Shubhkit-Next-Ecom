
const initialState = {
    'showPopup': false,
    'showPreloader': 'false',
    'showCart': false,
    'isLoader': 'false',
    'isCartSuccessfull': 'false',
    'cartStatus': 'open'
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART_STATUS':
            return {
                ...state,
                cartStatus: action.payload
            }

        case 'CART_SUCCESS':
            return {
                ...state,
                isCartSuccessfull: action.payload
            }

        case 'UPDATE_MODAL':
            return {
                ...state,
                showPopup: action.payload !== null ? action.payload : !state.showPopup
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                showCart: action.payload !== null ? action.payload : !state.showCart
            }

        case 'INIT_PRELOADER':
            return {
                ...state,
                showPreloader: action.payload
            }

        case 'SET_LOADER':
            return {
                ...state,
                isLoader: action.payload
            }

        default: return state;
    }
};

export default uiReducer;