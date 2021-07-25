const initialState = {
    cartItemList:[]
}

const modifyCart = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADDCART": return {
            ...state,
            cartItemList:[...state.cartItemList, action.data]
        }
        case "REMOVECART": return {
            ...state,
            cartItemList: state.cartItemList.filter(item => item.model !== action.data.model)
        }
        default: return state;
    }
}

export default modifyCart;