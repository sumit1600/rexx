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
export const addCart = (props) => {
    return{
         type: "ADDCART",
         data: props
    }
}
export const removeCart = (props) => {
    return{
         type: "REMOVECART",
         data: props
    }
}