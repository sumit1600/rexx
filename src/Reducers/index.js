import {combineReducers} from 'redux'
import changeTheNumber from "./upDown";
import modifyCart from './cartReducer'

const RootReducer = combineReducers({
    changeTheNumber, modifyCart
})

export default RootReducer