const initialState = 0
const modifyCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADDCART": return state + 1;
        case "REMOVECART": return state - 1;
        default: return state;
    }
}

export default modifyCart;