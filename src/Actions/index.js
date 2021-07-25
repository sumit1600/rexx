export const incNumber = () => { 
    return {
        type: "INCREMENT" 
    }
}
export const decNumber = () => {
    return{
         type: "DECREMENT"
    }
}
export const addCart = () => {
    return{
         type: "ADDCART"
    }
}
export const removeCart = () => {
    return{
         type: "REMOVECART"
    }
}